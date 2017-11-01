import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public pageTitle = '';

  public pageDesc = '';

  constructor(private router: Router) {
    // 过滤器
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/dashboard') {
          this.pageTitle = '这里是首页';
          this.pageDesc = '这里什么内容都没有';
        }
        if (event.url === '/stock') {
          this.pageTitle = '股票信息管理';
          this.pageDesc = '进行股票信息基本增删改查';
        }
      });
  }

  ngOnInit() {
  }

}
