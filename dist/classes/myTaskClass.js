class taskClass {
    constructor(Tasktitle, Image, date) {
        this.Tasktitle = Tasktitle;
        this.Image = Image;
        this.date = date;
        this.id = this.generateId();
    }
    generateId() {
        return Math.floor(Math.random() * 10000);
    }
}
export default taskClass;
