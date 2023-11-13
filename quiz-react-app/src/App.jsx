import { useState } from 'react'
import './App.css'

function App() {
   const [showResultBox, setShowResultBox] = useState(true)
   const [score, setScore] = useState(0)
   const [currentQuestion, setCurrentQuestion] = useState(1)

   const questions = [
    {
      question: "asfafafsfsa",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "asfafafsfsa",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "asfafafsfsa",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "asfafafsfsa",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "asfafafsfsa",
      choices : [
        {id : 1, text: ".....", isCorrect: false},
        {id : 2, text: ".....", isCorrect: false},
        {id : 3, text: ".....", isCorrect: false},
        {id : 4, text: ".....", isCorrect: false}
      ]
    },
    {
      question: "asfafafsfsa",
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
      <h3>Question {currentQuestion} of {questions.length}</h3>
      <p>Current Score : {score} </p>
    </div>
    
    {showResultBox ? (
    /* Question answer */
    <div className='box1'>
       <h3>Q : What is Neon?</h3>
       <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
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
