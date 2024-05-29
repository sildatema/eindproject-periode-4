import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, Font, FontUnit } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Zealot } from './zealot.js'
import { Tower } from './tower.js'
//import { Projectile } from './towerProjectile.js'

export class Game extends Engine {
    wave = 0
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 144,
            displayMode: DisplayMode.FitScreen
        })
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.money = 0
        console.log("start de game!")
        this.label = new Label({
            // text: 'money: 0',
            pos: new Vector(10, 10),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)
        let zealot = new Zealot()
        this.add(zealot)
        let tower = new Tower(500, 200)
        this.add(tower)

    }
    addScore() {
        this.money++
    }

}


new Game()
