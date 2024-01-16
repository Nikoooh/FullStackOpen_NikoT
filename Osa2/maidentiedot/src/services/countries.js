import axios from 'axios'
const url = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountries = () => {
    const request = axios.get(`${url}/all`)
    return request.then(response => response.data)
}

const exportObjects = {
    getCountries
}

export default exportObjects