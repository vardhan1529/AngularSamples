import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GroupInfo } from './group_menu';
//import './main.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';


declare var $: any;
@Component({
    selector: 'my-app',
    templateUrl: './src/app.html',
    styleUrls: ['./src/styles.scss', './src/main.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    windowResize(): void {
        $("body").css("height", $(window).height() + "px");
        $(window).resize(function () {
                    console.log($(window).height());
            $("body").css("height", $(window).height() + "px");
        });
    }

    GroupMenu: GroupInfo[];
    ngOnInit(): void {
        this.windowResize();
        this.GroupMenu = [{Active : false, Name : "District A", Order: 0}, {Active : true, Name : "District B", Order: 1}];
    }
}