export class Country {
    countryId: string;
    countryName: string;

    constructor(countryId: string, countryName: string) {
        this.countryId = countryId;
        this.countryName = countryName.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
}