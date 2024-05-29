import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Zealot: new ImageSource('images/Zealot.webp'),
    SaNon: new ImageSource('images/Shadow_Assassin_Armor.webp'),
    Arrow: new ImageSource('images/Arrow.png')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }