import { ITable } from "../interfaces/ITable";

export class Table implements ITable {

    get ZoneNumber(): number {
        throw new Error("Method not implemented.");
    }
    set ZoneNumber(zoneNumber: number) {
        throw new Error("Method not implemented.");
    }
    //public

    public get number(): number {
        return this._number;
    }
    public set number(v: number) {
        this._number = v;
    }

    //protected

    //private
    private _number: number = 0;
    private _zoneNumber: number = 0;

}