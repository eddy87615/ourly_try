import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        if (index < text.length) {
          index++;
          return text.slice(0, index);
        } else {
          clearInterval(interval);
          setTypingCompleted(true);
          return prevText;
        }
      });
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return <span>{typingCompleted ? text : currentText}</span>;
};

export default Typewriter;
