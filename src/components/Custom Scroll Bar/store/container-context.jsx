import { useSearchParams } from 'next/navigation'
import {createContext, useState} from 'react'

const ContainerContext = createContext({

    contentWidth:0

})


export function ContainerContextProvider(props){

    const [ContentWidth, setContentWidth] = useState([])

    const updateContentWidth =(currentWidth)=>{

        setContentWidth(currentWidth)

    }

    const synchroniser ={
        contentWidth:ContentWidth
    }

    return <ContainerContext.Provider value={synchroniser}>

        {props.children}

    </ContainerContext.Provider>
}

export default ContainerContext;