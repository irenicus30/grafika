

var textLayerRef = activeDocument.artLayers.add()
textLayerRef.name = "date text"
textLayerRef.kind = LayerKind.TEXT

var textItemRef = textLayerRef.textItem

var date = Date(Date.now())
dateString = date.toString()
textItemRef.contents = "today is " + dateString

//set color  
var textColor = new SolidColor();
textColor.rgb.hexValue="dddddd";
textItemRef.color = textColor;  

//set font  
textItemRef.font = "Verdana";

//set size  
textItemRef.size = 30;  
