var space = '&nbsp;';
var button = document.createElement("button");
mytext = "A" + space + space + space + space + "A";
button.innerHTML = mytext;
document.getElementById("buttonarea").appendChild(button);
document.getElementById("textarea").innerHTML = mytext;