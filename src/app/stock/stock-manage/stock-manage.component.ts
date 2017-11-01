import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1, '第一只股票', 1.99, 3.5, '这是一支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
      new Stock(2, '第二只股票', 2.99, 2.5, '这是二支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
      new Stock(3, '第三只股票', 3.99, 1.5, '这是三支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
      new Stock(4, '第四只股票', 4.99, 3.0, '这是四支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
      new Stock(5, '第五只股票', 5.99, 4.5, '这是五支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']),
      new Stock(6, '第六只股票', 6.99, 5.0, '这是六支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网'])
    ];
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

  delete() {
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











