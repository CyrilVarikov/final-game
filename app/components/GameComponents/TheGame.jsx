import React, { Component } from 'react';
import '../../css/TheGame.css';

import HealthBar from './HealthBar.jsx';
import FillHealthBar from '../../Classes/HealthBar.js';

export default class TheGame extends Component {
    constructor(props){
        super(props);

        this.heroId = 'heroHealth';
        this.monsterId = 'monsterHealth';

    }


    componentDidMount(){
        const heroBar = new FillHealthBar('heroHealth');
        heroBar.fillProgressBar();

        const monsterBar = new FillHealthBar('monsterHealth')
        monsterBar.fillProgressBar();
    }

    

    render(){
        return (
            <div className='app theGame'>
                <section className='header'>
                    <HealthBar name={window.PlayerName} id='heroHealth' />
                    <HealthBar name='Monster' id='monsterHealth' />
                </section>
                {/* <Hero name={props.name}/>
                <Boss name='Monster'/> */}
            </div>
        )
    }
}