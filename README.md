# ipp5-static

~~~~~ sh
npm install e53e04ac/ipp5-static
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-static"]);
  B0(["@fortawesome/fontawesome-free"]);
  B1(["bootstrap"]);
  B2(["chart.js"]);
  B3(["d3"]);
  B4(["jquery"]);
  B5(["jquery-ui-dist"]);
  B6(["jquery.easing"]);
  B7(["popper.js"]);
  B8(["socket.io-client"]);
  B9(["startbootstrap-sb-admin-2"]);
  C0(["@types/bootstrap"]);
  C1(["@types/d3"]);
  C2(["@types/jquery"]);
  C3(["@types/jqueryui"]);
  C4(["@types/socket.io-client"]);
  C5(["e53e04ac/ipp5-types"]);
  click C5 href "https://github.com/e53e04ac/ipp5-types";
  subgraph "e53e04ac/ipp5-static";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
    B5 --import--> A;
    B6 --import--> A;
    B7 --import--> A;
    B8 --import--> A;
    B9 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
    C2 --import--> A;
    C3 --import--> A;
    C4 --import--> A;
    C5 --import--> A;
  end;
~~~~~
