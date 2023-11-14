import { useState } from 'react'
import './App.css'

function App() {
   const [showResultBox, setShowResultBox] = useState(true)
   const [score, setScore] = useState(0)
   const [currentQuestion, setCurrentQuestion] = useState(0)

   const questions = [
    {
      question: "Which planet is closet to the Sun?",
      choices : [
        {id : 4, text: "Mercury", isCorrect: true},
        {id : 1, text: "Earth", isCorrect: false},
        {id : 2, text: "Uranes", isCorrect: false},
        {id : 3, text: "Venus", isCorrect: false},
      ]
    },
    {
      question: "Which drink is ameican's signature?",
      choices : [
        {id : 1, text: "StarBuck", isCorrect: false},
        {id : 3, text: "Whiskey", isCorrect: false},
        {id : 4, text: "Beer", isCorrect: false},
        {id : 2, text: "Coca-cola", isCorrect: true},
      ]
    },
    {
      question: "Which ocean has greatest area in the world?",
      choices : [
        {id : 1, text: "Atlantic", isCorrect: false},
        {id : 2, text: "Pacific", isCorrect: true},
        {id : 3, text: "Arctic", isCorrect: false},
        {id : 4, text: "Indian", isCorrect: false}
      ]
    },
    {
      question: "How many Sub-particle are there in atom?",
      choices : [
        {id : 1, text: "one", isCorrect: false},
        {id : 2, text: "two", isCorrect: false},
        {id : 3, text: "three", isCorrect: true},
        {id : 4, text: "four", isCorrect: false}
      ]
    },
    {
      question: "Who wrote pride and prejudice",
      choices : [
        {id : 1, text: "Charles Dickens", isCorrect: false},
        {id : 2, text: "Jane Austin", isCorrect: true},
        {id : 3, text: "Shakespeare", isCorrect: false},
        {id : 4, text: "Hemingway", isCorrect: false}
      ]
    },
    {
      question: "Energy can neither be created nor destoryed",
      choices : [
        {id : 1, text: "Newton Second Law", isCorrect: true},
        {id : 2, text: "Conservation of Energy", isCorrect: false},
        {id : 3, text: "Geneeal Relativity", isCorrect: false},
        {id : 4, text: "Gravitational Law", isCorrect: false}
      ]
    }
   ]
   const cliker=  ({isCorrect}) => {
    const border = isCorrect ? 'green' : 'red'; 
    if(isCorrect) { 
      setScore(score + 1)
    }
    (currentQuestion + 1 < questions.length) ? setCurrentQuestion(currentQuestion + 1)  : setShowResultBox(false) 
    
   }



   const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResultBox(true);
};
  const border = showResultBox ? '' : '1px solid transparent';
  return (
  <div>
    {/* Heading */}
    <div className='heading'>
      <h1>Quiz App</h1>
      <h3>Question {currentQuestion + 1} of {questions.length}</h3>
      <p>Current Score : {score} </p>
    </div>
    
    {showResultBox ? (
    /* Question answer */
    <div className='box1'>
    <h3>{questions[currentQuestion].question}</h3>
     
       <ul>
         {questions[currentQuestion].choices.map((choice) => {
          return <li onClick={() => cliker(choice.isCorrect)} style={{ border: `1px solid ${border}` }} key={choice.id}>
  {choice.text}</li>
         })}
       </ul>
    </div>
    ) : (
    /* REsult */
    <div className='box2'>
       <img src='https://th.bing.com/th/id/OIP.wGpA4CDhP5Dgovs-yFxkNAHaHa?pid=ImgDet&rs=1'></img>
       <p>You beat {score} out of {questions.length} - ({((score / questions.length) * 100).toFixed(2)})%</p>

       <button onClick={() => restartQuiz()}>Restart</button>
    </div>
    )
  }
  </div> 
  )

}

export default App
