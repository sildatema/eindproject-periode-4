import { Actor, Engine, Vector, DisplayMode, Scene, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Button } from "./Start.js"

export class gameover extends Scene {
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 144,
            displayMode: DisplayMode.FitScreen
        })
        let background = new Actor()
        background.graphics.use(Resources.background_intro.toSprite())
        background.pos = new Vector(0, 0)
        background.scale = new Vector(100, 100)
        this.add(background)

        const button = new Button()
        this.add(button)
    }
    onActivate() {
        console.log("ded")
        const label = new Label({
            text: `en als alles weer vaag wordt weet jij alleen dat het deze keer niet gelukt is`,
            pos: new Vector(200, 100),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px,
                color: new Color(160, 32, 240)
            })
        })
        const label1 = new Label({
            text: `een gevoel van dejavu komt er , alsof je hier eerder bent geweest. en alles vervaagt.`,
            pos: new Vector(200, 200),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px,
                color: new Color(160, 32, 240)
            })
        })
        const label2 = new Label({
            text: `klik op start om het opnieuw te proberen`,
            pos: new Vector(200, 300),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px,
                color: new Color(160, 32, 240)
            })
        })
        this.add(label)
        this.add(label1)
        this.add(label2)

    }
}