import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GroupMenuComponent } from './group_menu.component';
import { RouterModule } from '@angular/router';
import { LiftReplica } from './lift_replica/lift_replica.component';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            {
                path: 'lift_replica',
                component: LiftReplica
            },
            {
                path: 'flow',
                component: GroupMenuComponent
            }]
        )],
    bootstrap: [AppComponent],
    declarations: [AppComponent, GroupMenuComponent, LiftReplica]
})
export class AppModule{
    
}