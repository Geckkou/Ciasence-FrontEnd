class ResponsePageable {
  content: any[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: any[];
  size: number;
  sort: number;
  totalElements: number;
  totalPages: number;

  constructor(content?: any[], first?: boolean, last?: boolean, number?: number,
    numberOfElements?: number, pageable?: any[], size?: number, sort?: number,
    totalElements?: number, totalPages?: number) {

      this.content = content || [];
      this.first = first || false;
      this.last = last || false;
      this.number = number || 0;
      this.numberOfElements = numberOfElements || 0;
      this.pageable = pageable || [];
      this.size = size || 0;
      this.sort = sort || 0;
      this.totalElements = totalElements || 0;
      this.totalPages = totalPages || 0;
  }
}

export default ResponsePageable;
