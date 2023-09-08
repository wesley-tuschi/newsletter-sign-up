import React, { useState } from 'react';
import iconList from './assets/images/icon-list.svg';
import illustration from './assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg';
import iconSucess from './assets/images/icon-success.svg';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (emailValue === "") {
      setIsValid(false);
      return;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(regex.test(emailValue));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setIsValid(false);
      return;
    }
    if (isValid) {
      setIsSubmitted(true);
    }
  };
  const backToForm = () => {
    setIsSubmitted(false);
    setEmail("");
    setIsValid(true);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 main">
      {isSubmitted ? (
        <div className="col-6 container message bg-white">
          <img src={iconSucess} alt="iconsuccess" />
          <h1><b>  Thanks for subscribing!</b></h1>
          <p>A confirmation email has been sent to <b>ash@loremcompany.com. </b>
            Please open it and click the button inside to confirm your subscription.</p>
          <button className='dismiss' onClick={backToForm}><b>Dismiss message</b></button>
        </div>
      ) : (
        <div className="row w-100 bg-white container-md">
          <><div className='mobile-image col-12 d-md-none text-center'>
            <img src={illustrationMobile} alt="illustration" className='w-100 img-fluid' />
          </div><div className="col-md-6">
              <h1><b>Stay updated!</b></h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <p><img src={iconList} alt="iconlist" className='iconlist' /> Product discovery and building what <span className='span1'>matters</span></p>
              <p><img src={iconList} alt="iconlist" className='iconlist' /> Measuring to ensure updates are a <span className='span2'>success</span></p>
              <p><img src={iconList} alt="iconlist" className='iconlist' /> And much more!</p>
              <section>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email"><b>Email address</b></label>
                  {!isValid && <span className='validate'><b>Valid email required</b></span>}
                  <br></br>
                  <input type="email"
                    placeholder="email@company.com"
                    className={`email-input ${!isValid ? 'invalid' : ''}`}
                    value={email}
                    onChange={handleEmailChange} />
                  <button className=''><b>Subscribe to monthly newsletter</b></button>
                </form>
              </section>
            </div><div className="col-md-6 d-none d-md-block">
              <img src={illustration} alt="illustration" className='img-fluid illustration' />
            </div></>
        </div>
      )}
    </div>
  );
}

export default App;
