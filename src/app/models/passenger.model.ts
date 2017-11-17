import { Card } from "./card.model";
import { Account } from "./account.model";

export class Passenger {
    id: number;
    name: string;
    address: string = '';
    endLocation: string = '';
    card: Card = new Card();
    account: Account;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}