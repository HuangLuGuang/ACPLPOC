import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.css']
})
export class Demo02Component implements OnInit {

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
    const amapLayer = L.tileLayer('http://{s}.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1', {
      maxZoom: 18,
      subdomains: ['webrd01', 'webrd02', 'webrd03', 'webrd04']
    });
    const tdtVectorLayer = new L.TileLayer(
      'http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=11b55a09c9e0df4a1e91741b455b7f28',
      {}
    );

    const tdtLabelLayer = new L.TileLayer(
      'http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=11b55a09c9e0df4a1e91741b455b7f28',
      {}
    );

    const tdLayer = new L.LayerGroup([tdtLabelLayer, tdtVectorLayer]);


    amapLayer.addTo(this.map);
    this.map.setView([39.909186, 116.397411], 10);

    const layerControl = new L.Control.Layers(
      {
        高德: amapLayer,
        天地图: tdLayer
      }, {}, {collapsed: false}
    );
    layerControl.addTo(this.map);
    const svg = '<svg t="1626143631898" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" width="200" height="200"><path d="M512 870.4l-19.2-12.8c-32-19.2-300.8-211.2-300.8-384 0-179.2 140.8-320 320-320s320 140.8 320 320c0 172.8-268.8 358.4-300.8 384l-19.2 12.8zM512 217.6c-140.8 0-256 115.2-256 256 0 108.8 172.8 256 256 320 83.2-64 256-211.2 256-320 0-140.8-115.2-256-256-256z m0 352c-57.6 0-108.8-44.8-108.8-108.8S454.4 358.4 512 358.4s108.8 44.8 108.8 108.8S569.6 569.6 512 569.6z m0-147.2c-25.6 0-44.8 19.2-44.8 44.8s19.2 44.8 44.8 44.8 44.8-19.2 44.8-44.8-19.2-44.8-44.8-44.8z" fill="#1296db" p-id="2338"></path></svg>';
    const marker = new L.Marker([39.909186, 116.397411], {
      icon: new L.Icon({
        iconUrl: 'data: image/svg+xml,' + encodeURIComponent(svg),
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      })
    });
    marker.addTo(this.map);
  }
}
