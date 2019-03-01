export class Recipe{
  public name:string;
  public description:string;
  public imagePath: string;
  constructor(name:string,des:string,img:string){
    this.name=name;
    this.description=des;
    this.imagePath=img;
  }
}
