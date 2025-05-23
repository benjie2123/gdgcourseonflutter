import CodeBlock from "@/components/code-block"

export default function IntermediateConceptsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Flutter Intermediate Concepts</h1>

      <p className="mb-6">
        Now that you understand the basics of Flutter, let's dive into some intermediate concepts that will help you
        build more complex and feature-rich applications.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. State Management</h2>

        <p className="mb-4">
          State management is one of the most important aspects of Flutter development. It determines how your app's
          data flows and changes over time.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">setState</h3>
            <p className="mb-3">
              The simplest form of state management in Flutter is using the <code>setState</code> method in
              StatefulWidget.
            </p>
            <CodeBlock
              language="dart"
              code={`class CounterPage extends StatefulWidget {
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
      appBar: AppBar(
        title: Text('Counter'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('You have pushed the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Provider</h3>
            <p className="mb-3">
              For more complex apps, you might want to use a state management solution like Provider, which implements
              the InheritedWidget pattern in a more developer-friendly way.
            </p>
            <CodeBlock
              language="dart"
              code={`// 1. Create a model class
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CounterModel extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

// 2. Provide the model to the widget tree
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Provider Example'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CounterDisplay(),
              CounterIncrement(),
            ],
          ),
        ),
      ),
    );
  }
}

// 3. Consume the model in your widgets
class CounterDisplay extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text(
      'Count: \${context.watch<CounterModel>().count}',
    );
  }
}

class CounterIncrement extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        context.read<CounterModel>().increment();
      },
      child: Text('Increment'),
    );
  }
}`}
            />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <h3 className="font-medium text-blue-800">When to Use Different State Management Solutions</h3>
          <ul className="list-disc list-inside mt-2 text-blue-700">
            <li>
              <strong>setState</strong>: For simple widgets with local state
            </li>
            <li>
              <strong>Provider</strong>: For sharing state between widgets in a subtree
            </li>
            <li>
              <strong>Bloc/Cubit</strong>: For complex apps with many business logic components
            </li>
            <li>
              <strong>Riverpod</strong>: An improved version of Provider with additional features
            </li>
            <li>
              <strong>GetX</strong>: For a lightweight, high-performance state management solution
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Navigation</h2>

        <p className="mb-4">
          Navigation is essential for multi-screen apps. Flutter provides a powerful navigation system based on routes.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Basic Navigation</h3>
            <p className="mb-3">The simplest way to navigate between screens is using the Navigator.</p>
            <CodeBlock
              language="dart"
              code={`import 'package:flutter/material.dart';

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Second Screen"),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text('Go back!'),
        ),
      ),
    );
  }
}

// Navigate to a new screen
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SecondScreen()),
);

// Go back to the previous screen
Navigator.pop(context);`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Named Routes</h3>
            <p className="mb-3">For more complex navigation, you can use named routes.</p>
            <CodeBlock
              language="dart"
              code={`import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/details', arguments: {'id': 123, 'title': 'Item Details'});
              },
              child: Text('Go to Details'),
            ),
          ],
        ),
      ),
    );
  }
}

class DetailsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments as Map<String, dynamic>;
    final id = args['id'];
    final title = args['title'];

    return Scaffold(
      appBar: AppBar(
        title: Text('Details Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Item ID: \$id'),
            Text('Item Title: \$title'),
          ],
        ),
      ),
    );
  }
}

class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Settings Screen'),
      ),
      body: Center(
        child: Text('Settings Content'),
      ),
    );
  }
}

// Define routes in MaterialApp
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => HomeScreen(),
    '/details': (context) => DetailsScreen(),
    '/settings': (context) => SettingsScreen(),
  },
);

// Navigate to a named route
Navigator.pushNamed(context, '/details');

// Navigate with arguments
Navigator.pushNamed(
  context,
  '/details',
  arguments: {'id': 123, 'title': 'Item Details'},
);

// Access arguments in the destination screen
final args = ModalRoute.of(context)!.settings.arguments as Map<String, dynamic>;
final id = args['id'];
final title = args['title'];`}
            />
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
          <h3 className="font-medium text-yellow-800">Navigation Best Practices</h3>
          <ul className="list-disc list-inside mt-2 text-yellow-700">
            <li>Use named routes for better organization in larger apps</li>
            <li>
              Consider using a navigation package like go_router or auto_route for complex navigation requirements
            </li>
            <li>Be mindful of the navigation stack to avoid memory leaks</li>
            <li>Use Navigator 2.0 for more control over the navigation stack (advanced)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Working with Lists</h2>

        <p className="mb-4">
          Lists are a common UI pattern in mobile apps. Flutter provides several widgets to efficiently display lists of
          data.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">ListView</h3>
            <p className="mb-3">ListView is the most common way to display a scrolling list of widgets.</p>
            <CodeBlock
              language="dart"
              code={`import 'package:flutter/material.dart';

class Item {
  final String title;
  final String description;

  Item(this.title, this.description);
}

final List<Item> items = [
  Item('Item 1', 'Description for Item 1'),
  Item('Item 2', 'Description for Item 2'),
  Item('Item 3', 'Description for Item 3'),
];

// Basic ListView with static children
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
      leading: Icon(Icons.star),
      onTap: () {
        print('Tapped on \${items[index].title}');
      },
    );
  },
);`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">GridView</h3>
            <p className="mb-3">GridView displays items in a 2D grid.</p>
            <CodeBlock
              language="dart"
              code={`import 'package:flutter/material.dart';

