import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// ngrx
import { StoreModule, ActionsSubject } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { FightersEffects } from './effects/fighters/fighters.effects';

// services
import { ApiService } from './services/api.service';
import {
  CMSActions,
  CMSActionsSubject,
} from './services/dispatcher.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([FightersEffects, ])
  ],
  providers: [
    ApiService,
    { provide: ActionsSubject, useClass: CMSActionsSubject },
    CMSActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
