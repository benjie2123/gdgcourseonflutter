import CodeBlock from "@/components/code-block"
import ProgressTracker from "@/components/progress-tracker"

export default function ProjectPage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Building a To-Do List App</h1>
          <p className="text-muted-foreground">A hands-on project to apply your Flutter knowledge</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p>
            In this project, we'll build a complete to-do list application for Android using Flutter. This app will
            allow users to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>View a list of tasks</li>
            <li>Add new tasks</li>
            <li>Mark tasks as completed</li>
            <li>Delete tasks</li>
            <li>View task details on a separate screen</li>
          </ul>

          <div className="flex justify-center my-8">
            <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?key=ix2z8"
                alt="To-Do List App Preview"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Step 1: Project Setup</h2>
          <p>Let's start by creating a new Flutter project.</p>
          <CodeBlock
            code="flutter create todo_app
cd todo_app"
            language="bash"
          />
          <p className="mt-4">
            This creates a new Flutter project with the default counter app template. Let's clean up the{" "}
            <code>main.dart</code> file and start fresh.
          </p>
          <CodeBlock
            code="import 'package:flutter/material.dart';

void main() {
  runApp(const TodoApp());
}

class TodoApp extends StatelessWidget {
  const TodoApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const TodoListScreen(),
    );
  }
}

class TodoListScreen extends StatelessWidget {
  const TodoListScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo List'),
      ),
      body: const Center(
        child: Text('Todo List App'),
      ),
    );
  }
}"
            language="dart"
            filename="lib/main.dart"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Step 2: Creating the Task Model</h2>
          <p>Let's create a model class to represent a task in our to-do list.</p>
          <CodeBlock
            code="class Task {
  final String id;
  final String title;
  final String description;
  bool isCompleted;

  Task({
    required this.id,
    required this.title,
    required this.description,
    this.isCompleted = false,
  });
}"
            language="dart"
            filename="lib/models/task.dart"
          />
          <p className="mt-4">
            Now, let's create a simple data provider to manage our tasks. In a real app, you might use a database or
            API, but for simplicity, we'll use an in-memory list.
          </p>
          <CodeBlock
            code="import 'package:uuid/uuid.dart';
import 'task.dart';

class TaskProvider {
  // Singleton pattern
  static final TaskProvider _instance = TaskProvider._internal();
  
  factory TaskProvider() {
    return _instance;
  }
  
  TaskProvider._internal();

  final List<Task> _tasks = [];
  final _uuid = Uuid();

  List<Task> get tasks => List.unmodifiable(_tasks);

  void addTask(String title, String description) {
    final task = Task(
      id: _uuid.v4(),
      title: title,
      description: description,
    );
    _tasks.add(task);
  }

  void toggleTaskCompletion(String id) {
    final taskIndex = _tasks.indexWhere((task) => task.id == id);
    if (taskIndex != -1) {
      _tasks[taskIndex].isCompleted = !_tasks[taskIndex].isCompleted;
    }
  }

  void deleteTask(String id) {
    _tasks.removeWhere((task) => task.id == id);
  }

  Task? getTask(String id) {
    try {
      return _tasks.firstWhere((task) => task.id == id);
    } catch (e) {
      return null;
    }
  }
}"
            language="dart"
            filename="lib/models/task_provider.dart"
          />
          <p className="mt-4">
            Note: You'll need to add the <code>uuid</code> package to your <code>pubspec.yaml</code> file:
          </p>
          <CodeBlock
            code="dependencies:
  flutter:
    sdk: flutter
  uuid: ^3.0.7"
            language="yaml"
            filename="pubspec.yaml (partial)"
          />
          <p className="mt-4">
            Then run <code>flutter pub get</code> to install the dependency.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Step 3: Building the Task List Screen</h2>
          <p>
            Now, let's update our <code>TodoListScreen</code> to display a list of tasks.
          </p>
          <CodeBlock
            code="import 'package:flutter/material.dart';
import 'models/task.dart';
import 'models/task_provider.dart';
import 'task_detail_screen.dart';

class TodoListScreen extends StatefulWidget {
  const TodoListScreen({Key? key}) : super(key: key);

  @override
  _TodoListScreenState createState() => _TodoListScreenState();
}

class _TodoListScreenState extends State<TodoListScreen> {
  final TaskProvider _taskProvider = TaskProvider();
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();

  @override
  void initState() {
    super.initState();
    // Add some sample tasks
    if (_taskProvider.tasks.isEmpty) {
      _taskProvider.addTask(
        'Buy groceries',
        'Milk, eggs, bread, and fruits',
      );
      _taskProvider.addTask(
        'Finish Flutter course',
        'Complete the to-do list project',
      );
      _taskProvider.addTask(
        'Go for a run',
        '30 minutes of jogging in the park',
      );
    }
  }

