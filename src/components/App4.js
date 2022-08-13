import {CardActions,CardMedia, CardContent, Card, Typography, Button} from "@mui/material"
import React, {useState}from 'react'
import "../style.css"


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

      <Card className = "main-card" sx = {{borderRadius: 5}}>
        <Card sx = {{ borderBottom: 5, borderColor: 'primary.main'}}>
            <Typography className = "heading" gutterBottom variant="h3" component="div" align = "center">
                Canine Wisdom
            </Typography>
        </Card>
        <CardContent className = "wisdom">
            
                <CardContent>
                     
                      <Card className = "author-title" sx = {{borderRadius: 3}}>
                            
                            <Typography className = "author"  gutterBottom variant="h4" component="div">
                                {activity.author?activity.author:"Unknown Author"}
                            </Typography>
                            <Typography className = "quote" variant="h5" color="text.secondary">
                                  {activity.text}
                            </Typography>
                      </Card>
                      <br></br> 
                        <CardActions>
                            <Button size="large"  variant="contained" onClick = {handleClick}>Next Pearl of Wisdom</Button>
                        </CardActions> 
                        <br></br> 
                        <Typography variant="h5" color="RoyalBlue">
                              And You thought Dogs were not wise 🐶!
                        </Typography>
                </CardContent>
            
           
            <CardMedia
                component="img"
                className = "img"
                sx={{ borderRadius: 5}}
                image= {`${dog}`}
                alt="dog"
                />
            
        </CardContent>
        
      </Card>
    );
  }
  