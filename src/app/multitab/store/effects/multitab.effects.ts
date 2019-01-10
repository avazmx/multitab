import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

// export interface FeatureState extends fromApp.AppState {
//     community: State;
// }

export interface State {
    community: any;
}

@Injectable()
export class CommunityEffects {
    constructor(private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<any>) { }
}
