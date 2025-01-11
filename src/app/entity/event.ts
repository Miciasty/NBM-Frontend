
export class Event {

    /*private _id: number;*/

    private _status:    string;
    private _prefix:    string;
    private _value:     string;
    private _date:      Date; 


    constructor(/*id: number, */s: string, p: string, v: string) {
        /*this._id = id;*/
        this._status = s;
        this._prefix = p;
        this._value = v;
        this._date = new Date();
    }

    /*public get id(): number {
        return this._id;
    }*/

    public get status(): string {
        return this._status;
    }

    public get prefix(): string {
        return this._prefix;
    }

    public get value(): string {
        return this._value;
    }

    public get date(): Date {
        return this._date;
    }

}
