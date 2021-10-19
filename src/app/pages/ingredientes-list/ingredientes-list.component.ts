import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/models/ingrediente.model';

@Component({
  selector: 'app-ingredientes-list',
  templateUrl: './ingredientes-list.component.html',
  styleUrls: ['./ingredientes-list.component.scss']
})
export class IngredientesListComponent implements OnInit {
  public ingrendientToEdit: Ingrediente;

  public ingredients: Ingrediente[] = [
    {
      idIngrediente: 1,
      name: 'Tomate',
      cantidad: 10
    },
    {
      idIngrediente: 2,
      name: 'Cebolla',
      cantidad: 15
    },
    {
      idIngrediente: 3,
      name: 'Pepino',
      cantidad: 8
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  OnNuevoIngrediente(nuevoIngrediente: Ingrediente ){
    const indexToAdd = this.ingredients.length + 1;
    nuevoIngrediente = {...nuevoIngrediente, idIngrediente: indexToAdd};
    this.ingredients.push(nuevoIngrediente);
  }

  onEdit(ingrediente: Ingrediente){
    console.log('EDIT', ingrediente);
    this.ingrendientToEdit = ingrediente;
    
  }

  onDelete(ingrediente: Ingrediente){
    console.log('DELETE', ingrediente);
    
  }

}
