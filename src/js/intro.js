import { Actor, Engine, Vector, DisplayMode, Scene, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Button } from "./Start.js"

export class intro extends Scene {

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


        const label = new Label({
            text: `en als alles voor je ogen vervaagd wordt je wakker op een onbekende plek`,
            pos: new Vector(200, 100),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px,
                color: new Color(160, 32, 240)
            })
        })
        const label1 = new Label({
            text: `je herrinert je weinig. maar je ziet dat de draak aangevallen wordt!`,
            pos: new Vector(200, 200),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px,
                color: new Color(160, 32, 240)
            })
        })
        const label2 = new Label({
            text: `Upgrade je torens en Verdedig de draak!`,
            pos: new Vector(200, 300),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px,
                color: new Color(160, 32, 240)
            })
        })
        const label3 = new Label({
            text: `Klik op start om te beginnen`,
            pos: new Vector(200, 400),
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
        this.add(label3)
    }
}