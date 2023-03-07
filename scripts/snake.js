if (document.getElementsByClassName("dtCYCd VDgVie")) {
  var pluginHolder = document.getElementById("snakePluginHolder");

  if (pluginHolder) {
    pluginHolder.remove();
    console.log("Content removed");
  } else {
    pluginHolder = document.createElement("div");
    pluginHolder.id = "snakePluginHolder";

    var text = document.createElement("p");
    text.innerText = "Plugin test";

    pluginHolder.appendChild(text);
    document
      .getElementsByClassName("ynlwjd VDgVie qzMpzb u98ib")[0]
      .appendChild(pluginHolder);
    console.log("Content created");
  }
}
