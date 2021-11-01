import Cliente from "./cliente.model";

class Projeto {
  idProjeto: number;
  ra: number;
  cliente: Cliente;
  produtos: [];
  situacao: string;
  dataRegistro: string;
  observacoes: string;

  constructor(idProjeto?: number, ra?: number, cliente?: Cliente, produtos?: [], situacao?: string,
    dataRegistro?: string, observacoes?: string) {
    this.idProjeto = idProjeto || 0;
    this.ra = ra || 0;
    this.cliente = cliente || cliente!;
    this.produtos = produtos || [];
    this.situacao = situacao || '';
    this.dataRegistro = dataRegistro || '';
    this.observacoes = observacoes || '';
  }
}

export default Projeto;
