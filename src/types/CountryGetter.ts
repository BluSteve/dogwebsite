import {Country} from "./Country";
global.fetch = require("node-fetch");

export async function getCountries() {
    const response = await fetch("http://vocab.nic.in/rest.php/country/json");
    const jCountries = await response.json();
    let countries: Array<Country> = jCountries.countries.map(x => new Country(x.country.country_id,
        x.country.country_name));
    return countries;
}

// getCountries().then(value => console.log(value));