import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <h4>Project Developers:</h4>
      <div className='link-container'>
        <a
          href='https://github.com/Matt-Roden'
          className='footer-link'
          target='_blank'
          >Matt Roden</a>
        <a
          href='https://github.com/nataliemcintyre2021'
          className='footer-link'
          target='_blank'
          >Natalie McIntyre</a>
      </div>

    </footer>
  )
}

export default Footer
