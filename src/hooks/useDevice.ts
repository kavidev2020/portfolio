"use client"
import { useEffect, useState } from "react";

export function useDeviceWidth() {
 const [width, setWidth] = useState<number|null>(0)    
 
 useEffect(() => {
  setWidth(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth)

  window.addEventListener('resize', handleResize);
  return () => {
   window.removeEventListener('resize', handleResize)  
  }  
 },[])
 return width
}