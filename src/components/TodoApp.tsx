import React, { useState, useEffect } from 'react';
import { Todo, TodoFilter as FilterType } from '../types/todo';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';

const STORAGE_KEY = 'todoapp-todos';

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }));
        setTodos(parsedTodos);
      } catch (error) {
        console.error('Error loading todos from localStorage:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const toggleAllTodos = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(prev =>
      prev.map(todo => ({ ...todo, completed: !allCompleted }))
    );
  };

  const activeTodoCount = todos.filter(todo => !todo.completed).length;
  const completedTodoCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-app">
      <header className="app-header">
        <h1 className="app-title">todos</h1>
      </header>
      
      <main className="app-main">
        <div className="todo-container">
          <AddTodo onAdd={addTodo} />
          
          {todos.length > 0 && (
            <div className="todo-controls">
              <button
                className="toggle-all-btn"
                onClick={toggleAllTodos}
                aria-label={
                  activeTodoCount === 0 ? 'Mark all as incomplete' : 'Mark all as complete'
                }
              >
                {activeTodoCount === 0 ? '↻' : '↓'}
              </button>
            </div>
          )}
          
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
          
          {todos.length > 0 && (
            <TodoFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              activeTodoCount={activeTodoCount}
              completedTodoCount={completedTodoCount}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Double-click to edit a todo</p>
        <p>Created with React & TypeScript</p>
      </footer>
    </div>
  );
};