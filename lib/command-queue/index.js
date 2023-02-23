/*!
    @e53e04ac/ipp5-static/lib/command-queue/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index.js';
import { hold } from '../hold/index.js';

/** @type {import('.').CommandQueue.Constructor} */
const constructor = ((options) => {

    const _options = ({});

    /** @type {import('.').CommandQueue._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        commandArrayMap: hold(() => {
            return new Map();
        }),
        currentCommandMap: hold(() => {
            return new Map();
        }),
        checkNextCommand: ((key) => {
            if (_self.currentCommandMap().has(key)) {
                return;
            }
            const commandArray = _self.commandArrayMap().get(key);
            if (commandArray == null) {
                throw new Error();
            }
            const command = commandArray.shift();
            if (command == null) {
                _self.currentCommandMap().delete(key);
                _self.commandArrayMap().delete(key);
                return;
            }
            _self.currentCommandMap().set(key, command);
            command.block().then((value) => {
                _self.currentCommandMap().delete(key);
                command.resolve(value);
                window.queueMicrotask(() => {
                    _self.checkNextCommand(key);
                });
            });
        }),
    });

    /** @type {import('.').CommandQueue.Self} */
    const self = ({
        ...Base({}),
        _CommandQueue: (() => {
            return _self;
        }),
        run: ((key, block) => {
            return new Promise((resolve, reject) => {
                const command = ({ resolve, reject, block });
                let commandArray = _self.commandArrayMap().get(key);
                if (commandArray == null) {
                    commandArray = [];
                    _self.commandArrayMap().set(key, commandArray);
                }
                commandArray.push(command);
                window.queueMicrotask(() => {
                    _self.checkNextCommand(key);
                });
            });
        }),
    });

    return self;

});

/** @type {import('.').CommandQueue.Companion} */
const companion = ({});

/** @type {import('.').CommandQueue.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as CommandQueue };
