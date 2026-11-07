import '../styles/CategoryFilter.css';

function CategoryFilter({ activeCategory, onCategoryChange }) {
  const categories = ['All', 'Personal', 'Study', 'Work', 'Ideas'];

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-filter__button ${
            activeCategory === category ? 'active' : ''
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;