import CodeBlock from "@/components/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SetupPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Setting Up Flutter for Android Development</h1>

      <p className="mb-6">
        Before you can start building Android apps with Flutter, you need to set up your development environment. This
        guide will walk you through installing Flutter SDK and Android Studio on different operating systems.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <h3 className="font-medium text-blue-800">Tip</h3>
        <p className="text-blue-700">
          Make sure you have at least 10GB of free disk space for Android Studio, Flutter SDK, and Android emulator
          images.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Installing Flutter SDK</h2>

        <Tabs defaultValue="windows">
          <TabsList className="mb-4">
            <TabsTrigger value="windows">Windows</TabsTrigger>
            <TabsTrigger value="macos">macOS</TabsTrigger>
            <TabsTrigger value="linux">Linux</TabsTrigger>
          </TabsList>

          <TabsContent value="windows">
            <ol className="list-decimal list-inside space-y-4 mb-4">
              <li>
                <p>
                  Download the Flutter SDK from the{" "}
                  <a
                    href="https://flutter.dev/docs/get-started/install/windows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    official Flutter website
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Extract the zip file to a location like <code>C:\flutter</code> (avoid spaces in the path and avoid
                  protected directories like Program Files).
                </p>
              </li>
              <li>
                <p>Add Flutter to your PATH:</p>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Search for "Environment Variables" in Windows search</li>
                  <li>Click "Edit the system environment variables"</li>
                  <li>Click "Environment Variables"</li>
                  <li>Under "User variables", select "Path" and click "Edit"</li>
                  <li>Click "New" and add the path to flutter\bin (e.g., C:\flutter\bin)</li>
                  <li>Click "OK" to save</li>
                </ul>
              </li>
              <li>
                <p>Verify the installation by opening a new Command Prompt and running:</p>
                <CodeBlock language="bash" code="flutter --version" />
              </li>
            </ol>
          </TabsContent>

          <TabsContent value="macos">
            <ol className="list-decimal list-inside space-y-4 mb-4">
              <li>
                <p>
                  Download the Flutter SDK from the{" "}
                  <a
                    href="https://flutter.dev/docs/get-started/install/macos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    official Flutter website
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>Extract the file to your desired location:</p>
                <CodeBlock language="bash" code="cd ~/development\nunzip ~/Downloads/flutter_macos_3.x.x-stable.zip" />
              </li>
              <li>
                <p>Add Flutter to your PATH by editing your shell profile file (e.g., .zshrc or .bash_profile):</p>
                <CodeBlock language="bash" code="export PATH=&quot;$PATH:$HOME/development/flutter/bin&quot;" />
              </li>
              <li>
                <p>Apply the changes to your current terminal session:</p>
                <CodeBlock language="bash" code="source ~/.zshrc  # or source ~/.bash_profile" />
              </li>
              <li>
                <p>Verify the installation:</p>
                <CodeBlock language="bash" code="flutter --version" />
              </li>
            </ol>
          </TabsContent>

          <TabsContent value="linux">
            <ol className="list-decimal list-inside space-y-4 mb-4">
              <li>
                <p>
                  Download the Flutter SDK from the{" "}
                  <a
                    href="https://flutter.dev/docs/get-started/install/linux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    official Flutter website
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>Extract the file to your desired location:</p>
                <CodeBlock
                  language="bash"
                  code="cd ~/development\ntar xf ~/Downloads/flutter_linux_3.x.x-stable.tar.xz"
                />
              </li>
              <li>
                <p>Add Flutter to your PATH by editing your shell profile file:</p>
                <CodeBlock language="bash" code="export PATH=&quot;$PATH:$HOME/development/flutter/bin&quot;" />
              </li>
              <li>
                <p>Apply the changes to your current terminal session:</p>
                <CodeBlock language="bash" code="source ~/.bashrc  # or appropriate shell profile file" />
              </li>
              <li>
                <p>Verify the installation:</p>
                <CodeBlock language="bash" code="flutter --version" />
              </li>
            </ol>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Installing Android Studio</h2>

        <ol className="list-decimal list-inside space-y-4 mb-4">
          <li>
            <p>
              Download Android Studio from the{" "}
              <a
                href="https://developer.android.com/studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                official Android website
              </a>
              .
            </p>
          </li>
          <li>
            <p>Install Android Studio by following the installation wizard.</p>
          </li>
          <li>
            <p>During setup, ensure you install:</p>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Android SDK</li>
              <li>Android SDK Command-line Tools</li>
              <li>Android SDK Build-Tools</li>
              <li>Android Emulator</li>
              <li>Android SDK Platform-Tools</li>
            </ul>
          </li>
          <li>
            <p>After installation, open Android Studio and go through the initial setup wizard.</p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Installing Flutter and Dart Plugins</h2>

        <ol className="list-decimal list-inside space-y-4 mb-4">
          <li>
            <p>Open Android Studio.</p>
          </li>
          <li>
            <p>
              Go to File {">"} Settings (on Windows/Linux) or Android Studio {">"} Preferences (on macOS).
            </p>
          </li>
          <li>
            <p>Select Plugins from the left sidebar.</p>
          </li>
          <li>
            <p>Search for "Flutter" in the Marketplace tab.</p>
          </li>
          <li>
            <p>Click Install for the Flutter plugin (this will also install the Dart plugin).</p>
          </li>
          <li>
            <p>Restart Android Studio when prompted.</p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Setting Up an Android Emulator</h2>

        <ol className="list-decimal list-inside space-y-4 mb-4">
          <li>
            <p>Open Android Studio.</p>
          </li>
          <li>
            <p>
              Click on "More Actions" or the three dots and select "Virtual Device Manager" (or go to Tools {">"} Device
              Manager).
            </p>
          </li>
          <li>
            <p>Click "Create Device".</p>
          </li>
          <li>
            <p>Select a phone device (e.g., Pixel 6) and click "Next".</p>
          </li>
          <li>
            <p>Select a system image (e.g., API 35 or the latest available) and click "Next".</p>
            <p className="text-sm text-gray-600 ml-6 mt-1">
              Note: You may need to download the system image first by clicking the "Download" link next to it.
            </p>
          </li>
          <li>
            <p>Verify the configuration and click "Finish".</p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Setting Up a Physical Device</h2>

        <ol className="list-decimal list-inside space-y-4 mb-4">
          <li>
            <p>Enable Developer Options on your Android device:</p>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Go to Settings {">"} About phone</li>
              <li>Tap "Build number" seven times</li>
              <li>You should see a message that you are now a developer</li>
            </ul>
          </li>
          <li>
            <p>Enable USB Debugging:</p>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>
                Go to Settings {">"} System {">"} Developer options
              </li>
              <li>Enable "USB debugging"</li>
            </ul>
          </li>
          <li>
            <p>Connect your device to your computer with a USB cable.</p>
          </li>
          <li>
            <p>When prompted on your device, allow USB debugging.</p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Verifying Your Setup</h2>

        <p className="mb-4">Run the following command to check if everything is set up correctly:</p>

        <CodeBlock language="bash" code="flutter doctor" />

        <p className="mt-4">
          This command checks your environment and displays a report of the status of your Flutter installation. It will
          tell you if there are any dependencies you need to install to complete the setup.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
          <h3 className="font-medium text-yellow-800">Common Issues</h3>
          <ul className="list-disc list-inside mt-2 text-yellow-700">
            <li>
              Android license status: Run <code>flutter doctor --android-licenses</code> and accept all licenses
            </li>
            <li>Missing SDK components: Use Android Studio's SDK Manager to install missing components</li>
            <li>PATH issues: Ensure Flutter is correctly added to your PATH</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Creating Your First Flutter Project</h2>

        <p className="mb-4">
          Now that you have set up Flutter and Android Studio, let's create a simple Flutter project to verify
          everything works:
        </p>

        <ol className="list-decimal list-inside space-y-4 mb-4">
          <li>
            <p>Open Android Studio.</p>
          </li>
          <li>
            <p>
              Click on "New Flutter Project" from the welcome screen (or File {">"} New {">"} New Flutter Project).
            </p>
          </li>
          <li>
            <p>Select "Flutter Application" and click "Next".</p>
          </li>
          <li>
            <p>Configure your project:</p>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Enter a project name (e.g., "my_first_app")</li>
              <li>Verify the Flutter SDK path is correct</li>
              <li>Set a project location</li>
              <li>Enter a package name (e.g., "com.example.my_first_app")</li>
            </ul>
          </li>
          <li>
            <p>Click "Finish" to create the project.</p>
          </li>
          <li>
            <p>
              Run the project by clicking the "Run" button (green triangle) in the toolbar or by pressing Shift+F10
              (Windows/Linux) or Control+R (macOS).
            </p>
          </li>
          <li>
            <p>Select your emulator or connected device from the list and wait for the app to build and launch.</p>
          </li>
        </ol>

        <p className="mt-4">
          If everything is set up correctly, you should see the default Flutter counter app running on your device or
          emulator.
        </p>
      </section>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
        <h3 className="font-medium text-green-800">Congratulations!</h3>
        <p className="text-green-700">
          You've successfully set up your Flutter development environment for Android. In the next section, we'll
          explore the core concepts of Flutter to help you understand how to build apps.
        </p>
      </div>
    </div>
  )
}
