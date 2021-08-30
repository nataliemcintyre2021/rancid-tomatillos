import React from 'react'
import './Error.css'

function Error(props) {
  console.log(props.errorMessage)
  return (
    <section>
      <h1 className='error-message'>Oops! Looks like something went wrong with the server. Please refresh the page or try again later</h1>
    </section>
  )
}

export default Error;
