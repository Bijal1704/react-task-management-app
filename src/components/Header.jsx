import React from 'react'

function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <span className="brand" href="#">
                Bijal Tasks
            </span>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <span>Task Management App by Bijal</span>
            </div>
          </div>
        </nav>
      </div>
    );
}
  
export default Header;