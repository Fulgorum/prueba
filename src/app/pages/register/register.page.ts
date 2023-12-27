import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  intercambiarCards: boolean = true;
  nombre: string = '';
  pass: string = '';
  repeatPass: string = '';
  public mensajeErrorNombre: string = '';
  public mensajeErrorPass: string = '';
  public mensajeErrorEquals: string = '';


  constructor(private dataService: UsuarioService, private router: Router) {
  }


  ngOnInit() {
  }


  intercambiarPosition() {
    this.intercambiarCards = !this.intercambiarCards;
    this.reset();
  }

  reset() {
    this.mensajeErrorNombre = '';
    this.mensajeErrorPass = '';
    this.mensajeErrorEquals = '';
    this.nombre = '';
    this.pass = '';
    this.repeatPass = '';
  }

  validarNombre() {
    this.mensajeErrorNombre = this.nombre.length < 3 ? 'El nombre debe tener al menos 3 caracteres.' : '';
  }

  validarPass() {
    this.mensajeErrorPass = this.pass.length < 8 ? 'La contraseña debe tener al menos 8 caracteres.' : '';
  }

  validarIgualdadPass() {
    if (this.repeatPass != this.pass) {
      this.mensajeErrorEquals = 'Las contraseñas no coinciden';
    } else {
      this.mensajeErrorEquals = '';
    }
  }

  guardarNombre() {
    if (this.nombre.length < 3 || this.pass.length < 8) {
      this.validarNombre()
      this.validarPass()
      this.validarIgualdadPass()
    } else {
      this.dataService.setNombre(this.nombre);
      this.router.navigate(['/tabs/home']);
    }

  }

}


