/*!
    @e53e04ac/ipp5-static/lib/daily-page-view/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { BaseView } from '../base-view/index.js';
import { DateTime } from '../date-time/index.js';
import { hold } from '../hold/index.js';
import { unwrap } from '../hold/index.js';
import { PlantView } from '../plant-view/index.js';

const viewTemplate = hold(() => {
    return window.$('.PPTemplates>.PPTemplate>.PPDailyPageView');
});

/** @type {import('.').DailyPageView.Constructor} */
const constructor = ((options) => {

    const _options = ({
        hashParams: hold(() => {
            return unwrap(options.hashParams);
        }),
    });

    /** @type {import('.').DailyPageView._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').DailyPageView.Self} */
    const self = ({
        ...BaseView({
            content: viewTemplate().clone(),
        }),
        _DailyPageView: (() => {
            return _self;
        }),
        previousDayButton: hold(() => {
            return self.find('.previousDayButton');
        }),
        dateLabel: hold(() => {
            return self.find('.dateLabel');
        }),
        nextDayButton: hold(() => {
            return self.find('.nextDayButton');
        }),
        monthLabel: hold(() => {
            return self.find('.monthLabel');
        }),
        dailyPowerGenerationLabel: hold(() => {
            return self.find('.dailyPowerGenerationLabel');
        }),
        monthlyPowerGenerationLabel: hold(() => {
            return self.find('.monthlyPowerGenerationLabel');
        }),
        greenCountLabel: hold(() => {
            return self.find('.statusGreenCountLabel');
        }),
        yellowCountLabel: hold(() => {
            return self.find('.statusYellowCountLabel');
        }),
        redCountLabel: hold(() => {
            return self.find('.statusRedCountLabel');
        }),
        weatherIcon: hold(() => {
            return self.find('.weatherIcon');
        }),
        durationOfSunshineLabel: hold(() => {
            return self.find('.durationOfSunshineLabel');
        }),
        averageTempertureLabel: hold(() => {
            return self.find('.averageTempertureLabel');
        }),
        plantViews: hold(() => {
            return self.find('.plantViews');
        }),
        update: (async ({ dailySummaryData }) => {
            const today = DateTime.from({ year: dailySummaryData.year, month: dailySummaryData.month, day: dailySummaryData.day });
            const previousDay = today.addDay(-1);
            const nextDay = today.addDay(+1);
            self.previousDayButton().ui().attr('href', `#/daily/${previousDay.YYYY()}/${previousDay.MM()}/${previousDay.DD()}`);
            self.dateLabel().ui().text(`${today.year()}年 ${today.month()}月 ${today.day()}日 の発電量`);
            self.nextDayButton().ui().attr('href', `#/daily/${nextDay.YYYY()}/${nextDay.MM()}/${nextDay.DD()}`);
            if (dailySummaryData.weatherIcon.dailySample.error != null) {
                self.weatherIcon().ui().empty().append(window.$('<i class="fa-solid fa-circle-question"></i>'));
            } else {
                self.weatherIcon().ui().empty().append(window.$('<img>').attr('src', `/v5/assets/images/${dailySummaryData.weatherIcon.dailySample.value}`));
            }
            if (dailySummaryData.durationOfSunshine.dailySample.error != null) {
                self.durationOfSunshineLabel().ui().empty().append(window.$('<i class="fa-solid fa-circle-question"></i>'));
            } else {
                self.durationOfSunshineLabel().ui().text(`${dailySummaryData.durationOfSunshine.dailySample.value.toFixed(1)}`);
            }
            if (dailySummaryData.averageTemperture.dailySample.error != null) {
                self.averageTempertureLabel().ui().empty().append(window.$('<i class="fa-solid fa-circle-question"></i>'));
            } else {
                self.averageTempertureLabel().ui().text(`${dailySummaryData.averageTemperture.dailySample.value.toFixed(1)}`);
            }
            if (dailySummaryData.dailyPowerGeneration.dailySample.error != null) {
                self.dailyPowerGenerationLabel().ui().empty().append(window.$('<i class="fa-solid fa-circle-question"></i>'));
            } else {
                self.dailyPowerGenerationLabel().ui().text(`${dailySummaryData.dailyPowerGeneration.dailySample.value.toFixed(1)}`);
            }
            self.monthLabel().ui().text(`${dailySummaryData.month}`);
            if (dailySummaryData.monthlyPowerGeneration.monthlySample.error != null) {
                self.monthlyPowerGenerationLabel().ui().empty().append(window.$('<i class="fa-solid fa-circle-question"></i>'));
            } else {
                self.monthlyPowerGenerationLabel().ui().text(`${dailySummaryData.monthlyPowerGeneration.monthlySample.value.toFixed(1)}`);
            }
            self.greenCountLabel().ui().text(`${dailySummaryData.greenCount}`);
            self.yellowCountLabel().ui().text(`${dailySummaryData.yellowCount}`);
            self.redCountLabel().ui().text(`${dailySummaryData.redCount}`);
            for (const plant of dailySummaryData.plants) {
                const plantView = PlantView({});
                plantView.on('fetch', async (event) => {
                    return plant;
                });
                plantView.ui().appendTo(self.plantViews().ui());
                await plantView.show();
            }
        }),
        load: (async () => {
            const dailySummaryData = await self.callOne('fetch', {
                hashParams: _options.hashParams(),
            });
            if (dailySummaryData != null) {
                await self.update({ dailySummaryData });
            }
        }),
        show: (async () => {
            self.ui().show({ effect: 'fade', duration: 200 });
            await self.load({});
        }),
        hide: (async () => {
            self.ui().hide({ effect: 'fade', duration: 200 });
        }),
    });

    self.ui().hide();

    return self;

});

/** @type {import('.').DailyPageView.Companion} */
const companion = ({});

/** @type {import('.').DailyPageView.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as DailyPageView };
