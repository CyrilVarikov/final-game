import React, { Component } from 'react';
import '../css/canvasAnimation.css';

export default class AnimationCanvas extends Component{
    constructor(props){
        super(props);

        this.fps = 0;
        this.startAnimation = this.startAnimation.bind(this);
        this.tick = this.tick.bind(this);
        this.draw = this.draw.bind(this);
    }

    draw(ctx, canvas, sprite, x = 0){
        ctx.clearRect(0, 0, 500, 500);

        x = (x >= 367 ? 0 : x + 75);

        ctx.drawImage(sprite, x, 550, 75, 75, 10, 10, 100, 200);

        requestAnimationFrame(this.tick(ctx, canvas, sprite, x));
    }

    tick(ctx, canvas, sprite, x = 0) {
        if(this.fps > 50){
            this.draw(ctx, canvas, sprite, x = 0);
            this.fps = 0;
        }

        this.fps++;
        requestAnimationFrame(this.tick(ctx, canvas, sprite, x));
    }

    //75
    //367
    
    startAnimation(){

        const canvas = document.getElementById('canvas');
        console.log(canvas);
        const ctx = canvas.getContext('2d');
        const sprite = new Image();
        sprite.src = './app/images/sorlosheet.png';
        sprite.onload = () => {
            console.log('load', ctx);
            this.tick(ctx, canvas, sprite);
            requestAnimationFrame(this.tick(ctx, canvas, sprite, x = 0));
        }
    }

    render(){
        return(
            <canvas id="canvas" width="500" height="500" onClick={this.startAnimation}></canvas>
        )
    }
}


