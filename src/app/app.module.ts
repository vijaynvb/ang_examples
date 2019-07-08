import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingsComponent } from './components/databindings/databindings.component';
import { TwowaydbComponent } from './components/twowaydb/twowaydb.component';
import { HidingComponent } from './components/hiding/hiding.component';
import { NgforComponent } from './components/directives/ngfor/ngfor.component';
import { NgswitchComponent } from './components/directives/ngswitch/ngswitch.component';
import { NgclassComponent } from './components/directives/ngclass/ngclass.component';
import { NgpipeComponent } from './components/pipes/ngpipe/ngpipe.component';
import { ExponetialStrenthPipe } from './exponetial-strenth.pipe';
import { VoteparentComponent } from './components/inoutcomm/voteparent/voteparent.component';
import { VotedetailsComponent } from './components/inoutcomm/votedetails/votedetails.component';
import { ViewchildComponent, Pane } from './components/viewchildex/viewchild/viewchild.component';
import { LoggingcomponentComponent } from './components/loggingcomponent/loggingcomponent.component';
import { LoggingService } from './services/logging.service';
import { HttpbinComponent } from './components/httpbin/httpbin.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingsComponent,
    TwowaydbComponent,
    HidingComponent,
    NgforComponent,
    NgswitchComponent,
    NgclassComponent,
    NgpipeComponent,
    ExponetialStrenthPipe,
    VoteparentComponent,
    VotedetailsComponent,
    ViewchildComponent,
    Pane,
    LoggingcomponentComponent,
    HttpbinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggingService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
