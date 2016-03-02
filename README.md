# Dataviz
### Library

- [drawDonut](https://github.com/Infratab/dataviz/blob/master/README.md#drawdonut)
 

### drawDonut

```
drawDonut( domElement , {
           size: number,
           value: number,
           total: number,
           unit: string,
           filledColor: #ffffff,
           unfilledColor:#ffffff,
           fontColor:#ffffff,
           bgColor: #ffffff,
           clockFace: boolean
          })
```

Defaults
```
{
 size: 100,
 value: 80,
 total: 100,
 unit: "Points",
 filledColor: #1abc9c,
 unfilledColor: #bccbcc,
 fontColor: #000000,
 bgColor: #ffffff,
 clockFace: False
} 
```

![default](https://cloud.githubusercontent.com/assets/13765124/13439850/4fb32a50-e015-11e5-8550-d161292e69e4.png)


**domElement** is the elementID of the HTML DOM element that the donut should be placed in.

```
drawDonut(donutDiv2)
```

![donuts](https://cloud.githubusercontent.com/assets/13765124/13451424/d7f53fe4-e064-11e5-8b73-dd45514077ee.png)

**size** is relative to the size of the domElement that contains the donut. The size parameter is interpreted in percentage terms. Default size is 100%.

```drawDonut("donutDiv", {size: 35})```

![size35](https://cloud.githubusercontent.com/assets/13765124/13440007/0e17db26-e016-11e5-97e7-35f870d91ef3.png)

**value** determines the percentage fill of the donut ring. It also updates the text inside the donut. Default value is 80.

```drawDonut("donutDiv", {value: 40})```
  
![40](https://cloud.githubusercontent.com/assets/13765124/13440074/4c1a8388-e016-11e5-95ce-94376803e55b.png)

**total** is the maximum value that can be displayed in the donut. Default total is 100.

```drawDonut("donutDiv", {value: 25, total: 30})```

![25points](https://cloud.githubusercontent.com/assets/13765124/13440105/72926882-e016-11e5-874c-7252b276210b.png)

**units** text string will be shown in the second line inside the donut - under the value text. Default units are "points".

```drawDonut("donutDiv", {units: "hours"})```

![80hr](https://cloud.githubusercontent.com/assets/13765124/13451392/a1b001d0-e064-11e5-9c0d-afac9f5be7e9.png)

**Please note** that, if an empty string is passed, then text inside donut will be displayed as one single line, just displaying the value - which is centered.

```drawDonut(donutDiv, {units: ""})```

![80](https://cloud.githubusercontent.com/assets/13765124/13439951/d5f54436-e015-11e5-80b8-7e301362f78b.png)

**clockFace** is a boolean value which provides a dial around the donut when true. This is a mighty useful way to visualize the time remaining as a donut. By default, clockFace is False.

```drawDonut("donutDiv", {units: "hours", clockFace: True})```

![80tick 1](https://cloud.githubusercontent.com/assets/13765124/13451352/4a488cfa-e064-11e5-80d5-9c0e0172a100.png)

**filledColor** is the color of the donut that displays remaining resource whereas **unfilledColor** is the color of the donut that displays the spent resource. **bgColor** is used for applying a color to the background of the div (HTML DOM element) that the donut is placed in. This allows to make the donut blend in with whatever application background that it is used in.

**fontColor** is the color of the text inside the donut. This can be just the value text or the value along with the units text.

By default, the filled, unfilled, font and background colors are #00e676, #bdc3c7, #000000 and #ffffff.

```drawDonut("donutDiv", {filledColor: #ff0000, unfilledColor: #ffffff, bgColor: #00bcd4, fontColor: #ffffff})```

![bg-color](https://cloud.githubusercontent.com/assets/13765124/13439885/7b48c558-e015-11e5-86c6-9fbf3415f9b7.png)