class Item {
  final String title;
  final String description;

  Item(this.title, this.description);
}

final List<Item> items = [
  Item('Item 1', 'Description for Item 1'),
  Item('Item 2', 'Description for Item 2'),
  Item('Item 3', 'Description for Item 3'),
];

GridView.count(
  crossAxisCount: 2, // Number of columns
  children: List.generate(10, (index) {
    return Card(
      child: Center(
        child: Text('Item \$index'),
      ),
    );
  }),
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
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.photo, size: 50),
          Text(items[index].title),
        ],
      ),
    );
  },
);`}
            />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <h3 className="font-medium text-blue-800">Performance Tips for Lists</h3>
          <ul className="list-disc list-inside mt-2 text-blue-700">
            <li>
              Use <code>ListView.builder</code> instead of <code>ListView</code> for long lists
            </li>
            <li>Implement pagination for very large datasets</li>
            <li>
              Use <code>const</code> constructors where possible
            </li>
            <li>
              Consider using <code>ListView.separated</code> for lists with dividers
            </li>
            <li>
              Use <code>cacheExtent</code> to control how many items are kept in memory
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Asynchronous Programming</h2>

        <p className="mb-4">
          Flutter apps often need to perform asynchronous operations like fetching data from the internet or reading
          from a database.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Futures</h3>
            <p className="mb-3">A Future represents a computation that doesn't complete immediately.</p>
            <CodeBlock
              language="dart"
              code={`// Creating a Future
Future<String> fetchData() async {
  // Simulate network request
  await Future.delayed(Duration(seconds: 2));
  return 'Data loaded successfully';
}

// Using a Future
void loadData() async {
  try {
    String result = await fetchData();
    print(result);
  } catch (e) {
    print('Error: \$e');
  }
}

// Alternative syntax with then/catchError
fetchData()
  .then((result) => print(result))
  .catchError((error) => print('Error: \$error'));`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">FutureBuilder</h3>
            <p className="mb-3">FutureBuilder is a widget that makes it easy to work with Futures in your UI.</p>
            <CodeBlock
              language="dart"
              code={`import 'package:flutter/material.dart';

Future<String> fetchData() async {
  // Simulate network request
  await Future.delayed(Duration(seconds: 2));
  return 'Data loaded successfully';
}

FutureBuilder<String>(
  future: fetchData(),
  builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return CircularProgressIndicator();
    } else if (snapshot.hasError) {
      return Text('Error: \${snapshot.error}');
    } else {
      return Text('Data: \${snapshot.data}');
    }
  },
);`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Streams</h3>
            <p className="mb-3">Streams provide a sequence of asynchronous events.</p>
            <CodeBlock
              language="dart"
              code={`import 'package:flutter/material.dart';

// Creating a Stream
Stream<int> countStream(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}

// Using a StreamBuilder
StreamBuilder<int>(
  stream: countStream(10),
  builder: (BuildContext context, AsyncSnapshot<int> snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return Text('Waiting for data...');
    } else if (snapshot.hasError) {
      return Text('Error: \${snapshot.error}');
    } else if (snapshot.hasData) {
      return Text('Count: \${snapshot.data}');
    } else {
      return Text('No data');
    }
  },
);`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Themes and Styling</h2>

        <p className="mb-4">
          Flutter provides a powerful theming system to maintain a consistent look and feel across your app.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">ThemeData</h3>
            <p className="mb-3">Define a theme for your app using ThemeData.</p>
            <CodeBlock
              language="dart"
              code={`import 'package:flutter/material.dart';

MaterialApp(
  theme: ThemeData(
    primarySwatch: Colors.blue,
    brightness: Brightness.light,
    fontFamily: 'Roboto',
    textTheme: TextTheme(
      headlineLarge: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
      bodyMedium: TextStyle(fontSize: 16, color: Colors.black87),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        foregroundColor: Colors.white,
        backgroundColor: Colors.blue,
      ),
    ),
  ),
  darkTheme: ThemeData(
    brightness: Brightness.dark,
    // Define dark theme properties
  ),
  themeMode: ThemeMode.system, // Use system theme
  home: MyHomePage(),
);`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Using Theme</h3>
            <p className="mb-3">Access the current theme in your widgets.</p>
            <CodeBlock
              language="dart"
              code={`import 'package:flutter/material.dart';

// Access theme colors
Color primaryColor = Theme.of(context).primaryColor;

// Access text styles
TextStyle headlineStyle = Theme.of(context).textTheme.headlineLarge!;

// Use theme in widgets
Text(
  'Hello, Flutter!',
  style: Theme.of(context).textTheme.headlineLarge,
);`}
            />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <h3 className="font-medium text-blue-800">Theme Best Practices</h3>
          <ul className="list-disc list-inside mt-2 text-blue-700">
            <li>Define a consistent color palette</li>
            <li>Use semantic color names (e.g., primaryColor, errorColor)</li>
            <li>Support both light and dark themes</li>
            <li>Create reusable text styles</li>
            <li>Consider accessibility when choosing colors and font sizes</li>
          </ul>
        </div>
      </section>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
        <h3 className="font-medium text-green-800">Next Steps</h3>
        <p className="text-green-700">
          Now that you understand these intermediate concepts, you're ready to build a complete Flutter app in the
          Project section.
        </p>
      </div>
    </div>
  )
}
