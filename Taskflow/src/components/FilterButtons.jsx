import '../styles/Dashboard.css';

function FilterButtons({ activeFilter, onFilterChange }) {
  const filters = ['All', 'Pending', 'Completed'];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          className={activeFilter === filter ? 'filter-btn active' : 'filter-btn'}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;