import React, {useState, useEffect} from "react"

const BinShow = (props) => {
    //debugger
    const [bins, setBins] = useState({
        id: 0,
        location: 0,
        company: "",
        neighborhood: "",
        imgUrl: "",
        relatedInfo: ""
    })

    const getBins = async () => {
        try {
            console.log(`id: ${props.match.params.id}`)
            const response = await fetch(`/api/v1/bins/${props.match.params.id}`)//props.match.params.id
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const binData = await response.json()
            console.log(binData)
            setBins(binData.bins)
        } catch(err){
            console.log(err)
            console.error(`Error in Fetch: ${err.message}`)
        }
    }

    useEffect(()=> {
        getBins()
    }, [])
    return(
        <div className="bin-info-show-page">
        <h1>Info On This Bin:</h1>
        <h2>Company: {bins.company}</h2>
        <p>Related Info: {bins.relatedInfo}</p>
        </div>
    )
}

export default BinShow
