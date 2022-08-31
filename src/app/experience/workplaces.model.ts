export class WorkPlaces {
    name: string;
    date: string;
    positions: string[] = [];

    constructor(name: string, date: string, ...pos: string[]) {
        this.name = name;
        this.date = date;
        this.positions = pos;
    }
}

// class Positions {
//     name: string;
//     date: string;

// }