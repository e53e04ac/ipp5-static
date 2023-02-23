/*!
    @e53e04ac/ipp5-static/lib/query-args/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index';
import { Get } from '../hold/index';
import { ValueOrGet } from '../hold/index';

export declare namespace QueryArgs {

    type Options = ValueOrGet<string> | {
        readonly queryString: ValueOrGet<string>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly query: Get<Map<string, string[]>>;
        readonly stringToBoolean: {
            (stringValue: string): null | boolean;
        };
        readonly stringToNumber: {
            (stringValue: string): null | number;
        };
    };

    type Self = Base & {
        readonly _QueryArgs: Get<_Self>;
        readonly booleanValues: {
            (name: string): (null | boolean)[];
        };
        readonly numberValues: {
            (name: string): (null | number)[];
        };
        readonly stringValues: {
            (name: string): string[];
        };
        readonly booleanValue: {
            (name: string, index?: number): null | boolean;
        };
        readonly numberValue: {
            (name: string, index?: number): null | number;
        };
        readonly stringValue: {
            (name: string, index?: number): null | string;
        };
        readonly booleanValueOr: {
            (name: string, defaultValue?: boolean): boolean;
        };
        readonly numberValueOr: {
            (name: string, defaultValue?: number): number;
        };
        readonly stringValueOr: {
            (name: string, defaultValue?: string): string;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type QueryArgs = QueryArgs.Self;

export declare const QueryArgs: QueryArgs.ConstructorWithCompanion;
