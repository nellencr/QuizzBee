import React, {useState}  from 'react';
import style from './Results.module.css';
const Questions = ({question, options, selected }) =>{
  const [answer, setAnswer] = useState(options);
 
    return (
      <div className = "questionBox">
      <div className={style.question}> {question} </div>
        {answer.map((text, index) => (
           <button key={index} className={style.answerbtn }
           onClick={() =>{
             setAnswer([text]);
             selected(text);
           }}
           >
            {text} </button>
        ))}
      </div>
  );
};


export default Questions;
