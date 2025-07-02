# Smart Task Manager

A modern task management application built with Next.js, React, and Tailwind CSS.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd smart-task-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Technologies Used

- **Next.js** (v15)
- **React** (v19)
- **Tailwind CSS** (v4)
- **TypeScript**
- **React Hook Form** (forms and validation)
- **Zod** (schema validation)
- **date-fns** (date utilities)
- **Lucide React** (icons)
- **Radix UI** (UI primitives: Checkbox, Label, Popover, Slot)
- **Class Variance Authority**, **clsx**, **tailwind-merge** (utility libraries)
- **react-day-picker** (date picker)

## Features

- **Task Creation:** Add new tasks with a name, description, and due date using a simple form and date picker.
- **Task List:** View all your tasks in a responsive grid layout. Each task is displayed as a card.
- **Task Completion:** Mark tasks as completed using a checkbox. Completed tasks are visually distinguished.
- **Edit Tasks:** Edit the name and description of existing tasks directly from the task card.
- **Delete Tasks:** Remove tasks with a confirmation modal to prevent accidental deletion.
- **AI-Powered Subtask Suggestions:** Get 3-5 actionable subtasks for any task using the "Suggest subtask" button, powered by Gemini AI. Subtasks are displayed under the main task.
- **Task Analytics:** View statistics such as total tasks, completed tasks, pending tasks, and completion rate in the Analysis section.
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- **Modern UI:** Clean and modern interface with accessible components and smooth interactions.

### How Features Work

- **Adding a Task:** Click the "Add task" button in the Hero section. Fill in the task details and submit the form. The new task appears in the task list.
- **Editing/Completing a Task:** Click the edit icon on a task card to modify its details. Use the checkbox to mark as completed. Changes are reflected instantly.
- **Deleting a Task:** Click the trash icon on a task card. Confirm deletion in the modal dialog.
- **Suggesting Subtasks:** Click "Suggest subtask" on a task card. The app calls the Gemini AI API and displays suggested subtasks below the task.
- **Viewing Analytics:** The Analysis section at the top shows real-time stats about your tasks.

## Project Structure

- `src/app/` - Application entry and API routes
- `src/components/` - UI and feature components
- `src/lib/` - Utility functions

## License

© 2025 Smart Task Manager. All rights reserved.
