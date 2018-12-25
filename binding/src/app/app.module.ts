import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import {Summarypipe} from './custom-pipe/summarypipe.pipe';
import { ZodiacComponent } from './zodiac/zodiac.component';
import { ZodiacpipePipe } from './zodiac/zodiacpipe.pipe';
import { ExerciseComponent } from './exercise/exercise.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';




@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    EventbindingComponent,
    CustompipesComponent,
    CustomPipeComponent,
    Summarypipe,
    ZodiacComponent,
    ZodiacpipePipe,
    ExerciseComponent,
    TwowayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
