var sorryElements = document.getElementsByTagName("option");
var elArray = Array.from(sorryElements);
for (let i = 0; i < elArray.length; i++) {
  if (
    elArray[i].text === "Maine" ||
    elArray[i].text === "ME" ||
    elArray[i].text === "ME - Maine" ||
    elArray[i].text === "Marshall Islands" ||
    elArray[i].text === "MH" ||
    elArray[i].text === "MH - Marshall Islands" ||
    elArray[i].text === "Maryland" ||
    elArray[i].text === "MD" ||
    elArray[i].text === "MD - Maryland" ||
    elArray[i].text === "Massachusetts" ||
    elArray[i].text === "MA" ||
    elArray[i].text === "MA - Massachusetts" ||
    elArray[i].text === "Michigan" ||
    elArray[i].text === "MI" ||
    elArray[i].text === "MI - Michigan" ||
    elArray[i].text === "Mississippi" ||
    elArray[i].text === "MS" ||
    elArray[i].text === "MS - Mississippi" ||
    elArray[i].text === "Missouri" ||
    elArray[i].text === "MO" ||
    elArray[i].text === "MO - Missouri" ||
    elArray[i].text === "Montana" ||
    elArray[i].text === "MT" ||
    elArray[i].text === "MT - Montana"
  ) {
    elArray[i].parentNode.removeChild(elArray[i]);
    console.log("Sorry, Minnesota Only");
  }
}
