/*!
    @e53e04ac/ipp5-static/lib/query-args/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index.js';
import { hold } from '../hold/index.js';
import { unwrap } from '../hold/index.js';

/** @type {import('.').QueryArgs.Constructor} */
const constructor = ((options) => {

    const _options = ({
        queryString: hold(() => {
            return (
                typeof options == 'object'
                    ? unwrap(options.queryString)
                    : unwrap(options)
            );
        }),
    });

    /** @type {import('.').QueryArgs._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        query: hold(() => {
            const query = new Map();
            for (const pairString of _options.queryString().split('&')) {
                const match = pairString.split(/^([^=]*)=(.*)$/);
                if (match != null) {
                    const key = decodeURIComponent(match[1]);
                    const value = decodeURIComponent(match[2]);
                    if (!query.has(key)) {
                        query.set(key, []);
                    }
                    query.get(key).push(value);
                }
            }
            return query;
        }),
        stringToBoolean: ((stringValue) => {
            if (stringValue === 'true') {
                return true;
            }
            if (stringValue === 'false') {
                return false;
            }
            return null;
        }),
        stringToNumber: ((stringValue) => {
            if (stringValue.match(/^(\+|-)?(0?\.)?\d+$/)) {
                return parseFloat(stringValue);
            }
            return null;
        }),
    });

    /** @type {import('.').QueryArgs.Self} */
    const self = ({
        ...Base({}),
        _QueryArgs: (() => {
            return _self;
        }),
        booleanValues: ((name) => {
            const booleanValues = [];
            for (const stringValue of self.stringValues(name)) {
                const booleanValue = _self.stringToBoolean(stringValue);
                if (booleanValue !== null) {
                    booleanValues.push(booleanValue);
                } else {
                    booleanValues.push(null);
                }
            }
            return booleanValues;
        }),
        numberValues: ((name) => {
            const numberValues = [];
            for (const stringValue of self.stringValues(name)) {
                const numberValue = _self.stringToNumber(stringValue);
                if (numberValue !== null) {
                    numberValues.push(numberValue);
                } else {
                    numberValues.push(null);
                }
            }
            return numberValues;
        }),
        stringValues: ((name) => {
            const values = _self.query().get(name);
            const stringValues = [];
            if (values != null) {
                stringValues.push(...values);
            }
            return stringValues;
        }),
        booleanValue: ((name, index = 0) => {
            const booleanValues = self.booleanValues(name);
            if (index < 0 || index >= booleanValues.length) {
                return null;
            }
            return booleanValues[index];
        }),
        numberValue: ((name, index = 0) => {
            const numberValues = self.numberValues(name);
            if (index < 0 || index >= numberValues.length) {
                return null;
            }
            return numberValues[index];
        }),
        stringValue: ((name, index = 0) => {
            const stringValues = self.stringValues(name);
            if (index < 0 || index >= stringValues.length) {
                return null;
            }
            return stringValues[index];
        }),
        booleanValueOr: ((name, defaultValue = false) => {
            const booleanValue = self.booleanValue(name);
            if (booleanValue === null) {
                return defaultValue;
            }
            return booleanValue;
        }),
        numberValueOr: ((name, defaultValue = 0) => {
            const numberValue = self.numberValue(name);
            if (numberValue === null) {
                return defaultValue;
            }
            return numberValue;
        }),
        stringValueOr: ((name, defaultValue = '') => {
            const stringValue = self.stringValue(name);
            if (stringValue === null) {
                return defaultValue;
            }
            return stringValue;
        }),
    });

    return self;

});

/** @type {import('.').QueryArgs.Companion} */
const companion = ({});

/** @type {import('.').QueryArgs.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as QueryArgs };
