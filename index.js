import { util, dia, shapes, linkTools, mvc } from "@joint/core";

const portsIn = {
  position: {
    name: "absolute",
  },
  attrs: {
    portBody: {
      visibility: "hidden",
      magnet: true,
      r: 10,
      fill: "#023047",
      stroke: "#023047",
    },
  },
  label: {
    position: {
      name: "left",
      args: { y: 6 },
    },
    markup: [
      {
        tagName: "text",
        selector: "label",
        className: "label-text",
      },
    ],
  },
  markup: [
    {
      tagName: "circle",
      selector: "portBody",
    },
  ],
};

const portsOut = {
  position: {
    name: "right",
  },
  attrs: {
    portBody: {
      visibility: "hidden",
      magnet: true,
      r: 10,
      fill: "#E6A302",
      stroke: "#023047",
    },
  },
  label: {
    position: {
      name: "right",
      args: { y: 6 },
    },
    markup: [
      {
        tagName: "text",
        selector: "label",
        className: "label-text",
      },
    ],
  },
  markup: [
    {
      tagName: "circle",
      selector: "portBody",
    },
  ],
};

const wellTrakTextElement = dia.Element.define(
  "wellTrakTextElement", // Custom element name
  {
    // Define the element's attributes
    attrs: {
      value: {
        x: "calc(w / 2)",
        y: 30,
        text: "0.0", // Default text content
        fill: "#000000", // Text color
        fontSize: 16, // Font size
        textAnchor: "middle", // Text alignment
        textVerticalAnchor: "middle", // Vertical alignment
      },
      description: {
        x: "calc(w / 2)",
        y: 10,
        text: "Not Set", // Default description text
        fill: "#888888", // Description text color
        fontSize: 12, // Smaller font size for description
        textAnchor: "middle",
        textVerticalAnchor: "middle", // Vertical alignment
      },
      units: {
        x: "calc(w / 2)",
        y: 45,
        text: "N/A", // Default units text
        fill: "#888888", // Units text color
        fontSize: 12, // Smaller font size for units
        textAnchor: "middle",
        textVerticalAnchor: "middle", // Vertical alignment
      },
    },
  },
  {
    markup: util.svg/* xml */ `
    <text @selector="description"  />  <!-- Description above -->
    <text @selector="value" />                  <!-- Main text -->
    <text @selector="units" />           <!-- Units below -->
      `,
  }
);

const wellTrakMeterElement = shapes.standard.Circle.define(
  "wellTrakMeterElement",
  {
    attrs: {
      root: {
        fontFamily: "Arial",
      },
      body: {
        cx: "calc(w / 2)",
        cy: "calc(h / 2)",
        r: "calc(w / 3)",
        fill: "#4a90e2",
        stroke: "#C94A46",
        strokeWidth: 2,
        fill: "transparent",
        stroke: "#C94A46",
      },
      meterid: {
        x: "calc(w / 2)",
        y: 0,
        fontSize: 20,
        textAnchor: "middle",
        textVerticalAnchor: "bottom",
        text: "Label 1",
        fill: "#C94A46",
      },

      label: {
        x: "calc(w / 2)",
        y: "calc(h / 2 - 10)",
        fontSize: 20,
        textAnchor: "middle",
        textVerticalAnchor: "top",
        text: "M",
        fill: "#C94A46",
      },
      flowrate: {
        x: "calc(w / 2)",
        y: "calc(h  + 10)",
        fontSize: 14,
        textAnchor: "middle",
        textVerticalAnchor: "top",
        text: "Label 2",
        fill: "#C94A46",
      },
      welltrak: {
        type: "meter",
        assetid: "a002r1",
        tagname: "a002.qh.val",
        tagunit: "m3/day",
      },
    },
    ports: {
      groups: {
        in: {
          position: {
            name: "absolute",
            args: {
              x: 20,
              y: 30,
            },
          },
        },
        out: {
          position: {
            name: "absolute",
            args: {
              x: 80,
              y: 30,
            },
          },
        },
      },
    },
  },
  {
    // Add as many <text> elements as you need
    markup: util.svg/* xml */ `
        <circle @selector="body" />
            <text @selector="meterid" />
            <text @selector="label" />
            <text @selector="tagvalue" />
            <text @selector="tagunit" />
        `,
  }
);

