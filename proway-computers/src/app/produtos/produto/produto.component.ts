import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProduto, IProdutoCarrinho, produtos } from '../produtos';
import { CurrencyPipe } from '@angular/common';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoService } from '../../carrinho.service';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
id: number | null = null!;
produto: IProduto | null = null!;
quantidade: number = 1;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private notificacao: NotificacaoService,
    private carrinho: CarrinhoService
  ){}//avisa que haverá roteamento com dados passados

  ngOnInit(): void {//receber id
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    }) // map de parametros para igualá-los com o id da rota

    if(this.id == null){
      alert('id está nulo');
      return;
    }

    if(this.id != null && this.id > produtos.length){
      this.router.navigate(["notFound"]);
      return;
    }

    this.produto = produtos.find(produto => produto.id === this.id) || null;

    if(this.produto == null){
      alert('Erro: produto nulo');
      return;
    }
  }

  adicionarAoCarrinho(){
    this.notificacao.notificar("Produto adicionado");

    const produ: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    };
    this.carrinho.pushCarrinho(produ);
  }

}
