/*!
    @e53e04ac/ipp5-static/lib/base/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Get } from '../hold/index';
import { ValueOrGet } from '../hold/index';

export declare namespace Base {

    type Options = {
        readonly tags?: ValueOrGet<Record<string, unknown>>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly tags: Get<unknown>;
        readonly createDate: Get<Date>;
        readonly uuid: Get<string>;
    };

    type Self = {
        readonly _Base: Get<_Self>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Base = Base.Self;

export declare const Base: Base.ConstructorWithCompanion;
