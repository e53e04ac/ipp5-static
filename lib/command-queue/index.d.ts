/*!
    @e53e04ac/ipp5-static/lib/command-queue/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index';
import { Get } from '../hold/index';

export declare namespace CommandQueue {

    type Command<T> = {
        readonly resolve: {
            (value: T | PromiseLike<T>): void;
        };
        readonly reject: {
            (reason: Error): void;
        };
        readonly block: {
            (): Promise<T>;
        };
    };

    type Options = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly commandArrayMap: Get<Map<string, Command<any>[]>>;
        readonly currentCommandMap: Get<Map<string, Command<any>>>;
        readonly checkNextCommand: {
            (key: string): void;
        };
    };

    type Self = Base & {
        readonly _CommandQueue: Get<_Self>;
        readonly run: {
            <T>(key: string, block: {
                (): Promise<T>;
            }): Promise<T>;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type CommandQueue = CommandQueue.Self;

export declare const CommandQueue: CommandQueue.ConstructorWithCompanion;
