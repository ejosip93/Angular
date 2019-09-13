import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../course/course.service';
import {WalletService} from '../wallet/wallet.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course;

  constructor(private route: ActivatedRoute, private courseService: CourseService, private walletService: WalletService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.course = this.courseService.getCourses()[+params.get('courseId')];
    });
  }

  addToWallet(course) {
    this.walletService.addToWallet(course);
  }

}
