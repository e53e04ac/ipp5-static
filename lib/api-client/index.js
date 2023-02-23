/*!
    @e53e04ac/ipp5-static/lib/api-client/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from '../event-emitter/index.js';
import { hold } from '../hold/index.js';
import { unwrap } from '../hold/index.js';

/** @type {import('.').ApiClient.Constructor} */
const constructor = ((options) => {

    const _options = ({
        uri: hold(() => {
            return unwrap(options.uri);
        }),
    });

    /** @type {import('.').ApiClient._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        clientAgentId: (async () => {
            return await self.callOne('clientAgentId', {}).then((output) => {
                return output != null ? output.clientAgentId : '';
            });
        }),
        clientAgentTime: (async () => {
            return await self.callOne('clientAgentTime', {}).then((output) => {
                return output != null ? output.clientAgentTime : '';
            });
        }),
        clientAgentNonce: (async () => {
            return await self.callOne('clientAgentNonce', {}).then((output) => {
                return output != null ? output.clientAgentNonce : '';
            });
        }),
        clientId: (async () => {
            return await self.callOne('clientId', {}).then((output) => {
                return output != null ? output.clientId : '';
            });
        }),
        token: (async () => {
            return await self.callOne('token', {}).then((output) => {
                return output != null ? output.token : '';
            });
        }),
    });

    /** @type {import('.').ApiClient.Self} */
    const self = ({
        ...EventEmitter({}),
        _ApiClient: (() => {
            return _self;
        }),
        menuData: (async (params) => {
            return window.fetch(`${_options.uri()}menu/`, {
                method: 'GET',
                headers: {
                    'client-agent-id': await _self.clientAgentId(),
                    'client-agent-time': await _self.clientAgentTime(),
                    'client-agent-nonce': await _self.clientAgentNonce(),
                    'token': await _self.token(),
                },
            }).then((response) => {
                return response.json();
            }).then((json) => {
                return json.menuData;
            });
        }),
        dailySummaryData: (async (params) => {
            const YYYY = params.year.toString().padStart(4, '0');
            const MM = params.month.toString().padStart(2, '0');
            const DD = params.day.toString().padStart(2, '0');
            return window.fetch(`${_options.uri()}daily-summary/${YYYY}-${MM}-${DD}`, {
                method: 'GET',
                headers: {
                    'client-agent-id': await _self.clientAgentId(),
                    'client-agent-time': await _self.clientAgentTime(),
                    'client-agent-nonce': await _self.clientAgentNonce(),
                    'token': await _self.token(),
                },
            }).then((response) => {
                return response.json();
            }).then((json) => {
                return json.dailySummaryData;
            });
        }),
        monthlySummaryData: (async (params) => {
            const YYYY = params.year.toString().padStart(4, '0');
            const MM = params.month.toString().padStart(2, '0');
            return window.fetch(`${_options.uri()}monthly-summary/${YYYY}-${MM}`, {
                method: 'GET',
                headers: {
                    'client-agent-id': await _self.clientAgentId(),
                    'client-agent-time': await _self.clientAgentTime(),
                    'client-agent-nonce': await _self.clientAgentNonce(),
                    'token': await _self.token(),
                },
            }).then((response) => {
                return response.json();
            }).then((json) => {
                return json.monthlySummaryData;
            });
        }),
        yearlySummaryData: (async (params) => {
            const YYYY = params.year.toString().padStart(4, '0');
            return window.fetch(`${_options.uri()}yearly-summary/${YYYY}`, {
                method: 'GET',
                headers: {
                    'client-agent-id': await _self.clientAgentId(),
                    'client-agent-time': await _self.clientAgentTime(),
                    'client-agent-nonce': await _self.clientAgentNonce(),
                    'token': await _self.token(),
                },
            }).then((response) => {
                return response.json();
            }).then((json) => {
                return json.yearlySummaryData;
            });
        }),
    });

    return self;

});

/** @type {import('.').ApiClient.Companion} */
const companion = ({});

/** @type {import('.').ApiClient.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as ApiClient };
