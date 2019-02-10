import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ConnexionComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
