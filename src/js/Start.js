import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, Font, FontUnit, ScreenElement } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { level } from './level.js'
import { gameover } from './gameover.js'
import { intro } from './intro.js'

export class Button extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.button.toSprite())
        this.pos = new Vector(1100, 200)
        this.scale = new Vector(0.1, 0.1)
        this.on('pointerup', () => this.scene.engine.goToScene('Level'))
    }
}