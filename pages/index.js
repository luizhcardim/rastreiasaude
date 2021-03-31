import React, { useState } from 'react'
import dynamic from 'next/dynamic'


import MenuPrincipal from '../components/menuprincipal';

// import ChoroplethMap from '../components/choropleth_map';
import FilterForm from '../components/filter_form';
import Loading from '../components/loading';
import DialogCityInformation from '../components/dialog_city_information';
import axios from 'axios';

const ChoroplethMap = dynamic(() => import("../components/choropleth_map"), { ssr: false });
//import { tileLayer } from 'leaflet';

export default function HomePage() {

    



    const [geojsonLayers, setgeojsonLayers] = useState()

    const [loading, setloading] = useState(false)

    const [dialogvisible, setdialogvisible] = useState(false)
    const [dialogdata, setdialogdata] = useState(null)

    const updateData = async (f) => {


      console.log(f)

        let layers
        try {
            setloading(true)

            // layers = await clientgql.query({
            //     query: gql`query q($disease: String, $visualization: String, $state: String, $date_start: String, $date_end: String){
            //         geoGetTotalAndRating(disease:$disease,visualization:$visualization,state:$state, date_start: $date_start, date_end: $date_end)
            //       }`,
            //     variables: f
            // })

            const layers = await axios.get('/api/geogettotalandrating',{ params : {...f}})

            setloading(false)

            if(layers.data[0]['row_to_json']['features'] !== null){
                setgeojsonLayers(layers.data[0]['row_to_json'])
            }
            

                
        } catch (e) {
            setloading(false)
            console.log(e)
        }
    }


    const openCityDialog = (e) =>{
        // Carregar notícias

        // 
        setdialogdata(e)
        setdialogvisible(true)
    }

    const closeCityDialog = () =>{
        setdialogvisible(false)
    }




    return (
        <div>
            <MenuPrincipal />
            <div className="p-grid p-formgrid p-m-lg-5 p-m-2">

                <div className="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0">

                    <FilterForm update={(f) => updateData(f)}></FilterForm>

                </div>
                <div className="p-col-12 p-lg-6">
                    <h3>Mapa</h3>
                    <div className="p-fluid">
                        {loading ? <Loading></Loading> : <ChoroplethMap openCityDialog={openCityDialog} geojson_layers={geojsonLayers}></ChoroplethMap>}

                    </div>



                </div>

            </div>
            
            <DialogCityInformation visible={dialogvisible} data={dialogdata} closeDialog={closeCityDialog}></DialogCityInformation>
        </div>);


}