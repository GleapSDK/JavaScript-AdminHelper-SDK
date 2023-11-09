import GleapHelper from "../lib";
const GleapHelperInstance = new GleapHelper();

document.querySelector("body").innerHTML = `<h1>Hello World!</h1><a href="https://www.google.com">Link test</a>`;

GleapHelperInstance.onElementPicked = (selector) => {
    console.log("selector", selector);
};

GleapHelperInstance.startPicker(); 