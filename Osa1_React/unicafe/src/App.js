import { useState } from 'react'

const Button = ({name, set, value}) => <button onClick={() => set(value + 1)}>{name}</button>

const StatisticsLine = ({statistic, value}) => <tr><td style={{padding: 5}}>{statistic}:</td><td>{value} </td></tr>

const Statistics = ({good, neutral, bad, total}) => {

  const average = ((good - bad) / total).toFixed(2)
  const positive = ((good / total) * 100).toFixed(2) + '%'

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine statistic={'Good'} value={good}/>
          <StatisticsLine statistic={'Neutral'} value={neutral}/>
          <StatisticsLine statistic={'Bad'} value={bad}/>
          <StatisticsLine statistic={'All'} value={total}/>
          <StatisticsLine statistic={'Average'} value={average}/>
          <StatisticsLine statistic={'Positive'} value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good + neutral + bad

  return (
    <div>
      <h2>Give feedback</h2>
      <div>
        <Button name={'Good'} value={good} set={setGood}/>
        <Button name={'Neutral'} value={neutral} set={setNeutral}/>
        <Button name={'Bad'} value={bad} set={setBad}/>
      </div>
      <div>
        <h2>Statistics</h2>
        {total ? 
          <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
        :
          <p>No feedback</p>
        }
        
      </div>
    </div>
  )
}

export default App
