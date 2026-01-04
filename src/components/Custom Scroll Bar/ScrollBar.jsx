import { useState, useEffect, useRef } from "react";


const ScrollBar=()=>{

    const MIN_WIDTH_PERCENTAGE = 10/100;
    
    const scrollbarRef = useRef(null);
    const borderRight = useRef(null);
    const borderLeft  = useRef(null);
    const scroller = useRef(null)
    const [positionRight, setPositionRight] = useState(0);
    const [positionLeft, setPositionLeft] = useState(0);
    const [resize, setResize] = useState(false);
    const currentBorder= useRef('');

    const handleMouseDown = (clicked)=>{
        setResize(true)
        currentBorder.current= (clicked.currentTarget.dataset.name)
    }

    const handleMouseUp = ()=>{
        setResize(false)
        currentBorder.current = ""
        scroller.current.style.cursor ="grab"
    }

    const grabAndScroll = ()=>{
        scroller.current.style.cursor ="grabbing"
    }

    const handleMouseMove = (mousePosition)=>{
        const rect = scrollbarRef.current.getBoundingClientRect();
        const scrollerTab = scroller.current.getBoundingClientRect();
        const borderRightPosition = mousePosition.clientX - rect.right;
        const borderLefttPosition = mousePosition.clientX - rect.left;
        
            if (currentBorder.current=='borderRight'){
                borderRight.current.style.cursor ="ew-resize"
                if ( scrollerTab.width >=rect.width*MIN_WIDTH_PERCENTAGE) setPositionRight(-borderRightPosition)
                console.log("Width of Scrolling Tab:", scrollerTab.width);
            
            }
            if (currentBorder.current=='borderLeft'){
                borderLeft.current.style.cursor ="ew-resize"
                if ( scrollerTab.width >=rect.width*MIN_WIDTH_PERCENTAGE) setPositionLeft(borderLefttPosition)
                console.log("Width of Scrolling Tab:", scrollerTab.width);
            }
        }
      
    useEffect(()=>{
        if (!resize) return;
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)

        return ()=>{
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mousemove', handleMouseMove)
        }

    },[resize])


    useEffect(()=>{

    })

    return(
        <div  ref={scrollbarRef} className="scrollbar">
            <div className="fake-border">
                <div   data-name='borderRight' ref={borderRight} onMouseDown={handleMouseDown} className="border"style={{width:positionRight+2}} ></div>
                <div   ref={scroller} onMouseUp={handleMouseUp} onMouseDown={grabAndScroll} className="scroller"></div>
                <div   data-name='borderLeft' ref={borderLeft} onMouseDown={handleMouseDown} className="border"style={{width:positionLeft+2}} ></div>

            </div>
        </div>
    )
}

export default ScrollBar