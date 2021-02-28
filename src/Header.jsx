function Header() {
   return (
      <header>
         <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="#">Test</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item ">
                     <a className="nav-link" href="#">Feed <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item ">
                     <a className="nav-link" href="#">Trending</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">News</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Live</a>
                  </li>
               </ul>
               <form className="d-flex">
                  <input className="form-control me-2 mx-2" type="search" placeholder="Search for user or post" aria-label="Search"/>
                     <button className="btn btn-outline-success ml-1" type="submit">Find</button>
               </form>
               <div className="bage">
                  <h2 className="h2">Bage</h2>
               </div>
            </div>
         </nav>
      </header>
   );
}

export default Header;