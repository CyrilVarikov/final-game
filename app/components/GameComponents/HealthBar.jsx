import React, { Component } from 'react';



export default function HealthBar(props) {
    return(
        <section>
            <span className='characterName'>{props.name}</span>
            <div className='healthBar' id={props.id} onClick={props.onClick}></div>
        </section>
    )
}