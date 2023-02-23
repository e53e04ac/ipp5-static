/*!
    @e53e04ac/ipp5-static/lib/event-emitter/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index.js';
import { hold } from '../hold/index.js';

/** @type {import('.').EventEmitter.Constructor} */
const constructor = ((options) => {

    /** @typedef {Required<typeof options>['__GenericTypes__']} GenericTypes */
    /** @typedef {GenericTypes['TEventSpecs']} TEventSpecs */

    const _options = ({});

    /** @type {import('.').EventEmitter._Self<TEventSpecs>} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        eventHandlerArrayMap: hold(() => {
            return {};
        }),
    });

    /** @type {import('.').EventEmitter.Self<TEventSpecs>} */
    const self = ({
        ...Base({}),
        _EventEmitter: (() => {
            return _self;
        }),
        on: ((eventType, eventHandler) => {
            let eventHandlerArray = _self.eventHandlerArrayMap()[eventType];
            if (eventHandlerArray == null) {
                eventHandlerArray = [];
                _self.eventHandlerArrayMap()[eventType] = eventHandlerArray;
            }
            eventHandlerArray.push(eventHandler);
        }),
        off: ((eventType, eventHandler) => {
            if (eventType != null) {
                const eventHandlerArray = _self.eventHandlerArrayMap()[eventType];
                if (eventHandlerArray != null) {
                    if (eventHandler == null) {
                        Reflect.deleteProperty(_self.eventHandlerArrayMap(), eventType);
                    } else {
                        const index = eventHandlerArray.indexOf(eventHandler);
                        if (index >= 0) {
                            eventHandlerArray.splice(index, 1);
                            if (eventHandlerArray.length < 1) {
                                Reflect.deleteProperty(_self.eventHandlerArrayMap(), eventType);
                            }
                        }
                    }
                }
            } else {
                for (const eventType of Object.keys(_self.eventHandlerArrayMap()).slice()) {
                    Reflect.deleteProperty(_self.eventHandlerArrayMap(), eventType);
                }
            }
        }),
        emitAll: (async (eventType, input) => {
            const eventHandlerArray = _self.eventHandlerArrayMap()[eventType];
            if (eventHandlerArray != null) {
                for (const eventHandler of eventHandlerArray) {
                    await eventHandler(input);
                }
            }
        }),
        emitOne: (async (eventType, input) => {
            const eventHandlerArray = _self.eventHandlerArrayMap()[eventType];
            if (eventHandlerArray != null) {
                const eventHandler = eventHandlerArray[0];
                if (eventHandler != null) {
                    await eventHandler(input);
                }
            }
        }),
        callAll: (async (eventType, input) => {
            const outputArray = [];
            const eventHandlerArray = _self.eventHandlerArrayMap()[eventType];
            if (eventHandlerArray != null) {
                const eventHandler = eventHandlerArray[0];
                if (eventHandler != null) {
                    outputArray.push(await eventHandler(input));
                }
            }
            return outputArray;
        }),
        callOne: (async (eventType, input) => {
            let output = undefined;
            const eventHandlerArray = _self.eventHandlerArrayMap()[eventType];
            if (eventHandlerArray != null) {
                const eventHandler = eventHandlerArray[0];
                if (eventHandler != null) {
                    output = await eventHandler(input);
                }
            }
            return output;
        }),
        callExactOne: (async (eventType, input) => {
            const eventHandlerArray = _self.eventHandlerArrayMap()[eventType];
            if (eventHandlerArray != null) {
                const eventHandler = eventHandlerArray[0];
                if (eventHandler != null) {
                    return await eventHandler(input);
                }
            }
            throw new Error();
        }),
    });

    return self;

});

/** @type {import('.').EventEmitter.Companion} */
const companion = ({});

/** @type {import('.').EventEmitter.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as EventEmitter };
