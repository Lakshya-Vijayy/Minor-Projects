
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <h1>Inkora<span>.</span></h1>
          <p>Your thoughts, beautifully organized.</p>
        </div>

        <div className="header__badge">
          <span className="header__badge-dot"></span>
          Your personal space
        </div>
      </div>
    </header>
  );
}

export default Header;
