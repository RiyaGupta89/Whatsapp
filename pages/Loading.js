import React from 'react'
import {Circle} from "better-react-spinkit"
import Image from "next/image"

export default function Loading() {
    return (
        <center style={{display: "grid", height: "100vh", placeItems: "center"}}>
        <div>
            <Image src="/logo.png" alt="logo" height={200} width={200} style={{ marginBottom: 10 }}/>
            <Circle color="#3CBC28" size={60}/>
        </div>
        </center>
    )
}
