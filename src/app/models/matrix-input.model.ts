export class MatrixInput {
  public id: number;
  public name: string;
  public icon: string;
  public nvxStream: string;

  constructor(id: number, name: string, icon: string, nvxStream: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.nvxStream = nvxStream;
  }
}
