# Notes++ Backend

The backend service for Notes++, a modern note-taking application. Built with FastAPI and SQLModel.

## Features

- RESTful API endpoints for CRUD operations on notes
- SQLite database with SQLModel ORM
- CORS middleware for frontend communication
- Automatic API documentation with Swagger UI
- Input validation with Pydantic models

## Tech Stack

- FastAPI - Modern web framework for building APIs
- SQLModel - SQL database library for Python, based on SQLAlchemy and Pydantic
- SQLite - Lightweight database for data persistence
- Uvicorn - ASGI server for running FastAPI applications

## Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

## Installation

1. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the server:
   ```bash
   uvicorn main:app --reload
   ```

The server will start at `http://localhost:8000`

## API Documentation

Once the server is running, you can access:
- Interactive API documentation (Swagger UI): `http://localhost:8000/docs`
- Alternative API documentation (ReDoc): `http://localhost:8000/redoc`

## API Endpoints

### Notes

- `GET /notes/`
  - Get all notes
  - Returns: List of notes

- `POST /notes/`
  - Create a new note
  - Request body:
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```
  - Returns: Created note

- `PUT /notes/{note_id}`
  - Update an existing note
  - Request body:
    ```json
    {
      "title": "string",
      "content": "string"
    }
    ```
  - Returns: Updated note

- `DELETE /notes/{note_id}`
  - Delete a note
  - Returns: Success message

### Root

- `GET /`
  - Welcome message
  - Returns: `{"message": "Welcome to Notes!"}`

## Database

The application uses SQLite as its database, with the database file located at `notes.db`. The database schema is automatically created when the application starts.

## CORS Configuration

The backend includes CORS middleware configured to allow requests from the frontend:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
```

## Dependencies

Key dependencies include:
- `fastapi`: ^0.115.12
- `sqlmodel`: ^0.0.24
- `uvicorn`: ^0.34.0
- `pydantic`: ^2.11.1

## Error Handling

The API implements comprehensive error handling:
- 404 Not Found for missing resources
- 400 Bad Request for invalid input
- 500 Internal Server Error with detailed error messages
- Custom error responses for specific scenarios

## Security

- Input validation using Pydantic models
- CORS configuration for secure frontend communication
- SQL injection prevention through SQLModel
- Request rate limiting (TODO)

## Development

- The application uses hot-reload for development
- Database changes are automatically reflected
- API documentation is automatically generated from the code
- Proper error logging and handling
- Type hints for better code quality
- Database migrations support
- Environment variable configuration support