import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {FeatureLoaded, FeaturesLoaded, LOAD_FEATURE, LOAD_FEATURES} from '../../actions/feature';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class FeatureEffects {

  @Effect()
  loadFeaturesEffect$ = this._actions$
    .ofType(LOAD_FEATURES)
    .delay(1000)
    .map((action) => new FeaturesLoaded([
      {id: 123, name: 'First', description: 'Desc First', enabled: true},
      {id: 124, name: 'Second', description: 'Desc Second', enabled: true},
      {id: 125, name: 'Third', description: 'Desc Third', enabled: true}]));

  @Effect()
  loadFeatureEffect$ = this._actions$
    .ofType(LOAD_FEATURE)
    .map(toPayload)
    .delay(1000)
    .map((id) => new FeatureLoaded(
      {id, name: 'First ' + id, description: 'Desc First ' + id, enabled: true}));

  constructor(private _actions$: Actions) {
  }
}
