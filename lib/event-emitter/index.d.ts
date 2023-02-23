/*!
    @e53e04ac/ipp5-static/lib/event-emitter/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from '../base/index';
import { Get } from '../hold/index';

export declare namespace EventEmitter {

    type EventType = number | string | symbol;

    type EventSpec<TInput = unknown, TOutput = unknown> = {
        input: TInput;
        output: TOutput;
    };

    type EventHandler<TEventSpec extends EventSpec> = {
        (input: TEventSpec['input']): Promise<TEventSpec['output']>;
    };

    type EventSpecs = Record<EventType, EventSpec>;

    type Options<TEventSpecs extends EventSpecs> = {
        readonly __GenericTypes__?: {
            readonly TEventSpecs: TEventSpecs;
        };
    };

    type _Self<TEventSpecs extends EventSpecs> = {
        readonly options: Get<Options<TEventSpecs>>;
        readonly _options: Get<unknown>;
        readonly eventHandlerArrayMap: Get<{
            [EventType in keyof TEventSpecs]?: EventHandler<TEventSpecs[EventType]>[];
        }>;
    };

    type Self<TEventSpecs extends EventSpecs> = Base & {
        readonly _EventEmitter: Get<_Self<TEventSpecs>>;
        readonly on: {
            <EventType extends keyof TEventSpecs>(eventType: EventType, eventHandler: EventHandler<TEventSpecs[EventType]>): void;
        };
        readonly off: {
            <EventType extends keyof TEventSpecs>(eventType?: EventType, eventHandler?: EventHandler<TEventSpecs[EventType]>): void;
        };
        readonly emitAll: {
            <EventType extends keyof TEventSpecs>(eventType: EventType, input: TEventSpecs[EventType]['input']): Promise<void>;
        };
        readonly emitOne: {
            <EventType extends keyof TEventSpecs>(eventType: EventType, input: TEventSpecs[EventType]['input']): Promise<void>;
        };
        readonly callAll: {
            <EventType extends keyof TEventSpecs>(eventType: EventType, input: TEventSpecs[EventType]['input']): Promise<TEventSpecs[EventType]['output'][]>;
        };
        readonly callExactOne: {
            <EventType extends keyof TEventSpecs>(eventType: EventType, input: TEventSpecs[EventType]['input']): Promise<TEventSpecs[EventType]['output']>;
        };
        readonly callOne: {
            <EventType extends keyof TEventSpecs>(eventType: EventType, input: TEventSpecs[EventType]['input']): Promise<undefined | TEventSpecs[EventType]['output']>;
        };
    };

    type Constructor = {
        <TEventSpecs extends EventSpecs>(options: Options<TEventSpecs>): Self<TEventSpecs>;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type EventEmitter<TEventSpecs extends EventEmitter.EventSpecs> = EventEmitter.Self<TEventSpecs>;

export declare const EventEmitter: EventEmitter.ConstructorWithCompanion;
