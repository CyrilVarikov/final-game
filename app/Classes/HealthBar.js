import ProgressBar from 'progressbar.js';


export default class Health{
    constructor(id){
        this.id = id;
    }

    fillProgressBar(){
        const line = new ProgressBar.Line(`#${this.id}`,{
            color: '#b30000',
            text: {
                value : '100HP',
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#fff',
                    position: 'absolute',
                    left: '40%',
                    top: '5px',
                    padding: 0,
                    margin: 0
                }
            }
        });

        line.animate(1.0);
    }

}