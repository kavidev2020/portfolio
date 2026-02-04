import { useEffect, useState } from "react";


export function usePath(){
 const [path, setPath] = useState<string>('');
 
 useEffect(()=>{
  setPath(window.location.hash.replace('#', ''))
  const onChangePath = () => setPath(window.location.hash.replace('#', ''));
  window.addEventListener('hashchange', onChangePath);
  return () => {
   window.removeEventListener('hashchange', onChangePath) 
  }
 },[])

 return path
}