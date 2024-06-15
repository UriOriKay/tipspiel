class Div extends Elements {

    constructor(parent, id, className, data) {
        super('div', parent, id, className);
        this.element.textContent = data || "";
    }
}