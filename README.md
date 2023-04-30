# Hi! 😊 

This is a user cards application where you can follow/unfollow a user, and the
number of followers is updated accordingly. The application is built using
React, with semantic and valid markup, and follows the technical task provided.
The layout is adaptive, so you can use the application both from a mobile phone
and tablet and from desktop devices.

Go to the link and take a look. 😎 https://lisitsyna-anna.github.io/goit-test/

# Features

User cards display information about each user, including avatar, number of
tweets, and number of followers. By clicking on the Follow button, the text
changes to Following, the button color changes, and the number of followers
increases by one. The number of followers remains the same even after the page
is refreshed, and the button remains in the Following state with the
corresponding color. When you click the Following button again, the text and
color change to the initial state, and the number of followers decreases by one.

# Technologies Used

- React
- React Router for routing
- Axios
- Styled Components
- Styled System
- React-loader-spinner
- React-icons
- Prop-types
- UI service mockapi.io for creating a personal backend for development purposes

# Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine using the command
   `git clone https://github.com/lisitsyna-anna/goit-test.git`
2. Change your directory to the cloned repository using the command
   `cd goit-test`
3. Install the dependencies using the command `npm install`
4. Start the development server using the command `npm start`

# Backend

The backend of the application is created using the UI service mockapi.io. The
users resource is created with the following fields:

- id: unique identifier for each user
- user: name of the user
- tweets: number of tweets posted by the user
- followers: number of followers of the
- user avatar: URL of the user's avatar

# Routing

The React Router is used for routing. The following routes are available in the
application:

- '/' - displays the home page
- '/tweets' - displays the tweets page and list of users

# Credits

This project was created by Anna Lisitsyna. If you have any questions or
suggestions, please feel free to contact me.

- [Email](https://anna.lisicina9309@gmail.com)
- [Linkedin](https://www.linkedin.com/in/annalisitsyna/)
