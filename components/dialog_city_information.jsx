import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';


const DialogCityInformation = forwardRef((props,ref) => {

  const [open, setOpen] = useState(false)
  const [data, setData] = useState(null)
  const [noticias, setnoticias] = useState([])


  const [mapdata, setmapdata] = useState()

  useImperativeHandle(ref, ()=> ({
    openCityDialog(e,f){
      onOpen(e,f)
    }
  }))

    const basicData = {
        labels: mapdata?.map(m => m.mon+"/"+m.yyyy),
        datasets: [
            {
                label: 'Total de Notícias Rastreadas por mês',
                backgroundColor: '#42A5F5',
                data: mapdata?.map(m => m.total)
            },
        ]
    };

    const basicOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: '#495057'
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: '#495057'
                }
            }]
        }
    };



    

    async function onOpen(data,filters){
      setData(data)
      setOpen(true)

      const dados_mapa = await axios.get('/api/getchartdata', { params: { idmun : data['f1'], disease: filters['disease'] } })
      const dados_noticias = await axios.get('/api/getnewsdata', { params: { city : data['f2'], state: data['f7'] , disease: filters['disease'] } })

      setmapdata(dados_mapa.data)
      setnoticias(dados_noticias.data)


    }

    function onHide() {
        setOpen(false)
    }

    return (
        data &&
        <Dialog style={{width: '90vw'}} header={data['f2']} visible={open} modal onHide={onHide}>
            <h3>Dados Gerais</h3>
            <p>Total de notícias rastreadas: {data['f3']}</p>
            <p>Rating de notícias rastreadas: {data['f4']}</p>
            <h3>Classificação</h3>
            <p>Número de municípios obtidos nessa consulta: {data['f5']}</p>
            <p>Posição de {data['f2']} (da menor frequência até a maior): {data['f6']}</p>

            <h3>Gráfico Temporal</h3>
            <Chart type="bar" data={basicData} options={basicOptions} />

            <h3>Notícias rastreadas</h3>

            {noticias?.map(n=>(
                <div key={n.url} style={{marginBottom:'10px'}}>{n.data} - <a target="_blank" href={n.url}>{n.titulo}</a></div>
            ))}
</Dialog>
    );
})

export default DialogCityInformation