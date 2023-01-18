import './Currencies.css';
import { v4 as uuidv4 } from 'uuid';
import Result from "./Result/Result"
import { useState } from 'react';


function Currencies({ data, test }) {

    const [stateCountry, setStateCountry] = useState({ name: "test", rate: 10.271817 })

    const viewRate = (e) => {
        const countrySelect = e.target.id
        // console.log(e.target.id) // Affiche bien ne nom du pays sélectionnés
        const countryFounded = data.find(country => country.name === countrySelect)
        // console.log(countryFounded) // Affiche bien l'objet de la country
        setStateCountry(countryFounded)
        console.log(stateCountry)
    }


    return (
        <>
            <ul className='currencies'>
                {data.map((li) => {
                    return <li onClick={e => viewRate(e)} className='listItem' key={uuidv4()} id={li.name} >{li.name}</li>
                })}
            </ul>
            <Result rate={stateCountry.rate} name={stateCountry.name} />
        </>
    )
}

export default Currencies;

