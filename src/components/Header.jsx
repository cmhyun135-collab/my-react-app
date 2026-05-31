import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">My React App</div>
      <nav className="nav-links">
        <a href="#">홈</a>
        <a href="#">소개</a>
        <a href="#">연락처</a>
      </nav>
    </header>
  )
}

export default Header
