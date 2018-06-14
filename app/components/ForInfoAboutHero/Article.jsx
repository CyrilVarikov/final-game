import React from 'react';

import P from './P.jsx';

export default function Article(props){
    return (
        <article className={props.className}>
            <h2>About hero</h2>
            <P text={props.text}/>
            <figure className='figImg'>
                <figcaption>Weapon/Skills</figcaption>
                <img src={props.firstSkill} alt="FirstGun"/>
                <img src={props.secondSkill} alt="SecondGun"/>
            </figure>
            <figure>
                <figcaption>Appearance</figcaption>
                <img src={props.hero} className='rambo'/>
            </figure>
        </article>
    );
}