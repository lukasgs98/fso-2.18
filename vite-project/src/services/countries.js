import axios from "axios"

const baseURL = "https://studies.cs.helsinki.fi/restcountries/api"

const getAll = () => axios.get(`${baseURL}/all`)
const getCountry = country => axios.get(`${baseURL}/name/${country}`)

export default { getAll, getCountry }