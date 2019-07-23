import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
/*export class TestsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

export class TestsPage {
  public escolha = [
    {personagem: 'Mario'},
    {personagem: 'Luigi'},
    {personagem: 'Princesa Peach'},
    {personagem: 'Toad'},
    {personagem: 'Yoshi'},
    {personagem: 'Wario'}
  ];
}
