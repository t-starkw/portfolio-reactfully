// import React, { useState } from 'react';
// import '../index.css';

// function Form() {
//     // Here we set two state variables for firstName and lastName using `useState`
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [message, setMessage] = useState('');

//     const handleInputChange = (e) => {
//         // Getting the value and name of the input which triggered the change
//         const { name, value } = e.target;
//         // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
//         return name === 'firstName' ? setFirstName(value) : setLastName(value), 'message' ? setMessage(value) : setMessage(value);
//     };

//     const handleFormSubmit = (e) => {
//         // Preventing the default behavior of the form submit (which is to refresh the page)
//         e.preventDefault();

//         // Alert the user their first and last name, clear the inputs
//         alert(`I look forward to chatting with you, ${firstName} ${lastName}!`);
//         setFirstName('');
//         setLastName('');
//         setMessage('')
//     };

//     return (
//         <div>
//             <form className="form">
//                 <input
//                     value={firstName}
//                     name="firstName"
//                     onChange={handleInputChange}
//                     type="text"
//                     placeholder="First Name"
//                 />
//                 <input
//                     value={lastName}
//                     name="lastName"
//                     onChange={handleInputChange}
//                     type="text"
//                     placeholder="Last Name"
//                 />
//                 <input
//                     value={message}
//                     name="message"
//                     onChange={handleInputChange}
//                     type="text"
//                     placeholder="Your Message"
//                 />
//                 <button type="button" onClick={handleFormSubmit}>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Form;
