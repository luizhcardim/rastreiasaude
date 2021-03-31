import React, { useEffect, useRef } from 'react';
import { DivOverlay, geoJSON, latLng, LayerGroup } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMapEvent, useMapEvents, useMap } from 'react-leaflet'

export default function ChoroplethMap({ geojson_layers, openCityDialog }) {

    const position = [-14.012558, -55.8619747]


    //const map = useMap()





    return (
        <MapContainer style={{ height: "450px" }} center={latLng(position)} zoom={4} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />

            <MapLayers openCityDialog={openCityDialog} geojson_layers={geojson_layers}></MapLayers>

        </MapContainer>
    )
}


function MapLayers({ geojson_layers ,openCityDialog }) {

    // const map = useMapEvent('layeradd', () => {
    //     console.log("Adicionou uma nova layer")
    //     map.fitBounds(geojson_layers.getBounds())
    //     //map.setCenter([50.5, 30.5])
    //   })

    const geojson = useRef(null);

    const map = useMap()
    useEffect(() => {
        console.log('adicionou layer')
        if (geojson_layers)
            //console.log(geojson.current.getBounds())
            map.fitBounds(geojson.current.getBounds())
    }, [geojson_layers])

    



    function clickOnCity(e) {

        //console.log("I clicked on ", e['target']['feature']['properties']);
        openCityDialog(e['target']['feature']['properties'])
    }

    const eachFeatureHandler = (feature, layer) => {

        // layer.bindPopup('<p>'+feature.properties['f2']+"</p>")
        // console.log(feature.properties)

        layer.on({
            click: clickOnCity
        });

    }



    const styleFeatures = (feature) => {

        let fcolor = 'white';
        if (feature.properties['f6'] < Math.round(feature.properties['f5'] / 3)) {
            fcolor = '#FFFFFF'
        } else if (feature.properties['f6'] > Math.round(feature.properties['f5'] / 3) && feature.properties['f6'] < Math.round(feature.properties['f5'] / 3 * 2)) {
            fcolor = '#FD8182'
        } else {
            fcolor = '#FC0D1A'
        }

        //console.log(feature)   

        return {
            weight: 1,
            fillColor: fcolor,
            fillOpacity: 0.5,
            color: 'black'
        }


    }

    return (geojson_layers ?

        <GeoJSON ref={geojson} style={(feature) => styleFeatures(feature)} onEachFeature={(feature, layer) => eachFeatureHandler(feature, layer)} data={geojson_layers} ></GeoJSON>
        :
        null
    )

}