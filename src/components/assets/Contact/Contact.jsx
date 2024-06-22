import { useState } from "react";
import "./Contact.css"; 

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <button onClick={handleButtonClick} className="contact-button">
        Contact
        <div className="icon-button">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>

      {showAlert && (
        <div className="overlay">
          <div className="login-box">
            <span className="font-bold">Just Say Hii ,I catch you.</span>
            <button className="close-button text-5xl" onClick={closeAlert}>
              &times;
            </button>
            <form action="https://formspree.io/f/moqgrrbk" method="POST">
              <div className="user-box">
                <input
                  type="email"
                  className="font-bold"
                  name="email"
                  required
                />
                <label className="font-[400]">Email</label>
              </div>
              <div className="user-box">
                <textarea name="message" required></textarea>
                <label className="font-[400]">Message</label>
              </div>
              <center>
                <button type="submit" className="send-button font-[400]">
                  SEND
                  <span></span>
                </button>
              </center>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
