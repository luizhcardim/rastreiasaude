import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import MenuPrincipal from '../components/menuprincipal';
import FilterForm from '../components/filter_form';
import Loading from '../components/loading';
import DialogCityInformation from '../components/dialog_city_information';
import axios from 'axios';

const ChoroplethMap = dynamic(() => import("../components/choropleth_map"), { ssr: false });

export default function HomePage() {

    const cityDialogRef = useRef();
    const [geojsonLayers, setgeojsonLayers] = useState()
    const [loading, setloading] = useState(false)
    const [filters, setfilters] = useState({})

    const updateData = async (f) => {

        let layers
        try {
            setloading(true)
            setfilters(f)
            const layers = await axios.get('/api/geogettotalandrating', { params: { ...f } })

            setloading(false)

            if (layers.data[0]['row_to_json']['features'] !== null) {
                setgeojsonLayers(layers.data[0]['row_to_json'])
            }

        } catch (e) {
            setloading(false)
            console.log(e)
        }
    }


    const openCityDialog = (e) => {
        cityDialogRef.current.openCityDialog(e,filters)
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
            <DialogCityInformation ref={cityDialogRef}></DialogCityInformation>
        </div>);


}