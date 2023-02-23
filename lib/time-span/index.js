/*!
    @e53e04ac/ipp5-static/lib/time-span/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index.js';
import { hold } from '../hold/index.js';
import { unwrap } from '../hold/index.js';

/** @type {import('.').TimeSpan.Constructor} */
const constructor = ((options) => {

    const _options = ({
        totalMilliseconds: hold(() => {
            return (
                typeof options === 'object'
                    ? unwrap(options.totalMilliseconds)
                    : unwrap(options)
            );
        }),
    });

    /** @type {import('.').TimeSpan._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').TimeSpan.Self} */
    const self = ({
        ...Base({}),
        _TimeSpan: (() => {
            return _self;
        }),
        totalMilliesconds: hold(() => {
            return _options.totalMilliseconds();
        }),
        totalSeconds: hold(() => {
            return Math.floor(self.totalMilliesconds() / 1000);
        }),
        totalMinutes: hold(() => {
            return Math.floor(self.totalSeconds() / 60);
        }),
        totalHours: hold(() => {
            return Math.floor(self.totalMinutes() / 60);
        }),
        day: hold(() => {
            return Math.floor(self.totalHours() / 24);
        }),
        hours: hold(() => {
            return self.totalHours() % 24;
        }),
        minutes: hold(() => {
            return self.totalMinutes() % 60;
        }),
        seconds: hold(() => {
            return self.totalSeconds() % 60;
        }),
        milliseconds: hold(() => {
            return self.totalMilliesconds() % 1000;
        }),
        D: hold(() => {
            return self.day().toString();
        }),
        h: hold(() => {
            return self.hours().toString();
        }),
        m: hold(() => {
            return self.minutes().toString();
        }),
        s: hold(() => {
            return self.seconds().toString();
        }),
        n: hold(() => {
            return self.milliseconds().toString();
        }),
        hh: hold(() => {
            return self.h().padStart(2, '0');
        }),
        mm: hold(() => {
            return self.m().padStart(2, '0');
        }),
        ss: hold(() => {
            return self.s().padStart(2, '0');
        }),
        nnn: hold(() => {
            return self.n().padStart(3, '0');
        }),
        Dhhmmssnnn: hold(() => {
            return `${self.D()}${self.hh()}${self.mm()}${self.ss()}${self.nnn()}`;
        }),
        add: (({
            day = 0,
            hours = 0,
            minutes = 0,
            seconds = 0,
            milliseconds = 0
        }) => {
            return constructor({
                totalMilliseconds: () => ((((day + self.day()) * 24 + (hours + self.hours())) * 60 + (minutes + self.minutes())) * 60 + (seconds + self.seconds())) * 1000 + (milliseconds + self.milliseconds()),
            });
        }),
        addDay: ((day) => {
            return self.add({ day });
        }),
        addHours: ((hours) => {
            return self.add({ hours });
        }),
        addMinutes: ((minutes) => {
            return self.add({ minutes });
        }),
        addSeconds: ((seconds) => {
            return self.add({ seconds });
        }),
        addMilliseconds: ((milliseconds) => {
            return self.add({ milliseconds });
        }),
        set: (({
            day = self.day(),
            hours = self.hours(),
            minutes = self.minutes(),
            seconds = self.seconds(),
            milliseconds = self.milliseconds()
        }) => {
            return constructor({
                totalMilliseconds: () => ((((day) * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000 + milliseconds,
            });
        }),
        setDay: ((day) => {
            return self.set({ day });
        }),
        setHours: ((hours) => {
            return self.set({ hours });
        }),
        setMinutes: ((minutes) => {
            return self.set({ minutes });
        }),
        setSeconds: ((seconds) => {
            return self.set({ seconds });
        }),
        setMilliseconds: ((milliseconds) => {
            return self.set({ milliseconds });
        }),
        format: ((string) => {
            return string.
                split('${D}').join(self.D()).
                split('${h}').join(self.h()).
                split('${m}').join(self.m()).
                split('${s}').join(self.s()).
                split('${n}').join(self.n()).
                split('${hh}').join(self.hh()).
                split('${mm}').join(self.mm()).
                split('${ss}').join(self.ss()).
                split('${nnn}').join(self.nnn());
        }),
        toString: (() => {
            return self.format('${D} ${hh}:${mm}:${ss}.${nnn}');
        }),
    });

    return self;

});

/** @type {import('.').TimeSpan.Companion} */
const companion = ({});

/** @type {import('.').TimeSpan.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as TimeSpan };
