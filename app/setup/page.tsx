import CodeBlock from "@/components/code-block"
import ProgressTracker from "@/components/progress-tracker"

export default function SetupPage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Setting Up Flutter for Android Development</h1>
          <p className="text-muted-foreground">
            A step-by-step guide to installing and configuring Flutter and Android Studio
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            Before you can start building Flutter apps for Android, you need to set up your development environment.
            This involves installing the Flutter SDK, Dart (which comes with Flutter), and Android Studio with the
            necessary plugins and SDKs.
          </p>
          <p>This guide will walk you through the setup process for Windows, macOS, and Linux operating systems.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Installing Flutter SDK</h2>
          <p>The Flutter SDK contains the tools and libraries needed to develop Flutter applications.</p>

          <h3 className="text-xl font-medium mt-4">Windows</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Download the latest stable Flutter SDK from the{" "}
              <a
                href="https://flutter.dev/docs/get-started/install/windows"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                official Flutter website
              </a>
              .
            </li>
            <li>
              Extract the zip file to a location like <code>C:\flutter</code> (avoid spaces in the path and avoid
              protected directories like <code>Program Files</code>).
            </li>
            <li>
              Add Flutter to your PATH:
              <ul className="list-disc pl-6 mt-2">
                <li>Search for "Environment Variables" in the Windows search bar.</li>
                <li>Click on "Edit the system environment variables".</li>
                <li>Click on "Environment Variables".</li>
                <li>Under "System variables", find the "Path" variable, select it, and click "Edit".</li>
                <li>
                  Click "New" and add the path to the Flutter <code>bin</code> directory (e.g.,{" "}
                  <code>C:\flutter\bin</code>).
                </li>
                <li>Click "OK" to save.</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-xl font-medium mt-4">macOS</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Download the latest stable Flutter SDK from the{" "}
              <a
                href="https://flutter.dev/docs/get-started/install/macos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                official Flutter website
              </a>
              .
            </li>
            <li>
              Extract the file to a location like <code>~/flutter</code>.
            </li>
            <li>
              Add Flutter to your PATH by adding the following line to your shell profile (<code>~/.zshrc</code> for Zsh
              or <code>~/.bash_profile</code> for Bash):
            </li>
          </ol>
          <CodeBlock code="export PATH=&quot;$PATH:~/flutter/bin&quot;" language="bash" />
          <p>Then, reload your shell configuration:</p>
          <CodeBlock code="source ~/.zshrc  # or source ~/.bash_profile for Bash" language="bash" />

          <h3 className="text-xl font-medium mt-4">Linux</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Download the latest stable Flutter SDK from the{" "}
              <a
                href="https://flutter.dev/docs/get-started/install/linux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                official Flutter website
              </a>
              .
            </li>
            <li>
              Extract the file to a location like <code>~/flutter</code>.
            </li>
            <li>
              Add Flutter to your PATH by adding the following line to your shell profile (<code>~/.bashrc</code> or{" "}
              <code>~/.zshrc</code>):
            </li>
          </ol>
          <CodeBlock code="export PATH=&quot;$PATH:~/flutter/bin&quot;" language="bash" />
          <p>Then, reload your shell configuration:</p>
          <CodeBlock code="source ~/.bashrc  # or source ~/.zshrc for Zsh" language="bash" />

          <h3 className="text-xl font-medium mt-4">Verify Flutter Installation</h3>
          <p>To verify that Flutter is installed correctly, run:</p>
          <CodeBlock code="flutter --version" language="bash" />
          <p>You should see output showing the Flutter version, channel, and other information.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Installing Android Studio</h2>
          <p>Android Studio is the recommended IDE for Flutter development for Android.</p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Download Android Studio from the{" "}
              <a
                href="https://developer.android.com/studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                official Android Studio website
              </a>
              .
            </li>
            <li>Install Android Studio following the installation wizard.</li>
            <li>
              During setup, make sure to install the Android SDK, Android SDK Platform-Tools, and Android SDK
              Build-Tools.
            </li>
            <li>After installation, open Android Studio and go through the initial setup wizard.</li>
          </ol>

          <h3 className="text-xl font-medium mt-4">Installing Flutter and Dart Plugins</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Open Android Studio.</li>
            <li>
              Go to File {">"} Settings (on Windows/Linux) or Android Studio {">"} Preferences (on macOS).
            </li>
            <li>Select Plugins from the left sidebar.</li>
            <li>Search for "Flutter" in the Marketplace tab.</li>
            <li>Click "Install" next to the Flutter plugin.</li>
            <li>The Dart plugin will be installed automatically with Flutter.</li>
            <li>Restart Android Studio when prompted.</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Setting Up Android Emulator</h2>
          <p>To test your Flutter apps without a physical device, you'll need to set up an Android emulator.</p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Open Android Studio.</li>
            <li>Click on "More Actions" or "Configure" from the welcome screen.</li>
            <li>Select "AVD Manager" (Android Virtual Device Manager).</li>
            <li>Click on "Create Virtual Device".</li>
            <li>Select a device definition (e.g., Pixel 6).</li>
            <li>Select a system image (e.g., API 35 with Google Play).</li>
            <li>Configure the AVD with any additional settings.</li>
            <li>Click "Finish" to create the virtual device.</li>
          </ol>

          <p className="mt-4">
            You can start the emulator from the AVD Manager by clicking the play button next to your virtual device.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Setting Up Physical Device</h2>
          <p>
            If you prefer to test on a physical Android device, you'll need to enable Developer Options and USB
            Debugging.
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>On your Android device, go to Settings {">"} About phone.</li>
            <li>Tap on "Build number" seven times to enable Developer Options.</li>
            <li>Go back to Settings, and you should now see "Developer options" near the bottom.</li>
            <li>Open Developer Options and enable "USB debugging".</li>
            <li>Connect your device to your computer with a USB cable.</li>
            <li>When prompted on your device, allow USB debugging.</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Verifying Setup with Flutter Doctor</h2>
          <p>
            Flutter provides a convenient tool called "flutter doctor" that checks your environment and displays a
            report of the status of your Flutter installation.
          </p>

          <p>Run the following command in your terminal or command prompt:</p>
          <CodeBlock code="flutter doctor" language="bash" />

          <p className="mt-4">
            This command checks for the Flutter SDK, connected devices, and required dependencies. If there are any
            issues, flutter doctor will provide instructions on how to resolve them.
          </p>

          <p className="mt-2">A successful output should look something like this:</p>
          <CodeBlock
            code="[✓] Flutter (Channel stable, 3.19.3, on macOS 14.4.1)
