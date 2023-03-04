# ipp5-static

~~~~~ sh
npm install e53e04ac/ipp5-static
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["@fortawesome/fontawesome-free"]);
    B_1(["bootstrap"]);
    B_2(["chart.js"]);
    B_3(["d3"]);
    B_4(["jquery"]);
    B_5(["jquery-ui-dist"]);
    B_6(["jquery.easing"]);
    B_7(["popper.js"]);
    B_8(["socket.io-client"]);
    B_9(["startbootstrap-sb-admin-2"]);
  end;
  subgraph "devDependencies";
    B_10(["@types/bootstrap"]);
    B_11(["@types/d3"]);
    B_12(["@types/jquery"]);
    B_13(["@types/jqueryui"]);
    B_14(["@types/socket.io-client"]);
    B_15(["ipp5-types"]);
  end;
  subgraph "github";
    C_15(["e53e04ac/ipp5-types\n77007f82947cc0eb20ebd9c346c7ee980eb41787"]);
  end;
  subgraph "npmjs";
    C_0(["@fortawesome/fontawesome-free\n6.3.0"]);
    C_1(["bootstrap\n5.2.3"]);
    C_2(["chart.js\n4.2.1"]);
    C_3(["d3\n7.8.2"]);
    C_4(["jquery\n3.6.3"]);
    C_5(["jquery-ui-dist\n1.13.2"]);
    C_6(["jquery.easing\n1.4.1"]);
    C_7(["popper.js\n1.16.1"]);
    C_8(["socket.io-client\n4.6.1"]);
    C_9(["startbootstrap-sb-admin-2\n4.1.4"]);
    C_10(["@types/bootstrap\n5.2.6"]);
    C_11(["@types/d3\n7.4.0"]);
    C_12(["@types/jquery\n3.5.16"]);
    C_13(["@types/jqueryui\n1.12.16"]);
    C_14(["@types/socket.io-client\n3.0.0"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  A ----> B_8;
  A ----> B_9;
  A ----> B_10;
  A ----> B_11;
  A ----> B_12;
  A ----> B_13;
  A ----> B_14;
  A ----> B_15;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  B_7 ----> C_7;
  B_8 ----> C_8;
  B_9 ----> C_9;
  B_10 ----> C_10;
  B_11 ----> C_11;
  B_12 ----> C_12;
  B_13 ----> C_13;
  B_14 ----> C_14;
  B_15 ----> C_15;
  click C_0 "https://www.npmjs.com/package/@fortawesome/fontawesome-free/v/6.3.0";
  click C_1 "https://www.npmjs.com/package/bootstrap/v/5.2.3";
  click C_2 "https://www.npmjs.com/package/chart.js/v/4.2.1";
  click C_3 "https://www.npmjs.com/package/d3/v/7.8.2";
  click C_4 "https://www.npmjs.com/package/jquery/v/3.6.3";
  click C_5 "https://www.npmjs.com/package/jquery-ui-dist/v/1.13.2";
  click C_6 "https://www.npmjs.com/package/jquery.easing/v/1.4.1";
  click C_7 "https://www.npmjs.com/package/popper.js/v/1.16.1";
  click C_8 "https://www.npmjs.com/package/socket.io-client/v/4.6.1";
  click C_9 "https://www.npmjs.com/package/startbootstrap-sb-admin-2/v/4.1.4";
  click C_10 "https://www.npmjs.com/package/@types/bootstrap/v/5.2.6";
  click C_11 "https://www.npmjs.com/package/@types/d3/v/7.4.0";
  click C_12 "https://www.npmjs.com/package/@types/jquery/v/3.5.16";
  click C_13 "https://www.npmjs.com/package/@types/jqueryui/v/1.12.16";
  click C_14 "https://www.npmjs.com/package/@types/socket.io-client/v/3.0.0";
  click C_15 "https://github.com/e53e04ac/ipp5-types/tree/77007f82947cc0eb20ebd9c346c7ee980eb41787";
~~~~~

~~~~~ mermaid
graph RL;
  M["globals.d.ts"]
  subgraph "d3";
    I_0_0([" "]);
  end;
  subgraph "jquery";
    I_1_0([" "]);
  end;
  subgraph "jquery-ui-dist";
    I_2_0([" "]);
  end;
  subgraph "jquery.easing";
    I_3_0([" "]);
  end;
  subgraph "popper.js";
    I_4_0([" "]);
  end;
  subgraph "bootstrap";
    I_5_0([" "]);
  end;
  subgraph "startbootstrap-sb-admin-2";
    I_6_0([" "]);
  end;
  subgraph "@fortawesome/fontawesome-free";
    I_7_0([" "]);
  end;
  subgraph "chart.js";
    I_8_0(["Chart"]);
  end;
  subgraph "socket.io-client";
    I_9_0(["default"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
  M ----> I_8_0;
  M ----> I_9_0;
~~~~~

~~~~~ mermaid
graph RL;
  M["index.d.ts"]
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace ApiClient"]);
    E_1(["type ApiClient"]);
    E_2(["const ApiClient"]);
  end;
  M["lib/api-client/index.d.ts"]
  subgraph "ipp5-types";
    I_0_0(["Ipp5DailySummaryData"]);
    I_0_1(["Ipp5MenuData"]);
    I_0_2(["Ipp5MonthlySummaryData"]);
    I_0_3(["Ipp5YearlySummaryData"]);
  end;
  subgraph "lib/event-emitter/index";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "lib/hold/index";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_0_2;
  M ----> I_0_3;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace Base"]);
    E_1(["type Base"]);
    E_2(["const Base"]);
  end;
  M["lib/base/index.d.ts"]
  subgraph "lib/hold/index";
    I_0_0(["Get"]);
    I_0_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace BaseView"]);
    E_1(["const BaseView"]);
  end;
  M["lib/base-view/index.d.ts"]
  subgraph "lib/event-emitter/index";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "lib/hold/index";
    I_1_0(["Get"]);
    I_1_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace CommandQueue"]);
    E_1(["type CommandQueue"]);
    E_2(["const CommandQueue"]);
  end;
  M["lib/command-queue/index.d.ts"]
  subgraph "lib/base/index";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index";
    I_1_0(["Get"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace DailyPageView"]);
    E_1(["type DailyPageView"]);
    E_2(["const DailyPageView"]);
  end;
  M["lib/daily-page-view/index.d.ts"]
  subgraph "ipp5-types";
    I_0_0(["Ipp5DailySummaryData"]);
  end;
  subgraph "lib/base-view/index";
    I_1_0(["BaseView"]);
  end;
  subgraph "lib/hold/index";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace DateTime"]);
    E_1(["type DateTime"]);
    E_2(["const DateTime"]);
  end;
  M["lib/date-time/index.d.ts"]
  subgraph "lib/base/index";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index";
    I_1_0(["Get"]);
    I_1_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace EventEmitter"]);
    E_1(["const EventEmitter"]);
  end;
  M["lib/event-emitter/index.d.ts"]
  subgraph "lib/base/index";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index";
    I_1_0(["Get"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace FloatPlantView"]);
    E_1(["type FloatPlantView"]);
    E_2(["const FloatPlantView"]);
  end;
  M["lib/float-plant-view/index.d.ts"]
  subgraph "chart.js";
    I_0_0(["Chart"]);
  end;
  subgraph "ipp5-types";
    I_1_0(["Ipp5DailySummaryData"]);
  end;
  subgraph "lib/base-view/index";
    I_2_0(["BaseView"]);
  end;
  subgraph "lib/hold/index";
    I_3_0(["Get"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["type Get<T>"]);
    E_1(["type ValueOrGet<T>"]);
    E_2(["type Hold"]);
    E_3(["type Unwrap"]);
    E_4(["const hold"]);
    E_5(["const unwrap"]);
  end;
  M["lib/hold/index.d.ts"]
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
  E_3 ----> M;
  E_4 ----> M;
  E_5 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace IdpClient"]);
    E_1(["type IdpClient"]);
    E_2(["const IdpClient"]);
  end;
  M["lib/idp-client/index.d.ts"]
  subgraph "lib/command-queue/index";
    I_0_0(["CommandQueue"]);
  end;
  subgraph "lib/event-emitter/index";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "lib/hold/index";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace PlantView"]);
    E_1(["type PlantView"]);
    E_2(["const PlantView"]);
  end;
  M["lib/plant-view/index.d.ts"]
  subgraph "chart.js";
    I_0_0(["Chart"]);
  end;
  subgraph "ipp5-types";
    I_1_0(["Ipp5DailySummaryData"]);
  end;
  subgraph "lib/base-view/index";
    I_2_0(["BaseView"]);
  end;
  subgraph "lib/hold/index";
    I_3_0(["Get"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace QueryArgs"]);
    E_1(["type QueryArgs"]);
    E_2(["const QueryArgs"]);
  end;
  M["lib/query-args/index.d.ts"]
  subgraph "lib/base/index";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index";
    I_1_0(["Get"]);
    I_1_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace TimeSpan"]);
    E_1(["type TimeSpan"]);
    E_2(["const TimeSpan"]);
  end;
  M["lib/time-span/index.d.ts"]
  subgraph "lib/base/index";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index";
    I_1_0(["Get"]);
    I_1_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["namespace UnknownPageView"]);
    E_1(["type UnknownPageView"]);
    E_2(["const UnknownPageView"]);
  end;
  M["lib/unknown-page-view/index.d.ts"]
  subgraph "lib/base-view/index";
    I_0_0(["BaseView"]);
  end;
  subgraph "lib/hold/index";
    I_1_0(["Get"]);
    I_1_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  M["index.js"]
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["ApiClient"]);
  end;
  M["lib/api-client/index.js"]
  subgraph "lib/event-emitter/index.js";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "lib/hold/index.js";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["Base"]);
  end;
  M["lib/base/index.js"]
  subgraph "lib/hold/index.js";
    I_0_0(["hold"]);
    I_0_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["BaseView"]);
  end;
  M["lib/base-view/index.js"]
  subgraph "lib/event-emitter/index.js";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "lib/hold/index.js";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["CommandQueue"]);
  end;
  M["lib/command-queue/index.js"]
  subgraph "lib/base/index.js";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index.js";
    I_1_0(["hold"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["DailyPageView"]);
  end;
  M["lib/daily-page-view/index.js"]
  subgraph "lib/base-view/index.js";
    I_0_0(["BaseView"]);
  end;
  subgraph "lib/date-time/index.js";
    I_1_0(["DateTime"]);
  end;
  subgraph "lib/hold/index.js";
    I_2_0(["hold"]);
    I_2_1(["unwrap"]);
  end;
  subgraph "lib/plant-view/index.js";
    I_3_0(["PlantView"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  M ----> I_3_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["DateTime"]);
  end;
  M["lib/date-time/index.js"]
  subgraph "lib/base/index.js";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index.js";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["EventEmitter"]);
  end;
  M["lib/event-emitter/index.js"]
  subgraph "lib/base/index.js";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index.js";
    I_1_0(["hold"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["FloatPlantView"]);
  end;
  M["lib/float-plant-view/index.js"]
  subgraph "lib/base-view/index.js";
    I_0_0(["BaseView"]);
  end;
  subgraph "lib/hold/index.js";
    I_1_0(["hold"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["hold"]);
    E_1(["unwrap"]);
  end;
  M["lib/hold/index.js"]
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["IdpClient"]);
  end;
  M["lib/idp-client/index.js"]
  subgraph "lib/command-queue/index.js";
    I_0_0(["CommandQueue"]);
  end;
  subgraph "lib/event-emitter/index.js";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "lib/hold/index.js";
    I_2_0(["hold"]);
    I_2_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["PlantView"]);
  end;
  M["lib/plant-view/index.js"]
  subgraph "lib/base-view/index.js";
    I_0_0(["BaseView"]);
  end;
  subgraph "lib/float-plant-view/index.js";
    I_1_0(["FloatPlantView"]);
  end;
  subgraph "lib/hold/index.js";
    I_2_0(["hold"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["QueryArgs"]);
  end;
  M["lib/query-args/index.js"]
  subgraph "lib/base/index.js";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index.js";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["TimeSpan"]);
  end;
  M["lib/time-span/index.js"]
  subgraph "lib/base/index.js";
    I_0_0(["Base"]);
  end;
  subgraph "lib/hold/index.js";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph " ";
    E_0(["UnknownPageView"]);
  end;
  M["lib/unknown-page-view/index.js"]
  subgraph "lib/base-view/index.js";
    I_0_0(["BaseView"]);
  end;
  subgraph "lib/hold/index.js";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~
