import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../App.css"

const Loader = () => {
    return (
        <>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass="loader"
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#ef9d10f"
                innerCircleColor="#3b4d61"
                middleCircleColor="#6b7b8c"
            />
        </>
    )
}

export default Loader