[✓] Android toolchain - develop for Android devices (Android SDK version 34.0.0)
[✓] Xcode - develop for iOS and macOS (Xcode 15.3)
[✓] Chrome - develop for the web
[✓] Android Studio (version 2023.1)
[✓] VS Code (version 1.86.2)
[✓] Connected device (2 available)
[✓] Network resources"
            language="bash"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Common Setup Issues and Solutions</h2>

          <h3 className="text-xl font-medium">Flutter Not Found in PATH</h3>
          <p>
            If you see an error like "flutter: command not found", it means Flutter is not properly added to your PATH.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Double-check that you've added Flutter to your PATH as described in step 1.</li>
            <li>Restart your terminal or command prompt.</li>
            <li>On Windows, you might need to restart your computer for PATH changes to take effect.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4">Android SDK License Issues</h3>
          <p>If flutter doctor shows license issues, run:</p>
          <CodeBlock code="flutter doctor --android-licenses" language="bash" />
          <p>Accept all the license agreements when prompted.</p>

          <h3 className="text-xl font-medium mt-4">Missing Dependencies</h3>
          <p>
            On Linux, you might need to install additional dependencies. Flutter doctor will list the required packages.
            Install them using your distribution's package manager.
          </p>
          <CodeBlock code="sudo apt-get install <package-names>  # For Ubuntu/Debian" language="bash" />

          <h3 className="text-xl font-medium mt-4">Device Not Detected</h3>
          <p>If your physical device is not detected:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Make sure USB debugging is enabled.</li>
            <li>Try a different USB cable or port.</li>
            <li>Install the appropriate USB drivers for your device (especially on Windows).</li>
            <li>Restart your computer and device.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Creating Your First Flutter Project</h2>
          <p>
            Now that your environment is set up, let's create a simple Flutter project to verify everything is working
            correctly.
          </p>

          <h3 className="text-xl font-medium">Using the Command Line</h3>
          <p>Run the following commands in your terminal or command prompt:</p>
          <CodeBlock
            code="flutter create my_first_app
cd my_first_app
flutter run"
            language="bash"
          />
          <p>
            This will create a new Flutter project called "my_first_app", navigate into the project directory, and run
            the app on your connected device or emulator.
          </p>

          <h3 className="text-xl font-medium mt-4">Using Android Studio</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Open Android Studio.</li>
            <li>Click on "New Flutter Project" from the welcome screen.</li>
            <li>Select "Flutter" as the project type.</li>
            <li>Verify the Flutter SDK path is correct.</li>
            <li>Enter a project name (e.g., "my_first_app").</li>
            <li>Choose a project location.</li>
            <li>Click "Finish" to create the project.</li>
            <li>Once the project is created, click the "Run" button (green triangle) to run the app.</li>
          </ol>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-8">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">Pro Tip</h3>
          <p className="text-blue-700 dark:text-blue-200">
            When working with Flutter, make sure to regularly update your Flutter SDK to get the latest features and bug
            fixes. You can update Flutter by running <code>flutter upgrade</code> in your terminal.
          </p>
        </div>

        <ProgressTracker section="setup" />
      </div>
    </div>
  )
}
