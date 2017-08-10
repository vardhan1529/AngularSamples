import { Component, OnInit, Input } from '@angular/core';
import { GroupInfo } from './group_menu';

@Component({
    selector: 'group_menu',
    templateUrl: './src/group_menu.html'
})

export class GroupMenuComponent{
@Input("groups") 
Groups: GroupInfo[];
}