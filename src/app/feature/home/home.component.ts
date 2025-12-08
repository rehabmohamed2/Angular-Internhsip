import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardComponent } from '../../shared/card/card.component';
import { CardDetails, RecentPost } from './home.model';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  recentPosts: RecentPost[] = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      category: 'Design, Pattern',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      isActive: true,
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      date: '12 Feb 2020',
      category: 'Figma, Icon Design',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      isActive: false,
    },
  ];

  cardData: CardDetails[] = [
    {
      id: 1,
      image_src: 'assets/images/dashboard.png',
      title: 'Designing Dashboards',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      date: 2020,
      detail_text: 'Dashboard',
    },
    {
      id: 2,
      image_src: 'assets/images/imag2 (1).png',
      title: 'Vibrant Portraits of 2020',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      date: 2018,
      detail_text: 'Illustration',
    },
    {
      id: 3,
      image_src: 'assets/images/image3 (1).png',
      title: '36 Days of Malayalam type',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      date: 2018,
      detail_text: 'Typography',
    },
  ];
}
