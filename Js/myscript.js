
let card = {
    name:'Adarkar Valkyrie',
    launchCost : ['white','white','Colorless','Colorless','Colorless','Colorless'],
    combinedManaCost : function(){
        let cost = this.launchCost.length;
        return cost;
    },
    type: 'creature',
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
        name:'flying',
        cost:'not any',
        description:'creature can fly'
    },{
        name:'vigilance',
        cost:'not any',
        description:'creature not tapping if attack'
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

let abilityContent='';

if(card.abilities.length){
    abilityContent = '<ul class="card-ability">';
    for(let i = 0; i < card.abilities.length; i++){
        let currentAbility = card.abilities[i];
        abilityContent += '---------------------------';
        abilityContent +=   `<li>Name: ${currentAbility.name}</li>`;
        abilityContent +=   `<li>cost: ${currentAbility.cost} </li>
                            <li>description: ${currentAbility.description} </li>`;              
        abilityContent += '---------------------------';               
    }
    abilityContent += '</ul>';
}

let cardDisplay = 
`<ul class="card-element">
    <li>Name: ${card.name}</li>
    <li>Launch combined cost mana: ${card.launchCost.join(' - ')}</li>
    <li>Total launch cost: ${card.combinedManaCost()} mana</li>
    <li>Card Type: ${card.type} - ${card.subType}</li>
    <li>Expansion: 
        <ul class="expansion">
            <li>Name: ${card.expansion.name}</li>
            <li>Rarity: ${card.expansion.rarity}</li>
            <li>Tot. cards: ${card.expansion.numberCards}</li>
            <li>Card number: ${card.cardNumber}</li>
        </ul>
    </li>
    <li>Ability:${abilityContent}</li>
    <li>Flavour text:<em> ${card.flavourText.quote}</em></li>
    <li>Illustrator: ${card.illustrator.name} - ${card.illustrator.surname} </em></li>
    <li>Costitution: ${card.constitution}</li>
    <li>Strength: ${card.strength}</li>
    <img src="img/adarkar-valkyrie.jpg" alt="card image">
</ul>`

document.getElementById('card-deck').innerHTML += cardDisplay;