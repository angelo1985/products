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

  OnEditarIngrediente(editIngrediente: Ingrediente ){
   const indexToEdit = this.ingredients.findIndex((x) => x.idIngrediente === editIngrediente.idIngrediente);
    if(indexToEdit !== -1){
      
      this.ingredients[indexToEdit] = editIngrediente;
    } 
  }


  OnNuevoIngrediente(nuevoIngrediente: Ingrediente ){
    /* const indexToAdd = this.ingredients.length + 1;
    nuevoIngrediente = {...nuevoIngrediente, idIngrediente: indexToAdd}; */
    let x = {a: 1, b: 2};
    let y = {c: 3};
    let z = {...x, ...y, miVar: 10};
    console.log(z);
    
    // Z es la fusión de X y Y, y una campo adicional llamado miVar con el valor de 10
    const indexToAdd = this.ingredients.findIndex((x) => x.idIngrediente === nuevoIngrediente.idIngrediente);
    if(indexToAdd === -1){
      this.ingredients.push(nuevoIngrediente);
    } else {
      alert(`El Id ${nuevoIngrediente.idIngrediente} YA existe`);
    }
  }

  onEdit(ingrediente: Ingrediente){
    console.log('EDIT', ingrediente);
    this.ingrendientToEdit = ingrediente;
    
  }

  onDelete(ingrediente: Ingrediente){
    console.log('DELETE', ingrediente);
    
  }

}
