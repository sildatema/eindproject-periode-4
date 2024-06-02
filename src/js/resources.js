import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Zealot: new ImageSource('images/Zealot.webp'),
    SaNon: new ImageSource('images/Shadow_Assassin_Armor.webp'),
    Arrow: new ImageSource('images/Arrow.png'),
    Watcher: new ImageSource('images/Watcher.webp'),
    FrozenScythe: new ImageSource('images/Frozen_Scythe_Projectile.webp'),
    background_intro: new ImageSource('images/background_intro.jpg'),
    button: new ImageSource('images/startknop.webp'),
    dragonhead: new ImageSource('images/DragonHead.webp'),

}
const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }