import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GroupMenuComponent } from './group_menu.component';

@NgModule({
    imports: [BrowserModule],
    bootstrap: [AppComponent],
    declarations: [AppComponent, GroupMenuComponent]
})
export class AppModule{
    
}