import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

  constructor() {}

  setconfig(showSlide?:boolean){

    let perfil = {
      showSlide: false
    }

    if(showSlide){
      perfil.showSlide = showSlide;
    }

    localStorage.setItem("config", JSON.stringify(perfil));
  }
}
