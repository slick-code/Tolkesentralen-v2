    import { NgModule }              from '@angular/core';
    import { RouterModule, Routes }  from '@angular/router';
    import { HomeComponent }   from './home.component';
    
    const appRoutes: Routes = [
      { path: 'home', component: HomeComponent }
    ];
    @NgModule({
      imports: [
        RouterModule.forChild(appRoutes)
      ],
      exports: [
        RouterModule
      ]
    })
    export class HomeRoutingModule {}