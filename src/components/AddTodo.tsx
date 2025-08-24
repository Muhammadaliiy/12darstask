import React, { useState } from 'react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      onAdd(trimmedText);
      setText('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="add-todo-input"
          maxLength={200}
        />
        <button
          type="submit"
          className="add-todo-btn"
          disabled={!text.trim()}
          aria-label="Add new todo"
        >
          <span className="plus-icon">+</span>
        </button>
      </div>
    </form>
  );
};