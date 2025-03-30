# Notes++ Frontend

The frontend service for Notes++, a modern note-taking application. Built with React, Vite, and Tailwind CSS.

## Features

- Modern and responsive UI
- Real-time note management
- Dark theme with custom color palette
- Optimized performance with Vite
- Type-safe development with ESLint
- Beautiful animations and transitions

## Tech Stack

- React 19 - Modern UI library
- Vite - Next-generation build tool
- Tailwind CSS - Utility-first CSS framework
- Axios - HTTP client for API communication
- ESLint - Code linting and formatting

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The development server will start at `http://localhost:5173`

## React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project Structure

```
frontend/
├── src/              # Source code
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── public/          # Static assets
├── dist/           # Production build output
└── config files    # Various configuration files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The frontend communicates with the backend API at `http://localhost:8000`:

```javascript
const API_URL = "http://127.0.0.1:8000/notes/";
```

### API Endpoints Used

- `GET /notes/` - Fetch all notes
- `POST /notes/` - Create new note
- `PUT /notes/{id}` - Update note
- `DELETE /notes/{id}` - Delete note

## Styling

The application uses Tailwind CSS with a custom dark theme:

```javascript
colors: {
  dark: {
    background: '#0D1117',  // GitHub Dark Background
    card: '#161B22',       // Card Background
    text: '#C9D1D9',       // Light Gray Text
    accent: '#58A6FF',     // Soft Blue Accent
    border: '#30363D',     // Border Color
    button: '#238636',     // Green Button
  }
}
```

## Development

- Hot Module Replacement (HMR) enabled
- ESLint for code quality
- PostCSS for CSS processing
- Tailwind CSS for styling
- Error boundary implementation for robust error handling
- Responsive design with mobile-first approach
- Strict mode enabled for better development practices

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

The production build will be available in the `dist` directory.

## Dependencies

Key dependencies include:
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `axios`: ^1.8.4
- `tailwindcss`: ^3.4
- `vite`: ^6.2.0
- `eslint`: ^9.21.0
- `@vitejs/plugin-react`: ^4.3.4

## Contributing

1. Follow the ESLint rules
2. Use the provided Tailwind CSS classes
3. Maintain the dark theme consistency
4. Test all API interactions
5. Write meaningful commit messages
6. Keep components small and focused
7. Follow React best practices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)