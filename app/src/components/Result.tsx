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
    return(
        <div>
            {props.result.cityName && <div>{props.result.cityName}</div>}
            {props.result.country && <div>{props.result.country}</div>}
            {props.result.temperature && <div>{props.result.temperature}<span>°C</span></div>}
            {props.result.conditionText && 
            <div>
                <img src={props.result.icon} alt='icon'/>
                <span>{props.result.conditionText}</span>
            </div>}

        </div>
    )
}

export default Result