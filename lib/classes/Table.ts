import { ITable } from "../interfaces/ITable";

export class Table implements ITable {


    //public

    get number(): number {
        return this._number;
    }
    public set number(v: number) {
        this._number = v;
    }
    get ZoneNumber(): number {
        return this._zoneNumber;
    }
    set ZoneNumber(zoneNumber: number) {
        this._zoneNumber = zoneNumber;
    }
    //protected

    //private
    private _number: number = 0;
    private _zoneNumber: number = 0;

}