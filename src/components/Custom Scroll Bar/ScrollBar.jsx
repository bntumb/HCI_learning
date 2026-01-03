import { useState, useEffect, useRef, useReducer } from "react";


const ScrollBar=()=>{

    const MIN_WIDTH = 200;
    
    const scrollbarRef = useRef(null);
    const borderRight = useRef(null);
    const scroller = useRef(null)
    const [position, setPosition] = useState(0);
    const [resize, setResize] = useState(false);

    const handleMouseDown = (click)=>{
        const element = click.target
        const computedStyle = window.getComputedStyle(element)
        setResize(true)
    }

    const handleMouseUp = ()=>{
        setResize(false)
    }

    const handleMouseMove = (mousePosition)=>{
        const rect = scrollbarRef.current.getBoundingClientRect();
        const borderPosition = mousePosition.clientX - rect.right;
        borderRight.current.style.cursor ="ew-resize"
        if (borderPosition <=0 && borderPosition >=-rect.width+MIN_WIDTH) setPosition(-borderPosition)
         console.log("x relative to scrollbar:", borderPosition);
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

    return(
        <div  ref={scrollbarRef} className="scrollbar">
            <div className="fake-border">
                <div   ref={borderRight} onMouseDown={handleMouseDown} className="border"style={{width:position+2}} ></div>
                <div   ref={scroller} className="scroller"></div>
            </div>
        </div>
    )
}

export default ScrollBar