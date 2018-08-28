import React from 'react'
import axios from 'axios'

const WEATHER_API_KEY = '3fea131149dd27942b2985e5380b5cc4'

class Homepage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: '',
      results: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    const value = event.target.value
    this.setState(() => {
      return {
        location: value
      }
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    // this.getWeather(this.state.location)
    this.getForecast(this.state.location)
  }
  // weather (location, api) {
  //   const doABunchOfStuff = { data: '', moreData: '', evenMoreData: '' }
  //   const results = api !== null ? doABunchOfStuff : { error: 'you fucked up' }
  //   return results
  // }
  getWeather (location) {
    const loc = encodeURI(location)
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&type=accurate&APPID=${WEATHER_API_KEY}`
    axios.get(url).then(results => {
      console.log(results)
    })
  }
  getForecast (location) {
    const loc = encodeURI(location)
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&type=accurate&APPID=${WEATHER_API_KEY}&cnt=5`
    axios.get(url).then(results => {
      console.log(results)
      this.setState({ results: results.data.list })
    })
  }
  render () {
    const { location, results } = this.state
    return (
      <div className='homepage'>
        <div className='form'>
          <h1 className='form-title'>Enter a City and State</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className='form-input'
              type='text'
              value={location}
              onChange={this.handleChange}
              placeholder='Calgary, Alberta'
            />
            <button className='form-button' type='submit' disabled={!location}>
              Get Weather
            </button>
          </form>
          <ul>
            {results && results.map(function (day) {
              return <li key={day.dt}>{day.main.temp}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Homepage
