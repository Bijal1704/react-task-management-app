import React from 'react'

function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
                Bijal Tasks
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="#">Task Management App by Bijal Infotech</a>
            </div>
          </div>
        </nav>
      </div>
    );
}
  
export default Header;