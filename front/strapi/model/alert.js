import { button } from "./button";

export function alert(model = {}) {
    return {
      text: model.title || "",
      description: model.description || "",
      button: button(model.button) || {}
    };
  }