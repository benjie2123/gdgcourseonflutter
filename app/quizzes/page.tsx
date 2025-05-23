"use client"

import { useState } from "react"
import Quiz, { type QuizQuestion } from "@/components/quiz"
import Exercise from "@/components/exercise"

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What command checks if your Flutter setup is correct?",
    options: ["flutter run", "flutter doctor", "flutter check", "flutter verify"],
    correctAnswer: 1,
    explanation:
      "The 'flutter doctor' command checks your environment and displays a report of the status of your Flutter installation.",
  },
  {
    id: 2,
    question: "Which widget would you use to create a scrollable list of items?",
    options: ["Column", "Container", "ListView", "Row"],
    correctAnswer: 2,
    explanation:
      "ListView is used to create a scrollable list of widgets. It's efficient because it only builds the items that are visible on screen.",
  },
  {
    id: 3,
    question: "What is the purpose of the 'setState' method in Flutter?",
    options: [
      "To create a new widget",
      "To navigate to a new screen",
      "To notify Flutter that the internal state has changed",
      "To set the initial state of a widget",
    ],
    correctAnswer: 2,
    explanation:
      "The setState method notifies the framework that the internal state of an object has changed, triggering a rebuild of the widget.",
  },
  {
    id: 4,
    question: "Which of the following is NOT a built-in navigation approach in Flutter?",
    options: ["Navigator.push()", "Navigator.pushNamed()", "Navigator.navigate()", "Navigator.pop()"],
    correctAnswer: 2,
    explanation:
      "Navigator.navigate() is not a built-in method. The correct methods are push(), pushNamed(), pop(), etc.",
  },
  {
    id: 5,
    question: "What is Hot Reload in Flutter?",
    options: [
      "A feature that automatically fixes bugs in your code",
      "A feature that allows you to see changes without restarting the app",
      "A tool to optimize app performance",
      "A way to deploy your app to the app store quickly",
    ],
    correctAnswer: 1,
    explanation:
      "Hot Reload allows you to quickly see the effect of changes to your code without restarting your app, preserving the app state.",
  },
]

