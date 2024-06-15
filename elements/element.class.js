class Elements {
    element;
    constructor(html_tag, parent, id, className) {
        this.element = document.createElement(html_tag);
        this.element.id = id;
        this.element.className = className;
        docID(parent).appendChild(this.element);
    }
}