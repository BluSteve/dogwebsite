export class Dog {
    weight: number;
    height: number;
    lifeSpan: number;
    name: string;
    url: string;
    temperament: Array<string>;
    origin: Array<string>;


    constructor(weight: number, height: number, lifeSpan: number, name: string, url: string, temperament: Array<string>, origin: Array<string>) {
        this.weight = weight;
        this.height = height;
        this.lifeSpan = lifeSpan;
        this.name = name;
        this.url = url;
        this.temperament = temperament.sort();
        this.origin = origin.sort();
    }
}