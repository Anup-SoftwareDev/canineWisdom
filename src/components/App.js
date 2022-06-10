import React, {useEffect, useState}from 'react'

const App = () => {
const [cities, setCities] = useState([{name: "Victoria"},{name: "Maluti"}])

useEffect(
    ()=>{
        fetch("https://api.teleport.org/api/urban_areas/")
        //fetch("https://api.teleport.org/api/cities/?search=san%20francisco")
        .then(response => response.json())
        //.then(response=> console.log(response['_links']['ua:item']))
        .then(response => setCities(response['_links']['ua:item']))
        .catch(err => console.error(err));
    } ,[])

return(
        <>
            {console.log(cities)}
            <h1>This is App {(cities[0].name)} </h1>
            <select>
                {cities.map((city)=>
                <option key = {city.name} value={city.name} >{city.name}</option>)}
               
            </select>
        </>
)
}
export default App