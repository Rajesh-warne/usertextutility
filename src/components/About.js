import React from 'react';

function About(props) {
  return (
    <div className="container mt-5" style={{color:props.mode==='light'? 'black' :  'white'}}>
      <h1 className="mb-4">About TextUtils</h1>
      <p className="lead">
        TextUtils is a web application designed to manipulate text in various ways. 
        You can use it to count words, and characters, and perform various text transformations 
        like converting to uppercase, lowercase, and more.
      </p>
      <p>
        TextUtils is an easy-to-use tool for anyone who needs to perform quick text manipulations. 
        Whether you are a student, a professional, or just someone who works with text, TextUtils can help you 
        get your tasks done faster and more efficiently.
      </p>
    </div>
  );
}

export default About;
