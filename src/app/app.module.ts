import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { AuthService } from './providers/auth.service';
import { LoginComponent } from './components/login/login.component';
import { GamepageComponent } from './components/gamepage/gamepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';
import { MembersComponent } from './components/members/members.component';
import { AuthGuard } from './auth.service';
import { DestinyComponent } from './components/destiny/destiny.component';
import { DarksoulsComponent } from './components/darksouls/darksouls.component';
import { DiabloComponent } from './components/diablo/diablo.component';
import { DeadbydaylightComponent } from './components/deadbydaylight/deadbydaylight.component';
import { LFGComponent } from './components/lfg/lfg.component';
import { HttpService } from './components/service/http.service';
import { AllDataComponent } from './components/alldata/alldata.component';
import { EditlfgComponent } from './components/editlfg/editlfg.component';
import { ResetComponent } from './components/reset/reset.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyALGX_Ef9e85I1Epx1MLIh0Gta35IBxaWA',
  authDomain: 'finalproject-b0de6.firebaseapp.com',
  databaseURL: 'https://finalproject-b0de6.firebaseio.com',
  storageBucket: 'finalproject-b0de6.appspot.com',
  messagingSenderId: '326269328346'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path: 'listing/:id', component:ListingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'add-listing', component:AddListingComponent},
  {path: 'edit-listing/:id', component:EditListingComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: 'gamepage', component: GamepageComponent },
  { path: 'destiny', component: DestinyComponent },
  { path: 'darksouls', component: DarksoulsComponent },
  { path: 'diablo' , component: DiabloComponent },
  { path: 'deadbydaylight', component: DeadbydaylightComponent },
  { path: 'lfg', component: LFGComponent },
  { path: 'alldata', component: AllDataComponent },
  { path: '', redirectTo: 'lfg', pathMatch: 'full' },
  { path: 'editlfg', component: EditlfgComponent },
  { path: 'reset', component: ResetComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    LoginComponent,
    GamepageComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent,
    DestinyComponent,
    DarksoulsComponent,
    DiabloComponent,
    DeadbydaylightComponent,
    LFGComponent,
    AllDataComponent,
    EditlfgComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService,AuthService,AuthGuard,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
