import React, { useState, useEffect } from 'react';
import { Todo, FilterType } from './types/todo';
import { useTodos } from './hooks/useTodos';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import './App.css';

function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    getStats
  } = useTodos();

  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const stats = getStats();

  return (
    <div className="app">
      <div className="todo-container">
        <TodoHeader />
        <div className="todo-main">
          <TodoInput onAddTodo={addTodo} />
          <TodoList
            todos={filteredTodos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
          />
        </div>
        {todos.length > 0 && (
          <TodoFooter
            stats={stats}
            currentFilter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
          />
        )}
      </div>
    </div>
  );
}

export default App;