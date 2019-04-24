export default class MarketPrice {

    name: string;
    values: Array<any>
    description: string;
    constructor(name: string, values: Array<any>, description: string) {
        this.name = name;
        this.values = values;
        this.description = description;
    }
}