
let card = {
    name:'Adarkar Valkyrie',
    launchCost : ['whiteEarth','whiteEarth','ColorlessEarth','ColorlessEarth','ColorlessEarth','ColorlessEarth'],
    combinedManaCost : 6,
    cardType: 'creature',
    subType: 'angel',
    expansion: {
        expansionID: 7,
        name: 'Commander 2018',
        rarity: 'rare',
    },
    flavourText:{
        author:'Jeremy Jarvis',
        quote:''
    },
    abilities:[{
        name:'fly',
        description:''
    },{
        name:'vigilance',
        description:''
    }]
};

console.log(card.launchCost);