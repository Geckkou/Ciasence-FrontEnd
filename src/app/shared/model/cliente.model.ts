class Cliente {
  id: number;
  razaoSocial: string;
  fantasia: string;

  constructor(id?: number, razaoSocial?: string, fantasia?: string) {
    this.id = id || 0;
    this.razaoSocial = razaoSocial || '';
    this.fantasia = fantasia || '';
  }
}

export default Cliente;
