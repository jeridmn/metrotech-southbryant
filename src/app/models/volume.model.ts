export class Volume {
  public name: string;
  public mic: boolean
  public id: number;
  public subpage: number;

  constructor(name: string, mic: boolean, id: number, subpage: number) {
    this.name = name;
    this.mic = mic
    this.id = id;
    this.subpage = subpage
  }
}
