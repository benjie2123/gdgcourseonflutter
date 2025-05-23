import CodeBlock from "@/components/code-block"
import ProgressTracker from "@/components/progress-tracker"

export default function IntermediateConceptsPage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Intermediate Flutter Concepts</h1>
          <p className="text-muted-foreground">Taking your Flutter skills to the next level with advanced techniques</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">State Management</h2>
          <p>
            As your Flutter applications grow in complexity, managing state becomes increasingly important. Flutter
            offers several approaches to state management.
          </p>

          <h3 className="text-xl font-medium mt-4">setState</h3>
          <p>
            The simplest form of state management in Flutter is using <code>setState()</code> within a{" "}
            <code>StatefulWidget</code>.
          </p>
          <CodeBlock
            code="class CounterPage extends StatefulWidget {
  @override
  _CounterPageState createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter')),
      body: Center(
        child: Text(
          'Count: $_counter',
          style: TextStyle(fontSize: 24),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        child: Icon(Icons.add),
      ),
    );
  }
}"
            language="dart"
          />
          <p className="mt-2">
            While <code>setState()</code> works well for simple cases, it becomes cumbersome for larger applications
            where state needs to be shared across multiple widgets.
          </p>

          <h3 className="text-xl font-medium mt-4">InheritedWidget</h3>
          <p>
            <code>InheritedWidget</code> is a base class that allows efficient propagation of information down the
            widget tree. It's the foundation for more advanced state management solutions.
          </p>
          <CodeBlock
            code="class CounterProvider extends InheritedWidget {
  final int counter;
  final Function incrementCounter;

  CounterProvider({
    Key? key,
    required this.counter,
    required this.incrementCounter,
    required Widget child,
  }) : super(key: key, child: child);

  static CounterProvider of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<CounterProvider>()!;
  }

  @override
  bool updateShouldNotify(CounterProvider oldWidget) {
    return counter != oldWidget.counter;
  }
}

// Usage
class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return CounterProvider(
      counter: _counter,
      incrementCounter: _incrementCounter,
      child: MaterialApp(
        home: CounterPage(),
      ),
    );
  }
}

class CounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final provider = CounterProvider.of(context);
    
    return Scaffold(
      appBar: AppBar(title: Text('Counter')),
      body: Center(
        child: Text(
          'Count: ${provider.counter}',
          style: TextStyle(fontSize: 24),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => provider.incrementCounter(),
        child: Icon(Icons.add),
      ),
    );
  }
}"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Provider Package</h3>
          <p>
            The Provider package is a wrapper around <code>InheritedWidget</code> that makes it easier to use. It's one
            of the most popular state management solutions in Flutter.
          </p>
          <CodeBlock
            code="// First, add the provider package to your pubspec.yaml
// dependencies:
//   provider: ^6.0.5

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// Create a model class
class CounterModel extends ChangeNotifier {
  int _counter = 0;
  
  int get counter => _counter;
  
  void increment() {
    _counter++;
    notifyListeners();  // Notify listeners to rebuild
  }
}

// Set up the provider
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

// Use the provider in your widgets
class CounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter with Provider')),
      body: Center(
        child: Consumer<CounterModel>(
          builder: (context, model, child) {
            return Text(
              'Count: ${model.counter}',
              style: TextStyle(fontSize: 24),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Access the model and call increment
          Provider.of<CounterModel>(context, listen: false).increment();
        },
        child: Icon(Icons.add),
      ),
    );
  }
}"
            language="dart"
          />
          <p className="mt-2">
            Provider is recommended by the Flutter team and is a great choice for most applications. There are other
            state management solutions like Bloc, Redux, and GetX, each with its own strengths and use cases.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Navigation and Routing</h2>
          <p>
            Navigation is a crucial part of most applications. Flutter provides a powerful navigation system to move
            between screens.
          </p>

          <h3 className="text-xl font-medium mt-4">Basic Navigation</h3>
          <p>
            The simplest way to navigate between screens is using the <code>Navigator</code> class.
          </p>
          <CodeBlock
            code="// Navigate to a new screen
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SecondScreen()),
);

