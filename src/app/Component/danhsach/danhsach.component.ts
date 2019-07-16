import {Component, OnInit, Input} from '@angular/core';
import {StudentService} from '../../Service/student.service';
import {Student} from '../../Student/Student';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-danhsach',
  templateUrl: './danhsach.component.html',
  styleUrls: ['./danhsach.component.css']
})
export class DanhsachComponent implements OnInit {
  studentsAPI: Student[];

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.getList();
  }

  getList() {
    const cateId = +this.activatedRoute.snapshot.paramMap.get('cateId');
      this.studentService.getStudentsAPI(cateId).subscribe(dataAPI => this.studentsAPI = dataAPI);
       
  }

  delete(student) {
    debugger
    this.studentService.deleteStudent(student).subscribe(data => {
      return this.studentsAPI = this.studentsAPI.filter(item => item.id !== data.id);
    });
  }

}

