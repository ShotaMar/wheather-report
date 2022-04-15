import { useState } from "react"
import Form from './components/Form';
import Result from './components/Result';
import Title from './components/Title';
import Loading from "./components/Loading";
import './App.css';

const APIKEY = process.env.REACT_APP_WEATHERAPI_API_KEY
type ResultStateType = {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

const App = () =>  {
  const [loading, setLoading] = useState<boolean>(false)
  const [city, setCity] = useState<string>('')
  const [result, setResult] = useState<ResultStateType>({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: ''
  })
  const getWeather = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setLoading(true)
      fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
          setResult({
            country: data.location.country,
            cityName: data.location.name,
            temperature: data.current.temp_c,
            conditionText: data.current.condition.text,
            icon: data.current.condition.icon
          })
          setCity('')
          setLoading(false)
        })
        .catch(err => alert(`エラーが発生しました\nページをリロードしてください`))
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title/>
        <Form setCity={setCity} getWeather={getWeather} city={city}/>
        {loading ? <Loading /> : <Result result={result}/>}
      </div>
    </div>
  );
}

export default App;