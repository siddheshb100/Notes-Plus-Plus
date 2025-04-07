# Notes++ Backend

FastAPI-powered backend service for Notes++, featuring SQLModel ORM integration and SQLite database.

## Features

- RESTful API with FastAPI framework
- SQLModel ORM for database operations
- Automatic API documentation with Swagger UI
- SQLite database with automatic migrations
- CORS middleware for frontend integration
- Real-time timestamp handling
- Input validation with Pydantic models
- Comprehensive error handling
- Hot-reload development server

## Tech Stack

- FastAPI: ^0.115.12
- SQLModel: ^0.0.24
- Python: ≥3.8
- Uvicorn: ^0.34.0
- SQLite3

## API Endpoints

### Notes
- `GET /notes/` - Retrieve all notes
  - Response: `List[Note]`

- `POST /notes/` - Create new note
  - Request Body: `Note` (title, content)
  - Response: Created `Note`

- `PUT /notes/{note_id}` - Update note
  - Request Body: `Note` (title, content)
  - Response: Updated `Note`

- `DELETE /notes/{note_id}` - Delete note
  - Response: Success message

### Root
- `GET /` - Welcome endpoint
  - Response: Welcome message

## Data Model

```python
class Note(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    content: str
    created_at: str = Field(default_factory=lambda: datetime.now().isoformat())
```

## Development Setup

1. Create virtual environment:
   ```bash
   python -m venv venv        # Or python3 -m venv venv
   source venv/bin/activate   # On Windows: .\venv\Scripts\activate
   ```

2. Install dependencies:
    ##### For Unix-Based Systems:
   ```bash
   pip install -r requirements.txt  # Or if fails use: pip install --break-system-packages -r requirements.txt
   ```
   ##### For Windows Based Systems:
   ```powershell
   pip install -r requirements-win.txt  # Or if fails use: .\venv\Scripts\python.exe -m pip install --break-system-packages -r requirements-win.txt
   ```

3. Environment Setup:
   - No additional environment variables required
   - Database is automatically created on first run
   - CORS is pre-configured for frontend access

4. Start development server:
   ```bash
   uvicorn main:app --reload
   ```

## API Documentation

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Error Handling

- 404: Resource not found
- 400: Bad request / Invalid input
- 500: Internal server error

## Security Features

- Input validation via Pydantic
- CORS configuration
- SQL injection prevention
- Database connection management

## Database

- SQLite database (`notes.db`)
- Automatic table creation
- Transaction support
- Connection pooling

## Database Management

- Location: `./notes.db`
- Auto-creation: Tables are created automatically on startup
- Migrations: Handled automatically by SQLModel
- Backup: Recommended to periodically backup the database file
- Development: SQLite Browser recommended for direct DB access

## Performance Considerations

- Connection pooling enabled
- Automatic index creation
- Efficient query optimization
- Transaction management for data integrity