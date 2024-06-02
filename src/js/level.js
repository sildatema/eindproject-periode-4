import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, Font, FontUnit, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Zealot } from './zealot.js'
import { Watcher } from './watcher.js'
import { Tower } from './tower.js'
import { Projectile } from './towerProjectile.js'
import { Enemys } from './enemys.js'
import { Dragonhead } from './dragonhead'


export class level extends Scene {
    waveStrengthVariable
    numberOfSpawns
    wave
    waveStrengthRounded
    playerHP
    currentWave
    text
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 144,
            displayMode: DisplayMode.FitScreen
        })
        // this.start(ResourceLoader).then(() => this.startGame())
    }

    onActivate() {
        this.wave = 0
        this.money = 1500
        console.log("start de game!")
        this.waveLabel = new Label({
            text: `Wave: ${this.currentWave}`,
            pos: new Vector(600, 10),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.playerHP = 100
        this.wave = 1
        this.money = 1500
        console.log("start de game!")
        this.label = new Label({
            text: `je hebt :${this.money} coins`,
            pos: new Vector(10, 10),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })

        this.HP = new Label({
            text: `je hebt :${this.playerHP} coins`,
            pos: new Vector(1080, 10),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.waveLabel)
        this.add(this.HP)
        this.add(this.label)
        let tower = new Tower(500, 200)
        this.add(tower)
        let tower2 = new Tower(700, 550)
        this.add(tower2)
        let tower3 = new Tower(900, 150)
        this.add(tower3)
        let dragonhead = new Dragonhead()
        this.add(dragonhead)
        setTimeout(() => {
            this.Wave()
        }, 1000)
    }

    onPostUpdate() {
        this.label.text = `je hebt :${this.money} coins`
        this.HP.text = `je hebt :${this.playerHP} levens`
        this.waveLabel.text = `Wave: ${this.currentWave}`
        if (this.playerHP <= 0) {
            this.actors.forEach(actor => {
                actor.kill()
            })
            this.engine.goToScene('Gameover')
        }
    }

    killedEnemy() {
        this.numberOfSpawns--
        console.log(this.numberOfSpawns)
        if (this.numberOfSpawns === 0) {
            this.nextWave()
        }
    }
    nextWave() {
        setTimeout(() => {
            this.wave++
            this.Wave()
        }, 2000)
    }

    Wave() {
        this.currentWave = this.wave
        this.numberOfSpawns = 0
        console.log(this.numberOfSpawns), 'spawns'
        this.waveStrengthVariable = Math.random()
        this.waveStrength = this.waveStrengthVariable * this.currentWave
        this.waveStrengthRounded = Math.round(this.waveStrength) + 5
        console.log(this.currentWave)
        console.log(this.waveStrength, "wavestrenght")
        console.log(this.waveStrengthRounded)
        if (this.waveStrength < 1) {
            console.log("hoi")
            for (let i = 0; i < this.waveStrengthRounded; i++) {
                setTimeout(() => {
                    let zealot = new Zealot
                    this.add(zealot)
                    this.numberOfSpawns++
                }, i * 500)
            }
        }
        else if (this.waveStrength > 1 && this.waveStrength < 3) {
            console.log("maxi")
            for (let i = 0; i < this.waveStrengthRounded; i++) {
                setTimeout(() => {
                    let zealot = new Zealot
                    this.add(zealot)
                    this.numberOfSpawns++
                }, i * 400)

            } for (let i = 0; i < this.waveStrengthRounded - 5; i++) {
                setTimeout(() => {
                    let watcher = new Watcher
                    this.add(watcher)
                    this.numberOfSpawns++
                }, i * 400)

            }
        }
        if (this.waveStrength > 3) {
            console.log("giga")
            for (let i = 0; i < this.waveStrengthRounded + 10; i++) {
                setTimeout(() => {
                    let zealot = new Zealot
                    this.add(zealot)
                    this.numberOfSpawns++
                    let watcher = new Watcher
                    this.add(watcher)
                    this.numberOfSpawns++
                }, i * 300)
            }
        }

    }
}

