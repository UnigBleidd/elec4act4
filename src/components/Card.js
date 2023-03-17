import React from "react";

const Card = ({ title, body }) => {
  const handleClick = () => {
    alert(`You clicked "${title}"`);
  };

  return (

    
  <div class="w-60 p-2 bg-zinc-400 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
    <img class="" src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt=""></img>
    <div class="p-2">
    <h2 class="font-bold text-lg mb-2">{title}</h2>
    <p class="text-sm ttext-blue-200">{body}</p>
    </div>

    <div class="m-2">
    <a role='button' class="text-white bg-stone-900 px-3 py-1 rounded-md hover:bg-sky-600" onClick={handleClick}>Button</a>
    </div>
  </div>


    


  );
};

export default Card;
