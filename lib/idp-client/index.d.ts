/*!
    @e53e04ac/ipp5-static/lib/idp-client/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { CommandQueue } from '../command-queue/index';
import { EventEmitter } from '../event-emitter/index';
import { Get } from '../hold/index';
import { ValueOrGet } from '../hold/index';

export declare namespace IdpClient {

    type EventSpecs = Record<never, never>;

    type Options = {
        readonly uri: ValueOrGet<string>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly base64FromArrayBuffer: {
            (arrayBuffer: ArrayBuffer): string;
        };
        readonly arrayBufferFromBase64: {
            (base64: string): ArrayBuffer;
        };
        readonly base64urlFromBase64: {
            (base64: string): string;
        };
        readonly base64FromBase64url: {
            (base64url: string): string;
        };
        readonly base64urlFromArrayBuffer: {
            (arrayBuffer: ArrayBuffer): string;
        };
        readonly arrayBufferFromBase64url: {
            (base64url: string): ArrayBuffer;
        };
        readonly stringFromArrayBuffer: {
            (arrayBuffer: ArrayBuffer): string;
        };
        readonly stringFromBase64url: {
            (base64url: string): string;
        };
        readonly jsonObjectFromString: {
            <T>(string: string): T;
        };
        readonly jsonObjectFromBase64url: {
            <T>(base64url: string): T;
        };
        readonly jwtObjectFromString: {
            (jwt: string): {
                readonly header: Record<string, unknown>;
                readonly payload: Record<string, unknown>;
                readonly signature: ArrayBuffer;
            };
        };
        readonly randomBytes: {
            (length: number): ArrayBuffer;
        };
        readonly createClientKeyPair: {
            (): Promise<CryptoKeyPair>;
        };
        readonly encodeClientPrivateKey: {
            (privateKey: CryptoKey): Promise<ArrayBuffer>;
        };
        readonly decodeClientPrivateKey: {
            (arrayBuffer: ArrayBuffer): Promise<CryptoKey>;
        };
        readonly encodeClientPublicKey: {
            (publicKey: CryptoKey): Promise<ArrayBuffer>;
        };
        readonly decondeClientPublicKey: {
            (arrayBuffer: ArrayBuffer): Promise<CryptoKey>;
        };
        readonly encodeClientKeyPair: {
            (publicKey: CryptoKeyPair): Promise<string>;
        };
        readonly decodeClientKeyPair: {
            (string: string): Promise<CryptoKeyPair>;
        };
        readonly createClientOneTimeKeyPair: {
            (): Promise<CryptoKeyPair>;
        };
        readonly encodeClientOneTimePublicKey: {
            (publicKey: CryptoKey): Promise<ArrayBuffer>;
        };
        readonly decodeServerOneTimePublicKey: {
            (arrayBuffer: ArrayBuffer): Promise<CryptoKey>;
        };
        readonly deriveOneTimeSharedKey: {
            (publicKey: CryptoKey, privateKey: CryptoKey): Promise<CryptoKey>;
        };
        readonly encryptClientPublicKeyData: {
            (iv: ArrayBuffer, sharedKey: CryptoKey, data: ArrayBuffer): Promise<ArrayBuffer>;
        };
        readonly createChallengeResponse: {
            (privateKey: CryptoKey, challenge: ArrayBuffer): Promise<ArrayBuffer>;
        };
        readonly createClientAgentId: {
            (): string;
        };
        readonly createClientAgentTime: {
            (): string;
        };
        readonly createClientAgentNonce: {
            (): string;
        };
        readonly registerRequest: {
            (params: {
                readonly uri: string;
                readonly clientAgentId: string;
                readonly clientAgentTime: string;
                readonly clientAgentNonce: string;
                readonly clientOneTimeKey: string;
            }): Promise<{
                readonly response?: Response;
                readonly status: number;
                readonly statusText: string;
                readonly challengeToken: string;
            }>;
        };
        readonly registerResponse: {
            (params: {
                readonly uri: string;
                readonly clientAgentId: string;
                readonly clientAgentTime: string;
                readonly clientAgentNonce: string;
                readonly challengeToken: string
                readonly challengeResponse: string;
            }): Promise<{
                readonly response?: Response;
                readonly status: number;
                readonly statusText: string;
                readonly clientId: string;
            }>;
        };
        readonly tokenRequest: {
            (params: {
                readonly uri: string;
                readonly clientAgentId: string;
                readonly clientAgentTime: string;
                readonly clientAgentNonce: string;
                readonly clientId: string;
            }): Promise<{
                readonly response?: Response;
                readonly status: number;
                readonly statusText: string;
                readonly challengeToken: string;
            }>;
        };
        readonly tokenResponse: {
            (params: {
                readonly uri: string;
                readonly clientAgentId: string;
                readonly clientAgentTime: string;
                readonly clientAgentNonce: string;
                readonly challengeToken: string
                readonly challengeResponse: string;
            }): Promise<{
                readonly response?: Response;
                readonly status: number;
                readonly statusText: string;
                readonly token: string;
            }>;
        };
        readonly register: {
            (params: {
                readonly uri: string;
                readonly clientAgentId: string;
                readonly clientPublicKey: CryptoKey;
            }): Promise<{
                readonly clientId: string;
            }>;
        };
        readonly token: {
            (params: {
                readonly uri: string;
                readonly clientAgentId: string;
                readonly clientPrivateKey: CryptoKey;
                readonly clientId: string;
            }): Promise<{
                readonly token: string;
            }>;
        };
        readonly readClientAgentIdFromLocalStorage: {
            (itemKey: string): Promise<null | string>;
        };
        readonly writeClientAgentIdToLocalStorage: {
            (itemKey: string, clientAgentId: string): Promise<void>;
        };
        readonly readClientKeyPairFromLocalStorage: {
            (itemKey: string): Promise<null | CryptoKeyPair>;
        };
        readonly writeClientKeyPairToLocalStorage: {
            (itemKey: string, keyPair: CryptoKeyPair): Promise<void>;
        };
        readonly readClientIdFromLocalStorage: {
            (itemKey: string): Promise<null | string>;
        };
        readonly writeClientIdToLocalStorage: {
            (itemKey: string, clientId: string): Promise<void>;
        };
        readonly readTokenFromLocalStorage: {
            (itemKey: string): Promise<null | string>;
        };
        readonly writeTokenToLocalStorage: {
            (itemKey: string, token: string): Promise<void>;
        };
        readonly commandQueue: Get<CommandQueue>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _IdpClient: Get<_Self>;
        readonly clientAgentId: {
            (): Promise<string>;
        };
        readonly clientAgentTime: {
            (): Promise<string>;
        };
        readonly clientAgentNonce: {
            (): Promise<string>;
        };
        readonly clientKeyPair: {
            (): Promise<CryptoKeyPair>;
        };
        readonly clientId: {
            (): Promise<string>;
        };
        readonly token: {
            (): Promise<string>;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type IdpClient = IdpClient.Self;

export declare const IdpClient: IdpClient.ConstructorWithCompanion;