const wellTrakSeperatorElement = dia.Element.define(
  "WellTrakSeperatorElement",
  {
    attrs: {
      root: {
        fontFamily: "Arial",
      },
      body: {
        width: "calc(w)",
        height: "calc(h)",
        fill: "transparent",
        stroke: "#C94A46",
      },
      meterid: {
        x: "calc(w / 2)",
        y: "calc(h )",
        fontSize: 20,
        textAnchor: "middle",
        textVerticalAnchor: "bottom",
        text: "Label 1",
        fill: "#C94A46",
      },
      label: {
        x: "calc(w / 2)",
        y: "calc(h / 2 - 10)",
        fontSize: 20,
        textAnchor: "middle",
        textVerticalAnchor: "top",
        text: "S",
        fill: "#C94A46",
      },
      welltrak: {
        type: "seperator",
        assetid: "a002r1",
        tagname: "a002.qh.val",
      },
    },
    ports: {
      groups: {
        in: {
          position: {
            name: "absolute",
            args: {
              x: 30,
              y: 150,
            },
          },
          attrs: {
            portBody: {
              magnet: true,
              r: 10,
              fill: "#E6A502",
              stroke: "#023047",
            },
          },
          markup: [{ tagName: "circle", selector: "portBody" }],
        },
        out: {
          position: {
            name: "absolute",
            args: {
              x: 70,
              y: 150,
            },
          },
          attrs: {
            portBody: {
              magnet: true,
              r: 10,
              fill: "#E6A502",
              stroke: "#023047",
            },
          },
        },
      },
    },
  },
  {
    // Add as many <text> elements as you need
    markup: util.svg/* xml */ `
      <path @selector="body" d="
      M30,30
      a10,10 0 0 1 10,-10
      h20
      a10,10 0 0 1 10,10
      v140
      h-40
      z"
      fill="#4a90e2"/>
      <text @selector="meterid" />
      <text @selector="label" />
    `,
  }
);

// Add the custom element to the namespace
const namespace = {
  wellTrakTextElement,
  wellTrakMeterElement,
  wellTrakSeperatorElement,
  ...shapes,
};

function showInspector(cell) {
  const container = document.getElementById("inspector-container");
  container.innerHTML = ""; // Clear old inspector

  //console.log("in func");

  const fields = ["description", "value", "units"];

  fields.forEach((field) => {
    const label = document.createElement("label");
    label.innerText = field;
    const input = document.createElement("input");
    input.value = cell.attr(`${field}/text`);
    input.style.marginBottom = "5px";

    input.addEventListener("input", () => {
      cell.attr(`${field}/text`, input.value);
    });

    container.appendChild(label);
    container.appendChild(document.createElement("br"));
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  });
}

const graph = new dia.Graph({}, { cellNamespace: namespace });

const paper = new dia.Paper({
  el: document.getElementById("paper-container"),
  //width: 800,
  //height: 400,
  overflow: true,
  model: graph,
  cellViewNamespace: namespace,
  async: true,
});

paper.on("element:pointerclick", function (elementView) {
  const cell = elementView.model;
  selectedElement = elementView.model;

  inspectorWrapper.style.display = "block";
  showInspector(elementView.model);

  //console.log("click");

  if (cell.isElement() && cell.get("type") === "wellTrakTextElement") {
    showInspector(cell);
  }
});

const textElement = new wellTrakTextElement({
  position: { x: 400, y: 200 },
  //size: { width: 250, height: 200 }, // Adjusted size to fit the text and additional properties
  attrs: {
    text: {
      text: "23.2", // Custom main text value
      fill: "#1e1e1e", // Custom color
      fontSize: 18, // Custom font size
    },
    description: {
      text: "Group Meter Gas Flow ", // Custom description
    },
    units: {
      text: "m3/hr", // Custom units
    },
  },
});

// Add to the graph
graph.addCell(textElement);

