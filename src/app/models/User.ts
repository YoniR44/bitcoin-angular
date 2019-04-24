export default class User {

    name: string;
    coins: number = 100;
    moves: Array<any>;
    constructor(name: string) {
        this.name = name;
        this.moves = [];
    }
}