import { AutoComplete } from 'primereact/autocomplete';
import React, { useState } from 'react'


export default function ComboboxBrazil({initial,onPlaceChanged}){


    const [selectedCountry2, setSelectedCountry2] = useState(initial);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const states = [
            {"name": "Brasil", "code": "BR"},
            {"name": "Paraná", "code": "PR"},
        ]
    


    const itemTemplate = (item) => {
        return (
            <div >
                <div>{item.name === "Brasil"? <b>{item.name}</b> : item.name }</div>
            </div>
        );
    }

    const handlePlaceChanged = (e) =>{
        setSelectedCountry2(e.value)
        onPlaceChanged(e.value)
    }

    const searchCountry = (event) => {
        setTimeout(() => {
            let filteredCountries;
            if (!event.query.trim().length) {
                filteredCountries = [...states];
            }
            else {
                filteredCountries = states.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(filteredCountries);
        }, 250);
    }


    return <AutoComplete value={selectedCountry2} suggestions={states} completeMethod={searchCountry} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={(e) => handlePlaceChanged(e)} />
    
}


