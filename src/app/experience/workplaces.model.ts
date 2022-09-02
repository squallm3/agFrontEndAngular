export class WorkPlaces {
    public positions: Position[];

    constructor(public imagePath:string, public name: string, ...positions: Position[]) {
        this.positions = positions;
    }
}


export class Position {
    constructor(public positionName: string, public date:string, public taskList: string[]) {
    }
}