import { useEffect, useState } from 'react'
import axios from 'axios'
import Numbers from './components/Numbers'
import AddNumbers from './components/AddNumbers'
import Filtering from './components/Filtering'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [filtered, setFiltered] = useState(false)
  const [filterString, setFilterString] = useState('')
  const [filteredPersons, setFilteredPersons] = useState()

  const handleChange = (e) => { 
    e.preventDefault()
    if (e.target.name === "nameInput") {
      setNewName(e.target.value)
    } else if (e.target.name === "numberInput") {
      setNewNumber(e.target.value)
    }

    if (e.target.name === "filter") {
      setFilterString(e.target.value)
    }
  }

  const handleForm = (e) => {
    e.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)     
    } else {
      setPersons([...persons, {name: newName, number: newNumber, id: persons.length + 1}])
    } 
  }

  const handleFilter = (e) => {
    e.preventDefault()

    setFiltered(true)
    setFilteredPersons(persons.filter(person => person.name.toLocaleLowerCase().includes(filterString.toLowerCase())))

  }

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(response => setPersons(response.data))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filtering handleFilter={handleFilter} handleChange={handleChange} filterString={filterString}/>
      <AddNumbers newName={newName} newNumber={newNumber} handleChange={handleChange} handleForm={handleForm}/>
      <Numbers persons={persons} filtered={filtered} filteredPersons={filteredPersons}/>

    </div>
  )

}

export default App
