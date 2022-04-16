import logo from './logo.svg';
import './App.css';
import { countries } from 'countries-list';
import { City } from 'country-state-city'
import { useState } from 'react';

function App() {

  const [cityFirstGuess, setCityFirstGuess] = useState("")
  const [todaysRandomIndex, setTodaysRandomIndex] = useState(0)
  const [chancesLeft, setChancesLeft] = useState(8)
  const [success, setSuccess] = useState()

  // console.log(City.getAllCities()[todaysRandomIndex])
  setInterval(() => {
    setTodaysRandomIndex(Math.floor(Math.random()*City.getAllCities().length)) 
  }, 1000 * 60 * 60 * 24)
  const randomCity = City.getAllCities()[todaysRandomIndex].name
  const countryCode = City.getAllCities()[todaysRandomIndex].countryCode
  const todayCountryName = countries[countryCode].name
  const guess = () => {
    // console.log('cityFirstGuess:', cityFirstGuess)
    // console.log('cityFirstGuess:', randomCity)

    if(cityFirstGuess === randomCity) {
        setSuccess(true)
    } else {
        alert('Try again')
        setChancesLeft(chancesLeft - 1)
    }
  }

  
  //TODO: ADD dropdown of cities name after some words
  //TODO: ADD directions to where the city is located from the inputed city
  //TODO: ADD letters in common between today's city and inputed city
  //TODO: Make it pretty
  // console.log(cityFirstGuess)

  return (
    <>
    <h1>Guess the city</h1>
    <h3>You've got {chancesLeft} Chances left</h3>
    <input value={cityFirstGuess} onChange={e => setCityFirstGuess(e.target.value)}></input>
    <button onClick={guess}>guess</button><br></br>
    {success ? <a>Congratulations 🎉🎉🎉 Info: It's a city in {todayCountryName}</a> : <></>}
    {chancesLeft === 1 ? <a title={'The city is in '+todayCountryName}>💡💡💡</a> : <></>}
    {chancesLeft === 0 ? <a>Sorry you couldn't make it today 😞😞😞 <h3> The city is {randomCity}</h3> Info: It's a city in {todayCountryName}</a> : <></>}
    </>
  );
}

export default App;
