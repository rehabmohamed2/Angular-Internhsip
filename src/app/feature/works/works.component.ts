import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { WorkItem } from './works.model';

@Component({
  selector: 'app-works',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
})
export class WorksComponent {
  workItems: WorkItem[] = [
    {
      id: 1,
      image_src: 'assets/images/dashboard.png',
      title: 'Designing Dashboards',
      year: 2020,
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 2,
      image_src: 'assets/images/imag2 (1).png',
      title: 'Vibrant Portraits of 2020',
      year: 2018,
      category: 'Illustration',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 3,
      image_src: 'assets/images/image3 (1).png',
      title: '36 Days of Malayalam type',
      year: 2018,
      category: 'Typography',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 4,
      image_src: 'assets/images/image4.png',
      title: 'Components',
      year: 2018,
      category: 'Components, Design',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];
}
