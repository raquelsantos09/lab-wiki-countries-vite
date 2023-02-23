import React from 'react'
import { useParams, Link } from 'react-router-dom'

function CountryDetails({ countries }) {
    const { countryId } = useParams();

    const foundCountry = countries.find((country) => {
        return country.alpha3Code === countryId;
    })

    return (
        <div>CountryDetails
            <div className="col-7">
                <h1>{foundCountry.name}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr key={foundCountry.alpha3Code}>
                            <td style={{ "width": "30%" }}>Capital</td>
                            <td>{foundCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                {foundCountry.borders}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CountryDetails