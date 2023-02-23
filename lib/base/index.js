/*!
    @e53e04ac/ipp5-static/lib/base/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { hold } from '../hold/index.js';
import { unwrap } from '../hold/index.js';

/** @type {import('.').Base.Constructor} */
const constructor = ((options) => {

    const _options = ({
        tags: hold(() => {
            return unwrap(options.tags) || {};
        }),
    });

    /** @type {import('.').Base._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        createDate: hold(() => {
            return new Date();
        }),
        uuid: hold(() => {
            return window.crypto.randomUUID();
        }),
        tags: hold(() => {
            return _options.tags();
        }),
    });

    /** @type {import('.').Base.Self} */
    const self = ({
        _Base: (() => {
            return _self;
        }),
    });

    _self.createDate();

    return self;

});

/** @type {import('.').Base.Companion} */
const companion = ({});

/** @type {import('.').Base.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Base };
