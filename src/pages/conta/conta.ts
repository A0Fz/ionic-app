import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViacepProvider} from '../../providers/viacep/viacep';

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {
  private cep;
	private endereco:any = {};
	vazio = "";

  constructor(public navCtrl: NavController, private viacep: ViacepProvider) {}

	getEndereco(){
		this.viacep.callService(this.cep)
		.subscribe(
        data =>{
		this.endereco = data;
		console.log(data);
        }
      );
    }
  }

