import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
/*export class FavoritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

export class FavoritesPage {
  public formulario = [
    { artista: 'Leonardo DiCaprio', isChecked: true },
    { artista: 'Lady Gaga', isChecked: false },
    { artista: 'Keanu Reeves', isChecked: true },
    { artista: 'Bruce Willis', isChecked: false },
    { artista: 'Emma Watson', isChecked: false },
    { artista: 'Galinha pintadinha', isChecked: true }
  ];

  public cadastro: FormGroup;

  constructor(private fConstructor: FormBuilder) {
    this.cadastro = this.fConstructor.group({
      'nome': ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ])],
      'diretor': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      'senha': ['',  Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])] 
    });
  }

  enviarCadastro(){
    console.log(this.cadastro.value);
  } 
}