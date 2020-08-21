import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsViewComponent } from './results-view/results-view.component';
import { SingleResultViewComponent } from './single-result-view/single-result-view.component';

@NgModule({
  declarations: [AppComponent, ResultsViewComponent, SingleResultViewComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
