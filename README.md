# Dataviz
### Library

- [drawDonut](https://github.com/Infratab/dataviz/blob/master/README.md#drawdonut)
 

### drawDonut

```
drawDonut({
           domElement: _#id_,
           size: _number_,
           value: _number_,
           total: _number_,
           unit: _string_,
           color: _#ffffff_,
           clockFace: _boolean_
          })
```

Defaults
```
{
 domElement: #donutDiv,
 size: 100,
 value: 80,
 total: 100,
 units: "Points",
 filledColor: #00e676,
 unfilledColor: #bdc3c7,
 fontColor: #000000,
 bgColor: #ffffff,
 clockFace: False
} 
```
{{Insert an image of donut with all the defaults and a div around it, which has a black border}}

**domElement** is the elementID of the HTML DOM element that the donut should be placed in. Default domElement is _#donutDiv_

```drawDonut({domElement: #donutDiv2})```

{{Insert one image which has the div name in it}}

**size** is relative to the size of the domElement that contains the donut. The size parameter is interpreted in percentage terms. Default size is 100%.

```drawDonut({size: _35_})```

{{Insert one image of donut on a div with a border, where donut size is 35}}

**value** determines the percentage fill of the donut ring. It also updates the text inside the donut. Default value is 80.

```drawDonut({value: _40_})```
  
{{Insert one images of donut with value of 40}}

**total** is the maximum value that can be displayed in the donut. Default total is 100.

```drawDonut({value: _25_, total: _30_})```

{{Insert an image of a donut with 25 as the value showing a 75% fill}}

**units** text string will be shown in the second line inside the donut - under the value text. Default units are "points".

```drawDonut({units: _"hours"_})```

{{Insert an image of a donut with 80 hours as the text inside}}

**Please Note** that, if an empty string is passed, then text inside donut will be displayed as one single line, just displaying the value - which is centered.

```drawDonut({units: _""_})```

{{Insert an image of a donut displaying only 80 - centered}}

**clockFace** is a boolean value which provides a dial around the donut when true. This is a mighty useful way to visualize the time remaining as a donut. By default, clockFace is False.

```drawDonut({units: _"hours", clockFace: _True_})```

{{Insert an image of a donut with 80 hours as the text inside and displaying a dial around it}}

**filledColor** is the color of the donut that displays remaining resource whereas **unfilledColor** is the color of the donut that displays the spent resource. **bgColor** is used for applying a color to the background of the div (HTML DOM element) that the donut is placed in. This allows to make the donut blend in with whatever application background that it is used in.

**fontColor** is the color of the text inside the donut. This can be just the value text or the value along with the units text.

By default, the filled, unfilled, font and background colors are #00e676, #bdc3c7, #000000 and #ffffff.

```drawDonut({filledColor: _#ff0000_, unfilledColor: _#ffffff_, bgColor: _#00bcd4_, fontColor: _#ffffff_})```

{{Insert an image of a donut with a red filled and white unfilled ring in a cyan colored background for the div and white font}}