// Go back to the previous screen
Navigator.pop(context);

// Replace the current screen
Navigator.pushReplacement(
  context,
  MaterialPageRoute(builder: (context) => ReplacementScreen()),
);

// Clear the navigation stack and show a new screen
Navigator.pushAndRemoveUntil(
  context,
  MaterialPageRoute(builder: (context) => HomeScreen()),
  (route) => false,  // Remove all previous routes
);"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Named Routes</h3>
          <p>For more complex applications, you can use named routes to organize your navigation.</p>
          <CodeBlock
            code="void main() {
  runApp(
    MaterialApp(
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/details': (context) => DetailsScreen(),
        '/settings': (context) => SettingsScreen(),
      },
    ),
  );
}

// Navigate to a named route
Navigator.pushNamed(context, '/details');

// Navigate with arguments
Navigator.pushNamed(
  context,
  '/details',
  arguments: {'id': 123, 'title': 'Item Details'},
);

// Retrieve arguments in the destination screen
final args = ModalRoute.of(context)!.settings.arguments as Map<String, dynamic>;"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Navigation 2.0 (Router API)</h3>
          <p>
            Flutter 1.22 introduced a new Router API (often called Navigation 2.0) that provides more control over the
            navigation stack and better support for deep linking and web URLs.
          </p>
          <p className="mt-2">
            While more complex, it's worth learning for advanced applications, especially those targeting the web or
            needing deep linking support.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Working with Lists</h2>
          <p>
            Lists are a common UI pattern in mobile apps. Flutter provides several widgets for displaying lists
            efficiently.
          </p>

          <h3 className="text-xl font-medium mt-4">ListView</h3>
          <p>
            <code>ListView</code> is the most basic list widget in Flutter. It's similar to a <code>Column</code> but
            with scrolling capabilities.
          </p>
          <CodeBlock
            code="// Basic ListView with fixed children
ListView(
  children: [
    ListTile(title: Text('Item 1')),
    ListTile(title: Text('Item 2')),
    ListTile(title: Text('Item 3')),
  ],
);

// ListView.builder for dynamic lists
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text(items[index].title),
      subtitle: Text(items[index].description),
      onTap: () {
        // Handle item tap
      },
    );
  },
);

// ListView.separated for lists with separators
ListView.separated(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(title: Text(items[index]));
  },
  separatorBuilder: (context, index) {
    return Divider();  // Add a divider between items
  },
);"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">GridView</h3>
          <p>
            <code>GridView</code> displays items in a 2D grid.
          </p>
          <CodeBlock
            code="// Basic GridView with fixed children
GridView.count(
  crossAxisCount: 2,  // 2 columns
  children: [
    Card(child: Center(child: Text('Item 1'))),
    Card(child: Center(child: Text('Item 2'))),
    Card(child: Center(child: Text('Item 3'))),
    Card(child: Center(child: Text('Item 4'))),
  ],
);

// GridView.builder for dynamic grids
GridView.builder(
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
    crossAxisSpacing: 10,
    mainAxisSpacing: 10,
  ),
  itemCount: items.length,
  itemBuilder: (context, index) {
    return Card(
      child: Center(
        child: Text(items[index]),
      ),
    );
  },
);"
            language="dart"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Asynchronous Programming</h2>
          <p>
            Flutter applications often need to perform operations that take time, such as fetching data from the
            internet or reading from a database. Dart provides powerful tools for asynchronous programming.
          </p>

          <h3 className="text-xl font-medium mt-4">Futures</h3>
          <p>
            A <code>Future</code> represents a computation that doesn't complete immediately. It's similar to a Promise
            in JavaScript.
          </p>
          <CodeBlock
            code="// Creating a Future
Future<String> fetchData() async {
  // Simulate network request
  await Future.delayed(Duration(seconds: 2));
  return 'Data loaded successfully';
}

// Using a Future
void loadData() async {
  try {
    String result = await fetchData();
    print(result);  // Prints: Data loaded successfully
  } catch (e) {
    print('Error: $e');
  }
}

