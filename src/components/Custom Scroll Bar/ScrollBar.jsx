import { useState, useEffect, useRef } from "react";


const ScrollBar=()=>{

    const MIN_WIDTH_PERCENTAGE = 10/100;
    
    const scrollbarRef = useRef(null);
    const borderRight = useRef(null);
    const borderLeft  = useRef(null);
    const scroller = useRef(null)
    const previousPosition = useRef(0)
    const [positionRight, setPositionRight] = useState(0);
    const [positionLeft, setPositionLeft] = useState(0);
    const [resize, setResize] = useState(false);
    const [grabbing, setGrabbing] = useState(false);
    const currentBorder= useRef('');

    const handleMouseDown = (clicked)=>{
        setResize(true)
        currentBorder.current= (clicked.currentTarget.dataset.name)
    }

    const handleMouseUp = ()=>{
        if(resize)setResize(false)
        if(grabbing)setGrabbing(false)
        currentBorder.current = ""
            scroller.current.style.cursor ="grab"
                    previousPosition.current = 0

    }
    

    const setNewPosition =(currentPosition )=>{
       
        const observedChange = currentPosition- previousPosition.current;
    console.log(observedChange)
  setPositionRight(prev => prev - observedChange);
  setPositionLeft(prev => prev + observedChange);
        previousPosition.current = currentPosition
    }

    const grabAndScroll = (clicked)=>{
                            previousPosition.current = 0

        scroller.current.style.cursor ="grabbing"
        setGrabbing(true)
        const rightPosition = scroller.current.getBoundingClientRect().right
        const leftPosition = scroller.current.getBoundingClientRect().left
    }

    const handleGrabbing = (e)=>{
        const rect = scrollbarRef.current.getBoundingClientRect();
        const currentPosition = e.clientX;
        if (previousPosition.current == 0) previousPosition.current= currentPosition
        console.log(currentPosition, previousPosition.current)

        setNewPosition(currentPosition, previousPosition.current)
    }

    const handleMouseMove = (mousePosition)=>{
        const rect = scrollbarRef.current.getBoundingClientRect();
        const scrollerTab = scroller.current.getBoundingClientRect();
        const borderRightPosition = mousePosition.clientX - rect.right;
        const borderLefttPosition = mousePosition.clientX - rect.left;
        if (currentBorder.current=='borderRight'){
            borderRight.current.style.cursor ="ew-resize"
            if ( scrollerTab.width >=rect.width*MIN_WIDTH_PERCENTAGE) setPositionRight(-borderRightPosition)
        
        }
        if (currentBorder.current=='borderLeft'){
            borderLeft.current.style.cursor ="ew-resize"
            if ( scrollerTab.width >=rect.width*MIN_WIDTH_PERCENTAGE) setPositionLeft(borderLefttPosition)
        }
    }
      
    useEffect(()=>{//Side effect for resizing
        if (!resize ) return;
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
        return ()=>{
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mousemove', handleMouseMove)

        }
    },[resize])


     useEffect(()=>{//Side effect for resizing
        if (!grabbing) return;
         window.addEventListener('mousemove', handleGrabbing)
         window.addEventListener('mouseup', handleMouseUp)

        return ()=>{
            window.removeEventListener('mousemove', handleGrabbing)
            window.removeEventListener('mouseup', handleMouseUp)


        }
    },[grabbing])

    return(
        <div  ref={scrollbarRef} className="scrollbar">
            <div className="fake-border">
                <div   data-name='borderRight' ref={borderRight}  onMouseDown={handleMouseDown} className="border"style={{width:positionRight+2}} ></div>
                <div   ref={scroller} onMouseDown={grabAndScroll} className="scroller"></div>
                <div   data-name='borderLeft' ref={borderLeft}  onMouseDown={handleMouseDown} className="border"style={{width:positionLeft+2}} ></div>

            </div>
        </div>
    )
}

export default ScrollBar