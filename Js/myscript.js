
let card = {
    name:'Adarkar Valkyrie',
    launchCost : ['whiteEarth','whiteEarth','ColorlessEarth','ColorlessEarth','ColorlessEarth','ColorlessEarth'],
    combinedManaCost : function(){
        let cost = this.launchCost.length;
        return cost;
    },
    cardType: 'creature',
    subType: 'angel',
    expansion: {
        expansionID: 7,
        name: 'Commander 2018',
        rarity: 'rare',
        numberCards: 307
    },

    cardNumber: 60,
    
    flavourText:{
        author:'Jeremy Jarvis',
        quote:'She does not escort the dead to the afterlife, but resurrect them to make them fight and die again.'
    },
    abilities:[{
        name:'flying'
    },{
        name:'vigilance'
    },{
        name:'return from the dead',
        cost:['tapping'],
        description:'When target creature other than Adarkar Valkyrie dies this turn, return that card to the battlefield under your control.'
    }],

    illustrator:{
        ID:32,
        name:'Jeremy',
        surname:'Jarvis',
    },

    constitution: 5,
    strength: 4,

    cardImage:'img/adarkar-valkyrie.jpg',
};

console.log(card.combinedManaCost());
console.log(card.launchCost.length);