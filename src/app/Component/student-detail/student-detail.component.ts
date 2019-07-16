import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../Student/Student';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { StudentService } from 'src/app/Service/student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/Student/Category';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  StudentDetail: Student;
  categorys: Category[];
  cate: Category
  studentcate: Student
  constructor(private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router) { }

  getStudentAPI() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.studentService.getStudentAPI(id).subscribe(data =>{
    this.studentService.getCate(data).subscribe(gcate =>  this.cate =  gcate );
      return this.StudentDetail = data 
    });
       
       
  }
  editStudentAPI(item) {
    this.studentService.editStudent(item).subscribe(data => {
      this.router.navigate([`/cate/${this.StudentDetail.cateid}/student`]);
    });

  }
   
  ngOnInit() {
    this.getStudentAPI();
    //this.getCate();
    
  }
}
