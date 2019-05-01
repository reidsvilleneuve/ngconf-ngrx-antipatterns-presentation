import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Name } from '../state/name/name.model';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  BASE_URL = 'api/name';

  constructor(private httpClient: HttpClient) {}

  search(query): Observable<Array<Name>> {
    // TODO: get based on state.paging (filter, sorting, page, limit)
    return this.httpClient.get<Array<Name>>(`${this.BASE_URL}?^${query}`);
  }
}
