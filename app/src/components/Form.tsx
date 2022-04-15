type FormPropsType = {
    city: string
    setCity: React.Dispatch<React.SetStateAction<string>>
    getWeather: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form = (props: FormPropsType) => {
    const { getWeather, setCity, city } = props
    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="都市名" onChange={event => setCity(event.target.value)} value={city}/>
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default Form