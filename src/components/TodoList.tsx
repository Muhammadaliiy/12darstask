import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  onToggleTodo, 
  onDeleteTodo, 
  onEditTodo 
}) => {
  if (todos.length === 0) {
    return (
      <div className="todo-empty">
        <div className="todo-empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
            <path d="M9 11l3 3 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.51 0 2.93.37 4.18 1.03" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3>All caught up!</h3>
        <p>You have no todos. Add one above to get started.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
          onEdit={onEditTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;