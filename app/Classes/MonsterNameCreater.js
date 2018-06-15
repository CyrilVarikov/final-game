export default class NameCreater{
    constructor(){
        this.adjectives = ['dirty', 'terrible', 'smelly', 'ugly', 'stupid'];
        this.monsterKinds = ['dragon', 'zombie', 'goblin', 'org', 'bandit'];
        this.names = ['Anger', 'Fear', 'Hatred', 'Greed', 'Cheater'];

    }

    generateName(){
        let finalName = '';

        let rand = 0 - 0.5 + Math.random() * (4 - 0 + 1)
        rand = Math.round(rand);
        
        finalName = `${this.adjectives[rand]} ${this.monsterKinds[rand]} ${this.names[rand]}`;
        
        return finalName;
    }
}