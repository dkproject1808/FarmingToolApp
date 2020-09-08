/**
 * @class Model
 *
 * Manages the data of the application.
 */

export interface DriverDto {
  id: string;
  firstname: string;
  lastname: string;
}

export class Driver {
  public id: string;
  public firstname: string;
  public lastname: string;

  constructor(
    {id, firstname, lastname}: DriverDto = {
      id: '',
      firstname: '',
      lastname: ''
    }
  ) {
    this.id = this.uuidv4();
    this.firstname = firstname;
    this.lastname = lastname;
  }

  //id aus der DB holen
  uuidv4(): string {
    return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
      /[018]/g,
      (c: number) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
  }

}