const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        level: 1,
        active: 'true'
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        level: 1,
        active: 'true'
    },
    {
        name: 'Brock Rockblang',
        type: 'troll',
        damage: 10,
        health: 75,
        level: 2,
        active: 'false'
    },
    {
        name: 'Ronvald Stormcracker',
        type: 'wizard',
        damage: 10,
        health: 150,
        level: 4,
        active: 'false'
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
    money: 50
}

let gold = 0
let killedBosses = 0

drawGame()

function drawGame() {
    let goldElem = document.getElementById('gold')
    let heroHealthElem = document.getElementById('hero-health')
    let heroLevelElem = document.getElementById('hero-level')
    let sidekickHealthElem = document.getElementById('sidekick-health')
    let sidekickLevelElem = document.getElementById('sidekick-level')
    let bossCountElem = document.getElementById('boss-count')
    let brockElem = document.getElementById('brock')
    let ronvaldElem = document.getElementById('ronvald')
    let ronvaldHealthElem = document.getElementById('ronvald-health')
    let ronvaldLevelElem = document.getElementById('ronvald-level')
    let brockHealthElem = document.getElementById('brock-health')
    let brockLevelElem = document.getElementById('brock-level')

    goldElem.innerHTML = `<span>Gold: ${gold}</span>`
    heroHealthElem.innerHTML = `<span>Health: ${heroes[0].health}</span>`
    heroLevelElem.innerHTML = `<span>Level: ${heroes[0].level}</span>`
    sidekickHealthElem.innerHTML = `<span>Health: ${heroes[1].health}</span>`
    sidekickLevelElem.innerHTML = `<span>Level: ${heroes[1].level}</span>`
    bossCountElem.innerHTML = `<span>Bosses Slain: ${killedBosses}</span>`
    if (heroes[2].active == 'true') {
        brockElem.innerHTML = `<div class="card border border-light rounded border-5 bg-black text-light p-1" onclick="healHero('Brock Rockblang')"><h5>Brock Rockblang 🐒</h5><p id="brock-health">Health</p><p id="brock-level">Level</p></div>`;
        brockHealthElem.innerHTML = `<span>Health: ${heroes[2].health}</span>`;
        brockLevelElem.innerHTML = `<span>Level: ${heroes[2].level}</span>`
    }
    if (heroes[3].active == 'true') {
        ronvaldElem.innerHTML = `<div class="card border border-light rounded border-5 bg-black text-light p-1" onclick="healHero('Ronvald Stormcracker')"><h5>Ronvald Stormcracker 🐒</h5><p id="ronvald-health">Health</p><p id="ronvald-level">Level</p></div>`;
        ronvaldHealthElem.innerHTML = `<span>Health: ${heroes[3].health}</span>`;
        ronvaldLevelElem.innerHTML = `<span>Level: ${heroes[3].level}</span>`
    }

    bossDead()
    checkHero()
}

function attackBoss() {
    let stab = 0
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].active == 'true') {
            stab += heroes[i].damage
            boss.health -= stab
        }
    }
    console.log('stab', stab)
    drawGame()
}

function bossAttacks() {

    for (let i = 0; i < heroes.length; i++) {
        heroes[i].health -= boss.damage
        console.log('attacked!', heroes[i].health)
    }
}

setInterval(bossAttacks, 5000)

function bossDead() {
    if (boss.health < 0) {
        window.alert('You slayed the monster!')
        boss.maxHealth += 50;
        gold += boss.money;
        boss.level++;
        boss.health = boss.maxHealth;
        killedBosses++;
        if (killedBosses % 3 == 0) {
            heroes.forEach(heroes => heroes.level++ && heroes.damage++)
        }
        drawGame()
    }
}

function healHero(heroName) {
    if (gold >= 10) {
        let heroToHeal = heroes.find(hero => hero.name == heroName)
        heroToHeal.health += 10;
        gold -= 10;
        drawGame()
    } else {
        window.alert('You are too poor!')
    }
}

function checkHero() {
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].health <= 0 && heroes[i].active != 'false') {
            window.alert('You lost a member of your party!');
            heroes[i].damage = 0;
            heroes[i].active = 'false';
        }
    }
}

function getFriend() {
    if (gold > 100) {
        heroes[3].active = 'true'
        gold -= 100
        drawGame()
    } else {
        window.alert('You are too poor!')
    }
}

function getBetterFriend() {
    if (gold > 200) {
        heroes[4].active = 'true'
        gold -= 200
        drawGame()
    } else {
        window.alert('You are too poor!')
    }

}