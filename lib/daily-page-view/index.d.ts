/*!
    @e53e04ac/ipp5-static/lib/daily-page-view/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Ipp5DailySummaryData } from 'ipp5-types';

import { BaseView } from '../base-view/index';
import { Get } from '../hold/index';
import { ValueOrGet } from '../hold/index';

export declare namespace DailyPageView {

    type HashParams = {
        readonly type: 'daily';
        readonly year: number;
        readonly month: number;
        readonly day: number;
    };

    type Options = {
        readonly hashParams: ValueOrGet<HashParams>;
    };

    type EventSpecs = {
        'fetch': {
            input: {
                readonly hashParams: HashParams;
            };
            output: undefined | null | Ipp5DailySummaryData;
        };
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
    };

    type Self = BaseView<EventSpecs, HTMLElement> & {
        readonly _DailyPageView: Get<_Self>;
        readonly previousDayButton: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly dateLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly nextDayButton: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly monthLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly dailyPowerGenerationLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly monthlyPowerGenerationLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly greenCountLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly yellowCountLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly redCountLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly weatherIcon: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly durationOfSunshineLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly averageTempertureLabel: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly plantViews: Get<BaseView<Record<never, never>, HTMLElement>>;
        readonly update: {
            (params: {
                readonly dailySummaryData: Ipp5DailySummaryData;
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

export declare type DailyPageView = DailyPageView.Self;

export declare const DailyPageView: DailyPageView.ConstructorWithCompanion;
