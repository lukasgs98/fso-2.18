import LanguageList from "./LanguageList.jsx"

const CountryInfo = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
                <div>
                    <p>Capital {country.capital}</p>
                    <p>Area {country.area}</p>
                </div>
            <h2>Languages</h2>
                <LanguageList languages={country.languages} />
            <div style={{"width": "10rem"}}>
                <img style={{"width": "100%"}} src={country.flags.svg} />
            </div>
        </div>
    )
}

export default CountryInfo