import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService{

    constructor(private http:HttpClient){}

    public get(url:string){
        return this.http.get(url); // GET "http://localhost:3000/usuarios";
    }
}
