// export class User {
//   id: number = 0;
//   username: string = '';
//   firstname: string = '';
//   lastname: string = '';
//   email: string = '';
// }
export class User {
  constructor(
    public id: number,
    public username: string,
    public firstname: string,
    public lastname: string,
    public email: string
  ) {}
}
