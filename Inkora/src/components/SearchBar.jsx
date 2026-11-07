import '../styles/SearchBar.css';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon">⌕</span>

      <input
        type="text"
        placeholder="Search your notes..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />

      {searchTerm && (
        <button
          className="search-bar__clear"
          onClick={() => onSearch('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;