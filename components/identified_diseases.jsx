import React from 'react';
import { Button } from 'primereact/button';


export default function IdentifiedDiseases() {

    return (
        <React.Fragment>
            <h3>Doenças Identificadas</h3>
            <div>
                <Button label="COVID-19" badge="1072" style={{ 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                <Button label="Dengue" badge="271"  style={{ 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                <Button label="Sarampo" badge="177" style={{ 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                <Button label="Febre Amarela" badge="161"  style={{ 'marginTop': '5px', 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                <Button label="Influenza" badge="104"  style={{ 'marginTop': '5px', 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                <Button label="Rubeola" badge="54"  style={{ 'marginTop': '5px', 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                <Button label="HIV" badge="46"  style={{ 'marginTop': '5px', 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                <Button label="Meningite" badge="36"  style={{ 'marginTop': '5px', 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                <Button label="Vericela" badge="34"  style={{ 'marginTop': '5px', 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                <Button label="Tuberculose" badge="33"  style={{ 'marginTop': '5px', 'marginRight': '5px' }} className="p-button-outlined p-button-secondary" />
                
            </div>
        </React.Fragment>
    )
}