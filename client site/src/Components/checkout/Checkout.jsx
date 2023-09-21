import React from 'react'
import './checkout.css'

const Checkout = () => {
  return (
    <div>
      <form className='frm' action="">

       <div className='cnt'>
       <div>
            <div className='dvs'>
                <label htmlFor="full-name">Your Full Name:</label><br />
                <input type="text" placeholder='write your full name' id='full-name'/>
            </div>

                <div className='dvs'>
                <label htmlFor="country">Your Country Name:</label><br />
                <input type="text" placeholder='write your country name' id='country'/>
                </div>

                <div className='dvs'>
                <label htmlFor="email">Your Email:</label><br />
                <input type="email" placeholder='write your email' id='email'/>
                </div>

                <div className='dvs'>
                <label htmlFor="phone">Your Phone:</label><br />
                <input type="text" placeholder='write your phone' id='phone'/>
                </div>

                <div className='dvs'>
                <label htmlFor="passport-id">Your Passport ID:</label><br />
                <input type="text" placeholder='write passport id' id='passport-id'/>
                </div>

            <div className='dvs'>
                <label htmlFor="nid">Your NID Number:</label><br />
                <input type="text" placeholder='write your nid' id='nid'/>
            </div>
       </div>

       {/* payment */}
       <div>
        <h2>Before submitting the form please make sure you have paid in the given bKash number::</h2>
        <h1>bKash Number: 01797156450</h1>
            <div className='dvs'>
                <label htmlFor="nid">Enter Amount You Have Pay:</label><br />
                <input type="text" placeholder='enter amount' id='nid'/>
            </div>

            <div className='dvs'>
                <label htmlFor="nid">Enter bKash Transaction Number</label><br />
                <input type="text" placeholder='ex: AEHDah33xsk' id='nid'/>
            </div>
       </div>
       </div>

        <input className='btn' type="submit" value='Submit'/>
      </form>
    </div>
  )
}

export default Checkout
