import './dropdown.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <IoMdArrowDropdown />
      </div>

      <div className="dropdown-menu">
        <Link to="./Profile" className="dropdown-item">
          Profile
        </Link>
        <Link to="./Settings" className="dropdown-item">
          Settings
        </Link>
        <Link to="./Notifications" className="dropdown-item">
          Notifications
        </Link>
      </div>
    </div>
  );
}

export default Dropdown;
