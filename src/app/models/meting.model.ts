import { Observable } from 'rxjs';
import { SoortMeting } from './soort-meting.model';

export class Meting {
    constructor(public id: number, public soortMetingId: number, public vinificatieId: number, public gebruikerId: string, public meting: number, public tijd: Date, public soortMeting: Observable<SoortMeting>){}
}
