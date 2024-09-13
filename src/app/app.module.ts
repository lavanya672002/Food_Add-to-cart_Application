import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './component/pages/search/search.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { TagComponent } from './component/pages/tag/tag.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { TitleComponent } from './component/pages/title/title.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { LoginComponent } from './component/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
