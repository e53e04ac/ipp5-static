# ipp5-static

~~~~~ sh
npm install e53e04ac/ipp5-static
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
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
    B_15(["e53e04ac/ipp5-types"]);
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
  click B_0 "https://www.npmjs.com/package/@fortawesome/fontawesome-free/v/6.3.0";
  click B_1 "https://www.npmjs.com/package/bootstrap/v/5.2.3";
  click B_2 "https://www.npmjs.com/package/chart.js/v/4.2.1";
  click B_3 "https://www.npmjs.com/package/d3/v/7.8.2";
  click B_4 "https://www.npmjs.com/package/jquery/v/3.6.3";
  click B_5 "https://www.npmjs.com/package/jquery-ui-dist/v/1.13.2";
  click B_6 "https://www.npmjs.com/package/jquery.easing/v/1.4.1";
  click B_7 "https://www.npmjs.com/package/popper.js/v/1.16.1";
  click B_8 "https://www.npmjs.com/package/socket.io-client/v/4.6.1";
  click B_9 "https://www.npmjs.com/package/startbootstrap-sb-admin-2/v/4.1.4";
  click B_10 "https://www.npmjs.com/package/@types/bootstrap/v/5.2.6";
  click B_11 "https://www.npmjs.com/package/@types/d3/v/7.4.0";
  click B_12 "https://www.npmjs.com/package/@types/jquery/v/3.5.16";
  click B_13 "https://www.npmjs.com/package/@types/jqueryui/v/1.12.16";
  click B_14 "https://www.npmjs.com/package/@types/socket.io-client/v/3.0.0";
  click B_15 "https://github.com/e53e04ac/ipp5-types/tree/0a43bae7223e3c65232855804c51a33affbbb06f";
~~~~~

~~~~~ mermaid
graph RL;
  M(["index.d.ts"])
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
