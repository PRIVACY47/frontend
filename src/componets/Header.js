
import {Outlet , Link } from 'react-router-dom'
export const Header = (props) => {
    return (

        <div>
        <div
          className="bg-style object-fit-scale"
          style={{ backgroundImage: "url('/assets/images/bg2.jpg')", height: "830px" }}
        >
          <nav className="navbar navbar-expand-lg  pt-2 mb-5">
            <div className="container-fluid mb-5">
              <a className="navbar-brand" href="#">
                <img
                  src="./assets/images/logo.png"
                  alt="Logo"
                  width="210"
                  height="100"
                  className="d-inline-block align-text-top"
                ></img>
              </a>
              <button
                className="navbar-toggler  border-light-subtle  btn btn-primary "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  className="navbar-toggler-icon "
                  style={{ border: "white" }}
                ></span>
              </button>
              <div
                className="collapse navbar-collapse nav-wrap"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item p-3">
                    <Link className="nav-link active  fs-6 text-white me-3" aria-current="page" to='/'> Home</Link>
                   
                  </li>
                  <li className="nav-item p-3">
                  
                    <Link className="nav-link active  fs-6 text-white me-3" aria-current="page" to='/about'> About</Link>

                  </li>
                  <li className="nav-item p-3">
                  <Link className="nav-link active  fs-6 text-white me-3" aria-current="page" to='/events'> Events</Link>
                    
                  </li>
                  <li className="nav-item p-3">
                  <Link className="nav-link active  fs-6 text-white me-3" aria-current="page" to='/teams'> Teams</Link>
                  
                  </li>
                  <li className="nav-item p-3">
                  <Link className="nav-link active  fs-6 text-white me-3" aria-current="page" to='/startups'> startups</Link>
                    
                  </li>
                  <li className="nav-item p-3">
                  <Link className="nav-link active  fs-6 text-white me-3" aria-current="page" to='/login'> Login</Link>
                   
                  </li>
                </ul>
              </div>
            </div>
            <Outlet />
          </nav>

          <div className="pb-5">
          <p
            className="fw-semibold text-white "
            style={{ fontSize: "6vw", textAlign: "center" }}
          >
            The Entrepreneurship Cell
          </p>
          <p style={{ textAlign: "center",color:'white' }}>KITS Guntur</p>
          <p style={{ textAlign: "center",color:'white' }}>You Dream, We Promote</p>
        </div>
        </div>
  
        
      </div>
    );
}