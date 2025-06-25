import { useState } from "react"
import CountryInfo from "./CountryInfo.jsx"

const CountryListItem = ({ country }) => {
    const [toggled, setToggled] = useState(false)
    const handleClick = () => {
        setToggled(!toggled)
    }

    return (
        <li 
            key={country.cca2} 
            style={{"marginBottom": "1rem"}}>
                <div>
                    {country.name.common}
                    <button
                        type="button"
                        style={{"marginLeft": "1rem"}}
                        onClick={handleClick}>
                            {toggled ? "hide": "show"}
                    </button>
                </div>
                {toggled && <CountryInfo country={country} />}
        </li>
    )
}

export default CountryListItem