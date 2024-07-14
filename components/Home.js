import styles from '../styles/Home.module.css';
import {useEffect, useState} from 'react'
import Country from './Country';

function Home() {
const [countries,setCountries] = useState([])

useEffect(()=>{
  fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
.then (response=>response.json())
.then (data=>{
  

  setCountries(data.data)
  


})
},[])

const country =countries.map((data,i)=>{
  return <Country key={i} name ={ data.name} iso3={data.iso3} flag={data.flag}/>
})



  return (
    <div> 

    <div className ={styles.globalContainer}>
      <h1 className={styles.title}>My World Tour</h1>
      <span className={styles.counter}>Number of countries: {country.length}</span>
      <div className={styles.countriesContainer}>{country}
        
      </div>
    </div>
     </div>
  );
}


export default Home;