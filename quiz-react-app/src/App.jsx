import { useState } from 'react'
import './App.css'

function App() {


  return (
  <div>
    {/* Heading */}
    <div className='heading'>
      <h1>Quiz App</h1>
      <h3>Question 1 of 5</h3>
      <p>Current Score : </p>
    </div>
  
    {/* Question answer */}
    <div className='box1'>
       <h3>Q : What is Neon?</h3>
       <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
       </ul>
    </div>


    {/* REsult */}
    <div className='box2'>
       <img src='https://th.bing.com/th/id/OIP.wGpA4CDhP5Dgovs-yFxkNAHaHa?pid=ImgDet&rs=1'></img>
       <p>You have correct 3 questions out of 5. 20%</p>

       <button>Restart</button>
    </div>
  
  </div> 
  )

}

export default App
