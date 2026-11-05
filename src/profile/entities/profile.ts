export class ProfilePO {
  private constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
    private readonly phone: string,
    private readonly cpf: string | null,
    private readonly cnpj: string | null,
  ) {}

  static create(data: {
    name: string;
    email: string;
    password: string;
    phone: string;
    cpf?: string | null;
    cnpj?: string | null;
  }): ProfilePO {
    const hasCpf = Boolean(data.cpf);
    const hasCnpj = Boolean(data.cnpj);

    if (hasCpf === hasCnpj) {
      throw new Error('Informe CPF ou CNPJ, mas não ambos.');
    }

    return new ProfilePO(
      data.name,
      data.email,
      data.password,
      data.phone,
      data.cpf ?? null,
      data.cnpj ?? null,
    );
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getPhone(): string {
    return this.phone;
  }

  getCpf(): string | null {
    return this.cpf;
  }

  getCnpj(): string | null {
    return this.cnpj;
  }
}
