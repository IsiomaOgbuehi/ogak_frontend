import {Injectable} from '@angular/core';
import {GC_AUTH_TOKEN, GC_USER_ID} from '../constants';
import {BehaviorSubject, Observable} from 'rxjs';
import { Router } from '@angular/router';

// 1
@Injectable()
export class AuthService {
    // 2
    private userId: string = null;

    // 3
    private _isAuthenticated = new BehaviorSubject(false);

    constructor(private router: Router) {
    }

    // 4
    // @ts-ignore
    get isAuthenticated(): Observable {
        return this._isAuthenticated.asObservable();
    }
    // 5
    saveUserData(id: string, token: string, email: string) {

        localStorage.setItem(GC_USER_ID, id);
        localStorage.setItem(GC_AUTH_TOKEN, token);
        localStorage.setItem('USER_MAIL', email);
        this.setUserId(id);
    }

    // 6
    setUserId(id: string) {
        this.userId = id;

        this._isAuthenticated.next(true);
    }
    // 7
    logout() {
        localStorage.removeItem(GC_USER_ID);
        localStorage.removeItem(GC_AUTH_TOKEN);
        this.userId = null;

        this._isAuthenticated.next(false);
    }

    // 8
    autoLogin() {
        const id = localStorage.getItem(GC_USER_ID);

        if (id) {
            this.setUserId(id);
            this.router.navigate(['/main-home']);
        }
    }
}
