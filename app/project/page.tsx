import CodeBlock from "@/components/code-block"

export default function ProjectPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Hands-On Project: To-Do List App</h1>

      <p className="mb-6">
        In this section, we'll build a complete To-Do List app using Flutter. This project will help you apply the
        concepts you've learned so far and gain practical experience with Flutter development.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

        <p className="mb-4">Our To-Do List app will have the following features:</p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Add new tasks</li>
          <li>Mark tasks as completed</li>
          <li>Delete tasks</li>
          <li>View task details</li>
          <li>Navigate between screens</li>
        </ul>

        <p className="mb-4">The app will consist of two main screens:</p>

        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Home Screen: Displays the list of tasks with add/complete/delete functionality</li>
          <li>Detail Screen: Shows the details of a selected task</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Step 1: Create a New Flutter Project</h2>

        <p className="mb-4">First, let's create a new Flutter project:</p>

        <CodeBlock
          language="bash"
          code={`flutter create todo_app
cd todo_app`}
        />

        <p className="mt-4">
          This creates a new Flutter project with the default counter app template. We'll replace this with our To-Do
          List app.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Step 2: Create the Task Model</h2>

        <p className="mb-4">
          Let's start by creating a model for our tasks. Create a new file called <code>task.dart</code> in the{" "}
          <code>lib</code> folder:
        </p>

        <CodeBlock
          language="dart"
          code={`// lib/task.dart
class Task {
  String id;
  String title;
  String description;
  bool isCompleted;

  Task({
    required this.id,
    required this.title,
    required this.description,
    this.isCompleted = false,
  });
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Step 3: Create the Home Screen</h2>

        <p className="mb-4">
          Now, let's create the home screen that displays the list of tasks. Replace the content of{" "}
          <code>lib/main.dart</code> with the following:
        </p>

        <CodeBlock
          language="dart"
          code={`// lib/main.dart
import 'package:flutter/material.dart';
import 'task.dart';
import 'task_detail_screen.dart';

void main() {
  runApp(TodoApp());
}

class TodoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final List<Task> _tasks = [];
  final _titleController = TextEditingController();
  final _descriptionController = TextEditingController();

  void _addTask() {
    if (_titleController.text.isEmpty) return;

    setState(() {
      _tasks.add(Task(
        id: DateTime.now().toString(),
        title: _titleController.text,
        description: _descriptionController.text,
      ));
      _titleController.clear();
      _descriptionController.clear();
    });
  }

  void _toggleTaskStatus(String id) {
    setState(() {
      final task = _tasks.firstWhere((task) => task.id == id);
      task.isCompleted = !task.isCompleted;
    });
  }

  void _deleteTask(String id) {
    setState(() {
      _tasks.removeWhere((task) => task.id == id);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Todo List'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              children: [
                TextField(
                  controller: _titleController,
                  decoration: InputDecoration(
                    labelText: 'Task Title',
                    border: OutlineInputBorder(),
                  ),
                ),
                SizedBox(height: 8),
                TextField(
                  controller: _descriptionController,
                  decoration: InputDecoration(
                    labelText: 'Task Description',
                    border: OutlineInputBorder(),
                  ),
                ),
                SizedBox(height: 8),
                ElevatedButton(
                  onPressed: _addTask,
                  child: Text('Add Task'),
                ),
              ],
            ),
          ),
          Expanded(
            child: _tasks.isEmpty
                ? Center(child: Text('No tasks yet. Add one!'))
                : ListView.builder(
                    itemCount: _tasks.length,
                    itemBuilder: (ctx, index) {
                      final task = _tasks[index];
                      return ListTile(
                        title: Text(
                          task.title,
                          style: TextStyle(
                            decoration: task.isCompleted
                                ? TextDecoration.lineThrough
                                : null,
                          ),
                        ),
                        subtitle: Text(task.description),
                        leading: Checkbox(
                          value: task.isCompleted,
                          onChanged: (_) => _toggleTaskStatus(task.id),
                        ),
                        trailing: IconButton(
                          icon: Icon(Icons.delete),
                          onPressed: () => _deleteTask(task.id),
                        ),
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => TaskDetailScreen(task: task),
                            ),
                          );
                        },
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _titleController.dispose();
    _descriptionController.dispose();
    super.dispose();
  }
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Step 4: Create the Detail Screen</h2>

        <p className="mb-4">
          Now, let's create the detail screen that shows the details of a selected task. Create a new file called{" "}
          <code>task_detail_screen.dart</code> in the <code>lib</code> folder:
        </p>

        <CodeBlock
          language="dart"
          code={`// lib/task_detail_screen.dart
import 'package:flutter/material.dart';
import 'task.dart';

class TaskDetailScreen extends StatelessWidget {
  final Task task;

  TaskDetailScreen({required this.task});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Task Details'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Title:',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8),
            Text(
              task.title,
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 16),
            Text(
              'Description:',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8),
            Text(
              task.description.isEmpty ? 'No description' : task.description,
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 16),
            Text(
              'Status:',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 8),
            Row(
              children: [
                Icon(
                  task.isCompleted
                      ? Icons.check_circle
                      : Icons.radio_button_unchecked,
                  color: task.isCompleted ? Colors.green : Colors.grey,
                ),
                SizedBox(width: 8),
                Text(
                  task.isCompleted ? 'Completed' : 'Not completed',
                  style: TextStyle(fontSize: 16),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Step 5: Enhance the App (Optional)</h2>

        <p className="mb-4">Let's add some enhancements to our app:</p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">1. Add a Floating Action Button</h3>
            <p className="mb-3">Instead of having the form always visible, we can use a dialog to add tasks:</p>
            <CodeBlock
              language="dart"
              code={`// Replace the form in HomeScreen with a FloatingActionButton
// and add this method to _HomeScreenState

void _showAddTaskDialog() {
  showDialog(
    context: context,
    builder: (ctx) {
      return AlertDialog(
        title: Text('Add a New Task'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: _titleController,
              decoration: InputDecoration(
                labelText: 'Task Title',
              ),
            ),
            SizedBox(height: 8),
            TextField(
              controller: _descriptionController,
              decoration: InputDecoration(
                labelText: 'Task Description',
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
            },
            child: Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () {
              _addTask();
              Navigator.of(context).pop();
            },
            child: Text('Add'),
          ),
        ],
      );
    },
  );
}

// Then add this to the Scaffold
floatingActionButton: FloatingActionButton(
  onPressed: _showAddTaskDialog,
  child: Icon(Icons.add),
),`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">2. Add Task Categories</h3>
            <p className="mb-3">Let's add categories to our tasks:</p>
            <CodeBlock
              language="dart"
              code={`// Update the Task class
enum TaskCategory { personal, work, shopping, other }

class Task {
  String id;
  String title;
  String description;
  bool isCompleted;
  TaskCategory category;

  Task({
    required this.id,
    required this.title,
    required this.description,
    this.isCompleted = false,
    this.category = TaskCategory.other,
  });
}

// Add a dropdown to select category in the dialog
DropdownButtonFormField<TaskCategory>(
  value: _selectedCategory,
  decoration: InputDecoration(
    labelText: 'Category',
  ),
  items: TaskCategory.values.map((category) {
    return DropdownMenuItem(
      value: category,
      child: Text(category.toString().split('.').last),
    );
  }).toList(),
  onChanged: (value) {
    setState(() {
      _selectedCategory = value!;
    });
  },
),`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">3. Add Due Dates</h3>
            <p className="mb-3">Let's add due dates to our tasks:</p>
            <CodeBlock
              language="dart"
              code={`// Update the Task class
class Task {
  String id;
  String title;
  String description;
  bool isCompleted;
  TaskCategory category;
  DateTime? dueDate;

  Task({
    required this.id,
    required this.title,
    required this.description,
    this.isCompleted = false,
    this.category = TaskCategory.other,
    this.dueDate,
  });
}

// Add a date picker in the dialog
ListTile(
  title: Text(_dueDate == null
      ? 'No due date'
      : 'Due date: $_dueDate!.day}/$_dueDate!.month}/$_dueDate!.year}'),
  trailing: Icon(Icons.calendar_today),
  onTap: () async {
    final pickedDate = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime.now(),
      lastDate: DateTime.now().add(Duration(days: 365)),
    );
    if (pickedDate != null) {
      setState(() {
        _dueDate = pickedDate;
      });
    }
  },
),`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Step 6: Running the App</h2>

        <p className="mb-4">Now that we have created our To-Do List app, let's run it:</p>

        <CodeBlock language="bash" code={`flutter run`} />

        <p className="mt-4">
          This will build and run the app on your connected device or emulator. You should see the To-Do List app with
          the ability to add, complete, and delete tasks, as well as view task details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Complete App Structure</h2>

        <p className="mb-4">Here's the complete structure of our To-Do List app:</p>

        <CodeBlock
          language="bash"
          code={`todo_app/
