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
    C_15(["e53e04ac/ipp5-types\n82577500bdeaa45ca281669d5ed3d3850c4376e8"]);
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
  click C_15 "https://github.com/e53e04ac/ipp5-types/tree/82577500bdeaa45ca281669d5ed3d3850c4376e8";
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
