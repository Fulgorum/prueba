import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private dataService: UsuarioService) {
  }

  get nombre(): string {
    console.log("Obteniendo nombre:", this.dataService.getNombre());
    return this.dataService.getNombre();
  }

  ngOnInit() {
  }

}
