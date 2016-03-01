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
 filledColor: #1abc9c,
 unfilledColor: #bccbcc,
 fontColor: #000000,
 bgColor: #ffffff,
 clockFace: False
} 
```

![default](https://cloud.githubusercontent.com/assets/13765124/13426786/ccdafbe2-dfd5-11e5-8b88-2c9a88bb58c2.png)


**domElement** is the elementID of the HTML DOM element that the donut should be placed in. Default domElement is _#donutDiv_

```drawDonut({domElement: #donutDiv2})```

![defaultwitharrow](https://cloud.githubusercontent.com/assets/13765124/13426834/20c0e0e6-dfd6-11e5-928c-9615339de912.png)

**size** is relative to the size of the domElement that contains the donut. The size parameter is interpreted in percentage terms. Default size is 100%.

```drawDonut({size: _35_})```

![size35](https://cloud.githubusercontent.com/assets/13765124/13426876/6d93cba4-dfd6-11e5-9082-62b1af669bb8.png)

**value** determines the percentage fill of the donut ring. It also updates the text inside the donut. Default value is 80.

```drawDonut({value: _40_})```
  
![40](https://cloud.githubusercontent.com/assets/13765124/13427195/6bb27da6-dfd8-11e5-9715-bfff931ede6e.png)

**total** is the maximum value that can be displayed in the donut. Default total is 100.

```drawDonut({value: _25_, total: _30_})```

![25points](https://cloud.githubusercontent.com/assets/13765124/13426918/ab266a4e-dfd6-11e5-8731-176c0e80467e.png)

**units** text string will be shown in the second line inside the donut - under the value text. Default units are "points".

```drawDonut({units: _"hours"_})```

![80hr](https://cloud.githubusercontent.com/assets/13765124/13427143/06a2a1fc-dfd8-11e5-8c72-05f609934bbc.png)

**Please note** that, if an empty string is passed, then text inside donut will be displayed as one single line, just displaying the value - which is centered.

```drawDonut({units: _""_})```

![80](https://cloud.githubusercontent.com/assets/13765124/13427156/161ff828-dfd8-11e5-9a5a-182355ce44c8.png)

**clockFace** is a boolean value which provides a dial around the donut when true. This is a mighty useful way to visualize the time remaining as a donut. By default, clockFace is False.

```drawDonut({units: _"hours", clockFace: _True_})```

{{Insert an image of a donut with 80 hours as the text inside and displaying a dial around it}}

**filledColor** is the color of the donut that displays remaining resource whereas **unfilledColor** is the color of the donut that displays the spent resource. **bgColor** is used for applying a color to the background of the div (HTML DOM element) that the donut is placed in. This allows to make the donut blend in with whatever application background that it is used in.

**fontColor** is the color of the text inside the donut. This can be just the value text or the value along with the units text.

By default, the filled, unfilled, font and background colors are #00e676, #bdc3c7, #000000 and #ffffff.

```drawDonut({filledColor: _#ff0000_, unfilledColor: _#ffffff_, bgColor: _#00bcd4_, fontColor: _#ffffff_})```

![bg-color](https://cloud.githubusercontent.com/assets/13765124/13427186/582be286-dfd8-11e5-8657-53cb93881a18.png)
