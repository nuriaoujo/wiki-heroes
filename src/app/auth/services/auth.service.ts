import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    private baseUrl = environments.baseUrl;
    private user?: User;

    constructor(private http: HttpClient) { }

    getCurrentUser(): User | undefined {
        if(!this.user) return undefined;
        return structuredClone(this.user); // Para crear un clon profundo
    }

    login(email: string, password: string): Observable<User> {
        this.http.get<User>(`${this.baseUrl}/users/1`)
            .pipe(
                tap( user => this.user = user),
                tap( user => localStorage.setItem('token', user.id.toString()) ),
            );
    }

}