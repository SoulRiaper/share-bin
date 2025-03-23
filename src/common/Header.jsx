import { useState } from "react"

function Header () {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme((current) => current == 'light' ? 'dark' : 'light');
    if (theme == 'light') {
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('text-white');
    } else {
      document.body.classList.add('bg-dark');
      document.body.classList.add('text-white');
    }
  } 

  return (
    <nav className="bin-header navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#"><i className="bi bi-terminal-plus"></i> Share-bin</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <button className="btn btn-sm btn-outline-success">+bin</button>
          </ul>
          <div className="btn btn-outline-secondary me-1" onClick={toggleTheme}><i className="bi bi-moon-stars"></i></div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header