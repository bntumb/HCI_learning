import {createContext, useState} from 'react'

const ContainerContext = createContext({

    contentWidth:0,
    contentPosition:0,
    updateWidth: (currentWidth)=>{},
    updatePosition: (currentPosition)=>{}
})


export function ContainerContextProvider(props){

    const [ContentWidth, setContentWidth] = useState([])
    const [ContentPosition, setContentPosition] = useState([])

    const updateContentWidth =(currentWidth)=>{

        setContentWidth(currentWidth)
        console.log(currentWidth)
    }

    
    const updateContentPosition =(currentPosition)=>{

        setContentPosition(currentPosition)
        console.log(currentPosition)
    }

    const synchroniser ={
        contentWidth: ContentWidth,
        contentPosition: ContentPosition,
        updateWidth: updateContentWidth,
        updatePosition: updateContentPosition
    }

    return <ContainerContext.Provider value={synchroniser}>

        {props.children}

    </ContainerContext.Provider>
}

export default ContainerContext;