import React from 'react'

const styled = {
  contain: {
    // backgroundColor: 'green',
    // height: '45vh',
    // width: '100vw',
    // overflow: 'hidden'
    // display: 'flex',
    // justifyContent:'center',
    // alineItem:'center'
    width:'auto'
    

  },
  HeadName: {
    fontFamily: "'Shantell Sans', cursive",
    
    fontSize: '33px',
    width: '100vw',
    height: '10vh',
    // backgroundColor:'red'
  }
}
function Category() {
  return (
    <>
      <div className='contain  d-flex justify-content-center w-100  ' style={styled.HeadName} >
        <p className='Head-Name ' >Category</p>
      </div>
      <div className='container C-section ' style={styled.contain} >

        <div className="card m-4" style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/7" className="card-img-top" alt="..." />
          <div className="card-body overflow-hidden">
            <h5 className="card-title overflow-hidden ">item-1</h5>

          </div>
        </div>
        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/7" className="card-img-top" alt="..." />
          <div className="card-body overflow-hidden">
            <h5 className="card-title overflow-hidden ">item-2</h5>

          </div>
        </div>
        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/7" className="card-img-top" alt="..." />
          <div className="card-body overflow-hidden">
            <h5 className="card-title overflow-hidden ">item-3</h5>

          </div>
        </div>
        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/7" className="card-img-top" alt="..." />
          <div className="card-body overflow-hidden">
            <h5 className="card-title overflow-hidden ">item-4</h5>

          </div>
        </div>
        <div className="card m-3" style={{ width: "18rem" }}>
          <img src="https://source.unsplash.com/random/7" className="card-img-top" alt="..." />
          <div className="card-body overflow-hidden">
            <h5 className="card-title overflow-hidden ">item-5</h5>

          </div>
        </div>
      </div>
    </>
  )
}

export default Category
