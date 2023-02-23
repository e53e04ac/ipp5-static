/*!
    @e53e04ac/ipp5-static/lib/base-view/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from '../event-emitter/index.js';
import { hold } from '../hold/index.js';
import { unwrap } from '../hold/index.js';

/** @type {import('.').BaseView.Constructor} */
const constructor = ((options) => {

    /** @typedef {Required<typeof options>['__GenericTypes__']} GenericTypes */
    /** @typedef {GenericTypes['TEventSpecs']} TEventSpecs */
    /** @typedef {GenericTypes['TElement']} TElement */

    const _options = ({
        content: hold(() => {
            return unwrap(options.content);
        }),
        initialize: options.initialize,
    });

    /** @type {import('.').BaseView._Self<TEventSpecs, TElement>} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').BaseView.Self<TEventSpecs, TElement>} */
    const self = ({
        ...EventEmitter({}),
        _BaseView: (() => {
            return _self;
        }),
        ui: hold(() => {
            return window.$(_options.content());
        }),
        el: (() => {
            const it = self.ui().get(0);
            if (it == null) {
                throw new Error();
            }
            return it;
        }),
        find: ((selector, initialize) => {
            /** @type {Parameters<Exclude<typeof initialize, undefined>>[0]} */
            const it = constructor({
                content: (() => self.ui().find(selector)),
            });
            if (initialize != null) {
                initialize(it);
            }
            return it;
        }),
        append: ((create, initialize) => {
            const it = create();
            self.ui().append(it.ui());
            if (initialize != null) {
                initialize(it);
            }
            return it;
        }),
    });

    if (_options.initialize != null) {
        _options.initialize(self);
    }

    return self;

});

/** @type {import('.').BaseView.Companion} */
const companion = ({});

/** @type {import('.').BaseView.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as BaseView };
