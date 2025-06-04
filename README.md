# Canadian Citizenship Quiz App

## Overview

This is a mobile application designed to help users prepare for the Canadian Citizenship test. It provides quizzes, tracks progress, and allows users to focus on questions they found difficult.

## Features

*   Multiple choice quizzes based on official study material.
*   Tracks user scores and progress for each quiz.
*   Saves detailed quiz results, including questions answered incorrectly.
*   "Failed Questions Quiz": Allows users to retake a quiz composed only of questions they previously failed.
*   "Favorites": Users can mark specific questions as favorites for quick review.
*   Cross-platform: Runs on iOS and Android devices.

## Tech Stack

*   React Native
*   Expo
*   TypeScript
*   AsyncStorage (for local data persistence)

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
*   [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g expo-cli`
*   [Watchman](https://facebook.github.io/watchman/) (for macOS users)
*   [Android Studio](https://developer.android.com/studio) (for running on Android emulator and building for Android)
*   [Xcode](https://developer.apple.com/xcode/) (for running on iOS simulator and building for iOS - macOS only)
*   [Git](https://git-scm.com/)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url-here>
    ```
    (Replace `<your-repository-url-here>` with the actual URL of this repository)

2.  **Navigate to the project directory:**
    ```bash
    cd citizen-test
    ```
    (Or your specific project folder name)

3.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```

## Running the Application

1.  **Start the Metro Bundler (Expo Development Server):**
    Using npm:
    ```bash
    npm start
    ```
    Or using Yarn:
    ```bash
    yarn start
    ```
    This will also open a new tab in your web browser with the Expo Developer Tools.

2.  **Run on an Emulator/Simulator:**
    *   In the Expo Developer Tools in your browser, click "Run on Android device/emulator" or "Run on iOS simulator".
    *   Alternatively, in the terminal where Metro Bundler is running:
        *   Press `a` to open on an Android emulator (ensure an emulator is already running).
        *   Press `i` to open on an iOS simulator (macOS only, ensure Xcode simulators are set up).

3.  **Run on a Physical Device:**
    *   Install the **Expo Go** app on your iOS or Android device.
    *   Scan the QR code displayed in the terminal or in the Expo Developer Tools using the Expo Go app.
    *   Ensure your device and your computer are on the same Wi-Fi network.

## Project Structure

A brief overview of the main directories:

*   `screens/`: Contains components that represent different screens of the application (e.g., `Quiz1Screen.tsx`, `HomeScreen.tsx`).
*   `components/`: Contains reusable UI components used across different screens (e.g., `QuizRunner.tsx`, `CustomButton.tsx`).
*   `utils/`: Includes helper functions, utility modules like `storage.ts` for AsyncStorage operations, and `colors.ts`.
*   `assets/`: Stores static assets like images and fonts.
*   `App.tsx`: The main entry point of the application.

## Contributing

Contributions are welcome! If you have suggestions or find a bug, please open an issue on the GitHub repository.
