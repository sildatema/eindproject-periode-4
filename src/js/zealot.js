import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
//import { Enemys } from './enemys.js'



export class Zealot extends Actor {
    constructor() {
        super({ width: Resources.Zealot.width, height: Resources.Zealot.height })

    }

    onInitialize() {
        console.log("init de Zealot")
        const sprite = Resources.Zealot.toSprite()
        this.scale = new Vector(0.2, 0.2)
        this.graphics.use(sprite)
        sprite.flipHorizontal = true
        this.speed = 200
        this.pos = new Vector(-100, 200)
        this.startWalking()
        this.hp = 20

    }
    startWalking() {
        console.log("init de enemy")
        this.path = [
            new Vector(0, 200),
            new Vector(400, 200),
            new Vector(400, 600),
            new Vector(700, 200),
            new Vector(700, 400),
            new Vector(1500, 100)

        ]
        for (let i = 0; i < this.path.length; i++) {
            this.actions.moveTo(this.path[i].x, this.path[i].y, this.speed)
        }
    }
}