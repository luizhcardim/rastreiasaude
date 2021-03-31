import React from 'react'
import { ProgressBar } from 'primereact/progressbar';

export default function Loading(){
    return(
        <div>
            <center><p>Carregando dados... Por favor, aguarde.</p></center>
            <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
            
        </div>
        
    )
}