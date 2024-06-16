class Input extends Elements {
   
    constructor(parent, id, className, type) {
        super('input', parent, id, className);
        this.element.type = type;
    }

}