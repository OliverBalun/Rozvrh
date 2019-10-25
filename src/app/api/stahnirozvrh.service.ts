import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StahnirozvrhService {

  constructor(private http: HttpClient) { }
  
  public getRozvrh(userInput:string){
    let url = 'https://stag-ws.utb.cz/ws/services/rest2/rozvrhy/getRozvrhByStudent?osCislo='
    +userInput+'&outputFormat=JSON';
    return this.http.get(url);
  }
}
