/*!
    @e53e04ac/ipp5-static/lib/date-time/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index.js';
import { hold } from '../hold/index.js';
import { unwrap } from '../hold/index.js';

/** @type {import('.').DateTime.Constructor} */
const constructor = ((options) => {

    const _options = ({
        time: hold(() => {
            return (
                typeof options === 'object'
                    ? unwrap(options.time)
                    : unwrap(options)
            );
        }),
    });

    /** @type {import('.').DateTime._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').DateTime.Self} */
    const self = ({
        ...Base({}),
        _DateTime: (() => {
            return _self;
        }),
        date: hold(() => {
            return new Date(_options.time());
        }),
        time: (() => {
            return self.date().getTime();
        }),
        year: (() => {
            return self.date().getFullYear();
        }),
        month: (() => {
            return self.date().getMonth() + 1;
        }),
        day: (() => {
            return self.date().getDate();
        }),
        hours: (() => {
            return self.date().getHours();
        }),
        minutes: (() => {
            return self.date().getMinutes();
        }),
        seconds: (() => {
            return self.date().getSeconds();
        }),
        milliseconds: (() => {
            return self.date().getMilliseconds();
        }),
        Y: (() => {
            return self.year().toString();
        }),
        M: (() => {
            return self.month().toString();
        }),
        D: (() => {
            return self.day().toString();
        }),
        h: (() => {
            return self.hours().toString();
        }),
        m: (() => {
            return self.minutes().toString();
        }),
        s: (() => {
            return self.seconds().toString();
        }),
        n: (() => {
            return self.milliseconds().toString();
        }),
        YYYY: (() => {
            return self.Y().padStart(4, '0');
        }),
        MM: (() => {
            return self.M().padStart(2, '0');
        }),
        DD: (() => {
            return self.D().padStart(2, '0');
        }),
        hh: (() => {
            return self.h().padStart(2, '0');
        }),
        mm: (() => {
            return self.m().padStart(2, '0');
        }),
        ss: (() => {
            return self.s().padStart(2, '0');
        }),
        nnn: (() => {
            return self.n().padStart(3, '0');
        }),
        YYYYMMDDhhmmssnnn: (() => {
            return `${self.YYYY()}${self.MM()}${self.DD()}${self.hh()}${self.mm()}${self.ss()}${self.nnn()}`;
        }),
        add: (({
            year = 0,
            month = 0,
            day = 0,
            hours = 0,
            minutes = 0,
            seconds = 0,
            milliseconds = 0,
        }) => {
            return companion.from({
                year: year + self.year(),
                month: month + self.month(),
                day: day + self.day(),
                hours: hours + self.hours(),
                minutes: minutes + self.minutes(),
                seconds: seconds + self.seconds(),
                milliseconds: milliseconds + self.milliseconds(),
            });
        }),
        addYear: ((year) => {
            return self.add({ year });
        }),
        addMonth: ((month) => {
            return self.add({ month });
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
            year = self.year(),
            month = self.month(),
            day = self.day(),
            hours = self.hours(),
            minutes = self.minutes(),
            seconds = self.seconds(),
            milliseconds = self.milliseconds(),
        }) => {
            return companion.from({ year, month, day, hours, minutes, seconds, milliseconds });
        }),
        setYear: ((year) => {
            return self.set({ year });
        }),
        setMonth: ((month) => {
            return self.set({ month });
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
                split('${Y}').join(self.Y()).
                split('${M}').join(self.M()).
                split('${D}').join(self.D()).
                split('${h}').join(self.h()).
                split('${m}').join(self.m()).
                split('${s}').join(self.s()).
                split('${n}').join(self.n()).
                split('${YYYY}').join(self.YYYY()).
                split('${MM}').join(self.MM()).
                split('${DD}').join(self.DD()).
                split('${hh}').join(self.hh()).
                split('${mm}').join(self.mm()).
                split('${ss}').join(self.ss()).
                split('${nnn}').join(self.nnn());
        }),
        toString: (() => {
            return self.format('${YYYY}/${MM}/${DD} ${hh}:${mm}:${ss}.${nnn}');
        }),
        firstMonthInYear: (() => {
            return self.set({ month: 1, day: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        }),
        lastMonthInYear: (() => {
            return self.firstDayInMonth().add({ year: 1 }).add({ month: -1 });
        }),
        monthsInYear: (() => {
            return [...companion.range({
                begin: self.firstMonthInYear(),
                end: self.lastMonthInYear().add({ month: 1 }),
                step: {
                    month: 1,
                },
            })];
        }),
        firstDayInMonth: (() => {
            return self.set({ day: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        }),
        lastDayInMonth: (() => {
            return self.firstDayInMonth().add({ month: 1 }).add({ day: -1 });
        }),
        daysInMonth: (() => {
            return [...companion.range({
                begin: self.firstDayInMonth(),
                end: self.lastDayInMonth().add({ day: 1 }),
                step: {
                    day: 1,
                },
            })];
        }),
        firstHourInDay: (() => {
            return self.set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        }),
        lastHourInDay: (() => {
            return self.firstHourInDay().add({ day: 1 }).add({ hours: -1 });
        }),
        hoursInDay: (() => {
            return [...companion.range({
                begin: self.firstHourInDay(),
                end: self.lastHourInDay().add({ hours: 1 }),
                step: {
                    hours: 1,
                },
            })];
        }),
    });

    return self;

});

/** @type {import('.').DateTime.Companion} */
const companion = ({
    now: (() => {
        return constructor(Date.now());
    }),
    from: (({
        year = 1970,
        month = 1,
        day = 1,
        hours = 0,
        minutes = 0,
        seconds = 0,
        milliseconds = 0,
    }) => {
        return constructor({
            time: new Date(year, month - 1, day, hours, minutes, seconds, milliseconds).getTime(),
        });
    }),
    range: (function* ({ begin, end, step }) {
        let value = begin;
        while (value.time() < end.time()) {
            yield value;
            const nextValue = value.add(step);
            if (value.time() == nextValue.time()) {
                throw new Error();
            }
            value = nextValue;
        }
    }),
    years: (function* ({ begin, end, includeEnd = true }) {
        yield* companion.range({
            begin: companion.from({ year: begin }),
            end: companion.from({ year: (includeEnd ? end + 1 : end) }),
            step: { year: 1 },
        });
    }),
});

/** @type {import('.').DateTime.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as DateTime };
