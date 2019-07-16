import {Component, OnInit} from '@angular/core';
import {StudentService} from 'src/app/Service/student.service';
import {Category} from 'src/app/Student/Category';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  category: Category[];

  constructor(private studentService: StudentService,
              private router: ActivatedRoute) {
  }

  getCate() {
    this.studentService.getCategory().subscribe(data => this.category = data);
  }

  ngOnInit() {
    this.getCate();

  }

}
