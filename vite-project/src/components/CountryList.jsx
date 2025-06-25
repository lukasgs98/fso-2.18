import CountryListItem from "./CountryListItem.jsx"

const CountryList = ({countries}) => {
    return (
        <ol>
            {countries.map(country => <CountryListItem key={country.cca2} country={country} />)}
        </ol>
    )
}

export default CountryList