import axios from 'axios'

const url = 'https://api.openweathermap.org/data/2.5/weather?q='

const api_key = process.env.REACT_APP_WEATHER_KEY

const getWeather = country => {
    const request = axios.get(`${url}${country}&APPID=${api_key}`)
    return request.then(response => response.data)
}

const exportObjects = {
    getWeather
}

export default exportObjects