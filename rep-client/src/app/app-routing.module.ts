import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiSliderComponent } from './shared/multi-slider/multi-slider.component';

const routes: Routes = [
  // { path: "", component: MultiSliderComponent },
  { path: "", redirectTo: "views/home", pathMatch: "full" },
  { path: "views", redirectTo: "views/home", pathMatch: "full" },
  { path: "views", loadChildren: () => import("./views/views.module").then(m => m.ViewsModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
