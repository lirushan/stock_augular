import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { MenuComponent } from './public/menu/menu.component';
import { SidebarComponent } from './public/sidebar/sidebar.component';
import { FooterComponent } from './public/footer/footer.component';
import { ContentComponent } from './public/content/content.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './public/stars/stars.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";

// 导入路由配置, 配置组件路径
const routesConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'stock', component: StockManageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock/:id', component: StockFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManageComponent,
    DashboardComponent,
    StockFormComponent,
    StarsComponent
  ],
  // 导入模块
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig)
  ],
  // 通过依赖注入来实例化对象
  // 提供器
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
