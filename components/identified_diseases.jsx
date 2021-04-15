import React from 'react';
import { Button } from 'primereact/button';


export default function IdentifiedDiseases({list_diseases}) {

    return (
        <React.Fragment>
            <h3>Doenças Identificadas</h3>
            <div>
                {list_diseases.map(d => <Button label={d.name} badge={d.total} style={{ 'marginTop': '5px', 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" /> )}
            </div>
        </React.Fragment>
    )
}