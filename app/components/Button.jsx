import React from 'react';


export default function Button(props){
    return <input type={props.type} value={props.value} className={props.className} onClick={props.onClick}/>
}