const meter1 = new wellTrakMeterElement({
  position: { x: 20, y: 200 },
  size: { width: 100, height: 60 },
  attrs: {
    meterid: {
      text: "FT-123",
    },
    flowrate: {
      text: "123.3 m\u00B3",
    },
    welltrak: {
      type: "meter",
      assetid: "a002r1",
      tagname: "a002.qh.val",
    },
  },
  ports: {
    items: [
      {
        id: "port-in-1",
        group: "in",
        attrs: {
          portbody: { visibility: "hidden" },
          label: { text: "Inlet" },
        },
      },
      {
        id: "port-out-1",
        group: "out",
        attrs: {
          portbody: { visibility: "hidden" },
          label: { text: "Outlet" },
        },
      },
    ],
  },
});
//meter1.addTo(graph);
graph.addCell(meter1);

const meter2 = new wellTrakMeterElement({
  position: { x: 600, y: 200 },
  size: { width: 100, height: 60 },
  attrs: {
    meterid: {
      text: "FT-333",
    },
    flowrate: {
      text: "123.3 m\u00B3",
    },
    welltrak: {
      type: "meter",
      assetid: "a002r1",
      tagname: "a002.qh.val",
    },
  },
  ports: {
    items: [
      {
        id: "port-in-1",
        group: "in",
        attrs: {
          portbody: { visibility: "hidden" },
          label: { text: "Inlet" },
        },
      },
      {
        id: "port-out-1",
        group: "out",
        attrs: {
          portbody: { visibility: "hidden" },
          label: { text: "Outlet" },
        },
      },
    ],
  },
});
//meter1.addTo(graph);
graph.addCell(meter2);

const separatorNode = new wellTrakSeperatorElement({
  position: { x: 200, y: 120 },
  size: { width: 100, height: 200 },
  attrs: {
    meterid: {
      text: "SEP-123",
    },
    welltrak: {
      type: "seperator",
      assetid: "a002r1",
    },
  },
  ports: {
    items: [
      {
        id: "port-in-1",
        group: "in",
        attrs: { portbody: { visibility: "hidden" }, label: { text: "Inlet" } },
      },
      {
        id: "port-out-1",
        group: "out",
        attrs: {
          portbody: { visibility: "hidden" },
          label: { text: "Outlet" },
        },
      },
    ],
  },
});

graph.addCell(separatorNode);

const link1 = new shapes.standard.Link({
  source: { id: meter1.id, port: "port-out-1" },
  target: { id: separatorNode.id, port: "port-in-1" },
  router: {
    //name: "manhattan",
    name: "rightAngle",
    args: {
      //perpendicular: true,
      padding: 20, // optional spacing between path turns
    },
  },
  connector: {
    name: "rounded",
    args: {
      radius: 5,
    },
  },
  attrs: {
    line: {
      stroke: "#34495E",
      strokeWidth: 2,
      targetMarker: {
        type: "path",
        d: "M 10 -5 0 0 10 5 z",
        fill: "#34495E",
      },
    },
  },
});

graph.addCell(link1);

const link2 = new shapes.standard.Link({
  target: { id: meter2.id, port: "port-in-1" },
  source: { id: separatorNode.id, port: "port-out-1" },
  router: {
    //name: "manhattan",
    name: "rightAngle",
    args: {
      //perpendicular: true,
      padding: 20, // optional spacing between path turns
    },
  },
  connector: {
    name: "rounded",
    args: {
      radius: 5,
    },
  },
  attrs: {
    line: {
      stroke: "#34495E",
      strokeWidth: 2,
      targetMarker: {
        type: "path",
        d: "M 10 -5 0 0 10 5 z",
        fill: "#34495E",
      },
    },
  },
});

graph.addCell(link2);

const toggleButton = document.getElementById("toggle-inspector");
const inspectorWrapper = document.getElementById("inspector-wrapper");
let selectedElement = null;

toggleButton.addEventListener("click", () => {
  const isHidden = inspectorWrapper.style.display === "none";
  inspectorWrapper.style.display = isHidden ? "block" : "none";
});

document.getElementById("toggle-port").addEventListener("change", function (e) {
  const show = e.target.checked;

  if (selectedElement.hasPort("port-in-1")) {
    console.log("we have a in port");

    selectedElement.portProp(
      "port-in-1",
      "attrs/portBody/visibility",
      "hidden"
    );
  }
});

console.log("done");
console.log(shapes.standard);
