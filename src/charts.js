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
  drawDonutSvg();
  drawDonutText();
  drawDonutPaths();
  drawClockTicks();
  backgroundColrDonutDiv();

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

  function drawDonutSvg(){
    donutSVG= d3.select("#"+domElement)
                  .append("svg")
                  .classed("donut", true)
                  .attr("id", "donut_" + domElement)
                  .attr("width", svgSize+"%")
                  .attr("height", svgSize+"%")
                  .attr("viewBox", "0 -6 36 50")
                  .attr("preserveAspectRatio", "xMidYMid");
    
    donutGroup = donutSVG.append("g")
                          .attr("id", "donutID")
                          .attr("transform", "translate(" + Math.min(ui.width, ui.height) / 2 + "," + Math.min(ui.width, ui.height) / 2 + ")");
  };

  function drawDonutText() {
    if(unit){
      donutGroup.append("g")
                .append("text")
                .classed("donutText", true)
                .attr("id", "donutTextID")
                .attr("text-anchor", "middle")
                .attr("dy", -ui.height * 0.07)
                .attr("dx", 0)
                .style("font-size", ui.height * 0.01 + "em")
                .style("fill", fontColor)
                .text(value);

        donutGroup.append("g")
                  .append("text")
                  .classed("donutText", true)
                  .attr("id", "donutUnitID")
                  .attr("text-anchor", "middle")
                  .attr("dy", ui.height * 0.13)
                  .attr("dx", 0)
                  .style("font-size", ui.height * 0.01 + "em")
                  .style("fill", fontColor)
                  .text(unit);
    } else {
        donutGroup.append("g")
                  .append("text")
                  .classed("donutText", true)
                  .attr("id", "donutTextID")
                  .attr("text-anchor", "middle")
                  .attr("dy",4)
                  .attr("dx", 0)
                  .style("font-size", ui.height * 0.025 + "em")
                  .style("fill", fontColor)
                  .text(value);
    }
  };

  function drawDonutPaths() {
    donutGroup.append("path")
              .data([{
                  startAngle: 0 * ui.pi,
                  endAngle: ui.pi
              }])
              .attr("id", "lineOne_" + domElement)
              .attr("d", arc)
              .style("fill", unfilledColor);

    donutGroup.append("path")
              .data([{
                  startAngle: 0 * ui.pi,
                  endAngle: (0 / total) * ui.pi
              }])
              .attr("id", "lineTwo_" + domElement)
              .attr("d", arcTwo)
              .style("fill", filledColor);

    var arc2 = d3.svg.arc().innerRadius(ui.innerRadiusTwo).outerRadius(ui.outerRadiusTwo);
    var arcTweenOne = function(transition, newAngle) {
        transition.attrTween("d", function(d) {
            d.innerRadius = ui.innerRadius;
            d.outerRadius = ui.outerRadius;
            var interpolate = d3.interpolate(d.startAngle, newAngle);
            return function(t) {
                d.startAngle = interpolate(t);
                return arc(d);
            };
        });
    };

    var arcTweenTwo = function(transition, newAngle) {
        transition.attrTween("d", function(d) {
            d.innerRadius = ui.innerRadiusTwo;
            d.outerRadius = ui.outerRadiusTwo;
            var interpolate = d3.interpolate(d.endAngle, newAngle);
            return function(t) {
                d.endAngle = interpolate(t);
                return arc2(d);
            };
        });
    };

    donutGroup.select("#lineOne_" + domElement)
        .attr("d", arc)
        .transition()
        .duration(2000)
        .call(arcTweenOne, (Number(value) / total) *ui.pi);

    donutGroup.select("#lineTwo_" + domElement)
        .attr("d", arc2)
        .transition()
        .duration(2000)
        .call(arcTweenTwo, (Number(value) / total) * ui.pi);
  };

  function drawClockTicks() {
    var clockFaceGroup =donutGroup.append('g');

    clockFaceGroup.append('div').attr('id','donutWidth').text(85);
    clockFaceGroup.append('div').attr('id','donutHeight').text(85);

    function findSize (domElement,donutTicksGroup){
        var svgEle=d3.select("#"+domElement).select(donutTicksGroup)[0][0];
        if (svgEle) {
            return Number(svgEle.textContent);
        }else{
            return 0;
        }
      };

      if(clockFace){
          var width = findSize(domElement,'#donutWidth'),
              height = findSize(domElement,'#donutHeight'),
              tickRadius = Math.min(width/2,height/2)/2,
              secondTickStart = tickRadius,
              secondTickLength = -width*0.014,
              hourTickStart = tickRadius,
              hourTickLength = secondTickLength*1.8;

          var secondScale = d3.scale.linear()
                              .range([0,354])
                              .domain([0,59]);
          var hourScale = d3.scale.linear()
                            .range([0,330])
                            .domain([0,11]);

          donutGroup.timeTicks =donutGroup.append('g')
                                          .attr('id','timeTicks');
          
          donutGroup.timeTicks.append('g')
                              .attr('id','secondsTick');
          
          donutGroup.timeTicks.append('g')
                              .attr('id','hoursTick');

          d3.select("#"+domElement)
            .select('#secondsTick')
            .selectAll('.second-tick')
            .data(d3.range(0,60))
            .enter()
            .append('line')
            .attr('class', 'second-tick')
            .attr('x1',0)
            .attr('x2',0)
            .attr('y1',secondTickStart)
            .attr('y2',secondTickStart + secondTickLength)
            .attr('transform',function(d){
                return 'rotate(' + secondScale(d) + ')';
            })
            .style('stroke-width',0.5)
            .style('stroke','#000');

          d3.select("#"+domElement)
            .select('#hoursTick')
            .selectAll('.hour-tick')
            .data(d3.range(0,12))
            .enter()
            .append('line')
            .attr('class', 'hour-tick')
            .attr('x1',0)
            .attr('x2',0)
            .attr('y1',hourTickStart)
            .attr('y2',hourTickStart + hourTickLength)
            .attr('transform',function(d){
                return 'rotate(' + hourScale(d) + ')';
            })
            .style('stroke-width',1)
            .style('stroke','#000');
      }
  };

  function backgroundColrDonutDiv(){
    document.getElementById(domElement).style.backgroundColor = bgColor;
  };
};
