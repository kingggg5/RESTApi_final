## Project Structure

### Server-Side

#### Controller
- **Purpose**: Manages API requests for user operations.
- **File**: `routes/userRoutes.js`
  - **Endpoints**:
    - `GET /api/user`: Retrieve a list of users with optional search and pagination.
    - `GET /api/user/:userId`: Retrieve a user by ID.
    - `POST /api/user`: Create a new user.
    - `PUT /api/user/:userId`: Update an existing user by ID.
    - `DELETE /api/user/:userId`: Delete a user by ID.

#### Model
- **Purpose**: Defines the Mongoose schema for user data.
- **File**: `models/user.js`
  - **Schema Fields**:
    - `name`: User's name (required).
    - `age`: User's age (required, must be a number).
    - `email`: User's email (required, must be unique).
    - `avatarUrl`: URL of the user's avatar (optional).

#### API
- **Purpose**: Defines API routes for user management.
- **File**: `routes/userRoutes.js`
  - **Routes**:
    - `GET /api/user`: List users with search and pagination.
    - `GET /api/user/:userId`: Fetch user details by ID.
    - `POST /api/user`: Create a new user.
    - `PUT /api/user/:userId`: Update user details.
    - `DELETE /api/user/:userId`: Remove a user.

#### Service
- **Purpose**: Handles database operations and business logic.
- **File**: Not explicitly defined but typically involves CRUD operations with the `User` model.

#### Scripts
- **Purpose**: Initialize and populate the database.
- **File**: `seed.js`
  - **Function**: Seeds the MongoDB database with initial user data.

#### Utils
- **Purpose**: Provides utility functions.
- **File**: Not explicitly defined but can include connection utilities or helper functions.
- **Examples**:
  - MongoDB connection setup (included in `server.js`).

#### Tests
- **Purpose**: Unit and integration tests for API endpoints.
- **File**: Not provided, but recommended to include tests for controller functions and API interactions.

### Client-Side

#### Component
- **Purpose**: Manages the user interface for user operations.
- **File**: `user-frontend/src/components/UserTable.js`
  - **Features**:
    - Display list of users in a table format.
    - Provide search functionality.
    - Handle user editing and deletion.

#### API Client
- **Purpose**: Communicates with the server-side API and updates the UI.
- **File**: `user-frontend/src/components/UserTable.js` (uses `axios` for API calls)
  - **Functions**:
    - Fetch users with search and pagination.
    - Handle user creation, update, and deletion.

#### Utils
- **Purpose**: Provides helper functions for the client-side application.
- **File**: Not explicitly defined but can include utility functions for data manipulation or formatting.

#### Server-Side Rendering
- **Purpose**: Pre-fetch data from the server before rendering the page.
- **File**: Not explicitly defined in the current setup but can be implemented if needed.
