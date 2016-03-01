# Dataviz
### Library

- [drawDonut](https://github.com/Infratab/dataviz/blob/master/README.md#drawdonut)
 

### drawDonut

```
drawDonut({size: _number_,
           domElement: _#id_,
           value: _number_,
           Total: _number_,
           unit: _string_,
           color: _#ffffff_,
           clockFace: _boolean_
          })
```

Define defaults

- Size
  - Relative to the domElement that contains the donut. Default size is 100%

```drawDonut({size: _65_})```

{{Insert two images of donut on a div with a background color, where donut size is (a) 65 and (b) 100}}

- domElement
  - The elementID that the donut should be placed in

```drawDonut({domElement: #donutDiv})```

{{Insert one image which has the div name in it and subscript whic says "domElement = div name"}}

- Value
  - Text inside the donut
  - Percentage fill of the donut ring
  - {{Insert two images of donuts, one with value of 95 and another with value of 40 - no unit in both of these images}}

- Total
  - The maximum value that can be displayed in the donut. Default total is 100.

- Unit
  - If passed, will be shown in the second line inside the donut
  - If ignored, text inside donut will be single line, just displaying the value

- clockFace
  - Boolean value which provides a dial around the donut when true. This is a mighty useful way to visualize the time remaining as a donut

- Color
  - Filled area color of the donut ring
  - Unfilled area color of the donut ring
  - Text color (Value and unit)




