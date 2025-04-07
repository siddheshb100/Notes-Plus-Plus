# Notes++

A modern, full-stack note-taking application built with FastAPI and React. This application allows users to create, read, update, and delete notes with a beautiful and responsive user interface.

## Features

- Create, read, update, and delete notes
- Modern and responsive UI built with React and Tailwind CSS
- RESTful API backend with FastAPI
- SQLite database for data persistence
- Real-time updates and timestamp tracking
- Cross-origin resource sharing enabled
- Dynamic clock component showing current time
- Beautiful gradient backgrounds with smooth animations
- Glassmorphism design elements with backdrop blur
- Responsive card layout with advanced hover effects
- Smart form handling with validation
- Automatic scrolling to edit form when editing notes
- Custom monospace font (Cascadia Code) integration
- Mobile-optimized responsive design
- Error boundary implementation
- Comprehensive API documentation

## Tech Stack

### Backend
- FastAPI (Python web framework)
- SQLModel (SQL database ORM)
- SQLite (Database)
- Uvicorn (ASGI server)

### Frontend
- React 19 with Fast Refresh
- Vite (Next-generation build tool)
- Tailwind CSS with custom theme
- Axios for API communication
- ESLint with React plugin support
- PostCSS with autoprefixer

## Prerequisites

- Python 3.8 or higher
- Node.js 18 or higher
- npm or yarn package manager
- Git (for version control)

## Installation

### Clone the Repository

```bash
git clone https://github.com/siddheshb100/Notes-Plus-Plus.git
cd Notes-Plus-Plus
```

For detailed setup instructions:
- [Backend Setup Guide](./Backend/README.md)
- [Frontend Setup Guide](./Frontend/README.md)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv        # Or python3 -m venv venv
   source venv/bin/activate   # On Windows: .\venv\Scripts\activate
   ```

3. Install dependencies:
   ##### For Unix-Based Systems:
   ```bash
   pip install -r requirements.txt  # Or if fails use: pip install --break-system-packages -r requirements.txt
   ```
   ##### For Windows Based Systems:
   ```powershell
   pip install -r requirements-win.txt  # Or if fails use: .\venv\Scripts\python.exe -m pip install --break-system-packages -r requirements-win.txt
   ```
   
4. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

The backend server will start at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
The frontend development server will start at `http://localhost:5173`

4. Access the frontend of the application on `http://localhost:5173` in order to use Notes++

## API Endpoints

- `GET /notes/` - Get all notes
- `POST /notes/` - Create a new note
- `PUT /notes/{note_id}` - Update an existing note
- `DELETE /notes/{note_id}` - Delete a note
- `GET /` - Welcome message

## Project Structure

```
NotesPlusPlus/
├── Backend/
│   ├── main.py            # FastAPI application
│   ├── requirements.txt   # Python dependencies
│   └── notes.db           # SQLite database
└── Frontend/
    ├── src/               # React source code
    │   ├── components/    # React components
    │   │   └── Clock.jsx  # Clock component
    │   ├── App.jsx        # Main application component
    │   └── index.css      # Global styles
    ├── public/            # Static assets
    ├── package.json       # Node.js dependencies
    ├── tailwind.config.js # Tailwind configuration
    ├── postcss.config.js  # PostCSS configuration
    └── vite.config.js     # Vite configuration
```

## Version Information

- Backend:
  - FastAPI: ^0.115.12
  - SQLModel: ^0.0.24
  - Python: ≥3.8

- Frontend:
  - React: ^19.0.0
  - Vite: ^6.2.0
  - Tailwind CSS: ^3.4

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Development

- Backend API documentation is available at `http://localhost:8000/docs`
- Frontend hot-reload is enabled for development
- The application uses CORS middleware to allow frontend-backend communication
- ESLint is configured for code quality
- Both frontend and backend include comprehensive error handling
