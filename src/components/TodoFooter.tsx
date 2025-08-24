import React from 'react';
import { FilterType, TodoStats } from '../types/todo';

interface TodoFooterProps {
  stats: TodoStats;
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
}

const TodoFooter: React.FC<TodoFooterProps> = ({
  stats,
  currentFilter,
  onFilterChange,
  onClearCompleted
}) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <footer className="todo-footer">
      <div className="todo-count">
        <span className="todo-count-number">{stats.active}</span>
        <span className="todo-count-text">
          {stats.active === 1 ? ' item left' : ' items left'}
        </span>
      </div>
      
      <div className="todo-filters">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            className={`filter-button ${currentFilter === key ? 'active' : ''}`}
            onClick={() => onFilterChange(key)}
          >
            {label}
            {key === 'active' && stats.active > 0 && (
              <span className="filter-badge">{stats.active}</span>
            )}
            {key === 'completed' && stats.completed > 0 && (
              <span className="filter-badge">{stats.completed}</span>
            )}
          </button>
        ))}
      </div>
      
      {stats.completed > 0 && (
        <button
          className="clear-completed-button"
          onClick={onClearCompleted}
        >
          Clear completed ({stats.completed})
        </button>
      )}
    </footer>
  );
};

export default TodoFooter;