export default function QuizzesPage() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Quizzes & Exercises</h1>

      <p className="mb-6">
        Test your knowledge and practice your skills with these quizzes and exercises. The quizzes will help you
        reinforce what you've learned, while the exercises will give you hands-on practice.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Flutter Knowledge Quiz</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Answer the following questions to test your understanding of Flutter concepts. Your progress will be tracked
            as you complete the quizzes.
          </p>
        </div>

        <div className="mb-4">
          <p className="font-medium">
            Question {currentQuizIndex + 1} of {quizQuestions.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <Quiz question={quizQuestions[currentQuizIndex]} />

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentQuizIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentQuizIndex === 0}
            className={`px-4 py-2 rounded-md ${
              currentQuizIndex === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentQuizIndex((prev) => Math.min(quizQuestions.length - 1, prev + 1))}
            disabled={currentQuizIndex === quizQuestions.length - 1}
            className={`px-4 py-2 rounded-md ${
              currentQuizIndex === quizQuestions.length - 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Practical Exercises</h2>

        <p className="mb-6">
          Complete these exercises to practice your Flutter skills. Each exercise includes a description, starter code
          (if applicable), and a solution.
        </p>

        <Exercise
          title="Exercise 1: Add a Delete Confirmation Dialog"
          description="Modify the To-Do List app to show a confirmation dialog when the user tries to delete a task."
          starterCode={`// Inside the _HomeScreenState class
void _deleteTask(String id) {
  setState(() {
    _tasks.removeWhere((task) => task.id == id);
  });
}`}
          solutionCode={`// Inside the _HomeScreenState class
void _deleteTask(String id) {
  showDialog(
    context: context,
    builder: (ctx) => AlertDialog(
      title: Text('Confirm Delete'),
      content: Text('Are you sure you want to delete this task?'),
      actions: [
        TextButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          child: Text('Cancel'),
        ),
        TextButton(
          onPressed: () {
            setState(() {
              _tasks.removeWhere((task) => task.id == id);
            });
            Navigator.of(context).pop();
          },
          child: Text('Delete'),
        ),
      ],
    ),
  );
}`}
        />

        <Exercise
          title="Exercise 2: Add Task Filtering"
          description="Add the ability to filter tasks by their completion status (All, Completed, Active)."
          starterCode={`// Inside the _HomeScreenState class
final List<Task> _tasks = [];

// We need to add a filter mechanism and modify the ListView`}
          solutionCode={`// Inside the _HomeScreenState class
final List<Task> _tasks = [];
String _filter = 'All'; // 'All', 'Active', or 'Completed'

List<Task> get _filteredTasks {
  if (_filter == 'All') return _tasks;
  if (_filter == 'Completed') return _tasks.where((task) => task.isCompleted).toList();
  return _tasks.where((task) => !task.isCompleted).toList();
}

// Add this above the ListView
Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  children: [
    FilterChip(
      label: Text('All'),
      selected: _filter == 'All',
      onSelected: (selected) {
        setState(() {
          _filter = 'All';
        });
      },
    ),
    FilterChip(
      label: Text('Active'),
      selected: _filter == 'Active',
      onSelected: (selected) {
        setState(() {
          _filter = 'Active';
        });
      },
    ),
    FilterChip(
      label: Text('Completed'),
      selected: _filter == 'Completed',
      onSelected: (selected) {
        setState(() {
          _filter = 'Completed';
        });
      },
    ),
  ],
),

// Then modify the ListView to use _filteredTasks instead of _tasks
ListView.builder(
  itemCount: _filteredTasks.length,
  itemBuilder: (ctx, index) {
    final task = _filteredTasks[index];
    // ... rest of the code
  },
),`}
        />

        <Exercise
          title="Exercise 3: Add Task Priority"
          description="Enhance the Task model to include priority levels (Low, Medium, High) and display them with different colors."
          starterCode={`// Task model
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
          solutionCode={`// Updated Task model
enum TaskPriority { low, medium, high }

class Task {
  String id;
  String title;
  String description;
  bool isCompleted;
  TaskPriority priority;

  Task({
    required this.id,
    required this.title,
    required this.description,
    this.isCompleted = false,
    this.priority = TaskPriority.medium,
  });
}

// Add this to the ListTile in the ListView.builder
leading: Row(
  mainAxisSize: MainAxisSize.min,
  children: [
    Container(
      width: 12,
      height: 12,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: task.priority == TaskPriority.high
            ? Colors.red
            : task.priority == TaskPriority.medium
                ? Colors.orange
                : Colors.green,
      ),
    ),
    SizedBox(width: 8),
    Checkbox(
      value: task.isCompleted,
      onChanged: (_) => _toggleTaskStatus(task.id),
    ),
  ],
),`}
        />

        <Exercise
          title="Exercise 4: Implement Task Search"
          description="Add a search bar to filter tasks by title or description."
          solutionCode={`// Add these to _HomeScreenState
final _searchController = TextEditingController();
String _searchQuery = '';

List<Task> get _filteredTasks {
  if (_searchQuery.isEmpty) {
    if (_filter == 'All') return _tasks;
    if (_filter == 'Completed') return _tasks.where((task) => task.isCompleted).toList();
    return _tasks.where((task) => !task.isCompleted).toList();
  } else {
    return _tasks
        .where((task) =>
            task.title.toLowerCase().contains(_searchQuery.toLowerCase()) ||
            task.description.toLowerCase().contains(_searchQuery.toLowerCase()))
        .toList();
  }
}

// Add this search bar above the filter chips
Padding(
  padding: const EdgeInsets.all(8.0),
  child: TextField(
    controller: _searchController,
    decoration: InputDecoration(
      labelText: 'Search',
      prefixIcon: Icon(Icons.search),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
      ),
    ),
    onChanged: (value) {
      setState(() {
        _searchQuery = value;
      });
    },
  ),
),

// Don't forget to dispose the controller
@override
void dispose() {
  _titleController.dispose();
  _descriptionController.dispose();
  _searchController.dispose();
  super.dispose();
}`}
        />

        <Exercise
          title="Exercise 5: Add Task Sorting"
          description="Add the ability to sort tasks by creation date, due date, or priority."
          solutionCode={`// Add these to _HomeScreenState
enum SortBy { creationDate, dueDate, priority, title }
SortBy _sortBy = SortBy.creationDate;
bool _sortAscending = true;

List<Task> get _filteredAndSortedTasks {
  final filtered = _filteredTasks;
  
  switch (_sortBy) {
    case SortBy.creationDate:
      filtered.sort((a, b) => _sortAscending
          ? a.id.compareTo(b.id)
          : b.id.compareTo(a.id));
      break;
    case SortBy.dueDate:
      filtered.sort((a, b) {
        if (a.dueDate == null && b.dueDate == null) return 0;
        if (a.dueDate == null) return _sortAscending ? 1 : -1;
        if (b.dueDate == null) return _sortAscending ? -1 : 1;
        return _sortAscending
            ? a.dueDate!.compareTo(b.dueDate!)
            : b.dueDate!.compareTo(a.dueDate!);
      });
      break;
    case SortBy.priority:
      filtered.sort((a, b) => _sortAscending
          ? a.priority.index.compareTo(b.priority.index)
          : b.priority.index.compareTo(a.priority.index));
      break;
    case SortBy.title:
      filtered.sort((a, b) => _sortAscending
          ? a.title.compareTo(b.title)
          : b.title.compareTo(a.title));
      break;
  }
  
  return filtered;
}

// Add this dropdown above the ListView
Row(
  children: [
    Text('Sort by: '),
    DropdownButton<SortBy>(
      value: _sortBy,
      onChanged: (SortBy? newValue) {
        if (newValue != null) {
          setState(() {
            _sortBy = newValue;
          });
        }
      },
      items: SortBy.values.map((SortBy sortBy) {
        return DropdownMenuItem<SortBy>(
          value: sortBy,
          child: Text(sortBy.toString().split('.').last),
        );
      }).toList(),
    ),
    IconButton(
      icon: Icon(_sortAscending ? Icons.arrow_upward : Icons.arrow_downward),
      onPressed: () {
        setState(() {
          _sortAscending = !_sortAscending;
        });
      },
    ),
  ],
),

// Use _filteredAndSortedTasks in the ListView.builder
ListView.builder(
  itemCount: _filteredAndSortedTasks.length,
  itemBuilder: (ctx, index) {
    final task = _filteredAndSortedTasks[index];
    // ... rest of the code
  },
),`}
        />
      </section>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
        <h3 className="font-medium text-green-800">Great Job!</h3>
        <p className="text-green-700">
          By completing these quizzes and exercises, you've reinforced your understanding of Flutter concepts and gained
          practical experience. Continue practicing to become more proficient with Flutter development.
        </p>
      </div>
    </div>
  )
}
