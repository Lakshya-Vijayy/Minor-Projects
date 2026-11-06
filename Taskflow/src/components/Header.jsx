import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">TaskFlow</h1>

        <p className="header__tagline">
          Make today productive
        </p>
      </div>
    </header>
  );
}

export default Header;