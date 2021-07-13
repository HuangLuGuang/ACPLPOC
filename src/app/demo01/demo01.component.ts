import * as L from 'leaflet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.css']
})
export class Demo01Component implements OnInit {
  map: any;
  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
 initMap(): void {
    // 初始化地图，设置地理坐标和缩放等级
    this.map = L.map('mapid', {
      zoom: 13,
      center: [ 31.86, 117.27 ]
    });

    // 添加贴图层到地图上
    const tile = L.tileLayer('http://{s}.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1', {
      maxZoom: 18,
      subdomains: ['webrd01', 'webrd02', 'webrd03', 'webrd04']
    });

    tile.addTo(this.map);
    this.map.setView([39.909186, 116.397411], 10);
  }
}
