import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {
  }

  getCarrinho(){
    return JSON.parse(localStorage.getItem("carrinho") || "[]");//pega o carrinho que tá salvo no app
    //pus "[]", em vez de "", pois estava dando erro quando o localstorage retornava null
  }

  pushCarrinho(produto: IProdutoCarrinho){
    this.itens = this.getCarrinho();
    console.log(this.itens);

    let m = this.itens.findIndex(p => p.id == produto.id);

    if(m != -1){
      this.itens[m].quantidade+=1;
    }
    else{
      this.itens.push(produto);
    }

    localStorage.setItem("carrinho", JSON.stringify(this.itens));//salva no app
  }

  clearCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  popCarrinho(id: number){
    this.itens = this.itens.filter(x => x.id !== id);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));//salva no app
  }
}