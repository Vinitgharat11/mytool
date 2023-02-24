import React from 'react'

const theme = {
    box: {
        // backgroundColor: 'red',
        height: '90vh',
        color: 'red'

    }
}
const submit = () => {
    console.log('submited !')
}
function ContactForm() {
    return (
        <div className='container d-flex justify-content-center flex-column p-5 'style={theme.box}>
         
            <div className="container pb-5 mx-3">
                <label htmlFor="validationCustomUsername" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address" />
            </div>
            
            <div className="container pb-5 mx-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className='container d-flex justify-content-center '>
                <button class="btn btn-primary w-25 mx-5 " onClick={submit} type="submit">Button</button>
            </div>
         
            
        </div>
    )
}

export default ContactForm
