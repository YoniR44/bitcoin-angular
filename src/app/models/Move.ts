export default class Move {

    at: number;
    constructor(public to: string, public toId: string, public amount: number) {
        this.at = Date.now();
    }
}