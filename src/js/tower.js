import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
//import { Enemys } from './enemys.js'
import { Projectile } from "./towerProjectile.js"
import { Zealot } from "./zealot.js"

export class Tower extends Actor {
    timer = 0
    constructor(x, y) {
        super({ width: Resources.SaNon.width, height: Resources.SaNon.height })
        this.pos = new Vector(x, y)
    }
    onInitialize() {
        this.scale = new Vector(0.3, 0.3)
        const sprite = Resources.SaNon.toSprite()
        this.graphics.use(sprite)
        let range = new Actor({ radius: 1000 })
        this.addChild(range)
        range.on('collisionstart', (event) => this.shoot(event))
    }


    onPostUpdate() {
        if (this.timer < 120) {
            this.timer++
        }
    }

    shoot(event) {
        if (this.timer === 120) {
            if (event.other instanceof Zealot) {
                let projectile = new Projectile(this.pos.x, this.pos.y, event)
                this.scene.add(projectile)
                // console.log("an enemy is in range")
                // this.timer = 0
            }
        }
    }
}