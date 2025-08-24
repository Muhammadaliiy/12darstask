import React from 'react';
import { TodoFilter as FilterType } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeTodoCount: number;
  completedTodoCount: number;
  onClearCompleted: () => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
  activeTodoCount,
  completedTodoCount,
  onClearCompleted,
}) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div className="todo-filter">
      <div className="filter-info">
        <span className="todo-count">
          {activeTodoCount} {activeTodoCount === 1 ? 'item' : 'items'} left
        </span>
      </div>
      
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      {completedTodoCount > 0 && (
        <button
          className="clear-completed-btn"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )}
    </div>
  );
};