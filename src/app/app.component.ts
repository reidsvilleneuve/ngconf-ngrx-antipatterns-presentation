import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { names } from './state/name';
import { NameState } from './state/name/name.reducer';
import { SearchAllNameEntities } from './state/name/name.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<NameState>) {}

  names$ = this.store.pipe(select(names));

  ngOnInit() {
    this.filterNames('');
  }

  filterNames(query: string) {
    this.store.dispatch(new SearchAllNameEntities({ query }));
  }
}
