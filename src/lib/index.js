import { ElementPicker } from "pick-dom-element";
import unique from 'unique-selector';

class GleapHelper {
  currentMode = 'navigate';
  picker = null;

  constructor() {
    window.addEventListener('message', this.receiveMessage, false);
  }

  stopPicker = () => {
    if (this.picker) {
      this.picker.stop();
      this.picker = null;
      return;
    }
  }

  startPicker = () => {
    this.stopPicker();

    const style = { borderColor: "#0000ff" };
    this.picker = new ElementPicker({ style });
    this.picker.start({
      onHover: (el) => console.log(`Hover: ${el.tagName}`),
      onClick: (el) => {
        try {
          var selector = unique(el);
          window.parent.postMessage({ action: 'elementPicked', selector: selector }, '*');
        } catch (e) { }
      },
    });
  };

  setMode = (mode) => {
    this.mode = mode;
    if (mode === 'navigate') {
      this.stopPicker();
    }
    if (mode === 'picker') {
      this.startPicker();
    }
  }

  receiveMessage = (event) => {
    if (event.origin !== "https://app.gleap.io") {
      // return;
    }

    if (!event.data || !event.data.helperApp) {
      return;
    }

    if (event.data.action === 'setMode') {
      this.setMode(event.data.mode);
    }
  };
}

export default GleapHelper;
