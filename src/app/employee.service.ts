import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  updateEmployee(id: number, employee: Employee) {
    return this.httpClient.put(`http://localhost:8080/employee/v3/${id}`,employee)
  }
  getEmployeeById(id: number) :Observable<Employee> {
    return this.httpClient.get<Employee>(`http://localhost:8080/employee/v2/${id}`);
  }
  
  
  constructor(private httpClient:HttpClient) { }

  getEmployeelist(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`http://localhost:8080/employee/v2`);
  }
  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/employee/v1`,employee);
  }
  deleteEmployee(id:number):Observable<Object>
  {
    return this.httpClient.delete(`http://localhost:8080/employee/del/${id}`);
  }

}