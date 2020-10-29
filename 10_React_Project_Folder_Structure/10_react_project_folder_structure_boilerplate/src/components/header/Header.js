import React, {useState} from 'react'

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <nav>
            <div className="logo">FemiTosin</div>
            <ul  className="nav-links" style={{transform: open ? "translatex(0px)" : "translateX(-500px)"}}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <i onClick={()=> setOpen(!open)} className="fas fa-bars burger"></i>
        </nav>
        
      </div>
  )
}

export default Header
