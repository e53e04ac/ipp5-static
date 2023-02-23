/*!
    @e53e04ac/ipp5-static/lib/date-time/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index';
import { Get } from '../hold/index';
import { ValueOrGet } from '../hold/index';

export declare namespace DateTime {

    type Options = ValueOrGet<number> | {
        readonly time: ValueOrGet<number>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
    };

    type Self = Base & {
        readonly _DateTime: Get<_Self>;
        readonly date: Get<Date>;
        readonly time: Get<number>;
        readonly year: Get<number>;
        readonly month: Get<number>;
        readonly day: Get<number>;
        readonly hours: Get<number>;
        readonly minutes: Get<number>;
        readonly seconds: Get<number>;
        readonly milliseconds: Get<number>;
        readonly Y: Get<string>;
        readonly M: Get<string>;
        readonly D: Get<string>;
        readonly h: Get<string>;
        readonly m: Get<string>;
        readonly s: Get<string>;
        readonly n: Get<string>;
        readonly YYYY: Get<string>;
        readonly MM: Get<string>;
        readonly DD: Get<string>;
        readonly hh: Get<string>;
        readonly mm: Get<string>;
        readonly ss: Get<string>;
        readonly nnn: Get<string>;
        readonly YYYYMMDDhhmmssnnn: Get<string>;
        readonly add: {
            (params: {
                readonly year?: number;
                readonly month?: number;
                readonly day?: number;
                readonly hours?: number;
                readonly minutes?: number;
                readonly seconds?: number;
                readonly milliseconds?: number;
            }): Self;
        };
        readonly addYear: {
            (year: number): Self;
        };
        readonly addMonth: {
            (month: number): Self;
        };
        readonly addDay: {
            (day: number): Self;
        };
        readonly addHours: {
            (hours: number): Self;
        };
        readonly addMinutes: {
            (minutes: number): Self;
        };
        readonly addSeconds: {
            (seconds: number): Self;
        };
        readonly addMilliseconds: {
            (milliseconds: number): Self;
        };
        readonly set: {
            (params: {
                readonly year?: number;
                readonly month?: number;
                readonly day?: number;
                readonly hours?: number;
                readonly minutes?: number;
                readonly seconds?: number;
                readonly milliseconds?: number;
            }): Self;
        };
        readonly setYear: {
            (year: number): Self;
        };
        readonly setMonth: {
            (month: number): Self;
        };
        readonly setDay: {
            (day: number): Self;
        };
        readonly setHours: {
            (hours: number): Self;
        };
        readonly setMinutes: {
            (minutes: number): Self;
        };
        readonly setSeconds: {
            (seconds: number): Self;
        };
        readonly setMilliseconds: {
            (milliseconds: number): Self;
        };
        readonly format: {
            (string: string): string;
        };
        readonly toString: Get<string>;
        readonly firstMonthInYear: Get<Self>;
        readonly lastMonthInYear: Get<Self>;
        readonly monthsInYear: Get<Self[]>;
        readonly firstDayInMonth: Get<Self>;
        readonly lastDayInMonth: Get<Self>;
        readonly daysInMonth: Get<Self[]>;
        readonly firstHourInDay: Get<Self>;
        readonly lastHourInDay: Get<Self>;
        readonly hoursInDay: Get<Self[]>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = {
        readonly now: Get<Self>;
        readonly from: {
            (params: {
                readonly year?: number;
                readonly month?: number;
                readonly day?: number;
                readonly hours?: number;
                readonly minutes?: number;
                readonly seconds?: number;
                readonly milliseconds?: number;
            }): Self;
        };
        readonly range: {
            (params: {
                readonly begin: Self;
                readonly end: Self;
                readonly step: {
                    readonly year?: number;
                    readonly month?: number;
                    readonly day?: number;
                    readonly hours?: number;
                    readonly minutes?: number;
                    readonly seconds?: number;
                    readonly milliseconds?: number;
                };
            }): Generator<Self, void, void>;
        };
        readonly years: {
            (params: {
                readonly begin: number;
                readonly end: number;
                readonly includeEnd?: boolean;
            }): Generator<Self, void, void>;
        };
    };

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type DateTime = DateTime.Self;

export declare const DateTime: DateTime.ConstructorWithCompanion;
