import React from 'react'
import ContactForm from './ContactForm'

const styl = {
  container: {
    width: '100vw',
    height: '40rem',
    // backgroundColor: 'red',
    overflow: 'hidden',
  },

  left: {
    // backgroundColor: 'green',
    width: '50vw',
    height: '100vh',
  },
  right: {
    // backgroundColor: 'pink',
    width: '50vw',
    height: '90vh',
  },
  mainbox: {
    display: 'flex',
    justifyContent: 'center'
  }

}


function Contact() {
  return (
    <div className='box ' style={styl.container}>
      <div className="main-box" style={styl.mainbox}>
        <div className="container-left" style={styl.left}>
          {/* this is contact information place  */}
          <img src="./props/symbol-of-peace.png" alt="error401" srcset="" />
        </div>
        <div className="container-right" style={styl.right} >
          {/* this is contact form place */}
          <ContactForm />
        </div>
      </div>

    </div>
  )
}

export default Contact
