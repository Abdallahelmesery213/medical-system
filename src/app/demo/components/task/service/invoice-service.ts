import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TaxServices {

    constructor(private http: HttpClient) { }

    getTax(): Observable<any>{
        return this.http.get('/data/servicesWithTax.json')
            
    }

    
    
}