// Alternative syntax using then/catchError
fetchData()
  .then((result) => print(result))
  .catchError((error) => print('Error: $error'));"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">FutureBuilder</h3>
          <p>
            <code>FutureBuilder</code> is a widget that makes it easy to work with asynchronous data in your UI.
          </p>
          <CodeBlock
            code="FutureBuilder<String>(
  future: fetchData(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return CircularProgressIndicator();  // Loading indicator
    } else if (snapshot.hasError) {
      return Text('Error: ${snapshot.error}');  // Error state
    } else {
      return Text(snapshot.data!);  // Success state
    }
  },
)"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Streams</h3>
          <p>
            A <code>Stream</code> is a sequence of asynchronous events. It's useful for data that changes over time,
            like user input or real-time updates.
          </p>
          <CodeBlock
            code="// Creating a Stream
Stream<int> countStream(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;  // Emit a value to the stream
  }
}

// Using a Stream
void listenToStream() {
  final stream = countStream(5);
  
  stream.listen(
    (data) => print('Data: $data'),  // Called for each emitted value
    onError: (error) => print('Error: $error'),
    onDone: () => print('Stream completed'),
  );
}

// StreamBuilder for UI
StreamBuilder<int>(
  stream: countStream(5),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return CircularProgressIndicator();
    } else if (snapshot.hasError) {
      return Text('Error: ${snapshot.error}');
    } else if (snapshot.hasData) {
      return Text('Count: ${snapshot.data}');
    } else {
      return Text('No data');
    }
  },
)"
            language="dart"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Handling User Input and Forms</h2>
          <p>
            Forms are a common way to collect user input. Flutter provides a <code>Form</code> widget and various form
            fields to make form handling easier.
          </p>

          <h3 className="text-xl font-medium mt-4">Form and FormField</h3>
          <CodeBlock
            code="// Create a Form with a GlobalKey
final _formKey = GlobalKey<FormState>();

Form(
  key: _formKey,
  child: Column(
    children: [
      TextFormField(
        decoration: InputDecoration(labelText: 'Email'),
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter your email';
          }
          if (!value.contains('@')) {
            return 'Please enter a valid email';
          }
          return null;  // Return null for valid input
        },
      ),
      TextFormField(
        decoration: InputDecoration(labelText: 'Password'),
        obscureText: true,  // Hide password
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter your password';
          }
          if (value.length < 6) {
            return 'Password must be at least 6 characters';
          }
          return null;
        },
      ),
      ElevatedButton(
        onPressed: () {
          // Validate the form
          if (_formKey.currentState!.validate()) {
            // Form is valid, process the data
            _formKey.currentState!.save();
            // Submit the form
          }
        },
        child: Text('Submit'),
      ),
    ],
  ),
)"
            language="dart"
          />

          <h3 className="text-xl font-medium mt-4">Controlling Form Fields</h3>
          <p>
            You can use <code>TextEditingController</code> to control the content of form fields.
          </p>
          <CodeBlock
            code="class MyFormState extends State<MyForm> {
  // Create controllers
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  void dispose() {
    // Clean up controllers when the widget is disposed
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      child: Column(
        children: [
          TextFormField(
            controller: _emailController,
            decoration: InputDecoration(labelText: 'Email'),
          ),
          TextFormField(
            controller: _passwordController,
            decoration: InputDecoration(labelText: 'Password'),
            obscureText: true,
          ),
          ElevatedButton(
            onPressed: () {
              // Access the values
              final email = _emailController.text;
              final password = _passwordController.text;
              print('Email: $email, Password: $password');
            },
            child: Text('Submit'),
          ),
        ],
      ),
    );
  }
}"
            language="dart"
          />
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-8">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">Pro Tip</h3>
          <p className="text-blue-700 dark:text-blue-200">
            When working with forms, consider using packages like <code>form_field_validator</code> for more advanced
            validation or <code>flutter_form_builder</code> for a more comprehensive form solution. These packages can
            save you time and provide more features than the built-in form widgets.
          </p>
        </div>

        <ProgressTracker section="intermediate-concepts" />
      </div>
    </div>
  )
}
