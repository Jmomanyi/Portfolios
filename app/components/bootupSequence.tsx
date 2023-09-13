import React, { useEffect, useState } from 'react';

const BootUpSequence = () => {
 const [text, setText] = useState('');
 const fullText = 'Boooting up';

 useEffect(() => {
  let i = 0;
  const typing = setInterval(() => {
   if (i < fullText.length) {
    setText((prevText) => prevText + fullText.charAt(i));
    i++;
   } else {
    clearInterval(typing);
   }
  }, 100); // Speed of typing animation
  return () => clearInterval(typing);
 }, []);

 return (
  <pre className="text-green-500 font-mono whitespace-pre-wrap">
   {text}
   <span className="animate-pulse">...</span>
  </pre>
 );
};

export default BootUpSequence;
