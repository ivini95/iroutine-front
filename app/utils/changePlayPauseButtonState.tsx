'use client'

import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

export default function ChangePlayPauseButtonState() {
    const [icon, setIcon] = useState(<Play size={14}/>)
    const [iconStatus, setIconStatus] = useState(true)

    function changeIcon(){
        setIconStatus(!iconStatus)
        console.log(iconStatus);
        
    }

    useEffect(() => {
        if(iconStatus){
            setIcon(<Play size={14}/>)
        }else{
            setIcon(<Pause size={14}/>)
        }
    },[iconStatus])

    return (
        <Button onClick={changeIcon} className='h-6 w-12'>{icon}</Button>
    )
}



    