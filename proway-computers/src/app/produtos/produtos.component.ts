import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { IProduto, produtos } from './produtos';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-produtos',
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit{
  produtos: IProduto[] | undefined;

  constructor(
    private route: ActivatedRoute 
  ){}

  ngOnInit(): void {
    const prod = produtos;
    this.route.queryParamMap.subscribe(params =>
      {
        const descricao = params.get("descricao")?.toLowerCase();
        
        if(descricao){
          this.produtos = prod.filter(produto => produto.descricao.toLowerCase().includes(descricao));
          console.log(produtos);
          return;
        }
        
        this.produtos = prod;
      }
    );
  }
}
