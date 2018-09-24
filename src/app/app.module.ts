import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import { NewWorkoutSetEvent } from './core/events/new-workout-set.event';
import { EquipmentService } from './core/services/equipment.service';
import { JwtHttpClientInterceptor } from './core/services/jwt-interceptor.interceptor';
import { SetService } from './core/services/set.service';
import { WorkoutsService } from './core/services/workouts.service';
import {PublicLayoutComponent} from './public-layout/public-layout.component';
import {RestrictedLayoutComponent} from './restricted-layout/restricted-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './core/services/authguard.service';
import {Auth} from './core/services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    RestrictedLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    Auth,
    WorkoutsService,
    EquipmentService,
    SetService,
    NewWorkoutSetEvent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtHttpClientInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
