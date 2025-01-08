
# TO - Do App 📋✅

A simple and interactive To-Do application that helps you manage your tasks effectively. This app allows users to add tasks with different attributes, track their completion status, and visualize progress with a dynamic progress bar.

## Features 🌟

- **Add Tasks** 📝: Easily add new tasks with a **priority**, **type**, and **status**.
- **Task Completion** ✔️: Mark tasks as **completed** and **undo** the completion status as needed.
- **Progress Bar** 📊: Displays the progress based on the number of completed tasks versus total tasks.
- **Clear All** 🧹: Once a task is added, a **Clear All** button appears. This button allows you to clear all tasks at once.
- **Dynamic UI** 💡: The **Clear All** button disappears automatically when all tasks are removed, ensuring a cleaner interface when there are no tasks.

## How It Works 🛠️

### Adding a Task 📝:
- Users can add a new task by specifying:
  - **Priority**: Choose the urgency level of the task (🟢 for low, 🟡 for medium, 🔴 for high).
  - **Type**: Define the category/type of the task (e.g., personal, work, etc.).
  - **Status**: Mark the task as **completed** ✅ or **pending** ❌ at the time of adding.

### Completing/Undoing Tasks ✔️🔄:
- Tasks can be marked as **completed** ✅ when you check them off.
- If a task is marked as completed, you can **undo** this by clicking again, switching it back to its original status.

### Progress Tracker 📊:
- A **progress bar** 🏁 is displayed that shows the percentage of completed tasks relative to the total number of tasks.
- The progress bar updates in real-time as tasks are marked as completed or undone.

### Clear All 🧹:
- After adding at least one task, a **Clear All** button 🧹 appears, allowing users to clear all tasks from the list.
- The **Clear All** button automatically disappears when the task list is empty.

## Installation 🚀

1. Clone this repository:

   ```bash
   git clone https://github.com/arun7286/to-do-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd to-do-app
   ```

3. Install dependencies (if using Node.js or any package manager like npm or yarn):

   ```bash
   npm install
   ```

   Or if using yarn:

   ```bash
   yarn install
   ```

4. Run the app:

   ```bash
   npm start
   ```

   Or:

   ```bash
   yarn start
   ```

5. Open the app in your browser by visiting [http://localhost:3000](http://localhost:3000).

## Usage 💻

- **Adding a Task** 📝: Fill in the details for priority, type, and status, then click the **Add Task** button.
- **Marking a Task as Completed** ✔️: Simply click the checkbox next to a task to mark it as completed.
- **Undo Completion** 🔄: Click the button again to undo the completion.
- **Clear All** 🧹: After adding tasks, the **Clear All** button will appear. Click it to remove all tasks from the list.

## Screenshots 📸

![image](https://github.com/user-attachments/assets/1066bd27-c1fc-417f-92de-8f5e2f1c57a2)
![image](https://github.com/user-attachments/assets/543cbaac-5996-4f59-a514-c11d7d76f5ad)
![image](https://github.com/user-attachments/assets/ffc68578-c04c-4a83-8c89-843daec634c0)




---

## Technologies Used 🧰

- **HTML5**: For structuring the app.
- **CSS3**: For styling the app.
- **JavaScript**: For dynamic behavior, handling task addition, completion, and the progress bar.
- **React** ⚛️: For building the user interface