├── lib/
│   ├── main.dart           # Main app entry point and home screen
│   ├── task.dart           # Task model
│   └── task_detail_screen.dart  # Detail screen for tasks
└── pubspec.yaml            # Project dependencies`}
        />
      </section>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
        <h3 className="font-medium text-green-800">Congratulations!</h3>
        <p className="text-green-700">
          You've successfully built a complete To-Do List app with Flutter! This project demonstrates many of the
          concepts we've covered in this course, including:
        </p>
        <ul className="list-disc list-inside mt-2 text-green-700">
          <li>Creating and using models</li>
          <li>Building UI with Flutter widgets</li>
          <li>Managing state with StatefulWidget</li>
          <li>Navigating between screens</li>
          <li>Handling user input</li>
          <li>Working with lists</li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>

        <p className="mb-4">Here are some ideas to further enhance your To-Do List app:</p>

        <ul className="list-disc list-inside space-y-2">
          <li>Add persistence using shared_preferences or SQLite</li>
          <li>Implement filtering and sorting of tasks</li>
          <li>Add notifications for due tasks</li>
          <li>Implement a more advanced state management solution like Provider</li>
          <li>Add animations for a more polished user experience</li>
          <li>Implement a dark theme</li>
        </ul>
      </section>
    </div>
  )
}
