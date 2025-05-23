import CodeBlock from "@/components/code-block"
import ProgressTracker from "@/components/progress-tracker"

export default function CoreConceptsPage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Core Concepts in Flutter</h1>
          <p className="text-muted-foreground">Understanding the fundamental building blocks of Flutter applications</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction to Dart</h2>
          <p>
            Dart is the programming language used for Flutter development. It's a client-optimized language for fast
            apps on any platform. Before diving into Flutter, let's cover some Dart basics.
          </p>

          <h3 className="text-xl font-medium mt-4">Variables and Data Types</h3>
          <p>
            Dart is a statically typed language, but it also supports type inference with the <code>var</code> keyword.
          </p>
          <CodeBlock
            code="// Explicitly typed
String name = 'John';
int age = 30;
double height = 1.85;
bool isStudent = true;

// Type inference
var country = 'USA';  // Dart infers this as String
var population = 331000000;  // Dart infers this as int

// Constants
final birthYear = 1990;  // Cannot be reassigned
const pi = 3.14159;  // Compile-time constant"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Functions</h3>
          <p>
            Functions in Dart are first-class objects, which means they can be assigned to variables and passed as
            arguments.
          </p>
          <CodeBlock
            code="// Regular function
void greet(String name) {
  print('Hello, \$name!');
}

// Function with return value
String getGreeting(String name) {
  return 'Hello, \$name!';
}

// Arrow function (shorthand for single expressions)
String greetPerson(String name) => 'Hello, \$name!';

// Optional parameters
void introduce(String name, {int? age, String? occupation}) {
  print('Name: \$name');
  if (age != null) print('Age: \$age');
  if (occupation != null) print('Occupation: \$occupation');
}

// Using the functions
void main() {
  greet('Alice');  // Prints: Hello, Alice!
  print(getGreeting('Bob'));  // Prints: Hello, Bob!
  introduce('Charlie', age: 25, occupation: 'Developer');
}"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Collections</h3>
          <p>Dart provides several collection types for organizing data.</p>
          <CodeBlock
            code="// Lists (arrays)
List<String> fruits = ['apple', 'banana', 'orange'];
var numbers = [1, 2, 3, 4, 5];  // List<int>

// Accessing elements
print(fruits[0]);  // Prints: apple

// Adding elements
fruits.add('grape');

// Maps (key-value pairs)
Map<String, int> ages = {
  'Alice': 30,
  'Bob': 25,
  'Charlie': 35,
};

// Accessing values
print(ages['Alice']);  // Prints: 30

// Adding entries
ages['David'] = 40;"
            language="dart"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Flutter Widget Basics</h2>
          <p>
            In Flutter, everything is a widget. Widgets are the basic building blocks of a Flutter app's user interface.
          </p>

          <h3 className="text-xl font-medium mt-4">Types of Widgets</h3>
          <p>There are two primary types of widgets in Flutter:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>StatelessWidget</strong>: A widget that doesn't maintain any state. Once built, it cannot change
              its appearance until it's rebuilt entirely.
            </li>
            <li>
              <strong>StatefulWidget</strong>: A widget that can maintain state and can rebuild itself when the state
              changes.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-4">StatelessWidget Example</h3>
          <CodeBlock
            code="import 'package:flutter/material.dart';

class GreetingWidget extends StatelessWidget {
  final String name;

  // Constructor
  const GreetingWidget({Key? key, required this.name}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text('Hello, \$name!');
  }
}

// Using the widget
GreetingWidget(name: 'Flutter Developer')"
            language="dart"
            filename="greeting_widget.dart"
          />

          <h3 className="text-xl font-medium mt-4">StatefulWidget Example</h3>
          <CodeBlock
            code="import 'package:flutter/material.dart';

class CounterWidget extends StatefulWidget {
  const CounterWidget({Key? key}) : super(key: key);

  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('Count: \$_counter'),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('Increment'),
        ),
      ],
    );
  }
}"
            language="dart"
            filename="counter_widget.dart"
          />

          <p className="mt-4">
            The key difference is that <code>StatefulWidget</code> has a separate state class that can be updated with{" "}
            <code>setState()</code>, triggering a rebuild of the widget.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Layout Widgets</h2>
          <p>Flutter provides a rich set of layout widgets to help you arrange other widgets on the screen.</p>

          <h3 className="text-xl font-medium mt-4">Container</h3>
          <p>A convenience widget that combines common painting, positioning, and sizing widgets.</p>
          <CodeBlock
            code="Container(
  margin: EdgeInsets.all(10.0),
  padding: EdgeInsets.all(20.0),
  decoration: BoxDecoration(
    color: Colors.blue,
    borderRadius: BorderRadius.circular(10.0),
  ),
  child: Text(
    'Hello, Flutter!',
    style: TextStyle(color: Colors.white),
  ),
)"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Row and Column</h3>
          <p>Widgets that arrange their children in a horizontal (Row) or vertical (Column) array.</p>
          <CodeBlock
            code="// Row example
Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  children: [
    Icon(Icons.star),
    Icon(Icons.star),
    Icon(Icons.star),
  ],
)

