/*!
    @e53e04ac/ipp5-static/lib/unknown-page-view/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { BaseView } from '../base-view/index.js';
import { hold } from '../hold/index.js';
import { unwrap } from '../hold/index.js';

const viewTemplate = hold(() => {
    return window.$('.PPTemplates>.PPTemplate>.PPUnknownPageView');
});

/** @type {import('.').UnknownPageView.Constructor} */
const constructor = ((options) => {

    const _options = ({
        hashParams: hold(() => {
            return unwrap(options.hashParams);
        }),
    });

    /** @type {import('.').UnknownPageView._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').UnknownPageView.Self} */
    const self = ({
        ...BaseView({
            content: viewTemplate().clone(),
        }),
        _UnknownPageView: (() => {
            return _self;
        }),
        show: (async () => {
            self.ui().show({ effect: 'fade', duration: 200 });
        }),
        hide: (async () => {
            self.ui().hide({ effect: 'fade', duration: 200 });
        }),
    });

    self.ui().hide();

    return self;

});

/** @type {import('.').UnknownPageView.Companion} */
const companion = ({});

/** @type {import('.').UnknownPageView.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as UnknownPageView };
