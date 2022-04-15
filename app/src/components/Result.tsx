type ResultPropsType = {
    result: {
        country: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
    }
}
const Result = (props: ResultPropsType) => {
    const { cityName, country, temperature, conditionText, icon } = props.result
    return(
        <>
            {cityName && <div className="result-city">{cityName}</div>}
            {country && <div className="result-country">{country}</div>}
            {temperature && <div className="result-temp">{temperature}<span>°C</span></div>}
            {conditionText && 
            <div className="result-condition">
                <img src={icon} alt='icon'/>
                <span>{conditionText}</span>
            </div>}

        </>
    )
}

export default Result