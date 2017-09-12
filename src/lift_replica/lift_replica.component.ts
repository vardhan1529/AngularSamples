import { Component, OnInit } from '@angular/core';
import {LiftDetails, StageDetails, Direction, UserInput } from "./lift_details";

@Component({
    templateUrl: './src/lift_replica/lift_replica.html',
    selector: 'lift_replica'
})
export class LiftReplica implements OnInit {
    liftDetails: LiftDetails;
    ngOnInit() {
        this.liftDetails = new LiftDetails();
        this.liftDetails.Active = true;
        this.liftDetails.ActiveStageNo = 0;
        this.liftDetails.NoOfStages = 4;
        this.liftDetails.Direction = Direction.Up;
        this.liftDetails.DoorOpened = false;
        this.liftDetails.Halted = false;
        this.liftDetails.Stages = [
            { Active: false, StageNo: 3, UpButtonPressed: false, DownButtonPressed: false, Alias: "3" },
            { Active: false, StageNo: 1, UpButtonPressed: false, DownButtonPressed: false, Alias: "1" },
            { Active: false, StageNo: 2, UpButtonPressed: false, DownButtonPressed: false, Alias: "2" },
            { Active: true, StageNo: 0, UpButtonPressed: false, DownButtonPressed: false, Alias: "G" }];
        this.liftDetails.Stages.sort((m, n): number => { if (m.StageNo > n.StageNo) return 1; if (m.StageNo < n.StageNo) return -1; return 0; }).reverse();
        setInterval(() => { this.LoopStages(); }, 1000);
    }

    LoopStages() {
        for (var i = 0; i < this.liftDetails.NoOfStages; i++) {
            var m = this.liftDetails.Stages[i];
            if (m.StageNo == this.liftDetails.ActiveStageNo) {
                m.Active = true;
            }
            else {
                m.Active = false;
            }
        }

        if (this.liftDetails.Direction == Direction.Up) {
            if (this.liftDetails.ActiveStageNo >= this.liftDetails.NoOfStages - 1) {
                this.liftDetails.Direction = Direction.Down;
            }
            else {
                this.liftDetails.ActiveStageNo++;
            }
        }
        else {
            if (this.liftDetails.ActiveStageNo <= 0) {
                this.liftDetails.Direction = Direction.Up;
            }
            else {
                this.liftDetails.ActiveStageNo--;
            }
        }
    }

    PressUpButton(stageNo: number) {
        this.liftDetails.Stages.filter(m => m.StageNo == stageNo)[0].UpButtonPressed = true;
    }

    PressDownButton(stageNo: number) {
        this.liftDetails.Stages.filter(m => m.StageNo == stageNo)[0].DownButtonPressed = true;
    }
}