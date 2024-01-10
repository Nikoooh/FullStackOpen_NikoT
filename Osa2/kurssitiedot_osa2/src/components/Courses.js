import React from 'react'

const Part = ({parts}) => {
    return (
      parts.map((part) => {
        return (
          <div key={part.id}>
            <p> {part.name} {part.exercises} </p>
          </div>
        )
      })
    )
  }
  
const Header = ({header}) => <h2>{header}</h2>

const Content = ({courses}) =>{
  return ( 
    <div>
      {       
        courses.map((course) => {
          return (
            <div key={course.id}> 
              <Header header={course.name}/>
              <Part parts={course.parts}/>
              <p><b> Total of {course.totalExercises} exercises </b></p>
            </div>
          )          
        })
      }
    </div>
  )
}
  
const Course = ({courses}) => {
  return (
    <div>
      <h2>Web development curriculum</h2>
      <Content courses={courses}/>
    </div>
  )
}

export default Course