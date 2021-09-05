import React, { useEffect, useState } from "react";
import './Header.css'

function Header() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          handleShow(true)
        } else {
          handleShow(false)
        }
      })
      return () => {
        window.removeEventListener('scroll')
      }
    }, [])

    return (
      <header className={`header ${show && 'header_red'}`}>
        <nav>Nav goes here</nav>
      </header>
    )
}
export default Header


// function Header() {
//   return (
//
//   )
// }
