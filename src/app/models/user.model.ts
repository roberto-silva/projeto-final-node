export interface IUser {
  id: string;
  nome: string;
  login: string;
  senha: string;
  email: string;
  roles: string;
}

export class User implements IUser {
  id: string;
  nome: string;
  login: string;
  senha: string;
  email: string;
  roles: string;

  constructor(obj: any) {
    this.id = obj.id ? obj.id : undefined;
    this.nome = obj.nome ? obj.nome : undefined;
    this.login = obj.login ? obj.login : undefined;
    this.senha = obj.senha ? obj.senha : undefined;
    this.email = obj.email ? obj.email : undefined;
    this.roles = obj.roles ? obj.roles : undefined;
  }
}
