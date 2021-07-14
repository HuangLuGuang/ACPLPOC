import {Component, OnInit} from '@angular/core';
// @ts-ignore

import * as L from 'leaflet';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.css']
})
export class Demo03Component implements OnInit {
  map: any;
  // tslint:disable-next-line:variable-name
  device_count: number | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.dev_get_device();
    this.initMap();
  }

  initMap(): void {


    // heatmapLayer.addTo(this.map);
    // 初始化地图，设置地理坐标和缩放等级
    const map = L.map('mapid', {
      maxZoom: 20,
      minZoom: 17,
      crs: L.CRS.Simple,
      // layers: [heatmapLayer],
      center: [31.86, 117.27]
    }).setView([-0.00502, 0.00118], 20);
    this.map = map;
    const southWest = map.unproject([0, 4 * 6144], map.getMaxZoom());
    const northEast = map.unproject([4 * 4096, 0], map.getMaxZoom());
    map.setMaxBounds(new L.LatLngBounds(southWest, northEast));
    L.tileLayer('/assets/map-tiles/{z}/map_{x}_{y}.png', {
      maxZoom: 20,
      minZoom: 17,
      attribution: 'Map data &copy; MaboTech',
    }).addTo(map);
    const marker = L.marker([-0.00491, 0.00116]).addTo(map);
    marker.bindPopup('<b>35600</b><br />  running').openPopup();
    L.marker([-0.00447, 0.00315]).addTo(map).bindPopup('Lineset').openPopup();

    const latlngs: [number, number][] = [[-0.00447, 0.00315], [-0.00447, 0.00258]];
    L.polyline(latlngs, {color: 'red'}).addTo(map);

    const latlngs2: [number, number][] = [[-0.00447, 0.00258], [-0.00447, 0.00167], [-0.00447, 0.00092], [-0.00469, 0.00092], [-0.00469, 0.00324]];
    L.polyline(latlngs2, {color: 'blue'}).addTo(map);

    const latlngs3: [number, number][] = [[-0.00447, 0.00274], [-0.00453, 0.00274], [-0.00453, 0.00258], [-0.00447, 0.00258]];
    L.polyline(latlngs3, {color: 'green'}).addTo(map);

    L.circle([-0.00491, 0.00108], 0.00002, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.5
    }).addTo(map).bindPopup('ESN:89530001');
    L.circle([-0.00491, 0.00096], 0.00002, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.5
    }).addTo(map).bindPopup('ESN:89530002');
    L.circle([-0.00447, 0.00263], 0.00002, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.5
    }).addTo(map).bindPopup('ESN:89130006');
    L.circle([-0.00447, 0.00245], 0.00002, {
      color: '#ffa500',
      fillColor: '#ffa500',
      fillOpacity: 0.5
    }).addTo(map).bindPopup('ESN:89130007');
    L.circle([-0.00469, 0.00103], 0.00002, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.5
    }).addTo(map).bindPopup('ESN:89130003');
    L.circle([-0.00452, 0.00092], 0.00002, {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.5
    }).addTo(map).bindPopup('ESN:89130003');
    for (let i = 0; i < 20; i++) {
      let color = 'blue';
      let info = 'OK';
      if (i % 5 === 0) {
        color = 'red';
        info = 'Issue';
      }
      L.circle([-0.00469, 0.00129 + i / 12000], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('<b>ESN:89129' + (100 - i) + '</b><br/>' + info);
    }
    for (let i = 0; i < 16; i++) {
      let color = 'blue';
      if (i % 6 === 0) {
        color = 'red';
      }
      L.circle([-0.00447, 0.00119 + i / 10000], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('ESN:891300' + i);
    }
    for (let i = 0; i < 16; i++) {
      let color = 'blue';
      if (i % 6 === 0) {
        color = 'red';
      }
      L.circle([-0.00491, 0.00304 - i / 10000], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('ESN:8953000' + i);
    }
    for (let i = 0; i < 16; i++) {
      let color = 'blue';
      if (i % 7 === 0) {
        color = 'red';
      }
      L.circle([-0.00513, 0.00260 - i / 10000], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('ESN:8953000' + i);
    }
    L.polygon([
      [-0.00491, 0.00079],
      [-0.00491, 0.00121],
      [-0.00513, 0.00121],
      [-0.00513, 0.00079]
    ]).addTo(map).bindPopup('Zone 4 -- 2.8');
    L.polygon([
      [-0.00491, 0.00253],
      [-0.00513, 0.00253],
      [-0.00513, 0.00212],
      [-0.00491, 0.00212]
    ]).addTo(map).bindPopup('Zone 2 -- 2.8');

    for (let i = 0; i < 8; i++) {
      let color = 'blue';
      if (i % 6 === 0) {
        color = 'red';
      }
      L.circle([-0.0033 - i / 10000, 0.00253], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('ESN:8953000' + i);
    }

    for (let i = 0; i < 8; i++) {
      let color = 'blue';
      if (i % 8 === 0) {
        color = 'red';
      }
      L.circle([-0.00333 - i / 12000, 0.00285], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('ESN:8953000' + i);

    }

    for (let i = 0; i < 6; i++) {
      let color = 'blue';
      if (i % 6 === 0) {
        color = 'red';
      }
      L.circle([-0.00162 - i / 20000, 0.00247], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('ESN:8953000' + i);
    }

    for (let i = 0; i < 6; i++) {

      let color = 'blue';
      if (i % 7 === 0) {
        color = 'red';
      }
      L.circle([-0.00162 - i / 20000, 0.0028], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('ESN:8953000' + i);

    }

    for (let i = 0; i < 10; i++) {

      let color = 'blue';
      if (i % 7 === 0) {
        color = 'red';
      }
      L.circle([-0.00337 - i / 20000, 0.00111], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('CSN:28953000' + i);
    }

    for (let i = 0; i < 10; i++) {
      let color = 'blue';
      if (i % 8 === 1) {
        color = 'red';
      }
      L.circle([-0.00341 - i / 20000, 0.00091], 0.00002, {
        color,
        fillColor: color,
        fillOpacity: 0.5
      }).addTo(map).bindPopup('CSN:18953000' + i);

    }

    // L.tileLayer('/assets/map-tiles/map_{x}_{y}.png', {
    //   maxZoom: 18,
    // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,
    // <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    // }).addTo(map);
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

    L.circle([51.508, -0.11], 0.0008, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map).bindPopup('I am a circle.');

    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(map).bindPopup('I am a polygon.');


    const popup = L.popup();


    map.on('click', this.onMapClick);
  }

  onMapClick(e: { latlng: L.LatLngExpression; }): void {
    L.popup()
      .setLatLng(e.latlng)
      .setContent('You clicked the map at ' + e.latlng.toString())
      .openOn(this.map);
  }

  dev_get_device(): void {
    const url = `http://1.117.179.214:5000/rpc/v1`;
    const body = {
      jsonrpc: '2.0',
      method: 'callrpc',
      params: {
        table: 'menu_item',
        context: {
          sessionid: '123',
          user: 'mt',
          languageid: 2052
        },
        method: 'get_alldevice',
        columns: {},
        pkey: 'identifier'
      },
      id: '1'
    };
    this.http.post<{
      result: any;
    }>(url, body).subscribe(response => {
      const data = response.result.message[0].message;
      this.device_count = data.length;
    });
  }
}

