import React from 'react'


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
function About() {
  return (
    <div className='box ' style={styl.container}>
      <div className="main-box" style={styl.mainbox}>
        <div className="container-left " style={styl.left}>
          <img src="./props/factory (1).png" alt="error401" srcset="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis consequuntur beatae culpa soluta facere cupiditate maiores voluptates nostrum at dolores molestiae asperiores, nobis adipisci maxime debitis vero, ratione accusamus doloribus. Voluptate aspernatur, cum exercitationem pariatur sunt quibusdam doloribus? Laboriosam?</p>
        </div>
        <div className="container-right" style={styl.right} >
       
        
        </div>
      </div>

    </div>
  )
}

export default About
