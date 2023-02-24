import React from 'react'
const styled = {
  theme: {
    backgroundColor: 'black',
    width: '99vw',
    height: '45vh'
  },
img:{
  height:'45vh',
}
}
function Header() {
  return (
    <div className='Container' style={styled.theme}>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner h-25">
          <div className="carousel-item active h-25 W-100">
            <img src="https://source.unsplash.com/random/" className="d-block cover w-100 " style={styled.img} alt="..." />
          </div>
          <div className="carousel-item">
          <img src="https://source.unsplash.com/random/1" className="d-block cover w-100 " style={styled.img} alt="..." />
          </div>
          <div className="carousel-item">
          <img src="https://source.unsplash.com/random/color" className="d-block cover w-100 " style={styled.img} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Header
