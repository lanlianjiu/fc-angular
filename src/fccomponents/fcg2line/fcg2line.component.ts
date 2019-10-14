/*
 * @Author: honghong
 * @Date: 2019-10-14 10:52:47
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 14:38:46
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, Input, AfterViewInit } from '@angular/core';
import DataSet from '@antv/data-set';
import * as G2 from '@antv/g2';
@Component({
    selector: 'fc-g2line',
    templateUrl: './fcg2line.component.html',
    styles: [``]
})
export class Fcg2linerComponent implements AfterViewInit {
    @Input()
    fcId: string;
    // 数据
    @Input()
    fcData: any[];
    chartLine: any;
    constructor() {

    }
    ngAfterViewInit(): void {
        this.createChartLine(this.fcId, this.fcData);
    }
    /**
       * 创建多折线图
       * @param containerId
       * @param data
       */
    createChartLine(containerId: string, data: any[]) {
        this.chartLine = new G2.Chart({
            container: containerId,
            forceFit: true,
            height: 300,
            padding: [100, 20, 30, 45] // 上右下左
        })
        this.chartLine.source(data)
        this.chartLine.tooltip({
            follow: false,
            crosshairs: 'y',
            htmlContent: function htmlContent(title, items) {
                var alias = {
                    download: '当日累计下载量',
                    register: '当日累计注册量',
                    bill: '当日累计成交量'
                }
                var html = '<div class="custom-tooltip">'
                for (var i = 0; i < items.length; i++) {
                    var item = items[i]
                    var color = item.color
                    var name = alias[item.name]
                    var value = item.value
                    var domHead = '<div class="custom-tooltip-item" style="border-left-color:' + color + '">'
                    var domName = '<div class="custom-tooltip-item-name">' + name + '</div>'
                    var domValue = '<div class="custom-tooltip-item-value">' + value + '</div>'
                    var domTail = '</div>'
                    html += domHead + domName + domValue + domTail
                }
                return html + '</div>'
            }
        })
        this.chartLine.axis('date', {
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                }
            }
        })
        this.chartLine.axis('value', {
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                },
                formatter: function formatter(text) {
                    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
                }
            }
        })
        this.chartLine.legend(false)
        this.chartLine
            .line()
            .position('date*value')
            .color('type')
        this.chartLine.render()
        this.chartLine.showTooltip({
            x: 300 - 20,
            y: 100
        })
    }
}
