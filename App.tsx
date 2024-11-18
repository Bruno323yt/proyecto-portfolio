import React from 'react';
import { useState } from 'react';

const Portfolio = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white font-bold mb-4">Bruno Buasso</h1>
      <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mb-4" />
      <div className="flex justify-center mb-4">
        <a href="https://wa.me/3513300269" target="_blank" rel="noreferrer" className="mr-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2048px-WhatsApp.svg.png" alt="Whatsapp" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/bruno323yt/" target="_blank" rel="noreferrer" className="mr-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="mailto:bbuasso2222@gmail.com" target="_blank" rel="noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" alt="Gmail" className="w-8 h-8" />
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2">
          Proyectos de Arduino
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2">
          Proyectos con React
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2">
          Proyectos secundarios
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mb-2">
          Proyectos de Html
        </button>
      </div>
    </div>
  );
};

export default Portfolio;