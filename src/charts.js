window.drawDonut = function(domElementId,options){
  options = options || {};
  var defaults = {
                size: 100,
                value: 80,
                total: 100,
                unit: "Points",
                filledColor: "#1abc9c",
                unfilledColor: "#bccbcc",
                fontColor: "#000000",
                bgColor: "#ffffff",
                clockFace: false
              };

  var ui = {
            pi: 2 * Math.PI,
            width: 36,
            height: 36,
            outerRadius: 0,
            innerRadius: 0,
            outerRadiusTwo: 0,
            innerRadiusTwo: 0
          };

  var domElement;
  var svgSize;
  var value;
  var total;
  var unit;
  var filledColor;
  var unfilledColor;
  var fontColor;
  var bgColor;
  var clockFace;
  var arc;
  var arcTwo;
  var donutSVG;
  var donutGroup;

  initialize();
  

  function initialize(){

    domElement = domElementId;
    svgSize = options.size || defaults.size;
    value = options.value || defaults.value;
    total = options.total || defaults.total;
    filledColor = options.filledColor || defaults.filledColor;
    unfilledColor = options.unfilledColor || defaults.unfilledColor;
    fontColor = options.fontColor || defaults.fontColor;
    bgColor = options.bgColor || defaults.bgColor;
    clockFace = options.clockFace || defaults.clockFace;

    if(options.unit == "") {
      unit = "";
    } else {
      unit = options.unit || defaults.unit;
    }

    ui.outerRadiusTwo = Math.min(ui.width, ui.height) / 2;
    ui.innerRadiusTwo = (ui.outerRadiusTwo / 3.85) * 3;
    ui.innerRadius = ui.innerRadiusTwo + ((ui.outerRadiusTwo - ui.innerRadiusTwo) / 3);
    ui.outerRadius = ui.outerRadiusTwo - ((ui.outerRadiusTwo - ui.innerRadiusTwo) / 3);

    arc = d3.svg.arc().innerRadius(ui.innerRadius).outerRadius(ui.outerRadius);
    arcTwo = d3.svg.arc().innerRadius(ui.innerRadiusTwo).outerRadius(ui.outerRadiusTwo).startAngle(0).endAngle((0 / 100) * ui.pi);
  
    d3.select("#"+domElement).select("#donut_"+domElement).remove();

  };


};
