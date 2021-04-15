import React, { useState } from 'react';

import ComboboxBrazil from './../components/combobox_brazil';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Calendar } from 'primereact/calendar';
import ComboDiseases from './combo_diseases';
import IdentifiedDiseases from './identified_diseases';
import { Dialog } from 'primereact/dialog';


export default function FilterForm({ update , list_diseases }) {

    const [displayInformation, setDisplayInformation] = useState(false);

    const [visualization, setVisualization] = useState('total')
    const [dates2, setDates2] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState({ "name": "Brasil", "code": "BR" });
    const [selectedDisease, setSelectedDisease] = useState('any')




    const updateMap = async () => {

        let filters = {
            disease: selectedDisease,
            state: selectedPlace['code'],
            visualization: visualization
        }

        // Getting de date Period
        if (dates2 && dates2[1]) {
            let begin = new Date(dates2[0])
            let date_start = begin.getFullYear() + "-" + ((begin.getMonth() + 1)) + "-" + (begin.getDate())
            let end = new Date(dates2[1])
            let date_end = end.getFullYear() + "-" + ((end.getMonth() + 1)) + "-" + (end.getDate())
            filters = { ...filters, date_start, date_end }
        }


        update(filters)
    }

    return (

        <React.Fragment>
            <h3>Localização</h3>
            <div className="p-fluid"><ComboboxBrazil initial={selectedPlace} onPlaceChanged={(v) => setSelectedPlace(v)}></ComboboxBrazil></div>

            <h3 onClick={()=>setDisplayInformation(true)}>Visualização <Badge  value="?"></Badge></h3>
            <div className="p-fluid">
                <span className="p-buttonset">
                    <Button onClick={() => setVisualization('total')} label="Total" className={visualization === 'total' ? '' : 'p-button-outlined p-button-secondary'} />
                    <Button onClick={() => setVisualization('rating')} label="Rating" className={visualization === 'rating' ? '' : 'p-button-outlined p-button-secondary'} />
                    <Button onClick={() => setVisualization('smoothed')} label="Smoothed" className={visualization === 'smoothed' ? '' : 'p-button-outlined p-button-secondary'} />
                </span>
            </div>

            <h3>Período da Pesquisa</h3>
            <div className="p-fluid">
                <Calendar showButtonBar id="range" dateFormat="dd/mm/yy" value={dates2} onChange={(e) => setDates2(e.value)} selectionMode="range" readOnlyInput showIcon />
            </div>
            <h3>Filtrar Doenças</h3>
            <div className="p-fluid">
                <ComboDiseases onDiseaseSelected={setSelectedDisease}></ComboDiseases>
            </div>
            <div className="p-fluid">
                <Button onClick={() => updateMap()} icon='pi pi-refresh' style={{ marginTop: '10px' }} label="Atualizar" />
            </div>

            {selectedDisease === 'any' && list_diseases ?
                <IdentifiedDiseases list_diseases={list_diseases}></IdentifiedDiseases> : null

            }

            <Dialog header="Tipos de Visualizações" visible={displayInformation} onHide={() => setDisplayInformation(false)} baseZIndex={1000}>
                
                <ul>
                    <li><b>Total</b> - Apresenta o número total de notícias identificado para cada município.</li>
                    <li><b>Rating</b> - Apresenta o número de notícias identificadas para cada 1000 habitantes.</li>
                    <li><b>Smoothed</b> - Apresenta uma média do rating de todos os municípios limítrofes.</li>
                </ul>
            </Dialog>

        </React.Fragment>
    );







}