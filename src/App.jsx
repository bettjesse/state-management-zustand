import React from 'react'
import CourseForm from './components/CourseForm'
import "./App.css"
// import CourseList from './components/CourseList'

const App = () => {
  return (
    <div className='main-container'>
      <h1 style={{
        fontSize:"2.5rem"
      }}>
My course list
      </h1>
<CourseForm/>
{/* <CourseList/> */}

    </div>
  )
}

export default App