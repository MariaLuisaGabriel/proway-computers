import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [NgxMaskDirective, ReactiveFormsModule, NgIf],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
  providers: [
    provideNgxMask()
  ]
})
export class ContatoComponent implements OnInit{
  
  constructor(
    private fb: FormBuilder//garantir que certos requisitos no formato de dados sejam cumpridos
  ){ }

  formcontato: any;

  ngOnInit(){
    this.formcontato = this.fb.group({
      nome:["", [
        Validators.minLength(4),
        Validators.required
      ]],
      assunto:["",[
        Validators.minLength(4),
        Validators.required
      ]],
      tel:["",[
        Validators.minLength(11),
        Validators.required
      ]],
      email:["",[
        Validators.email,
        Validators.required
      ]],
      mensagem:["",[
        Validators.minLength(20),
        Validators.required
      ]]
    });
  }

  enviar(){
    alert('A mensagem foi enviada');
    this.formcontato.reset();
  }
}
