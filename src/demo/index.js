import GleapHelper from "../lib";
const GleapHelperInstance = new GleapHelper();

document.querySelector("body").innerHTML = `<h1>Hello World!</h1><h1>Hello World!</h1><h1>Hello World!</h1><h1 id="234">Hello World!</h1>`;

console.log("GleapHelperInstance", GleapHelperInstance);

GleapHelperInstance.startPicker(); 