export class LiftDetails {
    NoOfStages: number;
    ActiveStageNo: number;
    Active: boolean;
    Direction: Direction;
    Halted: boolean;
    DoorOpened: boolean;
    Stages: StageDetails[];
    SelectedStages: number[];
}

export enum Direction {
    Up,
    Down
}

export enum UserInput {
    None,
    Up,
    Down
}

export class StageDetails {
    StageNo: number;
    Active: boolean;
    UpButtonPressed: boolean;
    DownButtonPressed: boolean;
    Alias: string;
}