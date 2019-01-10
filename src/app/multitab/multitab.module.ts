import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommunityEffects } from './store/effects/multitab.effects';
import { communityReducer } from './store/reducers/multitab.reducers';
import { MultitabComponent } from './components/multitab/multitab.component';
import { MultitabRoutingModule } from './multitab-routing.module';

@NgModule({
  declarations: [
    // Components
    MultitabComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // StoreModule.forFeature('community', fromCommunity.communityReducer),
    // EffectsModule.forFeature([CommunityEffects]),
    MultitabRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    AgGridModule.withComponents([ ]),
  ],
  entryComponents: [
    // Components for AG Grid
  ]
})

export class MultitabModule { }
