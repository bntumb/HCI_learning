import { useState, useEffect, useRef, useCallback } from "react";

const ScrollBar = () => {
    const MIN_WIDTH_PERCENTAGE = 10/100;
    
    const scrollbarRef = useRef(null);
    const borderRight = useRef(null);
    const borderLeft = useRef(null);
    const scroller = useRef(null);
    const shouldUpdate = useRef(false);
    const previousPosition = useRef(0);
    const [positionRight, setPositionRight] = useState(0);
    const [positionLeft, setPositionLeft] = useState(0);
    const [resize, setResize] = useState(false);
    const [grabbing, setGrabbing] = useState(false);
    const currentBorder = useRef('');
    const [scrollerPosition, setScrollerPosition] = useState({positionLeft:0, positionRight:0})
    const [zoomedContainerWidth, setZoomedContainerWidth] = useState(0)
 
    const handleResizingWithMouse = (clicked) => {
        setResize(true);
        currentBorder.current = clicked.currentTarget.dataset.name;
    }

    const handleMouseUp = useCallback(() => {
        setResize(false);
        setGrabbing(false);
        currentBorder.current = "";
        if (scroller.current) {
            scroller.current.style.cursor = "grab";
        }
        previousPosition.current = 0;
    }, []); // No dependencies needed

    const setNewPosition = useCallback((currentPosition) => {
        const observedChange = currentPosition - previousPosition.current;
        previousPosition.current = currentPosition;
        const rect = scrollbarRef.current.getBoundingClientRect();

                setScrollerPosition(prev=>{

                const nextLeft = prev.positionLeft + observedChange;
                const nextRight = prev.positionRight - observedChange;
                shouldUpdate.current = (nextLeft > 0  && nextLeft < rect.width )&& (nextRight > 0 && nextRight < rect.width);

                console.log(shouldUpdate.current ? 'Updating' : 'Bounds exceeded', { nextLeft, nextRight, rect   });

                if (shouldUpdate.current){
                    return {
                        positionLeft: nextLeft,
                        positionRight: nextRight,
                    };
                }
                else{
                    return {
                        positionLeft: prev.positionLeft,
                        positionRight: prev.positionRight,
                    };
                }
                
            });

    }, []); // Uses functional updates, no dependencies needed

    const grabAndScroll = (clicked) => {
        previousPosition.current = 0;
        scroller.current.style.cursor = "grabbing";
        setGrabbing(true);
    }

    const handleGrabbing = useCallback((e) => {
        if (!scrollbarRef.current) return;
        const currentPosition = e.clientX;
        if (previousPosition.current === 0) {
            previousPosition.current = currentPosition;
            return; // Don't update on first move
        }
        setNewPosition(currentPosition);
    }, [setNewPosition]);

    const handleMouseMove = useCallback((mousePosition) => {
        if (!scrollbarRef.current || !scroller.current) return;
        const rect = scrollbarRef.current.getBoundingClientRect();
        const scrollerTab = scroller.current.getBoundingClientRect();
        const borderRightPosition = mousePosition.clientX - rect.right;
        const borderLeftPosition = mousePosition.clientX - rect.left;
        
        if (currentBorder.current === 'borderRight') {
            if (borderRight.current) {
                borderRight.current.style.cursor = "ew-resize";
            }

            if (scrollerTab.width >= rect.width * MIN_WIDTH_PERCENTAGE) {
                setScrollerPosition({...scrollerPosition, positionRight : -borderRightPosition})
            }
        }

        if (currentBorder.current === 'borderLeft') {
            if (borderLeft.current) {
                borderLeft.current.style.cursor = "ew-resize";
            }
            if (scrollerTab.width >= rect.width * MIN_WIDTH_PERCENTAGE) {
                setScrollerPosition({...scrollerPosition, positionLeft : borderLeftPosition})
            }
        }

        const currentWidth = rect.width 
        const scrollerTabWidth =  scrollerTab.width
                const scrollerPercentage = ((scrollerTabWidth)/100 )

        StoreZoomState({currentWidth, scrollerTabWidth} )

    }, []); // refs are stable

    const StoreZoomState =({currentWidth,  scrollerTabWidth} )=>{

        const scrollerTabPercentage = Math.round((scrollerTabWidth/currentWidth)*100 )
        setZoomedContainerWidth(scrollerTabPercentage)

        console.log(scrollerTabPercentage)
    }

    useEffect(() => {
        if (!resize) return;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [resize, handleMouseMove, handleMouseUp]);

    useEffect(() => {
        if (!grabbing) return;
        window.addEventListener('mousemove', handleGrabbing);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleGrabbing);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [grabbing, handleGrabbing, handleMouseUp]);

    return (
        
        <div ref={scrollbarRef} className="scrollbar">
            <div className="fake-border">
                <div data-name='borderRight' ref={borderRight} onMouseDown={handleResizingWithMouse} className="border" style={{width: scrollerPosition.positionRight + 2}}></div>
                <div ref={scroller} onMouseDown={grabAndScroll} className="scroller"></div>
                <div data-name='borderLeft' ref={borderLeft} onMouseDown={handleResizingWithMouse} className="border" style={{width:scrollerPosition.positionLeft + 2}}></div>
            </div>
        </div>
    )
}

export default ScrollBar;