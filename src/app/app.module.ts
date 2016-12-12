import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ButtonPage } from '../pages/button/button';
import { InputPage } from '../pages/input/input';
import { LoginPage } from '../pages/login/login';
import { AlertPage } from '../pages/alert/alert';
import {RegisterPage} from '../pages/register/register';

@NgModule({
  declarations: [
  MyApp,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage,
  ButtonPage,
  InputPage,
  LoginPage,
  AlertPage,
  RegisterPage
  ],
  imports: [
  IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage,
  ButtonPage,
  InputPage,
  LoginPage,
  AlertPage,
  RegisterPage
  ],
  providers: []
})
export class AppModule {}
