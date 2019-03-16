import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {
  txtCidade:string;
  txtEstado:string;
  txtLogradouro:string;
  constructor() {}

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
  }

  exibeInput(){
    console.log(`Cidade ${this.txtCidade}\nEstado ${this.txtEstado}\nLogradouro ${this.txtLogradouro} `)
  }

}

