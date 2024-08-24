# Social-Network-API
## Description

The Social Network API is a backend application it allows users to share their thoughts, react to friends' thoughts, and maintain a friend list. This project demonstrates a NoSQL database's use to manage a social network's data dynamically. Functionality is demonstrated through a walkthrough video using Insomnia.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
  - [Friends](#friends)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Questions](#questions)

## Demo
![Example](/social-network.gif)
A walkthrough video demonstrating the application's functionality and API routes can be found [here](#Social-media-vid.mov). This video covers:

- Starting the server and connecting to the database.
- Performing CRUD operations on users and thoughts.
- Adding and removing reactions and friends using API routes.


## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:
   \`\`\`bash
   git clone <repository-url>
   cd social-network-api
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up MongoDB**:

   Ensure MongoDB is installed and running on your local machine or provide a MongoDB Atlas URI in the \`.env\` file:

   \`\`\`
   MONGODB_URI=mongodb://localhost:27017/socialnetwork
   \`\`\`

4. **Run the application**:
   \`\`\`bash
   npm start
   \`\`\`

   This will start the server and connect to the MongoDB database using Mongoose.

## Usage

1. **Start the server**:
   \`\`\`bash
   npm start
   \`\`\`
   or if you want to use \`nodemon\` for development:
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Testing API Endpoints**:
   Use Insomnia, Postman, or any other API client to test the API endpoints listed below.

## API Endpoints

### Users

- **Get all users**:  
  \`GET /api/user\`

- **Get a single user by ID**:  
  \`GET /api/user/:userId\`

- **Create a new user**:  
  \`POST /api/user\`  
  **Request Body**:
  \`\`\`json
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  \`\`\`

- **Update a user by ID**:  
  \`PUT /api/user/:userId\`  
  **Request Body**:  
  \`\`\`json
  {
    "username": "newusername",
    "email": "newemail@example.com"
  }
  \`\`\`

- **Delete a user by ID**:  
  \`DELETE /api/user/:userId\`

### Thoughts

- **Get all thoughts**:  
  \`GET /api/thought\`

- **Get a single thought by ID**:  
  \`GET /api/thought/:thoughtId\`

- **Create a new thought**:  
  \`POST /api/thought\`  
  **Request Body**:
  \`\`\`json
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5f50c31b5d2c12b9c8c91f50"
  }
  \`\`\`

- **Update a thought by ID**:  
  \`PUT /api/thought/:thoughtId\`  
  **Request Body**:
  \`\`\`json
  {
    "thoughtText": "Updated thought text"
  }
  \`\`\`

- **Delete a thought by ID**:  
  \`DELETE /api/thought/:thoughtId\`

### Reactions

- **Add a reaction to a thought**:  
  \`POST /api/thoughts/:thoughtI/reactions\`  
  **Request Body**:
  \`\`\`json
  {
    "reactionBody": "This is a reaction",
    "username": "exampleUser"
  }
  \`\`\`

- **Remove a reaction from a thought**:  
  \`DELETE /api/thought/:thoughtId/reactions/:reactionId\`

### Friends

- **Add a friend to a user's friend list**:  
  \`POST /api/users/:userId/friends/:friendId\`

- **Remove a friend from a user's friend list**:  
  \`DELETE /api/users/:userId/friends/:friendId\`


## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and thought data.
- **Mongoose**: ODM for MongoDB to manage data and enforce schema.
- **Insomnia**: API client used for testing routes.

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)


![Example](/JATE-psa.gif)

## Questions

If you have any questions or feedback, please reach out:

- GitHub: [AnamarisOrtiz](https://github.com/AnamarisOrtiz)
- Email: anamarisortiz@hotmail.com
