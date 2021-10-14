import { Component } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  

  constructor(private UsuarioService:UsuarioService){

  }

  ngOnInit():void{
    
  }

}