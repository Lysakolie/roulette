export default class Item {
    public title: string = "";
    public description: string = "";

    constructor(title: string = "", description: string = "") {
        this.description = description;
        this.title = title;
    }
}