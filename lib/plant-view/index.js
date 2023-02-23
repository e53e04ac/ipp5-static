/*!
    @e53e04ac/ipp5-static/lib/plant-view/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { BaseView } from '../base-view/index.js';
import { FloatPlantView } from '../float-plant-view/index.js';
import { hold } from '../hold/index.js';

const viewTemplate = hold(() => {
    return window.$('.PPTemplates>.PPTemplate>.PPPlantView');
});

/** @type {import('.').PlantView.Constructor} */
const constructor = ((options) => {

    const _options = ({});

    /** @type {import('.').PlantView._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').PlantView.Self} */
    const self = ({
        ...BaseView({
            content: viewTemplate().clone(),
        }),
        _PlantView: (() => {
            return _self;
        }),
        card: hold(() => {
            return self.find('.card');
        }),
        cardHeader: hold(() => {
            return self.find('.card-header');
        }),
        cardBody: hold(() => {
            return self.find('.card-body');
        }),
        plantNameLabel: hold(() => {
            return self.find('.plantNameLabel');
        }),
        hourlySampleCanvas: hold(() => {
            return self.find('.hourlySampleCanvas');
        }),
        dailySampleCanvas: hold(() => {
            return self.find('.dailySampleCanvas');
        }),
        hourlySampleChart: hold(() => {
            return new window.Chart(self.hourlySampleCanvas().ui(), {
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
                }
            });
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
                    responsive: false,
                    animation: {
                        duration: 0,
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false,
                            },
                        },
                    },
                },
            });
        }),
        update: (async (params) => {
            const { plant } = params;
            self.plantNameLabel().ui().text(plant.name);
            if (plant.red) {
                self.card().ui().toggleClass('border-danger', true);
                self.cardHeader().ui().toggleClass('bg-danger text-white', true);
            }
            if (plant.yellow) {
                self.card().ui().toggleClass('border-warning', true);
                self.cardHeader().ui().toggleClass('bg-warning text-white', true);
            }
            if (plant.green) {
                self.card().ui().toggleClass('border-primary', true);
                self.cardHeader().ui().toggleClass('bg-primary text-white', true);
            }
            for (const hourlySample of plant.hourlySamples) {
                const labels = self.hourlySampleChart().data.labels;
                if (labels != null) {
                    labels.push(hourlySample.hour);
                }
                self.hourlySampleChart().data.datasets[0].data.push(hourlySample.value);
            }
            self.hourlySampleChart().update();
            for (const dailySample of plant.dailySamples) {
                const labels = self.dailySampleChart().data.labels;
                if (labels != null) {
                    labels.push(dailySample.day);
                }
                self.dailySampleChart().data.datasets[0].data.push(dailySample.value);
            }
            self.dailySampleChart().update();
            self.dailySampleCanvas().ui().css({ width: 100, height: 50 });
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
            self.ui().show({ effect: 'fade', duration: 200 });
            await self.load({});
        }),
        hide: (async () => {
            self.ui().hide({ effect: 'fade', duration: 200 });
        }),
    });

    self.dailySampleCanvas().ui().on('click', () => {
        const floatPlantView = FloatPlantView({});
        floatPlantView.on('fetch', async (event) => {
            return await self.callOne('fetch', {});
        });
        floatPlantView.ui().appendTo(window.document.body);
        floatPlantView.show();
    });

    self.ui().hide();

    return self;

});

/** @type {import('.').PlantView.Companion} */
const companion = ({});

/** @type {import('.').PlantView.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as PlantView };
