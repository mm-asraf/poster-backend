# poster-backend


## User Management, Posts, Tags, and Comments API
## This API provides CRUD functionalities for user management, posts, tags, and comments. It is built using Node.js, Express.js, and MongoDB. The API allows users to register, login, and perform CRUD operations on posts, tags, and comments.

# Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
    - [Register User](#register-user)
    - [Login User](#login-user)
    - [Get User by ID](#get-user-by-id)
    - [Get User by First Name](#get-user-by-first-name)
  - [Post Endpoints](#post-endpoints)
    - [Create Post](#create-post)
    - [Get All Posts](#get-all-posts)
    - [Get Post by ID](#get-post-by-id)
    - [Update Post by ID](#update-post-by-id)
    - [Delete Post by ID](#delete-post-by-id)
  - [Tag Endpoints](#tag-endpoints)
    - [Create Tag](#create-tag)
    - [Get All Tags](#get-all-tags)
    - [Get Tag by ID](#get-tag-by-id)
    - [Update Tag by ID](#update-tag-by-id)
    - [Delete Tag by ID](#delete-tag-by-id)
  - [Comment Endpoints](#comment-endpoints)
    - [Create Comment](#create-comment)
    - [Get Comment by ID](#get-comment-by-id)
    - [Update Comment by ID](#update-comment-by-id)
    - [Delete Comment by ID](#delete-comment-by-id)
- [Global Error Handling](#global-error-handling)
- [Environment Variables](#environment-variables)
- [License](#license)

## Getting Started

These instructions will help you set up and run the API on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- NPM (v6 or higher)
- MongoDB

### Installation

Clone the repository to your local machine:

```bash
1.git clone <repository-url>
2.cd <repository-directory>
3.npm install
4.npm start


## API Endpoints

### User Endpoints

#### Register User

- **Endpoint:** `POST /user/register`
- **Description:** Registers a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}

**Response Body:**
```json
{
  "token": "jwt_token",
  "status": "success"
}


Response:

Login User
Endpoint: POST /user/login

Description: Logs in a user.

Request Body:

json
Copy code
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

200 OK - Returns the generated token and a success status.
Example Response:

json
{
  "token": "jwt_token",
  "status": "success"
}
Get User by ID
Endpoint: GET /user/:id

Description: Retrieves user details by user ID.

Request Headers:

Authorization: Bearer <token>
Response:

200 OK - Returns the user details if found.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  },
  "status": "success"
}
Get User by First Name
Endpoint: GET /user/firstName/:firstName

Description: Retrieves users by their first name.

Response:

200 OK - Returns the list of users with matching first names.
Example Response:

json
[
  {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
]
Post Endpoints
Create Post
Endpoint: POST /post

Description: Creates a new post.

Request Body:

json
{
  "title": "Post Title",
  "content": "This is the content of the post."
}
Response:

200 OK - Returns the created post.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "title": "Post Title",
    "content": "This is the content of the post."
  }
}
Get All Posts
Endpoint: GET /post/getAllPosts

Description: Retrieves all posts.

Response:

200 OK - Returns the list of all posts.
Example Response:

json
{
  "data": [
    {
      "_id": "60c72b2f9b1e8a5a7a5f9d45",
      "title": "Post Title",
      "content": "This is the content of the post."
    }
  ]
}
Get Post by ID
Endpoint: GET /post/:id

Description: Retrieves a post by its ID.

Response:

200 OK - Returns the post details.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "title": "Post Title",
    "content": "This is the content of the post."
  }
}
Update Post by ID
Endpoint: PATCH /post/:id

Description: Updates a post by its ID.

Request Body:

json
{
  "title": "Updated Post Title",
  "content": "Updated content."
}
Response:

200 OK - Returns the updated post.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "title": "Updated Post Title",
    "content": "Updated content."
  }
}
Delete Post by ID
Endpoint: DELETE /post/:id

Description: Deletes a post by its ID.

Response:

200 OK - Returns a success message.
Example Response:

json
"Post deleted successfully"
Tag Endpoints
Create Tag
Endpoint: POST /tag

Description: Creates a new tag.

Request Body:

json
{
  "name": "Tag Name"
}
Response:

200 OK - Returns the created tag.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "name": "Tag Name"
  }
}
Get All Tags
Endpoint: GET /tag/getAllTags

Description: Retrieves all tags.

Response:

200 OK - Returns the list of all tags.
Example Response:

json
{
  "data": [
    {
      "_id": "60c72b2f9b1e8a5a7a5f9d45",
      "name": "Tag Name"
    }
  ]
}
Get Tag by ID
Endpoint: GET /tag/:id

Description: Retrieves a tag by its ID.

Response:

200 OK - Returns the tag details.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "name": "Tag Name"
  }
}
Update Tag by ID
Endpoint: PATCH /tag/:id

Description: Updates a tag by its ID.

Request Body:

json
{
  "name": "Updated Tag Name"
}
Response:

200 OK - Returns the updated tag.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "name": "Updated Tag Name"
  }
}
Delete Tag by ID
Endpoint: DELETE /tag/:id

Description: Deletes a tag by its ID.

Response:

200 OK - Returns a success message.
Example Response:

json
"Tag data deleted successfully!"
Comment Endpoints
Create Comment
Endpoint: POST /comment

Description: Creates a new comment.

Request Body:

json
{
  "postId": "60c72b2f9b1e8a5a7a5f9d45",
  "content": "This is a comment."
}
Response:

201 Created - Returns the created comment.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "postId": "60c72b2f9b1e8a5a7a5f9d45",
    "content": "This is a comment."
  }
}
Get Comment by ID
Endpoint: GET /comment/:id

Description: Retrieves a comment by its ID.

Response:

200 OK - Returns the comment details.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "postId": "60c72b2f9b1e8a5a7a5f9d45",
    "content": "This is a comment."
  }
}
Update Comment by ID
Endpoint: PATCH /comment/:id

Description: Updates a comment by its ID.

Request Body:

json
  "content": "Updated comment content."
}
Response:

200 OK - Returns the updated comment.
Example Response:

json
{
  "data": {
    "_id": "60c72b2f9b1e8a5a7a5f9d45",
    "postId": "60c72b2f9b1e8a5a7a5f9d45",
    "content": "Updated comment content."
  }
}
Delete Comment by ID
Endpoint: DELETE /comment/:id

Description: Deletes a comment by its ID.

Response:

200 OK - Returns a success message.
Example Response:

json
"Comment deleted successfully"
Global Error Handling
The API has a global error handler that catches and handles errors throughout the application. It returns standardized error responses in JSON format.

Example error response:

json
{
  "status": "fail",
  "statusCode": 404,
  "errorMessage": "Resource not found",
  "errorCode": "RESOURCE_NOT_FOUND",
  "timestamp": "2024-08-15T10:30:00Z"
}

Environment Variables
Create a .env file in the src directory with the following variables:

bash
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret

License
This project is licensed under the ISC License - see the LICENSE file for details.