// Column example
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text('Title'),
    Text('Subtitle'),
    Text('Body text'),
  ],
)"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Stack</h3>
          <p>A widget that positions its children relative to the edges of its box.</p>
          <CodeBlock
            code="Stack(
  children: [
    // Background image
    Image.asset('background.jpg'),
    
    // Overlay text
    Positioned(
      bottom: 20,
      right: 20,
      child: Text(
        'Overlay Text',
        style: TextStyle(color: Colors.white),
      ),
    ),
  ],
)"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Scaffold</h3>
          <p>A widget that implements the basic material design visual layout structure.</p>
          <CodeBlock
            code="Scaffold(
  appBar: AppBar(
    title: Text('My Flutter App'),
  ),
  body: Center(
    child: Text('Hello, World!'),
  ),
  floatingActionButton: FloatingActionButton(
    onPressed: () {},
    child: Icon(Icons.add),
  ),
)"
            language="dart"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">User Input Widgets</h2>
          <p>Flutter provides various widgets for handling user input.</p>

          <h3 className="text-xl font-medium mt-4">TextField</h3>
          <p>A widget that allows users to enter text.</p>
          <CodeBlock
            code="TextField(
  decoration: InputDecoration(
    labelText: 'Username',
    hintText: 'Enter your username',
    border: OutlineInputBorder(),
  ),
  onChanged: (text) {
    print('Current text: \$text');
  },
)"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Buttons</h3>
          <p>Flutter offers various button widgets for different use cases.</p>
          <CodeBlock
            code="// Elevated Button (raised button with shadow)
ElevatedButton(
  onPressed: () {
    print('Button pressed!');
  },
  child: Text('Press Me'),
)

// Text Button (flat button without background)
TextButton(
  onPressed: () {
    print('Text button pressed!');
  },
  child: Text('Text Button'),
)

// Outlined Button (button with an outline)
OutlinedButton(
  onPressed: () {
    print('Outlined button pressed!');
  },
  child: Text('Outlined Button'),
)"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Checkbox and Switch</h3>
          <p>Widgets for boolean input.</p>
          <CodeBlock
            code="// Checkbox example
bool _isChecked = false;

Checkbox(
  value: _isChecked,
  onChanged: (bool? value) {
    setState(() {
      _isChecked = value!;
    });
  },
)

// Switch example
bool _isSwitched = false;

Switch(
  value: _isSwitched,
  onChanged: (bool value) {
    setState(() {
      _isSwitched = value;
    });
  },
)"
            language="dart"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Hot Reload</h2>
          <p>
            One of Flutter's most powerful features is Hot Reload, which allows you to see changes in your code almost
            instantly without losing the current state of your app.
          </p>

          <h3 className="text-xl font-medium mt-4">How to Use Hot Reload</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Make changes to your Flutter code.</li>
            <li>Save the file (Ctrl+S or Cmd+S).</li>
            <li>If using an IDE like Android Studio or VS Code, the hot reload will happen automatically.</li>
            <li>If using the command line, press 'r' in the terminal where your app is running.</li>
          </ol>

          <h3 className="text-xl font-medium mt-4">Hot Reload vs. Hot Restart</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Hot Reload</strong>: Preserves the state of your app but updates the UI based on code changes.
              It's faster but has limitations.
            </li>
            <li>
              <strong>Hot Restart</strong>: Restarts the app completely, losing all state but applying all code changes.
              Use this when hot reload doesn't work as expected.
            </li>
          </ul>

          <p className="mt-4">
            To perform a hot restart, press 'R' (uppercase) in the terminal or use the hot restart button in your IDE.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-8">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">Pro Tip</h3>
          <p className="text-blue-700 dark:text-blue-200">
            When designing Flutter UIs, think in terms of widget composition rather than inheritance. Flutter's design
            philosophy encourages composing small, single-purpose widgets to build complex UIs, rather than creating
            deep inheritance hierarchies.
          </p>
        </div>

        <ProgressTracker section="core-concepts" />
      </div>
    </div>
  )
}
