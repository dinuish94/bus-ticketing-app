export class Card {
    id: number;
    tokenRef: string;
    expDate: Date;
    balance: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
