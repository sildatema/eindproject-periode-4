import { Actor, Engine, Vector, DisplayMode, } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemys } from "./enemys.js"
import { Zealot } from "./zealot.js"


export class Projectile extends Actor {
    damage
    delay
    sprite
    level
    constructor(x, y, Target, Level) {
        super({ width: Resources.Arrow.width, height: Resources.Arrow.height })
        this.pos = new Vector(x, y)
        this.target = Target
        this.level = Level
    }
    onInitialize() {
        this.scale = new Vector(0.1, 0.1)
        console.log(this.target)
        this.ProjectileUpgrades()
        this.actions.meet(this.target.other, this.speed)
        this.on('collisionstart', (event) => this.bulletHits(event))
        this.scene.add(this);
        setTimeout(() => {
            this.kill()
        }, 1500) // Delay each spawn by 0.5 second
    }


    ProjectileUpgrades() {
        switch (this.level) {
            case 1:
                this.speed = 300
                this.damage = 10
                this.sprite = Resources.Arrow.toSprite()
                this.graphics.use(this.sprite)
                console.log(this.level)
                break;
            case 2:
                this.speed = 500
                this.damage = 20
                this.sprite = Resources.FrozenScythe.toSprite()
                this.graphics.use(this.sprite)
                console.log(this.level, this.speed)
                break;
            case 3:
                this.speed = 1000
                this.damage = 1000
                this.sprite = Resources.Zealot.toSprite()
                console.log(this.sprite)
                this.graphics.use(this.sprite)
                console.log(this.level, this.speed)
                break;
        }
    }

    bulletHits(event) {
        if (event.other instanceof Enemys) {
            event.other.hp -= this.damage
            if (event.other.hp <= 0) {
                this.scene.money = this.scene.money + 1000
                event.other.kill()
                this.scene.killedEnemy()
            }
            this.kill()
        }
    }

}

