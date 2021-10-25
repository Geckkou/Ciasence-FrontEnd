class Produto {
  id: number;
  codigo: string;
  nomenclatura: string;
  preco: number;
  aplicacao: string;
  dosagem: number;
  inspiracao: string;
  amostra: string;

  constructor(id?: number, codigo?: string, nomenclatura?: string, preco?: number,
              aplicacao?: string, dosagem?: number, inspiracao?: string, amostra?: string) {
    this.id = id || 0;
    this.codigo = codigo || '';
    this.nomenclatura = nomenclatura || '';
    this.preco = preco || 0;
    this.aplicacao = aplicacao || '';
    this.dosagem = dosagem || 0;
    this.inspiracao = inspiracao || '';
    this.amostra = amostra || '';
  }
}

export default Produto;
