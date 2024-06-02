import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemys } from './enemys.js'


export class Watcher extends Enemys {
    constructor() {
        super({ width: Resources.Watcher.width, height: Resources.Watcher.height })

    }

    onInitialize() {
        const sprite = Resources.Watcher.toSprite()
        this.scale = new Vector(0.1, 0.1)
        this.graphics.use(sprite)
        sprite.flipHorizontal = true
        this.speed = 500
        this.pos = new Vector(-100, 200)
        this.startWalking()
        this.hp = 30
        this.damage = 10
    }
}
