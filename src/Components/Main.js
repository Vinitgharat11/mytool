import React from 'react'
import './Main.css';


const styled = {
  contain: {
    // backgroundColor: 'green',
    // height: '100vh',
    width: 'auto',
    // overflow: 'hidden'
    // display: 'flex',
    // flexDirection: 'row',

  }
  }
 
function Main() {
    return (
      <div className='container Main-Container' style={styled.contain }>
        <div className="card  m-4 sm  " style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/7" className="card-img-top " alt="..." />

        </div>
        <div className="card m-4" style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/10" className="card-img-top" alt="..." />

        </div>
        <div className="card m-4" style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/11" className="card-img-top" alt="..." />

        </div>
        <div className="card m-4" style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/9" className="card-img-top" alt="..." />

        </div>
        <div className="card m-4" style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/12" className="card-img-top" alt="..." />

        </div>

      </div>
    )
}

export default Main
