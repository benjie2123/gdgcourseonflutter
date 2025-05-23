import CodeBlock from "@/components/code-block"

export default function CoreConceptsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Flutter Core Concepts</h1>

      <p className="mb-6">
        Flutter is built around a few core concepts that are essential to understand before diving deeper. In this
        section, we'll cover the fundamental building blocks of Flutter applications.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Widgets: Everything is a Widget</h2>

        <p className="mb-4">
          In Flutter, everything you see on the screen is a widget. Widgets are the basic building blocks of a Flutter
          app's user interface. They can be structural elements, stylistic elements, layout aspects, or interactive
          controls.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium mb-2">Stateless Widgets</h3>
            <p className="mb-3">
              Stateless widgets are immutable, meaning their properties can't change over time. They are used for UI
              parts that don't change.
            </p>
            <CodeBlock
              language="dart"
              code={`class WelcomeMessage extends StatelessWidget {
  final String name;
  
  const WelcomeMessage({required this.name});
  
  @override
  Widget build(BuildContext context) {
    return Text('Welcome, $name!');
  }
}`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Stateful Widgets</h3>
            <p className="mb-3">
              Stateful widgets maintain state that might change during the lifetime of the widget. They are used for UI
              parts that can change dynamically.
            </p>
            <CodeBlock
              language="dart"
              code={`class Counter extends StatefulWidget {
  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;
  
  void _increment() {
    setState(() {
      _count++;
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_count'),
        ElevatedButton(
          onPressed: _increment,
          child: Text('Increment'),
        ),
      ],
    );
  }
}`}
            />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <h3 className="font-medium text-blue-800">Key Difference</h3>
          <p className="text-blue-700">
            Use StatelessWidget when the UI doesn't change over time. Use StatefulWidget when the UI can change
            dynamically (e.g., in response to user interactions or data changes).
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Dart Basics</h2>

        <p className="mb-4">
          Flutter uses Dart as its programming language. Here are some Dart basics you'll use frequently in Flutter
          development:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Variables and Types</h3>
            <CodeBlock
              language="dart"
              code={`// Variable declaration
String name = 'John';
int age = 30;
double height = 1.75;
bool isStudent = true;

// Type inference with var
var message = 'Hello'; // Dart infers this as String

// Constants
final birthday = '1990-01-01'; // Can't be reassigned
const pi = 3.14159; // Compile-time constant`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Functions</h3>
            <CodeBlock
              language="dart"
              code={`// Regular function
String greet(String name) {
  return 'Hello, $name!';
}

// Arrow function (shorthand for single expressions)
String greet(String name) => 'Hello, $name!';

// Optional parameters
void introduce(String name, {int? age, String? occupation}) {
  print('Name: $name');
  if (age != null) print('Age: $age');
  if (occupation != null) print('Occupation: $occupation');
}

// Using the function
introduce('Alice', age: 25, occupation: 'Developer');`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Collections</h3>
            <CodeBlock
              language="dart"
              code={`// Lists
List<String> fruits = ['Apple', 'Banana', 'Orange'];
fruits.add('Mango');
print(fruits[0]); // Access by index

// Maps (key-value pairs)
Map<String, dynamic> person = {
  'name': 'John',
  'age': 30,
  'isStudent': false,
};
print(person['name']); // Access by key`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Layout Widgets</h2>

        <p className="mb-4">Flutter provides a rich set of layout widgets to help you organize your UI elements:</p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Container</h3>
            <p className="mb-2">A convenience widget that combines common painting, positioning, and sizing widgets.</p>
            <CodeBlock
              language="dart"
              code={`Container(
  margin: EdgeInsets.all(10.0),
  padding: EdgeInsets.all(20.0),
  width: 200.0,
  height: 100.0,
  decoration: BoxDecoration(
    color: Colors.blue,
    borderRadius: BorderRadius.circular(10.0),
  ),
  child: Text('Hello, Flutter!'),
)`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Row and Column</h3>
            <p className="mb-2">Row arranges widgets horizontally, while Column arranges them vertically.</p>
            <CodeBlock
              language="dart"
              code={`// Horizontal arrangement
Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  children: [
    Icon(Icons.star),
    Icon(Icons.star),
    Icon(Icons.star),
  ],
)

// Vertical arrangement
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text('Title'),
    Text('Subtitle'),
    Text('Body text'),
  ],
)`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Scaffold</h3>
            <p className="mb-2">Implements the basic material design visual layout structure.</p>
            <CodeBlock
              language="dart"
              code={`Scaffold(
  appBar: AppBar(
    title: Text('My App'),
  ),
  body: Center(
    child: Text('Hello, World!'),
  ),
  floatingActionButton: FloatingActionButton(
    onPressed: () {},
    child: Icon(Icons.add),
  ),
)`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. User Input</h2>

        <p className="mb-4">Flutter provides various widgets to handle user input:</p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">TextField</h3>
            <p className="mb-2">Allows users to enter text.</p>
            <CodeBlock
              language="dart"
              code={`TextField(
  decoration: InputDecoration(
    labelText: 'Username',
    hintText: 'Enter your username',
    border: OutlineInputBorder(),
  ),
  onChanged: (text) {
    print('Current text: $text');
  },
)`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Buttons</h3>
            <p className="mb-2">Flutter offers various button types for different use cases.</p>
            <CodeBlock
              language="dart"
              code={`// Elevated Button (raised button with shadow)
ElevatedButton(
  onPressed: () {
    print('Button pressed!');
  },
  child: Text('Click Me'),
)

// Text Button (flat button without background)
TextButton(
  onPressed: () {
    print('Text button pressed!');
  },
  child: Text('Learn More'),
)

// Icon Button
IconButton(
  icon: Icon(Icons.favorite),
  onPressed: () {
    print('Favorite!');
  },
)`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Gesture Detector</h3>
            <p className="mb-2">Detects various gestures on its child widget.</p>
            <CodeBlock
              language="dart"
              code={`GestureDetector(
  onTap: () {
    print('Widget tapped!');
  },
  onDoubleTap: () {
    print('Widget double-tapped!');
  },
  onLongPress: () {
    print('Widget long-pressed!');
  },
  child: Container(
    color: Colors.blue,
    width: 100.0,
    height: 100.0,
    child: Center(
      child: Text('Tap me!'),
    ),
  ),
)`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Hot Reload</h2>

        <p className="mb-4">
          One of Flutter's most powerful features is Hot Reload, which allows you to see changes in your code almost
          instantly without losing the current state of your app.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <h3 className="font-medium text-blue-800">How to Use Hot Reload</h3>
          <ol className="list-decimal list-inside mt-2 text-blue-700">
            <li>Make changes to your code</li>
            <li>Save the file (Ctrl+S or Cmd+S)</li>
            <li>Flutter automatically reloads your app with the changes</li>
          </ol>
        </div>

        <p className="mb-4">
          Hot Reload works by injecting updated source code files into the running Dart VM. This means:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>UI changes are visible immediately</li>
          <li>The app state is preserved (variables, navigation stack, etc.)</li>
          <li>You can iterate on your UI much faster</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <h3 className="font-medium text-yellow-800">Hot Reload Limitations</h3>
          <p className="text-yellow-700 mb-2">Some changes require a full restart:</p>
          <ul className="list-disc list-inside text-yellow-700">
            <li>Changes to the app's initialization code</li>
            <li>Changes to global variables and static fields</li>
            <li>Changes that modify the class hierarchy</li>
            <li>Changes to method signatures</li>
          </ul>
        </div>
      </section>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
        <h3 className="font-medium text-green-800">Next Steps</h3>
        <p className="text-green-700">
          Now that you understand the core concepts of Flutter, you're ready to explore more advanced topics in the
          Intermediate Concepts section.
        </p>
      </div>
    </div>
  )
}
