/*!
    @e53e04ac/ipp5-static/lib/float-plant-view/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { BaseView } from '../base-view/index.js';
import { hold } from '../hold/index.js';

const viewTemplate = hold(() => {
    return window.$('.PPTemplates>.PPTemplate>.PPFloatPlantView');
});

/** @type {import('.').FloatPlantView.Constructor} */
const constructor = ((options) => {

    const _options = ({

    });

    /** @type {import('.').FloatPlantView._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').FloatPlantView.Self} */
    const self = ({
        ...BaseView({
            content: (() => {
                return viewTemplate().clone();
            }),
        }),
        _FloatPlantView: (() => {
            return _self;
        }),
        plantNameLabel: hold(() => {
            return self.find('.plantNameLabel');
        }),
        dailySampleCanvas: hold(() => {
            return self.find('.dailySampleCanvas');
        }),
        dailySampleChart: hold(() => {
            return new window.Chart(self.dailySampleCanvas().ui(), {
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [{
                        data: [],
                        borderColor: 'hsla(240, 50%, 50%, 0.50)',
                        backgroundColor: 'hsla(240, 50%, 50%, 0.50)',
                    }],
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    animation: {
                        duration: 0,
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            grid: {
                                tickBorderDash: [2, 2],
                                color: 'hsl(0, 0%, 90%)',
                            },
                            min: 0,
                            max: 50,
                            ticks: {
                                stepSize: 10,
                            },
                        },
                    },
                },
            });
        }),
        update: (async (params) => {
            const { plant } = params;
            self.plantNameLabel().ui().text(plant.name);
            for (const dailySample of plant.dailySamples) {
                const labels = self.dailySampleChart().data.labels;
                if (labels != null) {
                    labels.push(dailySample.day);
                }
                self.dailySampleChart().data.datasets[0].data.push(dailySample.value);
            }
            self.dailySampleChart().update();
        }),
        load: (async (params) => {
            const plant = await self.callOne('fetch', {});
            if (plant != null) {
                await self.update({
                    plant,
                });
            }
        }),
        show: (async () => {
            self.ui().modal('show');
            await self.load({});
        }),
        hide: (async () => {
            self.ui().modal('hide');
        }),
    });

    self.ui().hide();

    return self;

});

/** @type {import('.').FloatPlantView.Companion} */
const companion = ({});

/** @type {import('.').FloatPlantView.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as FloatPlantView };
