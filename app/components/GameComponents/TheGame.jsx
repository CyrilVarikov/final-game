import React, { Component } from 'react';
import '../../css/TheGame.css';

import HealthBar from './HealthBar.jsx';
import FillHealthBar from '../../Classes/HealthBar.js';
import NameCreater from '../../Classes/MonsterNameCreater.js';
import Hero from './Hero.jsx';
export default class TheGame extends Component {
    constructor(props){
        super(props);

        this.nameMonster = 'Monster';

    }


    componentDidMount(){
        const heroBar = new FillHealthBar('heroHealth');
        heroBar.fillProgressBar();

        const monsterBar = new FillHealthBar('monsterHealth')
        monsterBar.fillProgressBar();
    }

    componentWillMount(){
        const creater = new NameCreater();
        this.nameMonster = creater.generateName();
    }



    render(){
        return (
            <div className='app theGame'>
                <section className='header'>
                    <HealthBar name={window.PlayerName} id='heroHealth' />
                    <HealthBar name={this.nameMonster} id='monsterHealth' />
                </section>
                <Hero img={props.img}/>
                {/* <Boss name='Monster'/> */}
            </div>
        )
    }
}