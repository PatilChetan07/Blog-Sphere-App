# Blog-Sphere-App

Introduction to building a full-stack blog application using MongoDB, Express.js, React.js, and Node.js.
The blog app has a home page and an admin panel where the admin can create, update, and delete blog posts.
React hooks like useState and useEffect are heavily used for state management and fetching data from the backend.
Project details: entry point is index.js, dependencies include Express.js for API creation, and project configurations like author name and license are set.
Explanation of useState (for managing state) and useEffect (for fetching data from APIs).
Backend setup includes creating a file (index.js) with a MongoDB connection URL and configuration for connecting to the database.
Installation of necessary dependencies like Express, setup of API routes, and request handling.
API testing is done through Postman to verify that the backend works and data is stored correctly in the database.
Backend validation checks are added, ensuring all required fields (like email, name, password) are provided by the user.
Hashing passwords before storing them in the database using bcrypt to enhance security.
