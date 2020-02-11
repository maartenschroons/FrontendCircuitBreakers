import { Vat } from './vat.model';
import { Observable } from 'rxjs';
import { Druif } from './druif.model';

export class Process {
    
    constructor(public id: number, public vatId: number, public persmethodeId: number, public actief: number, public persHoeveelheid: number, public oogst: number, public persDruk: number, public vat: Observable<Vat>, public druif: Observable<Druif[]>) {

    }
}
