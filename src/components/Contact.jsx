

// src/components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify'
import url_email_api from './helper';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState("")

  console.log("name", name, email, message)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length <= 3) {
      setErrors({ message: "User Name must be grater than three" })
      return

    }
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      setErrors({ message: "Email is not correct" })
      return
    }
    if (message.length <= 10) {
      setErrors({ message: "Message Minimum Ten characters," })
      return
    }
    let seckey = parseInt( prompt("Enter this Key 12345 to send message"))
    console.log(seckey)
    if(seckey!==12345){
     
      alert("Wrong Key Try again")
      return

    }



    // alert(`Click Ok to send The message  from ${name}, ${email},${message}`);
    const formData = { name, email, message }
    console.log("Form Data", formData)
    const response = await fetch(`${url_email_api}/send-email`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }


    })
    const data = await response.json();
    console.log(data);
    toast.success('🤓 Successfully Submit!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",


    });

    setName("")
    setEmail("")
    setMessage("")

    setTimeout(() => {
      setErrors({})

    }, 1000);

  };

  return (
    <div className="div">


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="contact">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}

            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <textarea type="textarea"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}

            />
            <div className="error">
              {errors && <p>{errors.message}</p>}
            </div>


            <button type="submit" className='form-btn'>Send Message</button>
          </form>
        </div>

      </motion.div>
     
      <ToastContainer>

      </ToastContainer>

    </div>
  );
};

export default Contact;
