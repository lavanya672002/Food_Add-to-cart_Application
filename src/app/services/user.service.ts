import { User } from './../shared/model/constants/User';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/model/interfaces/IUserLogin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/model/constants/url';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>

  constructor(private http:HttpClient) {
    this.userObservable = this.userSubject.asObservable();
   }

   login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          window.alert(`Welcome to lav FoodCorner ${user.name}! Login Successful!`);
          this.userSubject.next(user);  // Update userSubject with logged-in user
        },
        error: (errorResponse: HttpErrorResponse) => {
          // Check if errorResponse.error is defined before accessing its properties
          const errorMessage = errorResponse.error?.message || 'Login Failed! Please check your email and password.';
          window.alert(errorMessage);
        }
      })
    );
  }
}
