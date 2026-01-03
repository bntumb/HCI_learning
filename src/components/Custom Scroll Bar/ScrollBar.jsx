import { useState, useEffect, useRef } from "react";


const ScrollBar=()=>{
    
    const scrollbarRef = useRef(null);
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
        if(borderPosition<=0 && borderPosition >= rect.width*-1) setPosition(-borderPosition)
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
                <div onMouseDown={handleMouseDown} className="border"style={{right:position}} ></div>
            </div>
        </div>
    )
}

export default ScrollBar