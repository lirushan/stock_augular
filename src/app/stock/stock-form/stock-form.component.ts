import {Component, OnInit} from '@angular/core';
import {Stock} from '../stock-manage/stock-manage.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public stock;
  public stockId = '';

  constructor(private routerInfo: ActivatedRoute) {
    // 根据id查询库中的数据
    this.stockId = this.routerInfo.snapshot.params['id'];
    console.log(this.stockId)
    this.stock = new Stock(1, '第一只股票', 1.99, 3.5, '这是一支股票, 是我在学习慕课网在实战是创建的。', ['IT', '互联网']);
  }

  ngOnInit() {
  }

}
