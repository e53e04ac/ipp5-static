/*!
    @e53e04ac/ipp5-static/lib/idp-client/index.js
    Copyright (C) @e53e04ac
    MIT License
*/

import { CommandQueue } from '../command-queue/index.js';
import { EventEmitter } from '../event-emitter/index.js';
import { hold } from '../hold/index.js';
import { unwrap } from '../hold/index.js';

/** @type {import('.').IdpClient.Constructor} */
const constructor = ((options) => {

    const _options = ({
        uri: hold(() => {
            return unwrap(options.uri);
        }),
    });

    /** @type {import('.').IdpClient._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        base64FromArrayBuffer: ((arrayBuffer) => {
            return window.btoa(String.fromCharCode.apply(null, [...new Uint8Array(arrayBuffer)]));
        }),
        arrayBufferFromBase64: ((base64) => {
            return new Uint8Array(window.atob(base64).split('').map((x) => x.charCodeAt(0))).buffer;
        }),
        base64urlFromBase64: ((base64) => {
            return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/[=]/g, '');
        }),
        base64FromBase64url: ((base64url) => {
            const paddingSize = 4 - (base64url.length % 4);
            return base64url.replace(/-/g, '+').replace(/_/g, '/') + ''.padEnd(paddingSize == 4 ? 0 : paddingSize, '=');
        }),
        base64urlFromArrayBuffer: ((arrayBuffer) => {
            return _self.base64urlFromBase64(_self.base64FromArrayBuffer(arrayBuffer));
        }),
        arrayBufferFromBase64url: ((base64url) => {
            return _self.arrayBufferFromBase64(_self.base64FromBase64url(base64url));
        }),
        stringFromArrayBuffer: ((arrayBuffer) => {
            return (new TextDecoder()).decode(arrayBuffer);
        }),
        stringFromBase64url: ((base64url) => {
            return _self.stringFromArrayBuffer(_self.arrayBufferFromBase64url(base64url));
        }),
        jsonObjectFromString: ((string) => {
            return JSON.parse(string);
        }),
        jsonObjectFromBase64url: ((base64url) => {
            return _self.jsonObjectFromString(_self.stringFromBase64url(base64url));
        }),
        jwtObjectFromString: ((string) => {
            const fields = string.split('.');
            return {
                header: _self.jsonObjectFromBase64url(fields[0]),
                payload: _self.jsonObjectFromBase64url(fields[1]),
                signature: _self.arrayBufferFromBase64url(fields[2]),
            };
        }),
        randomBytes: ((length) => {
            return window.crypto.getRandomValues(new Uint8Array(length)).buffer;
        }),
        createClientKeyPair: (async () => {
            return await window.crypto.subtle.generateKey({
                name: 'ECDSA',
                namedCurve: 'P-521',
            }, true, ['sign', 'verify']);
        }),
        encodeClientPrivateKey: (async (privaeKey) => {
            return await window.crypto.subtle.exportKey('pkcs8', privaeKey);
        }),
        decodeClientPrivateKey: (async (arrayBuffer) => {
            return await window.crypto.subtle.importKey('pkcs8', arrayBuffer, {
                name: 'ECDSA',
                namedCurve: 'P-521',
            }, false, ['sign']);
        }),
        encodeClientPublicKey: (async (publicKey) => {
            return await window.crypto.subtle.exportKey('spki', publicKey);
        }),
        decondeClientPublicKey: (async (arrayBuffer) => {
            return await window.crypto.subtle.importKey('spki', arrayBuffer, {
                name: 'ECDSA',
                namedCurve: 'P-521',
            }, true, ['verify']);
        }),
        encodeClientKeyPair: (async (keyPair) => {
            return JSON.stringify({
                privateKeyData: _self.base64urlFromArrayBuffer(
                    await _self.encodeClientPrivateKey(keyPair.privateKey)
                ),
                publicKeyData: _self.base64urlFromArrayBuffer(
                    await _self.encodeClientPublicKey(keyPair.publicKey)
                ),
            });
        }),
        decodeClientKeyPair: (async (string) => {
            const keyPairData = JSON.parse(string);
            return {
                privateKey: await _self.decodeClientPrivateKey(
                    _self.arrayBufferFromBase64url(keyPairData.privateKeyData)
                ),
                publicKey: await _self.decondeClientPublicKey(
                    _self.arrayBufferFromBase64url(keyPairData.publicKeyData)
                ),
            };
        }),
        createClientOneTimeKeyPair: (async () => {
            return await window.crypto.subtle.generateKey({
                name: 'ECDH',
                namedCurve: 'P-521',
            }, true, ['deriveKey']);
        }),
        encodeClientOneTimePublicKey: (async (publicKey) => {
            return await window.crypto.subtle.exportKey('spki', publicKey);
        }),
        decodeServerOneTimePublicKey: (async (arrayBuffer) => {
            return await window.crypto.subtle.importKey('spki', arrayBuffer, {
                name: 'ECDH',
                namedCurve: 'P-521',
            }, false, []);
        }),
        deriveOneTimeSharedKey: (async (publicKey, privateKey) => {
            return await window.crypto.subtle.deriveKey({
                name: 'ECDH',
                public: publicKey,
            }, privateKey, {
                name: 'AES-GCM',
                length: 256,
            }, false, ['encrypt', 'decrypt']);
        }),
        encryptClientPublicKeyData: (async (iv, sharedKey, data) => {
            return await window.crypto.subtle.encrypt({
                name: 'AES-GCM',
                iv,
                tagLength: 128,
            }, sharedKey, data);
        }),
        createChallengeResponse: (async (privateKey, challenge) => {
            return await window.crypto.subtle.sign({
                name: 'ECDSA',
                hash: {
                    name: 'SHA-512',
                },
            }, privateKey, challenge);
        }),
        createClientAgentId: (() => {
            return _self.base64urlFromArrayBuffer(_self.randomBytes(48));
        }),
        createClientAgentNonce: (() => {
            return _self.base64urlFromArrayBuffer(_self.randomBytes(24));
        }),
        createClientAgentTime: (() => {
            return Date.now().toString();
        }),
        registerRequest: (async (params) => {
            const response = await window.fetch(`${params.uri}register-request`, {
                method: 'POST',
                headers: {
                    'client-agent-id': params.clientAgentId,
                    'client-agent-time': params.clientAgentTime,
                    'client-agent-nonce': params.clientAgentNonce,
                    'client-one-time-key': params.clientOneTimeKey,
                },
                body: null,
            });
            return {
                response,
                status: response.status,
                statusText: response.statusText,
                challengeToken: (response.headers.get('challenge-token') || ''),
            };
        }),
        registerResponse: (async (params) => {
            const response = await window.fetch(`${params.uri}register-response`, {
                method: 'POST',
                headers: {
                    'client-agent-id': params.clientAgentId,
                    'client-agent-time': params.clientAgentTime,
                    'client-agent-nonce': params.clientAgentNonce,
                    'challenge-token': params.challengeToken,
                    'challenge-response': params.challengeResponse,
                },
                body: null,
            });
            return {
                response,
                status: response.status,
                statusText: response.statusText,
                clientId: (response.headers.get('client-id') || ''),
            };
        }),
        tokenRequest: (async (params) => {
            const response = await window.fetch(`${params.uri}token-request`, {
                method: 'POST',
                headers: {
                    'client-agent-id': params.clientAgentId,
                    'client-agent-time': params.clientAgentTime,
                    'client-agent-nonce': params.clientAgentNonce,
                    'client-id': params.clientId,
                },
                body: null,
            });
            return {
                response,
                status: response.status,
                statusText: response.statusText,
                challengeToken: (response.headers.get('challenge-token') || ''),
            };
        }),
        tokenResponse: (async (params) => {
            const response = await window.fetch(`${params.uri}token-response`, {
                method: 'POST',
                headers: {
                    'client-agent-id': params.clientAgentId,
                    'client-agent-time': params.clientAgentTime,
                    'client-agent-nonce': params.clientAgentNonce,
                    'challenge-token': params.challengeToken,
                    'challenge-response': params.challengeResponse,
                },
                body: null,
            });
            return {
                response,
                status: response.status,
                statusText: response.statusText,
                token: (response.headers.get('token') || ''),
            };
        }),
        register: (async ({ uri, clientAgentId, clientPublicKey }) => {
            const clientPublicKeyData = await _self.encodeClientPublicKey(clientPublicKey);
            const clientOneTimeKeyPair = await _self.createClientOneTimeKeyPair();
            const clientOneTimePrivateKey = clientOneTimeKeyPair.privateKey;
            const clientOneTimePublicKey = clientOneTimeKeyPair.publicKey;
            const clientOneTimePublicKeyData = await _self.encodeClientOneTimePublicKey(clientOneTimePublicKey);
            const clientOneTimePublicKeyDataBase64url = _self.base64urlFromArrayBuffer(clientOneTimePublicKeyData);
            const registerRequestResult = await _self.registerRequest({
                uri,
                clientAgentId,
                clientAgentTime: _self.createClientAgentTime(),
                clientAgentNonce: _self.createClientAgentNonce(),
                clientOneTimeKey: clientOneTimePublicKeyDataBase64url,
            });
            if (registerRequestResult.status != 200) {
                throw registerRequestResult;
            }
            const challengeToken = registerRequestResult.challengeToken;
            const challengeTokenObject = _self.jwtObjectFromString(challengeToken);
            const ivBase64url = challengeTokenObject.payload.iv;
            if (typeof ivBase64url !== 'string') {
                throw new Error();
            }
            const iv = _self.arrayBufferFromBase64url(ivBase64url);
            const serverOneTimePublicKeyDataSpkiBase64url = challengeTokenObject.payload.serverOneTimeKey;
            if (typeof serverOneTimePublicKeyDataSpkiBase64url !== 'string') {
                throw new Error();
            }
            const serverOneTimePublicKeyDataSpki = _self.arrayBufferFromBase64url(serverOneTimePublicKeyDataSpkiBase64url);
            const serverOneTimePublicKey = await _self.decodeServerOneTimePublicKey(serverOneTimePublicKeyDataSpki);
            const oneTimeSharedKey = await _self.deriveOneTimeSharedKey(serverOneTimePublicKey, clientOneTimePrivateKey);
            const encryptedClientPublicKeyData = await _self.encryptClientPublicKeyData(iv, oneTimeSharedKey, clientPublicKeyData);
            const encryptedClientPublicKeyDataBase64url = _self.base64urlFromArrayBuffer(encryptedClientPublicKeyData);
            const registerResponseResult = await _self.registerResponse({
                uri,
                clientAgentId,
                clientAgentTime: _self.createClientAgentTime(),
                clientAgentNonce: _self.createClientAgentNonce(),
                challengeToken,
                challengeResponse: encryptedClientPublicKeyDataBase64url,
            });
            if (registerResponseResult.status != 200) {
                throw registerResponseResult;
            }
            const clientId = registerResponseResult.clientId;
            return {
                clientId,
            };
        }),
        token: (async ({ uri, clientAgentId, clientPrivateKey, clientId }) => {
            const tokenRequestResult = await _self.tokenRequest({
                uri,
                clientAgentId,
                clientAgentTime: _self.createClientAgentTime(),
                clientAgentNonce: _self.createClientAgentNonce(),
                clientId,
            });
            if (tokenRequestResult.status != 200) {
                throw tokenRequestResult;
            }
            const challengeToken = tokenRequestResult.challengeToken;
            const challengeTokenObject = _self.jwtObjectFromString(challengeToken);
            const challengeBase64url = challengeTokenObject.payload.challenge;
            if (typeof challengeBase64url !== 'string') {
                throw new Error();
            }
            const challenge = _self.arrayBufferFromBase64url(challengeBase64url);
            const signature = await _self.createChallengeResponse(clientPrivateKey, challenge);
            const signatureBase64url = _self.base64urlFromArrayBuffer(signature);
            const tokenResponseResult = await _self.tokenResponse({
                uri,
                clientAgentId,
                clientAgentTime: _self.createClientAgentTime(),
                clientAgentNonce: _self.createClientAgentNonce(),
                challengeToken,
                challengeResponse: signatureBase64url,
            });
            if (tokenResponseResult.status != 200) {
                throw tokenResponseResult;
            }
            const token = tokenResponseResult.token;
            return { token };
        }),
        readClientAgentIdFromLocalStorage: (async (itemKey) => {
            const clientAgentId = window.localStorage.getItem(itemKey);
            if (clientAgentId == null) {
                return null;
            }
            return clientAgentId;
        }),
        writeClientAgentIdToLocalStorage: (async (itemKey, clientAgentId) => {
            window.localStorage.setItem(itemKey, clientAgentId);
        }),
        readClientKeyPairFromLocalStorage: (async (itemKey) => {
            const string = window.localStorage.getItem(itemKey);
            if (string == null) {
                return null;
            }
            return await _self.decodeClientKeyPair(string);
        }),
        writeClientKeyPairToLocalStorage: (async (itemKey, clientKeyPair) => {
            const string = await _self.encodeClientKeyPair(clientKeyPair);
            window.localStorage.setItem(itemKey, string);
        }),
        readClientIdFromLocalStorage: (async (itemKey) => {
            const clientId = window.localStorage.getItem(itemKey);
            if (clientId == null) {
                return null;
            }
            return clientId;
        }),
        writeClientIdToLocalStorage: (async (itemKey, clientId) => {
            window.localStorage.setItem(itemKey, clientId);
        }),
        readTokenFromLocalStorage: (async (itemKey) => {
            const token = window.localStorage.getItem(itemKey);
            if (token == null) {
                return null;
            }
            return token;
        }),
        writeTokenToLocalStorage: (async (itemKey, clientId) => {
            window.localStorage.setItem(itemKey, clientId);
        }),
        commandQueue: hold(() => {
            return CommandQueue({});
        }),
    });

    /** @type {import('.').IdpClient.Self} */
    const self = ({
        ...EventEmitter({}),
        _IdpClient: (() => {
            return _self;
        }),
        clientAgentId: hold(async () => {
            const clientAgentIdItemKey = '.clientAgentId';
            let clientAgentId = await _self.readClientAgentIdFromLocalStorage(clientAgentIdItemKey);
            if (clientAgentId == null) {
                clientAgentId = await _self.createClientAgentId();
                await _self.writeClientAgentIdToLocalStorage(clientAgentIdItemKey, clientAgentId);
            }
            return clientAgentId;
        }),
        clientAgentTime: (async () => {
            return _self.createClientAgentTime();
        }),
        clientAgentNonce: (async () => {
            return _self.createClientAgentNonce();
        }),
        clientKeyPair: hold(async () => {
            const clientKeyPairItemKey = '.clientKeyPair';
            let clientKeyPair = await _self.readClientKeyPairFromLocalStorage(clientKeyPairItemKey);
            if (clientKeyPair == null) {
                clientKeyPair = await _self.createClientKeyPair();
                await _self.writeClientKeyPairToLocalStorage(clientKeyPairItemKey, clientKeyPair);
            }
            return clientKeyPair;
        }),
        clientId: hold(async () => {
            const clientIdItemKey = '.clientId';
            let clientId = await _self.readClientIdFromLocalStorage(clientIdItemKey);
            if (clientId == null || clientId == '') {
                const clientAgentId = await self.clientAgentId();
                const clientKeyPair = await self.clientKeyPair();
                const registerResult = await _self.register({
                    uri: _options.uri(),
                    clientAgentId: clientAgentId,
                    clientPublicKey: clientKeyPair.publicKey,
                });
                clientId = registerResult.clientId;
                await _self.writeClientIdToLocalStorage(clientIdItemKey, clientId);
            }
            return clientId;
        }),
        token: (async () => {
            const tokenItemKey = '.token';
            return await _self.commandQueue().run(tokenItemKey, async () => {
                let token = await _self.readTokenFromLocalStorage(tokenItemKey);
                if (token != null && token != '') {
                    const tokenObject = _self.jwtObjectFromString(token);
                    const expirationTime = Number(tokenObject.payload.exp) * 1000;
                    const currentTime = Date.now();
                    const margin = 60000;
                    if ((expirationTime - margin) - currentTime <= 0) {
                        token = null;
                    }
                }
                if (token == null || token == '') {
                    const clientAgentId = await self.clientAgentId();
                    const clientKeyPair = await self.clientKeyPair();
                    const clientId = await self.clientId();
                    const tokenResult = await _self.token({
                        uri: _options.uri(),
                        clientAgentId: clientAgentId,
                        clientPrivateKey: clientKeyPair.privateKey,
                        clientId: clientId,
                    });
                    token = tokenResult.token;
                    await _self.writeTokenToLocalStorage(tokenItemKey, token);
                }
                return token;
            });
        }),
    });

    return self;

});

/** @type {import('.').IdpClient.Companion} */
const companion = ({});

/** @type {import('.').IdpClient.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as IdpClient };
