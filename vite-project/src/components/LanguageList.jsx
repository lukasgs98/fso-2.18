const LanguageList = ({languages}) => {
    const array = []
    for (const language in languages) {
        array.push(languages[language])
    }
    return (
        <ul>
            {array.map(language => <li key={language}>{language}</li>)}
        </ul>
    )
}

export default LanguageList