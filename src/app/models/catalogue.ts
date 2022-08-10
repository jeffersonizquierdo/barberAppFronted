export class Catalogue {
    private id: Number;
    private description: string;
    private name: string;
    private imageURL: string;
    private idbarbershop: Number;

    constructor(id:Number, name:string, imageURL:string,description:string, idbarbershop:Number) { 
        this.id=id,
        this.name=name,
        this.imageURL=imageURL,
        this.description=description,
        this.idbarbershop=idbarbershop
    }

}

