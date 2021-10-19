import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingrediente } from 'src/app/models/ingrediente.model';

@Component({
  selector: 'app-ingredientes-form',
  templateUrl: './ingredientes-form.component.html',
  styles: [
  ]
})
export class IngredientesFormComponent implements OnInit, OnChanges {
   
  // referencia al elemento htmls
  @ViewChild('fIngredients') myForm?: NgForm;

  @Output() nuevoIngrediente = new EventEmitter<Ingrediente>();

  @Input('ingredient') ingrendientToEdit: Ingrediente;

  constructor() { }

  ngOnChanges(change: SimpleChanges){
    this.myForm?.setValue(change.ingrendientToEdit.currentValue)
  }

  onSubmit(f: NgForm): void{
    this.nuevoIngrediente.emit(f.form.value);
    f.resetForm();
  }



  ngOnInit(): void {
    if(this.ingrendientToEdit){
      console.log('hola');
      
      this.myForm?.setValue(this.ingrendientToEdit);
    }
  }

}
