import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { Employee } from '../employee';
import { MessageService } from './message.service';

import { EmployeeApi, Employee, LoopBackFilter } from '../../../sdk';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private employeeApi: EmployeeApi
    ) { }

  /** GET employees from the server */
  getEmployees (): Observable<Employee[]> {
    return this.employeeApi.find<Employee>()
    .pipe(
      tap(_ => this.log('fetched employees')),
      catchError(this.handleError('getEmployees', []))
    );
  }

  getEmployee(employeeId: string): Observable<Employee> {
    return this.employeeApi.findById<Employee>(employeeId).pipe(
          tap(_ => this.log(`fetched employee id=${employeeId}`)),
          catchError(this.handleError<Employee>(`getEmployee id=${employeeId}`))
        );
  }

  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty employee array.
      return of([]);
    }
    const query = {
      name: {
        like: term
      }
    };
    return this.employeeApi.find<Employee>({where: query}).pipe(
      tap(_ => this.log(`found employees matching "${term}"`)),
      catchError(this.handleError<Employee[]>('searchEmployee', []))
    );
  }

  createEmployee(values: Employee) {
    const data = new Employee();
    data.name = values.name;

    return this.employeeApi.create<Employee>(data).pipe(
      tap((employee: Employee) => this.log(`added employee w/ id=${employee.id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

  deleteEmployee(employeeId) {
    return this.employeeApi.deleteById<Employee>(employeeId).pipe(
          tap(_ => this.log(`deleted employee id=${employeeId}`)),
          catchError(this.handleError<Employee>('deleteEmployee'))
        );
  }

  updateEmployee(employee) {
    return this.employeeApi.updateAttributes<Employee>(employee.id, employee).pipe(
          tap(_ => this.log(`deleted employee id=${employee.id}`)),
          catchError(this.handleError<Employee>('deleteEmployee'))
        );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
  }
}
