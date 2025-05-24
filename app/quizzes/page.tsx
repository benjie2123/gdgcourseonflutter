// Code: 
"use client"

import { useState } from "react"
import Quiz, { type QuizQuestion } from "@/components/quiz"
import Exercise from "@/components/exercise"
import ProgressTracker from "@/components/progress-tracker"

export default function QuizzesPage() {
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([])

  const handleQuizComplete = (id: string) => {
    if (!completedQuizzes.includes(id)) {
      setCompletedQuizzes([...completedQuizzes, id])
    }
  }

  const quizQuestions: QuizQuestion[] = [
    {
      id: "q1",
      question:
        "What command checks your Flutter setup and tells you if there are any dependencies you need to install?",
      options: ["flutter run", "flutter doctor", "flutter check", "flutter verify"],
      correctAnswer: 1,
      explanation:
        "The 'flutter doctor' command checks your environment and displays a report about the status of your Flutter installation.",
    },
    {
      id: "q2",
      question: "Which of the following is NOT a type of widget in Flutter?",
      options: ["StatelessWidget", "StatefulWidget", "PersistentWidget", "InheritedWidget"],
      correctAnswer: 2,
      explanation:
        "There is no 'PersistentWidget' in Flutter. The main widget types are StatelessWidget, StatefulWidget, and InheritedWidget.",
    },
    {
      id: "q3",
      question: "What is the purpose of the 'setState()' method in Flutter?",
      options: [
        "To create a new state object",
        "To navigate to a new screen",
        "To notify the framework that the state has changed",
        "To reset the application to its initial state",
      ],
      correctAnswer: 2,
      explanation:
        "The 'setState()' method notifies the Flutter framework that the state has changed, which triggers a rebuild of the widget.",
    },
    {
      id: "q4",
      question: "Which widget would you use to create a scrollable list of items?",
      options: ["Column", "Row", "ListView", "Container"],
      correctAnswer: 2,
      explanation:
        "ListView is used to create a scrollable list of items. Column and Row don't scroll by default, and Container is a general-purpose widget.",
    },
    {
      id: "q5",
      question: "What is 'hot reload' in Flutter?",
      options: [
        "A feature that automatically fixes bugs in your code",
        "A feature that allows you to see changes in your code almost instantly without losing state",
        "A tool that optimizes your app's performance",
        "A way to deploy your app to the app store quickly",
      ],
      correctAnswer: 1,
      explanation:
        "Hot reload allows you to see changes in your code almost instantly without losing the current state of your app. It's a powerful feature for rapid development.",
    },
  ]

  return (
    <div className="container max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Quizzes & Exercises</h1>
          <p className="text-muted-foreground">Test your knowledge and practice your Flutter skills</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Flutter Knowledge Quizzes</h2>
          <p>
            Test your understanding of Flutter concepts with these quizzes. Select the correct answer for each question.
          </p>

          {quizQuestions.map((question) => (
            <Quiz key={question.id} question={question} onComplete={() => handleQuizComplete(question.id)} />
          ))}
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="text-2xl font-semibold">Flutter Coding Exercises</h2>
          <p>
            Practice your Flutter skills with these coding exercises. Try to solve them on your own before looking at
            the solutions.
          </p>

          <Exercise
            title="Exercise 1: Create a Custom Button"
            description="Practice creating custom widgets in Flutter"
            task="Create a custom button widget with rounded corners, a gradient background, and a shadow."
            starterCode={`import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;

  const CustomButton({
    Key? key,
    required this.text,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // TODO: Implement the custom button
    return Container();
  }
}`}
            solutionCode={`import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;

  const CustomButton({
    Key? key,
    required this.text,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPressed,
      child: Container(
        padding: const EdgeInsets.symmetric(
          horizontal: 24,
          vertical: 12,
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(30),
          gradient: const LinearGradient(
            colors: [Colors.blue, Colors.lightBlue],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.2),
              spreadRadius: 1,
              blurRadius: 4,
              offset: const Offset(0, 2),
            ),
          ],
        ),
        child: Text(
          text,
          style: const TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}`}
          />

          <Exercise
            title="Exercise 2: Add a Delete Functionality"
            description="Practice modifying the To-Do List app"
            task="Add a swipe-to-delete functionality to the task list in our To-Do List app."
            starterCode={`// Inside the ListView.builder in TodoListScreen
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
);`}
            solutionCode={`// Replace the ListTile with a Dismissible widget
return Dismissible(
  key: Key(task.id),
  background: Container(
    color: Colors.red,
    alignment: Alignment.centerRight,
    padding: const EdgeInsets.only(right: 20),
    child: const Icon(
      Icons.delete,
      color: Colors.white,
    ),
  ),
  direction: DismissDirection.endToStart,
  onDismissed: (direction) {
    setState(() {
      _taskProvider.deleteTask(task.id);
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('{task.title} dismissed'),
        action: SnackBarAction(
          label: 'Undo',
          onPressed: () {
            // You would need to implement an undo functionality
            // in your TaskProvider for this to work
          },
        ),
      ),
    );
  },
  child: ListTile(
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
  ),
);`}
          />

          <Exercise
            title="Exercise 3: Implement Task Filtering"
            description="Practice state management and UI updates"
            task="Add the ability to filter tasks by their completion status (All, Completed, Pending)."
            starterCode={`// Add this to your TodoListScreen class
enum FilterStatus { all, completed, pending }

// Add this as a class variable
FilterStatus _currentFilter = FilterStatus.all;

// TODO: Implement filtering logic in your build method`}
            solutionCode={`// Add this to your TodoListScreen class
enum FilterStatus { all, completed, pending }

// Add this as a class variable
FilterStatus _currentFilter = FilterStatus.all;

// Add this method to filter tasks
List<Task> _getFilteredTasks() {
  switch (_currentFilter) {
    case FilterStatus.completed:
      return _taskProvider.tasks.where((task) => task.isCompleted).toList();
    case FilterStatus.pending:
      return _taskProvider.tasks.where((task) => !task.isCompleted).toList();
    case FilterStatus.all:
    default:
      return _taskProvider.tasks;
  }
}

// Update your build method to include filter buttons
@override
Widget build(BuildContext context) {
  final filteredTasks = _getFilteredTasks();
  
  return Scaffold(
    appBar: AppBar(
      title: const Text('Todo List'),
    ),
    body: Column(
      children: [
        // Filter buttons
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              FilterChip(
                label: const Text('All'),
                selected: _currentFilter == FilterStatus.all,
                onSelected: (selected) {
                  setState(() {
                    _currentFilter = FilterStatus.all;
                  });
                },
              ),
              FilterChip(
                label: const Text('Completed'),
                selected: _currentFilter == FilterStatus.completed,
                onSelected: (selected) {
                  setState(() {
                    _currentFilter = FilterStatus.completed;
                  });
                },
              ),
              FilterChip(
                label: const Text('Pending'),
                selected: _currentFilter == FilterStatus.pending,
                onSelected: (selected) {
                  setState(() {
                    _currentFilter = FilterStatus.pending;
                  });
                },
              ),
            ],
          ),
        ),
        // Task list
        Expanded(
          child: filteredTasks.isEmpty
              ? const Center(
                  child: Text('No tasks match your filter.'),
                )
              : ListView.builder(
                  itemCount: filteredTasks.length,
                  itemBuilder: (context, index) {
                    final task = filteredTasks[index];
                    return ListTile(
                      // ... rest of your ListTile code
                    );
                  },
                ),
        ),
      ],
    ),
    floatingActionButton: FloatingActionButton(
      onPressed: _addTask,
      child: const Icon(Icons.add),
    ),
  );
}`}
          />

          <Exercise
            title="Exercise 4: Add Task Priority"
            description="Practice extending the Task model"
            task="Extend the Task model to include a priority level (Low, Medium, High) and display it in the UI."
            starterCode={`// Update your Task model
class Task {
  final String id;
  final String title;
  final String description;
  bool isCompleted;
  // TODO: Add priority field

  Task({
    required this.id,
    required this.title,
    required this.description,
    this.isCompleted = false,
    // TODO: Add priority parameter
  });
}`}
            solutionCode={`// Update your Task model
enum TaskPriority { low, medium, high }

class Task {
  final String id;
  final String title;
  final String description;
  bool isCompleted;
  final TaskPriority priority;

  Task({
    required this.id,
    required this.title,
    required this.description,
    this.isCompleted = false,
    this.priority = TaskPriority.medium,
  });
}

// Update your TaskProvider to include priority
void addTask(String title, String description, {TaskPriority priority = TaskPriority.medium}) {
  final task = Task(
    id: _uuid.v4(),
    title: title,
    description: description,
    priority: priority,
  );
  _tasks.add(task);
}

// Update your ListTile to display priority
return ListTile(
  leading: Checkbox(
    value: task.isCompleted,
    onChanged: (value) {
      setState(() {
        _taskProvider.toggleTaskCompletion(task.id);
      });
    },
  ),
  title: Row(
    children: [
      Text(
        task.title,
        style: TextStyle(
          decoration: task.isCompleted
              ? TextDecoration.lineThrough
              : null,
        ),
      ),
      const SizedBox(width: 8),
      _getPriorityBadge(task.priority),
    ],
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

// Add this helper method to your class
Widget _getPriorityBadge(TaskPriority priority) {
  Color color;
  String label;
  
  switch (priority) {
    case TaskPriority.low:
      color = Colors.green;
      label = 'Low';
      break;
    case TaskPriority.medium:
      color = Colors.orange;
      label = 'Medium';
      break;
    case TaskPriority.high:
      color = Colors.red;
      label = 'High';
      break;
  }
  
  return Container(
    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
    decoration: BoxDecoration(
      color: color.withOpacity(0.2),
      borderRadius: BorderRadius.circular(4),
      border: Border.all(color: color),
    ),
    child: Text(
      label,
      style: TextStyle(
        fontSize: 10,
        color: color,
        fontWeight: FontWeight.bold,
      ),
    ),
  );
}`}
          />

          <Exercise
            title="Exercise 5: Add Dark Mode Support"
            description="Practice working with themes in Flutter"
            task="Add a dark mode toggle to the app and implement a dark theme."
            starterCode={`// In your main.dart file
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
}`}
            solutionCode={`// First, make TodoApp stateful
class TodoApp extends StatefulWidget {
  const TodoApp({Key? key}) : super(key: key);

  @override
  _TodoAppState createState() => _TodoAppState();
}

class _TodoAppState extends State<TodoApp> {
  bool _isDarkMode = false;

  void _toggleTheme() {
    setState(() {
      _isDarkMode = !_isDarkMode;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        brightness: Brightness.light,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      darkTheme: ThemeData(
        primarySwatch: Colors.blue,
        brightness: Brightness.dark,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        scaffoldBackgroundColor: Colors.grey[900],
        cardColor: Colors.grey[800],
      ),
      themeMode: _isDarkMode ? ThemeMode.dark : ThemeMode.light,
      home: TodoListScreen(onToggleTheme: _toggleTheme),
    );
  }
}

// Update TodoListScreen to include a theme toggle
class TodoListScreen extends StatefulWidget {
  final Function onToggleTheme;

  const TodoListScreen({
    Key? key,
    required this.onToggleTheme,
  }) : super(key: key);

  @override
  _TodoListScreenState createState() => _TodoListScreenState();
}

// Add a theme toggle button to the AppBar
@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: const Text('Todo List'),
      actions: [
        IconButton(
          icon: Icon(
            Theme.of(context).brightness == Brightness.dark
                ? Icons.light_mode
                : Icons.dark_mode,
          ),
          onPressed: () {
            widget.onToggleTheme();
          },
        ),
      ],
    ),
    // Rest of your code
  );
}`}
          />
        </div>

        <ProgressTracker section="quizzes" />
      </div>
    </div>
  )
}
// :: Instruction: Feix error