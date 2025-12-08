import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { WorkDetail, ContentSection } from './work-detail.model';

@Component({
  selector: 'app-work-detail',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './work-detail.component.html',
  styleUrl: './work-detail.component.scss',
})
export class WorkDetailComponent implements OnInit {
  workDetail: WorkDetail = {
    id: 1,
    title: 'Designing Dashboards with usability in mind',
    year: 2020,
    category: 'Dashboard, User Experience Design',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    sections: [
      {
        id: 1,
        type: 'image',
        content: 'assets/images/work-details-1.png',
        alt: 'Dashboard design',
      },
      {
        id: 2,
        type: 'heading1',
        content: 'Heading 1',
      },
      {
        id: 3,
        type: 'heading2',
        content: 'Heading 2',
      },
      {
        id: 4,
        type: 'text',
        content:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      {
        id: 5,
        type: 'image',
        content: 'assets/images/work-detial-2.png',
        alt: 'Project image',
      },
      {
        id: 6,
        type: 'image',
        content: 'assets/images/work-detail-3.png',
        alt: 'Project detail',
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // In a real app, you would fetch the work detail based on the route parameter
    const id = this.route.snapshot.paramMap.get('id');
    // this.workDetail = this.workService.getWorkById(id);
  }
}
