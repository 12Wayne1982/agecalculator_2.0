import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgeComponent } from './components/add-age/add-age.component';
import { DisplayAgeComponent } from './components/display-age/display-age.component';
import { DisplayZodiacSignsComponent } from './components/display-zodiac-signs/display-zodiac-signs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-age' },
  { path: 'add-age', component: AddAgeComponent },
  { path: 'display-age', component: DisplayAgeComponent },
  { path: 'display-zodiac-signs', component: DisplayZodiacSignsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
