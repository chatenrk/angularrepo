import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChartdataService {

  constructor(private _http:HttpClient) { }

  getChartData(){
    return this._http.get('http://localhost:3000/chtdata/testprojinfo').map(result => result);
  };

}
