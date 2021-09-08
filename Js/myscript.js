
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
        quote:'He does not accompany the dead to the afterlife, but resurrect them to make them fight and die again.'
    },
    abilities:[{
        name:'fly'
    },{
        name:'vigilance'
    },{
        name:'return from the dead',
        cost:['tapping'],
        description:'When target creature other than Adarkar Valkyrie dies this turn, return that card to the battlefield under your control.'
    }]
};

console.log(card.launchCost);