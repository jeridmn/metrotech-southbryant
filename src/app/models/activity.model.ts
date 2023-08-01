export class Activity {
  public id: number;
  public name: string;
  public icon: string;
  public path: string;

  constructor(id: number, name: string, icon: string, path: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.path = path;
  }
}
