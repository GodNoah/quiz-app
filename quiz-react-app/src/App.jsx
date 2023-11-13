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
        {id : 1, text: "Earth", isCorrect: false},
        {id : 2, text: "Uranes", isCorrect: false},
        {id : 3, text: "Venus", isCorrect: false},
        {id : 4, text: "Mercury", isCorrect: false}
      ]
    },
    {
      question: "Which drink is ameican's signature?",
      choices : [
        {id : 1, text: "StarBuck", isCorrect: false},
        {id : 2, text: "Coca-cola", isCorrect: false},
        {id : 3, text: "Whiskey", isCorrect: false},
        {id : 4, text: "Beer", isCorrect: false}
      ]
    },
    {
      question: "Which ocean has largest area in the world?",
      choices : [
        {id : 1, text: "Atlantic", isCorrect: false},
        {id : 2, text: "Pacific", isCorrect: false},
        {id : 3, text: "Arctic", isCorrect: false},
        {id : 4, text: "Indian", isCorrect: false}
      ]
    },
    {
      question: "How many Sub-particle are there in atom?",
      choices : [
        {id : 1, text: "one", isCorrect: false},
        {id : 2, text: "two", isCorrect: false},
        {id : 3, text: "three", isCorrect: false},
        {id : 4, text: "four", isCorrect: false}
      ]
    },
    {
      question: "Who wrote pride and prejudice",
      choices : [
        {id : 1, text: "Charles Dickens", isCorrect: false},
        {id : 2, text: "Jane Austin", isCorrect: false},
        {id : 3, text: "Shakespeare", isCorrect: false},
        {id : 4, text: "Hemingway", isCorrect: false}
      ]
    },
    {
      question: "Most handsome human being",
      choices : [
        {id : 1, text: "", isCorrect: false},
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
