import {Injectable} from '@angular/core';
import {Student} from '../Student/Student';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Category} from '../Student/Category';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private urlAPI = 'http://5ca5f5953a08260014278dfb.mockapi.io/category/';
  private urlsbAPI = 'http://localhost:8080';
  constructor(private http: HttpClient) {
  }

  //------------------------------- Router-------------------------------
  // getStudent(id: number) {
  //   return this.data.find(item => item.id === id);
  // }
  //--------------------------------API---------------------------------//
  getStudentsAPI(cateId): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.urlsbAPI}/cate/${cateId}/student`);
  }

  getStudentAPI(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.urlsbAPI}/student/${id}`);
  }

  addStudentAPI(Student): Observable<Student> {
    return this.http.post<Student>(`${this.urlsbAPI}/student`, Student);
  }

  deleteStudent(Student): Observable<Student> {
    return this.http.delete<Student>(`${this.urlsbAPI}/student/${Student.id}`);
  }

  editStudent(Student): Observable<Student> {
    return this.http.put<Student>(`${this.urlsbAPI}/student/${Student.id}`, Student);
  }

   getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.urlsbAPI}/category`);
  }

  getCate(Student): Observable<Category> {
    return this.http.get<Category>(`${this.urlsbAPI}/category/${Student.cateid}`);
  }

  addCateAPI(Category): Observable<Category[]> {
    return this.http.post<Category[]>(`${this.urlAPI}/`,Category);
  }
  
}
