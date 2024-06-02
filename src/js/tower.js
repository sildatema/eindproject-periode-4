import { Actor, Engine, Vector, DisplayMode, Label, Font, FontUnit } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemys } from './enemys.js'
import { Projectile } from "./towerProjectile.js"
import { Zealot } from "./zealot.js"

export class Tower extends Actor {
    timer = 0
    labeltext
    upgrades
    label
    cooldown
    constructor(x, y) {
        super({ width: Resources.SaNon.width, height: Resources.SaNon.height })
        this.pos = new Vector(x, y)
    }
    onInitialize() {
        this.cooldown = 240
        this.upgrades = 0
        this.cost = 500
        this.scale = new Vector(0.3, 0.3)
        const sprite = Resources.SaNon.toSprite()
        this.graphics.use(sprite)
        let range = new Actor({ radius: 1000 })
        this.addChild(range)
        range.on('precollision', (event) => this.shoot(event))
        this.on("pointerup", () => this.Upgrade())


        // Create a label
        this.label = new Label({
            text: "Buy a weapon, Cost : 500",
            font: new Font({
                family: "Arial",
                size: 32,
                unit: FontUnit.Pixel
            }),
            color: "purple"
        })
        this.label.pos = new Vector(-160, -300)
        this.addChild(this.label)
    }

    Upgrade() {
        if (this.upgrades === 3) {
            return;
        }
        else if (this.cost <= this.scene.money) {
            this.upgrades++
            this.cooldown = this.cooldown / 2
            this.scene.money = this.scene.money - this.cost
            this.cost = this.cost + 500
            if (this.cost > 1500) {
                this.label.text = `deze tower is MAX level`
                return
            }
            else {
                this.label.text = `upgrade cost : ${this.cost}`
            }
        }
    }




    onPostUpdate() {
        if (this.timer < this.cooldown) {
            this.timer++
            if (this.cooldown < 30) {
                this.cooldown = 30
            }
        }
    }


    shoot(event) {
        if (this.timer >= this.cooldown) {
            if (event.other instanceof Enemys) {
                let projectile = new Projectile(this.pos.x, this.pos.y, event, this.upgrades)
                this.scene.add(projectile)
                this.timer = 0
            }
        }
    }
}