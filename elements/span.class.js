class Span extends Elements {
    constructor(parent, id, className, data) {
        super('span', parent, id, className);
        this.element.textContent = data || "";
    }
}