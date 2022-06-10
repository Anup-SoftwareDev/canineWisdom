import React, {useEffect, useState}from 'react'

const App1 = () => {

const [activity, setActivity] = useState({
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
  })
const [dog, setDog] = useState(`${require('./sleepingDog.jpg')}`)


useEffect(
    ()=>{
/*fetch('https://www.boredapi.com/api/activity/')
	.then(response => response.json())
    .then(response=> setActivity(response.activity))
	.catch(err => console.error(err))

fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => response.json())
    .then(response=> setDog(response.message))
	.catch(err => console.error(err))*/
    },[])
const handleClick = ()=>{

    fetch('https://type.fit/api/quotes')
	.then(response => response.json())
    //.then(response=>console.log(response[0].text))
    .then(response=> setActivity(response[Math.floor((Math.random() * (response.length-1)) + 1)]))
	.catch(err => console.error(err))
   // Math.floor((Math.random() * (response.length-1)) + 1)
    fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => response.json())
    .then(response=> setDog(response.message))
	.catch(err => console.error(err))

}


return(
        <>  
            <h1 style = {{color: "Blue", fontSize: '50px', textAlign: 'center'}}>Canine Wisdom</h1>
            <h1 style = {{color: 'green'}}>Broaden your horizons!</h1>
            {console.log(dog, activity)}
            {/*`${dog}`*/}
            <img src = {`${dog}`} alt = "sleeping Dog"style = {{height: 300, position: "relative", left: "20%", right: "70%"}}/>
            <h1 style={{backgroundColor: 'yellow'}}> {activity.text}</h1>
            <h1> {activity.author}</h1>
            <h1> And you thought Dogs were not wise!</h1>
            <button style = {{height: "50px", fontSize: "20px", marginLeft: '100px'}}onClick = {handleClick}>Next Pearl of Wisdom!</button>

        </>
    )
}

export default App1