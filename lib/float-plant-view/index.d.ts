/*!
    @e53e04ac/ipp5-static/lib/float-plant-view/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Chart } from 'chart.js';

import { Ipp5DailySummaryData } from 'ipp5-types';

import { BaseView } from '../base-view/index';
import { Get } from '../hold/index';

export declare namespace FloatPlantView {

    type Options = Record<never, never>;

    type EventSpecs = {
        'fetch': {
            input: Record<never, never>;
            output: undefined | null | Ipp5DailySummaryData['plants'][0];
        };
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
    };

    type Self = BaseView<EventSpecs, HTMLElement> & {
        readonly _FloatPlantView: Get<_Self>;
        readonly plantNameLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly dailySampleCanvas: Get<BaseView<Record<never, never>, HTMLCanvasElement>>;
        readonly dailySampleChart: Get<Chart>;
        readonly update: {
            (params: {
                readonly plant: Ipp5DailySummaryData['plants'][0];
            }): Promise<void>;
        };
        readonly load: {
            (params: Record<never, never>): Promise<void>;
        };
        readonly show: {
            (): Promise<void>;
        };
        readonly hide: {
            (): Promise<void>;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type FloatPlantView = FloatPlantView.Self;

export declare const FloatPlantView: FloatPlantView.ConstructorWithCompanion;
