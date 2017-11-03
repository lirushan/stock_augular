import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stocks: Stock[] = [
    new Stock(1, '第一只股票', 1.99, 3.5, '这是一支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
    new Stock(2, '第二只股票', 2.99, 2.5, '这是二支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
    new Stock(3, '第三只股票', 3.99, 1.5, '这是三支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
    new Stock(4, '第四只股票', 4.99, 3.0, '这是四支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
    new Stock(5, '第五只股票', 5.99, 4.5, '这是五支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
    new Stock(6, '第六只股票', 6.99, 5.0, '这是六支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网'])
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    return this.stocks.find(stocka => stocka.id == id);
  }
}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
