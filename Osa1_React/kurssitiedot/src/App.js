const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
  
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {       
        props.parts.map((x, key) => {
          return (
            <Part part={x.name} exercises={x.exercises} key={key}/>
          )          
        })
      }
    </div>
  )
}

const Total = (props) => {
  return (
    <p>{props.total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.reduce((x, y) => x + y.exercises, 0)} />
    </div>
  )
}

export default App