import { Actor, Engine, Vector, DisplayMode, } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { gameover } from "./gameover.js"




export class Enemys extends Actor {
    speed
    hp
    damage
    onscreen


    onPostUpdate(engine) {
        this.on("enterviewport", () => this.onscreen = true)
        if (this.isOffScreen && this.onscreen === true) {
            this.kill()
            this.scene.killedEnemy()
            this.scene.playerHP = this.scene.playerHP - this.damage
            console.log('ik ben weg en dood')
            if (this.scene.playerHP <= 0) {

                this.scene.engine.goToScene('Gameover')
            }
        }
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
