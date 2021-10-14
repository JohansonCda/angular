import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  constructor(private UsuarioService: UsuarioService) { 
  }

  public listUsuarios:any = [];
  filterUsuario:any = '';

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.UsuarioService.get("http://localhost:3000/usuarios")
    .subscribe(response => {
      this.listUsuarios = response;
    });
  }

  public getId(param:string){
    let a= document.getElementById('bmodal'+param);
    a?.setAttribute('data-bs-target', '#detalleModal'+param);    
  }

}
