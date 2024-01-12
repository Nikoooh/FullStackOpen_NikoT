import axios from 'axios'
const url = "http://localhost:3001/persons"

const getPersons = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const newPerson = newPerson => {
    const request = axios.post(url, newPerson)
    return request.then(response => response.data)
}

const deletePerson = person => {
    const request = axios.delete(`${url}/${person}`)
    return request.then(response => response.data)
}

const updatePerson = (oldPerson, newPerson) => {
    const request = axios.put(`${url}/${oldPerson.id}`, newPerson)
    return request.then(response => response.data)
}

const exportObjects = { 
    getPersons, 
    newPerson, 
    deletePerson, 
    updatePerson 
}

export default exportObjects