import React from 'react';



const Button = ({ text }) => {
  return (
    <button className=" bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};

export default Button;
