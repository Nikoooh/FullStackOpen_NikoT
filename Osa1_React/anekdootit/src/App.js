import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0})
  const [voted, setVoted] = useState(false)

  const getRandom = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    return random
  }

  const vote = () => {
    setVoted(true)
    const copyVotes = {...votes}
    copyVotes[selected]++
    setVotes({...copyVotes})
  }

  console.log(Object.keys(anecdotes).reduce((a, b) => {return votes[a] > votes[b] ? a : b}))

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]}
        <br/>
        <p>Has {votes[selected]} votes</p>
        <button onClick={vote}>Vote</button>
        <button onClick={() => setSelected(getRandom)}>Next anecdote</button>
      </div>
      <div>
        <h2>Anectode with most votes</h2>
        {voted ? 
          <div> 
            {anecdotes[Object.keys(anecdotes).reduce((a, b) => {return votes[a] > votes[b] ? a : b})]}
          </div>
        :
          <p>No votes yet</p>
        }
      </div>
    </div>
  )
}

export default App
