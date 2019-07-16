import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Student} from '../../Student/Student';
import {StudentService} from '../../Service/student.service';
import {FormGroup, FormControl, NgModel, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from 'src/app/Student/Category';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() dataInput: Student[];
  student: Student = new Student();
  categorys: Category[];
  cateId: number;
  fbUrl: SafeUrl;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getCate();
    
  }

  getCate() {
    this.studentService.getCategory().subscribe(data => this.categorys = data);
  }

  addStudentAPI() {
    this.studentService.addStudentAPI(this.student).subscribe(data => {
      this.activatedRoute.params.subscribe(params => {
        if (params.cateId === data.cateid) {
          this.dataInput.push(data);
        }else{
          this.router.navigate([`cate/${data.cateid}/student`])
        }
      });
      document.getElementById('linkid').click();
    });
  };

  onSubmit(f: NgForm, event) {
    if (f.valid) {
      this.addStudentAPI();
    }
    f.reset();
 
  }

}
