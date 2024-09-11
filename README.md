
## Project Structure
### You can start with node server.js
### Server-Side

#### Controller
- **Purpose**: Handles API requests related to user operations.
- **File**: `routes/userRoutes.js`
  - **Endpoints**:
    - `GET /api/user`: Fetch a list of users with optional search and pagination.
    - `GET /api/user/:userId`: Retrieve details of a user by their ID.
    - `POST /api/user`: Add a new user to the database.
    - `PUT /api/user/:userId`: Update an existing user's details by their ID.
    - `DELETE /api/user/:userId`: Remove a user from the database by their ID.

#### Model
- **Purpose**: Defines the schema for user data using Mongoose.
- **File**: `models/user.js`
  - **Schema Fields**:
    - `name`: The user's name (required).
    - `age`: The user's age (required, must be a number).
    - `email`: The user's email (required, must be unique).
    - `avatarUrl`: The URL of the user's avatar (optional).

#### API
- **Purpose**: Sets up the routes for managing users.
- **File**: `routes/userRoutes.js`
  - **Routes**:
    - `GET /api/user`: Lists users with optional search and pagination.
    - `GET /api/user/:userId`: Fetches a user by their ID.
    - `POST /api/user`: Creates a new user.
    - `PUT /api/user/:userId`: Updates an existing user.
    - `DELETE /api/user/:userId`: Deletes a user.

#### Service
- **Purpose**: Manages database operations and business logic.
- **File**: This is not explicitly defined but generally includes CRUD operations with the `User` model.

#### Scripts
- **Purpose**: Initializes and populates the database with initial data.
- **File**: `seed.js`
  - **Function**: Seeds the MongoDB database with predefined user data.

#### Utils
- **Purpose**: Contains utility functions.
- **File**: Not explicitly defined but may include connection utilities or helper functions.
- **Examples**:
  - MongoDB connection setup (handled in `server.js`).

#### Tests
- **Purpose**: Provides unit and integration tests for API endpoints.
- **File**: Not provided, but it is recommended to include tests for controller functions and API interactions.

### Client-Side

#### Component
- **Purpose**: Manages the user interface for user-related operations.
- **File**: `user-frontend/src/components/UserTable.js`
  - **Features**:
    - Displays a list of users in a table format.
    - Provides search functionality.
    - Handles editing and deleting users.

#### API Client
- **Purpose**: Communicates with the server-side API and updates the user interface.
- **File**: `user-frontend/src/components/UserTable.js` (uses `axios` for API calls)
  - **Functions**:
    - Fetches users with search and pagination.
    - Handles user creation, update, and deletion.

#### Utils
- **Purpose**: Provides helper functions for the client-side application.
- **File**: Not explicitly defined but may include utility functions for data manipulation or formatting.

#### Server-Side Rendering
- **Purpose**: Allows pre-fetching of data from the server before rendering the page.
- **File**: Not currently defined but can be implemented if needed.