  @override
  void dispose() {
    _titleController.dispose();
    _descriptionController.dispose();
    super.dispose();
  }

  void _addTask() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Add Task'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: _titleController,
                decoration: const InputDecoration(
                  labelText: 'Title',
                ),
              ),
              TextField(
                controller: _descriptionController,
                decoration: const InputDecoration(
                  labelText: 'Description',
                ),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text('Cancel'),
            ),
            TextButton(
              onPressed: () {
                if (_titleController.text.isNotEmpty) {
                  setState(() {
                    _taskProvider.addTask(
                      _titleController.text,
                      _descriptionController.text,
                    );
                    _titleController.clear();
                    _descriptionController.clear();
                  });
                  Navigator.pop(context);
                }
              },
              child: const Text('Add'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo List'),
      ),
      body: _taskProvider.tasks.isEmpty
          ? const Center(
              child: Text('No tasks yet. Add some!'),
            )
          : ListView.builder(
              itemCount: _taskProvider.tasks.length,
              itemBuilder: (context, index) {
                final task = _taskProvider.tasks[index];
                return ListTile(
                  leading: Checkbox(
                    value: task.isCompleted,
                    onChanged: (value) {
                      setState(() {
                        _taskProvider.toggleTaskCompletion(task.id);
                      });
                    },
                  ),
                  title: Text(
                    task.title,
                    style: TextStyle(
                      decoration: task.isCompleted
                          ? TextDecoration.lineThrough
                          : null,
                    ),
                  ),
                  subtitle: Text(task.description),
                  trailing: IconButton(
                    icon: const Icon(Icons.delete),
                    onPressed: () {
                      setState(() {
                        _taskProvider.deleteTask(task.id);
                      });
                    },
                  ),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => TaskDetailScreen(taskId: task.id),
                      ),
                    );
                  },
                );
              },
            ),
      floatingActionButton: FloatingActionButton(
        onPressed: _addTask,
        child: const Icon(Icons.add),
      ),
    );
  }
}"
            language="dart"
            filename="lib/todo_list_screen.dart"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Step 4: Creating the Task Detail Screen</h2>
          <p>Let's create a screen to display the details of a task when the user taps on it.</p>
          <CodeBlock
            code="import 'package:flutter/material.dart';
import 'models/task.dart';
import 'models/task_provider.dart';

class TaskDetailScreen extends StatelessWidget {
  final String taskId;
  final TaskProvider _taskProvider = TaskProvider();

