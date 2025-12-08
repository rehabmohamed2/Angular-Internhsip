import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'works',
    loadComponent: () =>
      import('./feature/works/works.component').then((m) => m.WorksComponent),
  },
  {
    path: 'works/:id',
    loadComponent: () =>
      import('./feature/work-detail/work-detail.component').then(
        (m) => m.WorkDetailComponent
      ),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./feature/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
