import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemys } from './enemys.js'



export class Zealot extends Enemys {
    constructor() {
        super({ width: Resources.Zealot.width, height: Resources.Zealot.height })

    }
    onInitialize() {
        const sprite = Resources.Zealot.toSprite()
        this.scale = new Vector(0.2, 0.2)
        this.graphics.use(sprite)
        sprite.flipHorizontal = true
        this.speed = 300
        this.pos = new Vector(-100, 200)
        this.startWalking()
        this.hp = 30
        this.damage = 20
    }
}