import { Card } from "./card.model";

export class Passenger {
    id: number;
    name: string;
    address: string = '';
    endLocation: string = '';
    card: Card = new Card();
    account: String;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}