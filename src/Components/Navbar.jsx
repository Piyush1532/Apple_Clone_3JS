import React from 'react'
import { navLinks } from '../Constant'

const Navbar = () => {
  return (
    <header>
      <nav>
<img src="./logo.svg" alt="logo"  />
<ul>
  {navLinks.map((item, index) => (
    <li key={index}>
      <a href="#">{item.label}</a>
    </li>
  ))}
</ul>
<div className="flex-center gap-3">
  <button>
    <img src="./search.svg" alt="" />
  </button>
  <button>
    <img src="./cart.svg" alt="" />
  </button>
</div>
      </nav>
    </header>
  )
}

export default Navbar