import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Name } from '../state/name/name.model';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  BASE_URL = 'api/names';

  constructor(private httpClient: HttpClient) {}

  search(query): Observable<Array<Name>> {
    return this.httpClient.get<Array<Name>>(`${this.BASE_URL}?name=${query}`);
  }
}
