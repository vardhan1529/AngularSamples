import { Component } from '@angular/core';
import './test.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';


declare var $: any; 
@Component({
    selector: 'my-app',
    templateUrl: './src/app.html',
    styleUrls: ['./src/styles.scss']

})
export class AppComponent {
fire():void{
    $('body').append("<div>asdf</div>");
}
}