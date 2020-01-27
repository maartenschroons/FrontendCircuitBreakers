import { Vat } from './vat.model';

export class Process {
    
    constructor(public id: number, public vatId: number, public persmethodeId: number, public actief: number, public persHoeveelheid: number, public oogst: number, public persDruk: number, public vat: Vat) {

    }
}
