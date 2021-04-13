import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';


export default function ComboDiseases({onDiseaseSelected}){

    const [disease, setDisease] = useState('any')

    const diseases = [
        {label: 'Nenhuma doença selecionada', value: 'any'},
        {label: 'Sars-COV-19', value: 'covid-19'},
        {label: 'Dengue', value: 'dengue'},
        {label: 'Sarampo', value: 'sarampo'},
        {label: 'Febre Amarela', value: 'febre amarela'}
    ];

    const onDiseaseChanged = (d) =>{
        setDisease(d)
        onDiseaseSelected(d)
    }



    return <Dropdown value={disease} options={diseases} onChange={(e) => onDiseaseChanged(e.value)} placeholder="Selecione uma doença"/>


}