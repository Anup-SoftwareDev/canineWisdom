import {CardActions,CardMedia, CardContent, Card, Typography, Button} from "@mui/material"
import React, {useState}from 'react'


export default function App4() {

    const [activity, setActivity] = useState({
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      })
    const [dog, setDog] = useState(`${require('./sleepingDog.jpg')}`)
    

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

    return (
      <Card sx={{ maxWidth: 1000, display: 'flex', flexDirection: 'row' }}>
       
        <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Canine Wisdom
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {activity.author?activity.author:"Unknown Author"}
          </Typography>
          <Typography variant="h6" color="text.secondary">
          {activity.text}
          </Typography>
        <CardActions>
          <Button  variant="contained" onClick = {handleClick}>Next Pearl of Wisdom</Button>
        </CardActions> 
        <br></br> 
        <Typography variant="h5" color="text.secondary">
          And You thought Dogs were not wise 😜!
          </Typography>
        </CardContent>
        
        <CardMedia
          component="img"
          
          sx={{ width: 400, height: 400  }}
          image= {`${dog}`}
          alt="dog"
        />
      </Card>
    );
  }
  