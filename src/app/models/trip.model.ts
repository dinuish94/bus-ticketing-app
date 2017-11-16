export class Trip {
    tokenRef: string;
    busId: number;
    startLocation: string = '';
    endLocation: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}