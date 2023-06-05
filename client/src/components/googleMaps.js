import React, {useState, useEffect} from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { setDefaultResultOrder } from "dns"

// import mapSearch from "/.MapSearch"
// import ResultList from "./ResultList"

const GoogleMap = (props) => {
    //will need state here at some point

    const loader = new Loader({
        apiKey: "AIzaSyCZVaP5f1JGgCXvrguZbz4QI0WFV7qjaWg",
        libraries: ["places"] 
    })

    useEffect(() => {
        setError("")
        loader.load().then(() => {
            const boston = {lat: 42.361, lng: -71.057}

            const request = {
                query: searchQuery,//might not need
                location: boston,
                radius: "500"
            }

            const map = new GoogleMap.maps.Map(document.getElementById("map"), {
                center: boston,
                zoom: 11,
            })

            const service = new GoogleMap.maps.places.PlacesService(map)
            if(seachQuery) {
                service.textSearch(request, function(results, status) {
                    if( status === GoogleMap.maps.places.PlacesServiceStatus.OK) {
                        setSearchResults(results)
                        results.forEach((result) => {
                            
                        })
                    }
                })
            }
        })
    })
}