import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { task, description } = await req.json();
    if (!task) {
      return NextResponse.json({ error: "Task is required" }, { status: 400 });
    }
    if (!description) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key" +
      apiKey;
    const prompt = `Break the following task into 3-5 smaller actionable subtasks. Return only the subtasks as a comma-separated list. Task: ${task} Description: ${description}`;

    const geminiRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (!geminiRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from Gemini AI" },
        { status: 500 }
      );
    }
    const geminiData = await geminiRes.json();
    const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    const subtasks = text
      .split(/\n|,/)
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 0);

    return NextResponse.json({ subtasks });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
