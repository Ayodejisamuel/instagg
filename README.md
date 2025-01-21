 # Instagg - React Firebase App
Instagg is a social media platform model after Instagram that allows users to sign up, sign in, and interact with posts, all powered by Firebase for authentication, Firestore for data storage, and Firebase Storage for media handling.

#Features
User Authentication: Users can sign up, log in, and authenticate using Firebase Authentication.


Firestore Database: User data and other app-related information are stored in Firestore.


Media Uploads: Users can upload images and other media files to Firebase Storage.
Real-Time Data: Changes to user data and posts are reflected in real-time using Firestore.

#Technologies Used

React: Frontend library for building the user interface.
Firebase: Backend-as-a-service for authentication, database (Firestore), and storage (Firebase Storage).
Zustand: For state management.
CSS: Styling and layout of the user interface.
Firebase SDK: Used to interact with Firebase services (Authentication, Firestore, and Firebase Storage).


#Getting Started
Prerequisites
Make sure you have Node.js installed on your machine.

You'll also need to have a Firebase account and create a Firebase project.
Setup Instructions
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/instagg.git
cd instagg
Install Dependencies: Install the required dependencies with npm or yarn:

bash
Copy code
npm install
Set Up Firebase:

Create a Firebase project in the Firebase Console.
Obtain your Firebase configuration keys from the Firebase Console and add them to your project.
Enable Authentication (Email/Password sign-up).
Set up Firestore and Firebase Storage.


Start the Application: Run the app locally with the following command:

npm install
npm start
Deploying to Render:

If you're using Render for deployment, you can follow the Render documentation to deploy your React app.

In the Render dashboard, set the necessary environment variables in the "Environment" settings section.
Firebase Setup
Firebase Authentication: For user authentication, we are using Firebase Authentication with Email/Password authentication enabled.
Firestore: Used to store user data and app-related information.
Firebase Storage: For handling file uploads (e.g., user profile pictures, posts images).
 

 ## Instagg 2025