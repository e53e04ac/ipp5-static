/*!
    @e53e04ac/ipp5-static/lib/base-view/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from '../event-emitter/index';
import { Get } from '../hold/index';
import { ValueOrGet } from '../hold/index';

export declare namespace BaseView {

    type Options<TEventSpecs extends EventEmitter.EventSpecs, TElement> = {
        readonly content: ValueOrGet<object>;
        readonly initialize?: {
            (it: Self<TEventSpecs, TElement>): void;
        };
        readonly __GenericTypes__?: {
            readonly TEventSpecs: TEventSpecs;
            readonly TElement: TElement;
        };
    };

    type _Self<TEventSpecs extends EventEmitter.EventSpecs, TElement> = {
        readonly options: Get<Options<TEventSpecs, TElement>>;
        readonly _options: Get<unknown>;
    };

    type Self<TEventSpecs extends EventEmitter.EventSpecs, TElement> = EventEmitter<TEventSpecs> & {
        readonly _BaseView: Get<_Self<TEventSpecs, TElement>>;
        readonly ui: Get<JQuery<TElement>>;
        readonly el: Get<TElement>;
        readonly find: {
            <TElement extends HTMLElement, TEventSpecs extends EventEmitter.EventSpecs>(selector: string, initialize?: {
                (it: Self<TEventSpecs, TElement>): void;
            }): Self<TEventSpecs, TElement>;
        };
        readonly append: {
            <TElement extends HTMLElement, TEventSpecs extends EventEmitter.EventSpecs>(create: {
                (): Self<TEventSpecs, TElement>;
            }, initialize?: {
                (it: Self<TEventSpecs, TElement>): void;
            }): void;
        };
    };

    type Constructor = {
        <TEventSpecs extends EventEmitter.EventSpecs, TElement>(options: Options<TEventSpecs, TElement>): Self<TEventSpecs, TElement>;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type BaseView<TEventSpecs extends EventEmitter.EventSpecs, TElement> = BaseView.Self<TEventSpecs, TElement>;

export declare const BaseView: BaseView.ConstructorWithCompanion;
