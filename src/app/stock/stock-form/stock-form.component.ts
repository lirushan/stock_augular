import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public stock;

  constructor(private routerInfo: ActivatedRoute,
              private stockService: StockService,
              private router: Router) {
    // 根据id查询库中的数据
    const stockId = this.routerInfo.snapshot.params['id'];
    console.log(stockId);
    this.stock = stockService.getStock(stockId);
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    this.router.navigateByUrl('/stock');
  }
}
