/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: fccomponent平台组件模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-14 14:12:58
 */
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared';
import { FcimgviewComponent } from './fcimgview/fcimgview.component';
import { Fcg2radarComponent } from './fcg2radar/fcg2radar.component';
import { Fcg2barComponent } from './fcg2bar/fcg2bar.component';
import { Fcg2linerComponent } from './fcg2line/fcg2line.component';
import { Fcg2minibarComponent } from './fcg2minibar/fcg2minibar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FcimgviewComponent, // 组件-图片查看
    Fcg2radarComponent,
    Fcg2barComponent,
    Fcg2linerComponent,
    Fcg2minibarComponent
  ],
  exports: [
    FcimgviewComponent,
    Fcg2radarComponent,
    Fcg2barComponent,
    Fcg2linerComponent,
    Fcg2minibarComponent
  ]
})
export class FccomponentModule { }
