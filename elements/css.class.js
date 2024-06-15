class Css{
    element

    constructor(href) {
        this.element = document.createElement('link');
        this.element.rel = 'stylesheet';
        this.element.href = href
        document.head.appendChild(this.element);
    }
}