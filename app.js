const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        level: 1
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        level: 1
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

    bossDead()
    checkHero()
}

function attackBoss() {
    let stab = 0
    for (let i = 0; i < heroes.length; i++) {
        stab += heroes[i].damage
    }
    console.log('stab', stab)
    drawGame()
}

function bossAttacks() {

    for (let i = 0; i < heroes.length; i++) {
        heroes[i].health -= boss.damage
        console.log('attacked!', heroes[i].health)
    }
    drawGame()
}

setInterval(bossAttacks, 5000)

function bossDead() {
    if (boss.health <= 0) {
        window.alert('You slayed the monster!')
        boss.maxHealth += 50;
        gold += boss.money;
        boss.level++;
        boss.health = boss.maxHealth;
        killedBosses++;
    }
    drawGame()
}

function healHero(heroName) {
    if (gold >= 10) {
        heroes.find(hero => hero.name == heroName)
        hero.health += 10;
        gold -= 10;
    }
    drawGame()
}

function checkHero() {
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].health <= 0) {
            window.alert
        }
    }
}
