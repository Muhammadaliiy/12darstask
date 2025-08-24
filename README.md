# Todo App - TypeScript & React

A modern, feature-rich Todo application built with TypeScript and React, inspired by TodoMVC design patterns.

## Features

### Core Functionality
- ✅ **Add Todos**: Create new todo items with ease
- ✅ **Mark Complete**: Toggle completion status with visual feedback
- ✅ **Edit Todos**: Double-click to edit todo text inline
- ✅ **Delete Todos**: Remove unwanted todos
- ✅ **Filter Views**: View all, active, or completed todos
- ✅ **Clear Completed**: Remove all completed todos at once
- ✅ **Toggle All**: Mark all todos as complete/incomplete
- ✅ **Persistent Storage**: Todos are saved to localStorage

### User Experience
- 🎨 **Modern UI**: Clean, responsive design with smooth animations
- ♿ **Accessibility**: Full keyboard navigation and screen reader support
- 📱 **Mobile Friendly**: Responsive design works on all screen sizes
- ⚡ **Performance**: Optimized React components with TypeScript

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Pure CSS with modern features
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: Browser localStorage API

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/           # React components
│   ├── TodoApp.tsx      # Main application component
│   ├── TodoItem.tsx     # Individual todo item
│   ├── TodoList.tsx     # List of todos
│   ├── AddTodo.tsx      # Add new todo form
│   ├── TodoFilter.tsx   # Filter and actions bar
│   └── index.ts         # Component exports
├── types/               # TypeScript type definitions
│   └── todo.ts          # Todo-related types
├── styles/              # CSS stylesheets
│   └── TodoApp.css      # Main application styles
├── App.tsx              # Root application component
└── main.tsx             # Application entry point
```

## Key Features Explained

### Todo Management
- **Add**: Type in the input field and press Enter or click the plus button
- **Edit**: Double-click any todo text to edit inline
- **Complete**: Click the circle icon to mark as complete/incomplete
- **Delete**: Click the trash icon to remove a todo

### Filtering
- **All**: Shows all todos regardless of status
- **Active**: Shows only incomplete todos
- **Completed**: Shows only completed todos

### Bulk Actions
- **Toggle All**: Click the down arrow to mark all todos as complete/incomplete
- **Clear Completed**: Remove all completed todos at once

### Keyboard Shortcuts
- **Enter**: Save when editing a todo
- **Escape**: Cancel editing and revert changes
- **Tab**: Navigate between interactive elements

## Browser Support

- Modern Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires ES2020+ support

## Performance Optimizations

- Efficient re-rendering with React keys
- Local state management (no external dependencies)
- CSS animations with GPU acceleration
- Debounced localStorage updates

## Accessibility Features

- Full keyboard navigation
- ARIA labels and roles
- High contrast mode support
- Screen reader friendly
- Focus management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by [TodoMVC](http://todomvc.com/) project
- Built with modern React and TypeScript best practices
- Designed with accessibility and user experience in mind