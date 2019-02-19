let members = [
    {
        name:'steve',
        age:29
    },
    {
        name:'Pascaline',
        age:42
    },
    {
        name:'Paul',
        age:16
    },
    {
        name:'Yasmine',
        age:24
    },
]

let vigil = {
    response=false
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function init() {
    let NewMembers = shuffle(members);
    startGame(NewMembers);
}

function startGame(members) {
    console.log('Start game : ', members);
}

function ask



init();


