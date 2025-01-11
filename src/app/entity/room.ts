import { Time } from "@angular/common";
import { Event } from "./event";

export class Room {

    private _id: number;

    private _building: string;
    private _level: number;
    private _sector: string;

    private _name: string;
    private _status: number;

    private _schedule_lock: Time;
    private _schedule_unlock: Time;

    private _lockdown: boolean;
    private _maintance: boolean;

    private events: Event[] = [];

    constructor(
        id: number,
        b: string,    
        l: number,
        s: string,
        n:  string,
        status: number,
    ) {
        this._id = id;
        this._building   = b;    this._name           = n;    
        this._level      = l;    this._status         = status;     this._lockdown           = false;
        this._sector     = s;                                       this._maintance          = false;
    }

    // --- Events --- //

    public getEvents(): Event[] {
        return this.events;
    }

    public addEvent(e: Event): void {
        this.events.push(e);
    }

    // --- Gettery i Settery --- //

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get building(): string {
        return this._building;
    }
    public set building(value: string) {
        this._building = value;
    }

    public get level(): number {
        return this._level;
    }
    public set level(value: number) {
        this._level = value;
    }

    public get sector(): string {
        return this._sector;
    }
    public set sector(value: string) {
        this._sector = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get status(): number {
        return this._status;
    }
    public set status(value: number) {
        this._status = value;
    }

    public get schedule_lock(): Time {
        return this._schedule_lock;
    }
    public set schedule_lock(value: Time) {
        this._schedule_lock = value;
    }

    public get schedule_unlock(): Time {
        return this._schedule_unlock;
    }
    public set schedule_unlock(value: Time) {
        this._schedule_unlock = value;
    }

    public get lockdown(): boolean {
        return this._lockdown;
    }
    public set lockdown(value: boolean) {
        this._lockdown = value;
    }

    public get maintance(): boolean {
        return this._maintance;
    }
    public set maintance(value: boolean) {
        this._maintance = value;
    }

}
