import { Actor, Engine, Vector, DisplayMode, } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
//import { Enemys } from "./enemys.js"
import { Zealot } from "./zealot.js"

export class Projectile extends Actor {
    target

    constructor(x, y, Target) {
        super({ width: Resources.Arrow.width, height: Resources.Arrow.height })
        this.pos = new Vector(x, y)
        this.target = Target
        let speed = 500
    }
    onInitialize() {
        this.pos = new Vector(400, 200)
        const sprite = Resources.Arrow.toSprite()
        this.scale = new Vector(0.1, 0.1)
        this.graphics.use(sprite)
        let damage = 1
        let level = 1
        let speed = 500
        console.log(this.target)
        this.actions.meet(this.target.other, speed)
        this.on('collisionstart', (event) => this.bulletHits(event))
    }


    ProjectileUpgrades() {
        switch (this.level) {
            case 1:
                this.speed
                this.damage
                sprite = this.graphics.use()
            case 2:
                this.speed
                this.damage
                sprite = this.graphics.use()
        }
    }

    bulletHits(event) {
        if (event.other instanceof Zealot) {
            event.other.hp = event.other.hp - this.damage
        }
    }


}

