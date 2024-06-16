class Input extends Elements {
   
    constructor(parent, id, className, type) {
        super('input', parent, id, className);
        this.element.type = type;
    }

    

    // render() {
    //     new Input(parent, id, className, type, placeholder, src, alt);
    //     docID(id).placeholder = "text...";
    //     docID(id).src = "./"; 
    // }
}