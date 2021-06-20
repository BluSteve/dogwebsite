import {Dog} from "./Dog";

global.fetch = require("node-fetch");

export async function getDogs(dogNumber: number) {
    const dogs: Array<Dog> = [];
    while (dogs.length < dogNumber) {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=100');
        const dogsJSON = await response.json();
        for (let dogJSON of dogsJSON) {
            let breeds = dogJSON.breeds[0];
            // only square dogs are allowed
            if (breeds && Math.abs(dogJSON.width - dogJSON.height) / (dogJSON.width + dogJSON.height) / 2 < 0.02) {
                let weight = getAverage(breeds.weight.metric);
                let height = getAverage(breeds.height.metric);
                let lifeSpan = getAverage(breeds.life_span);
                if (weight && height && lifeSpan)
                    dogs.push(new Dog(weight, height, lifeSpan,
                        breeds.name, dogJSON.url, breeds.temperament ? breeds.temperament.split(', ') : [],
                        breeds.origin ? breeds.origin.split(', ') : []));
            }
        }
    }
    return dogs.slice(0, dogNumber);
}

function getAverage(s: string): number {
    if (!s) return NaN;
    let sl: Array<string> = s.split(" - ");
    let total: number = 0;
    for (let n of sl) {
        total += parseInt(n);
    }
    return total / sl.length;
}
