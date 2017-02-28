import { Injectable } from '@angular/core';
import { Navbar } from '../_models/models'

@Injectable()
export class TempService {
    object: any;

    setObject(object: Navbar){
        this.object = object;
    }

    getObject(){
        return this.object;
    }
}