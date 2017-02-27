import { Component, OnInit } from '@angular/core';
import { Oppdrag } from '../_models/models'
import { OppdragService } from '../_services/oppdrag.service'


@Component({
    templateUrl: "./app/admin/oversettelse.component.html"
})
export class OversettelseComponent {
   arrayOversettelse: Oppdrag[] = [];

    constructor(private oppdragService: OppdragService) { }

    ngOnInit() {
        // get users from secure api end point
        this.oppdragService.getOversettelser()
            .subscribe(oppdrag => {
                this.arrayOversettelse = oppdrag;
            });
    }
    
}