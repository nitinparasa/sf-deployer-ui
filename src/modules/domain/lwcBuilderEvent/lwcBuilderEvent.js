class Payload {
  componentName;
  css;
  html;
  js;
  meta;
  svg;
  test;

  constructor(component) {
    this.componentName = component.componentName;
    this.js = component.js;
    this.meta = component.meta;
    if (component.withCss) this.css = component.css;
    if (component.withHtml) this.html = component.html;
    if (component.withSvg) this.svg = component.svg;
    if (component.withTest) this.test = component.test;
  }
}

export default class LWCBuilderEvent {
  type; // Options: create_button_clicked
  payload; // Payload object

  constructor(type, payload) {
    this.type = type;
    this.payload = new Payload(payload);
  }
}
