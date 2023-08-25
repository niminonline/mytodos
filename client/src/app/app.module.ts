import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LoginSignupFrameComponent } from './components/common/login-signup-frame/login-signup-frame.component';
import { HomeComponent } from './components/user/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleDialogComponent } from './components/common/simple-dialog/simple-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginSignupFrameComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SimpleDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
