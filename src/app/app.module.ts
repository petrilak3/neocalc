import { SavedDataModule } from './core/savedData/saved-data.module';
import { KontaktyModule } from './pages/kontakty/kontakty.module';
import { MkchModule } from './pages/mkch/mkch.module';
import { HyperbiliModule } from './pages/hyperbili/hyperbili.module';
import { ResuscitacieModule } from './pages/resuscitacie/resuscitacie.module';
import { OdporucaniaModule } from './pages/odporucania/odporucania.module';
import { KrivkyModule } from './pages/krivky/krivky.module';
import { LiekyModule } from './pages/lieky/lieky.module';
import { InfuziaModule } from './pages/infuzia/infuzia.module';
import { LogcheckService } from './services/logcheck.service';
import { MainModule } from './pages/uvod/main.module';
import { DashboardModule } from './pages/nastroje/dashboard.module';
import { LoginModule } from './pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CalculatorComponent } from './core/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    MainModule,
    InfuziaModule,
    LiekyModule,
    KrivkyModule,
    HyperbiliModule,
    OdporucaniaModule,
    ResuscitacieModule,
    SavedDataModule,
    MkchModule,
    KontaktyModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
   ],
  providers: [LogcheckService],
  bootstrap: [AppComponent]
})

export class AppModule { }
