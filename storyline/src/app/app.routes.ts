import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStorylineComponent } from './list-storyline/list-storyline.component';
import { StorylineItemComponent } from './list-storyline/storyline-item/storyline-item.component';

export const routes: Routes = [
  { path: '', component: ListStorylineComponent },
  { path: ':title', component: StorylineItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