  TaskDetailScreen({Key? key, required this.taskId}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final task = _taskProvider.getTask(taskId);

    if (task == null) {
      return Scaffold(
        appBar: AppBar(
          title: const Text('Task Not Found'),
        ),
        body: const Center(
          child: Text('The task you are looking for does not exist.'),
        ),
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text('Task Details'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              task.title,
              style: Theme.of(context).textTheme.headline5,
            ),
            const SizedBox(height: 8),
            Text(
              task.description,
              style: Theme.of(context).textTheme.bodyText1,
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                const Text('Status: '),
                Chip(
                  label: Text(
                    task.isCompleted ? 'Completed' : 'Pending',
                  ),
                  backgroundColor: task.isCompleted
                      ? Colors.green.shade100
                      : Colors.orange.shade100,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}"
            language="dart"
            filename="lib/task_detail_screen.dart"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Step 5: Updating the Main App</h2>
          <p>
            Now, let's update our <code>main.dart</code> file to use our new screens.
          </p>
          <CodeBlock
            code="import 'package:flutter/material.dart';
import 'todo_list_screen.dart';

void main() {
  runApp(const TodoApp());
}

class TodoApp extends StatelessWidget {
  const TodoApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const TodoListScreen(),
    );
  }
}"
            language="dart"
            filename="lib/main.dart"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Step 6: Running the App</h2>
          <p>Now, let's run our app to see it in action.</p>
          <CodeBlock code="flutter run" language="bash" />
          <p className="mt-4">You should see a to-do list app with the ability to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>View a list of tasks</li>
            <li>Add new tasks by tapping the floating action button</li>
            <li>Mark tasks as completed by tapping the checkbox</li>
            <li>Delete tasks by tapping the delete icon</li>
            <li>View task details by tapping on a task</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Step 7: Enhancements (Optional)</h2>
          <p>Here are some enhancements you can make to the app:</p>

          <h3 className="text-xl font-medium mt-4">1. Persistent Storage</h3>
          <p>
            Currently, our app loses all tasks when it's closed. Let's add persistent storage using the{" "}
            <code>shared_preferences</code> package.
          </p>
          <p className="mt-2">
            First, add the package to your <code>pubspec.yaml</code>:
          </p>
          <CodeBlock
            code="dependencies:
  flutter:
    sdk: flutter
  uuid: ^3.0.7
  shared_preferences: ^2.2.0"
            language="yaml"
            filename="pubspec.yaml (partial)"
          />
          <p className="mt-2">
            Then, update your <code>task_provider.dart</code> to save and load tasks:
          </p>
          <CodeBlock
            code="import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:uuid/uuid.dart';
import 'task.dart';

class TaskProvider {
  static final TaskProvider _instance = TaskProvider._internal();
  
  factory TaskProvider() {
    return _instance;
  }
  
  TaskProvider._internal();

  List<Task> _tasks = [];
  final _uuid = Uuid();
  static const String _prefsKey = 'tasks';

  List<Task> get tasks => List.unmodifiable(_tasks);

  // Load tasks from SharedPreferences
  Future<void> loadTasks() async {
    final prefs = await SharedPreferences.getInstance();
    final tasksJson = prefs.getStringList(_prefsKey) ?? [];
    
    _tasks = tasksJson.map((taskJson) {
      final taskMap = jsonDecode(taskJson) as Map<String, dynamic>;
      return Task(
        id: taskMap['id'] as String,
        title: taskMap['title'] as String,
        description: taskMap['description'] as String,
        isCompleted: taskMap['isCompleted'] as bool,
      );
    }).toList();
  }

  // Save tasks to SharedPreferences
  Future<void> _saveTasks() async {
    final prefs = await SharedPreferences.getInstance();
    final tasksJson = _tasks.map((task) {
      return jsonEncode({
        'id': task.id,
        'title': task.title,
        'description': task.description,
        'isCompleted': task.isCompleted,
      });
    }).toList();
    
    await prefs.setStringList(_prefsKey, tasksJson);
  }

  Future<void> addTask(String title, String description) async {
    final task = Task(
      id: _uuid.v4(),
      title: title,
      description: description,
    );
    _tasks.add(task);
    await _saveTasks();
  }

  Future<void> toggleTaskCompletion(String id) async {
    final taskIndex = _tasks.indexWhere((task) => task.id == id);
    if (taskIndex != -1) {
      _tasks[taskIndex].isCompleted = !_tasks[taskIndex].isCompleted;
      await _saveTasks();
    }
  }

  Future<void> deleteTask(String id) async {
    _tasks.removeWhere((task) => task.id == id);
    await _saveTasks();
  }

  Task? getTask(String id) {
    try {
      return _tasks.firstWhere((task) => task.id == id);
    } catch (e) {
      return null;
    }
  }
}"
            language="dart"
            filename="lib/models/task_provider.dart"
          />
          <p className="mt-2">
            You'll also need to update your <code>TodoListScreen</code> to load tasks when the app starts:
          </p>
          <CodeBlock
            code="@override
void initState() {
  super.initState();
  _loadTasks();
}

Future<void> _loadTasks() async {
  await _taskProvider.loadTasks();
  setState(() {});
  
  // Add sample tasks only if there are no tasks after loading
  if (_taskProvider.tasks.isEmpty) {
    await _taskProvider.addTask(
      'Buy groceries',
      'Milk, eggs, bread, and fruits',
    );
    await _taskProvider.addTask(
      'Finish Flutter course',
      'Complete the to-do list project',
    );
    await _taskProvider.addTask(
      'Go for a run',
      '30 minutes of jogging in the park',
    );
    setState(() {});
  }
}"
            language="dart"
            filename="lib/todo_list_screen.dart (partial)"
          />

          <h3 className="text-xl font-medium mt-4">2. Task Categories</h3>
          <p>
            Add the ability to categorize tasks (e.g., work, personal, shopping) and filter the task list by category.
          </p>

          <h3 className="text-xl font-medium mt-4">3. Due Dates</h3>
          <p>Add due dates to tasks and sort the task list by due date.</p>

          <h3 className="text-xl font-medium mt-4">4. Task Search</h3>
          <p>Add a search bar to filter tasks by title or description.</p>

          <h3 className="text-xl font-medium mt-4">5. UI Improvements</h3>
          <p>Enhance the UI with custom themes, animations, and more polished design.</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-8">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">Pro Tip</h3>
          <p className="text-blue-700 dark:text-blue-200">
            For a more robust state management solution, consider refactoring the app to use Provider, Riverpod, or
            Bloc. These libraries make it easier to manage state as your app grows in complexity.
          </p>
        </div>

        <ProgressTracker section="project" />
      </div>
    </div>
  )
}
