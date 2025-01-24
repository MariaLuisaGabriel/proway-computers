import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { BarraDePesquisaComponent } from '../barra-de-pesquisa/barra-de-pesquisa.component';

@Component({
  selector: 'app-header',
  imports: [BarraDePesquisaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    public carrinho: CarrinhoService
  ){

  }
}
