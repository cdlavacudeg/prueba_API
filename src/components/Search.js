import React from 'react'

export default function Search({type,searchValue,setFunction}) {
    const onSearchValueChange=(event,setFunction)=>{
        setFunction(event.target.value);
    }
    return (
        <input 
        placeholder={`Filtrar tareas por ${type}`}
        className="TodoSearch"
        value={searchValue} 
        onChange={(e)=>onSearchValueChange(e,setFunction)}/>
    )
}
