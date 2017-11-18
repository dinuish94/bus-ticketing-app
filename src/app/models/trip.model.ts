export class Trip {
    id: number;
    tokenRef: string;
    busId: number;
    startLocation: string = '';
    endLocation: string = '';
    price: number;
    payWithCash: number;
    completed: boolean;
    distance: number;
    rate: number;
    currentBalance: number;
    passenger: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}