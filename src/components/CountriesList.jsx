import React from 'react'
import { Link } from "react-router-dom"; 

function CountriesList({countries}) {
  return (
      <ul className="list-group" style={{maxHeight: '90vh', overflow: 'scroll'}} >
          {countries.map((country, alpha3Code) => {
return (
      <Link to={`/${country.alpha3Code}`}>
        <li className="list-group-item list-group-item-action" key={alpha3Code}>
                  {country.name.common}
</li>
</Link>
           ) })}
    </ul>
  )
}
   

export default CountriesList