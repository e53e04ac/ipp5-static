/*!
    @e53e04ac/ipp5-static/lib/unknown-page-view/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { BaseView } from '../base-view/index';
import { Get } from '../hold/index';
import { ValueOrGet } from '../hold/index';

export declare namespace UnknownPageView {

    type HashParams = {
        readonly type: 'unknown';
        readonly hash: string;
    };

    type Options = {
        readonly hashParams: ValueOrGet<HashParams>;
    };

    type EventSpecs = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
    };

    type Self = BaseView<EventSpecs, HTMLElement> & {
        readonly _UnknownPageView: Get<_Self>;
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

export declare type UnknownPageView = UnknownPageView.Self;

export declare const UnknownPageView: UnknownPageView.ConstructorWithCompanion;
