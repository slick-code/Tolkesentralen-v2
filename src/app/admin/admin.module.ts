    import { NgModule }       from '@angular/core';
    import { CommonModule }   from '@angular/common';

    import { AdminComponent }     from './admin.component';
    import { OppdragComponent } from './oppdrag.component'
    import { OversettelseComponent } from './oversettelse.component'
    import { UtdelComponent } from './utdel.component'
    
    import { AdminRoutingModule } from './admin-routing.module';
    

    @NgModule({
      imports: [
        CommonModule,
        AdminRoutingModule
      ],
      declarations: [
        AdminComponent,
        OppdragComponent,
        OversettelseComponent,
        UtdelComponent
      ],
      //bootstrap: [ AppComponent ]
    })
    export class AdminModule { }