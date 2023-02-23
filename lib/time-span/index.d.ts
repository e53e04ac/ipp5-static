/*!
    @e53e04ac/ipp5-static/lib/time-span/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index';
import { Get } from '../hold/index';
import { ValueOrGet } from '../hold/index';

export declare namespace TimeSpan {

    type Options = ValueOrGet<number> | {
        readonly totalMilliseconds: ValueOrGet<number>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
    };

    type Self = Base & {
        readonly _TimeSpan: Get<_Self>;
        readonly totalMilliesconds: Get<number>;
        readonly totalSeconds: Get<number>;
        readonly totalMinutes: Get<number>;
        readonly totalHours: Get<number>;
        readonly day: Get<number>;
        readonly hours: Get<number>;
        readonly minutes: Get<number>;
        readonly seconds: Get<number>;
        readonly milliseconds: Get<number>;
        readonly D: Get<string>;
        readonly h: Get<string>;
        readonly m: Get<string>;
        readonly s: Get<string>;
        readonly n: Get<string>;
        readonly hh: Get<string>;
        readonly mm: Get<string>;
        readonly ss: Get<string>;
        readonly nnn: Get<string>;
        readonly Dhhmmssnnn: Get<string>;
        readonly add: {
            (params: {
                readonly day?: number;
                readonly hours?: number;
                readonly minutes?: number;
                readonly seconds?: number;
                readonly milliseconds?: number;
            }): Self;
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
                readonly day?: number;
                readonly hours?: number;
                readonly minutes?: number;
                readonly seconds?: number;
                readonly milliseconds?: number;
            }): Self;
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
        readonly toString: {
            (): string;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type TimeSpan = TimeSpan.Self;

export declare const TimeSpan: TimeSpan.ConstructorWithCompanion;
