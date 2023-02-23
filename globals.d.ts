/*!
    @e53e04ac/ipp5-static/globals.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import 'd3';
import 'jquery';
import 'jquery-ui-dist';
import 'jquery.easing';
import 'popper.js';
import 'bootstrap';
import 'startbootstrap-sb-admin-2';
import '@fortawesome/fontawesome-free';
import { Chart } from 'chart.js';
import { default as socketIoClient } from 'socket.io-client';

declare global {
    interface Window {
        $: typeof jQuery;
        Chart: typeof Chart;
        io: typeof socketIoClient;
    }
}
