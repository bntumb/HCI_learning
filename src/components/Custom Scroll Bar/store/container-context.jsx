import {createContext, useState} from 'react'

const ContainerContext = createContext({

    contentWidth:0,
    updateWidth: (currentWidth)=>{}


})


export function ContainerContextProvider(props){

    const [ContentWidth, setContentWidth] = useState([])

    const updateContentWidth =(currentWidth)=>{

        setContentWidth(currentWidth)
        console.log(currentWidth)
    }

    const synchroniser ={
        contentWidth:ContentWidth,
        updateWidth: updateContentWidth
    }

    return <ContainerContext.Provider value={synchroniser}>

        {props.children}

    </ContainerContext.Provider>
}

export default ContainerContext;