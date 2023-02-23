/*!
    @e53e04ac/ipp5-static/lib/api-client/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Ipp5DailySummaryData } from 'ipp5-types';
import { Ipp5MenuData } from 'ipp5-types';
import { Ipp5MonthlySummaryData } from 'ipp5-types';
import { Ipp5YearlySummaryData } from 'ipp5-types';

import { EventEmitter } from '../event-emitter/index';
import { Get } from '../hold/index';
import { ValueOrGet } from '../hold/index';

export declare namespace ApiClient {

    type Options = {
        readonly uri: ValueOrGet<string>;
    };

    type EventSpecs = {
        'clientAgentId': {
            input: Record<never, never>;
            output: {
                readonly clientAgentId: string;
            };
        };
        'clientAgentTime': {
            input: Record<never, never>;
            output: {
                readonly clientAgentTime: string;
            };
        };
        'clientAgentNonce': {
            input: Record<never, never>;
            output: {
                readonly clientAgentNonce: string;
            };
        };
        'clientId': {
            input: Record<never, never>;
            output: {
                readonly clientId: string;
            };
        };
        'token': {
            input: Record<never, never>;
            output: {
                readonly token: string;
            };
        };
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly clientAgentId: Get<Promise<string>>;
        readonly clientAgentTime: Get<Promise<string>>;
        readonly clientAgentNonce: Get<Promise<string>>;
        readonly clientId: Get<Promise<string>>;
        readonly token: Get<Promise<string>>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _ApiClient: Get<_Self>;
        readonly menuData: {
            (params: Record<never, never>): Promise<Ipp5MenuData>;
        };
        readonly dailySummaryData: {
            (params: {
                readonly year: number;
                readonly month: number;
                readonly day: number;
            }): Promise<Ipp5DailySummaryData>;
        };
        readonly monthlySummaryData: {
            (params: {
                readonly year: number;
                readonly month: number;
            }): Promise<Ipp5MonthlySummaryData>;
        };
        readonly yearlySummaryData: {
            (params: {
                readonly year: number;
            }): Promise<Ipp5YearlySummaryData>;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type ApiClient = ApiClient.Self;

export declare const ApiClient: ApiClient.ConstructorWithCompanion;
