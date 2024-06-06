import React, { useContext } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import UserInfoContext from '../../context/UserInfoProvider'

const Header = () => {
  const [userInfo] = useContext(UserInfoContext);
  alert(userInfo.roles.name)
  let isAdmin = false;
  let isManager = false;
  let isUser = false;
  const role = userInfo.roles.name;

  if(role === "ROLE_MANAGER"){
    isManager = true
  }else if(role === "ROLE_ADMIN"){
    isAdmin = true
  }else{
    isUser = true
  }

  
return (
<>
  <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">

    <div className="container-fluid">

      <a className="navbar-brand" href="#">
        <img src="https://img.freepik.com/free-photo/medicine-blue-background-flat-lay_23-2149341573.jpg" height="40" width = "70" alt="" loading="lazy" />
      </a>
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to = "/" className="nav-link active me-4" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item me-4">
            <Link to = '/profile' className="nav-link" href="#">Profile</Link>
          </li>
          <li className="nav-item me-4">
            <Link to = '/settings' className="nav-link" href="#">Settings</Link>
          </li>
          {
            isAdmin && (
              <>
                  <li className="nav-item">
            <Link to = '/admin' className="nav-link" href="#">Admin Dashboard</Link>
          </li>
              </>
            )
          }
          {
            isManager && (
              <>
                  <li className="nav-item">
                      <Link to = '/manager' className="nav-link" href="#">Manager Dashboard</Link>
                  </li>
              </>
            )
          }
        
         
        </ul>

        <form className="d-flex input-group w-auto">
          <input type="search" className="form-control" placeholder="Search here" aria-label="Search" />
          <button className="btn btn-outline-primary" type="button" data-mdb-ripple-color="dark"
            >
            Search
          </button>
        </form>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button"
              data-mdb-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-bell"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end notifications-list p-1" aria-labelledby="navbarDropdown">
              <li>
                <div className="row">
                  <div className="col-md">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" height='63' width='auto'
                      className="d-block" alt="..." />
                  </div>
                  <div className="col-md">
                    <p className="h6 mb-0">New</p>
                    <p className="h6 mb-1">Movie title</p>
                    <span className="small">Today</span>
                  </div>Name
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="row">
                  <div className="col-md">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(10).jpg" height='63' width='auto'
                      className="d-block" alt="..." />
                  </div>
                  <div className="col-md">
                    <p className="h6 mb-0">New</p>
                    <p className="h6 mb-1">Movie title</p>
                    <span className="small">Today</span>
                  </div>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="row">
                  <div className="col-md">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(11).jpg" height='63' width='auto'
                      className="d-block" alt="..." />
                  </div>
                  <div className="col-md">
                    <p className="h6 mb-0">New</p>
                    <p className="h6 mb-1">Movie title</p>
                    <span className="small">Today</span>
                  </div>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="row">
                  <div className="col-md">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg" height='63' width='auto'
                      className="d-block" alt="..." />
                  </div>
                  <div className="col-md">
                    <p className="h6 mb-0">New</p>
                    <p className="h6 mb-1">Movie title</p>
                    <span className="small">Today</span>
                  </div>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="row">
                  <div className="col-md">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(5).jpg" height='63' width='auto'
                      className="d-block" alt="..." />
                  </div>
                  <div className="col-md">
                    <p className="h6 mb-0">New</p>
                    <p className="h6 mb-1">Movie title</p>
                    <span className="small">Today</span>
                  </div>
                </div>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="row">
                  <div className="col-md">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" height='63' width='auto'
                      className="d-block" alt="..." />
                  </div>
                  <div className="col-md">
                    <p className="h6 mb-0">New</p>
                    <p className="h6 mb-1">Movie title</p>
                    <span className="small">Today</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
              data-mdb-toggle="dropdown" aria-expanded="false">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg" className="rounded-circle img-fluid"
                height='25' width='25' />
            </a>
            <ul className="dropdown-menu dropdown-menu-end p-1" aria-labelledby="navbarDropdown">
              <li className="my-2 d-flex align-items-center"><img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                  className="rounded-circle img-fluid me-1" height='25' width='25' /><span> User 1</span></li>
              <li className="my-2 d-flex align-items-center"><img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
                  className="rounded-circle img-fluid me-1" height='25' width='25' /><span> User 2</span></li>
              <li className="my-2 d-flex align-items-center"><img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="rounded-circle img-fluid me-1"
                  height='25' width='25' /><span> User 3</span></li>
              <li><a className="dropdown-item" href="#">Manage Profiles</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Your Account</a></li>
              <li><a className="dropdown-item" href="#">Help</a></li>
              <li><a className="dropdown-item" href="#">Log Out</a></li>
            </ul>
          </li>
        </ul>

      </div>

    </div>

  </nav>

</>
)
}

export default Header