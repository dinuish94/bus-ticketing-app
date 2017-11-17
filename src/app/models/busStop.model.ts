export class BusStop {
    id: number;
    location: String = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}