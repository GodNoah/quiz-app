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
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "Which drink is ameican's signature?",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "Which ocean has largest area in the world?",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "How many Sub-particle are there in atom?",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "Who wrote pride and prejudice",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "Most handsome human being",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    }
   ]



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
          return <li key={choice.id}>{choice.text}</li>
         })}
       </ul>
    </div>
    ) : (

    /* REsult */
    <div className='box2'>
       <img src='https://th.bing.com/th/id/OIP.wGpA4CDhP5Dgovs-yFxkNAHaHa?pid=ImgDet&rs=1'></img>
       <p>You have correct 3 questions out of 5. 20%</p>

       <button>Restart</button>
    </div>
    )
  }
  </div> 
  )

}

export default App
