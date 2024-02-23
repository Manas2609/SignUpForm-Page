import React, { useState } from "react";

export default function SignUp() {
   const [data, setData] = useState({
      username: "",
      password: "",
      phone: "",
      email: "",
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      const { username } = data;

      console.log("Form Data : ", data);

      alert(`Welcome, ${username}! Thank you for signing up.`);

      setData({
         username: "",
         password: "",
         phone: "",
         email: "",
      });
   };

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setData({
         ...data,
         [name]: value,
      });
   };

   return (
      <div className="main">
         <h1 className="heading">SignUp Form</h1>
         <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
               <label htmlFor="username" className="label">
                  Username:
               </label>
               <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  name="username"
                  className="input-field"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInputChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="pass" className="label">
                  Password:
               </label>
               <input
                  type="password"
                  id="pass"
                  placeholder="Enter Password"
                  name="password"
                  className="input-field"
                  value={data.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
               />
            </div>
            <div className="form-group">
               <label htmlFor="phone" className="label">
                  Phone Number:
               </label>
               <input
                  type="tel"
                  id="phone"
                  placeholder="Enter Phone Number"
                  name="phone"
                  className="input-field"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInputChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="mail" className="label">
                  Email ID:
               </label>
               <input
                  type="email"
                  id="mail"
                  placeholder="Enter Email ID"
                  name="email"
                  className="input-field"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInputChange}
               />
            </div>
            <input type="submit" value="Sign Up" className="submit-btn" />
         </form>
      </div>
   );
}
