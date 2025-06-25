import { useState, useEffect } from "react"
import services from "../services/countries.js"

// COMPONENTS
import CountryInfo from "./CountryInfo.jsx"
import CountryList from "./CountryList.jsx"
import Error from "./Error.jsx"

const App = () => {
    // STATE VARIABLES
    const [countries, setCountries] = useState ([])
    const [query, setQuery] = useState("")

    // COMPUTED VARIABLES
    const filteredCountries = countries.filter(country => country.name.common.includes(query))
    const results = () => {
        if (filteredCountries.length === 1) {
            return <CountryInfo country={filteredCountries[0]} />
        } else if (filteredCountries.length > 10) {
            return <Error />
        } else {
            return <CountryList countries={filteredCountries} />
        }
    }

    // EVENT HANDLERS
    const handleChange = (e) => setQuery(e.target.value)

    // EFFECT HOOKS
    const getCountriesHook = () => {
        services.getAll()
            .then(response => setCountries(response.data))
            .catch(error => console.log("Error fetching countries: " + error))
    }
    useEffect(getCountriesHook, [])

    // RENDERED COMPONENTS
    return (
        <>
            <input value={query} onChange={handleChange}></input>
            {results()}
        </>
    )
}

export default App
