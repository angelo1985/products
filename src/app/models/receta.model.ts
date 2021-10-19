import { Ingrediente } from "./ingrediente.model";

export interface Receta {
    idReceta: number;
    nombre: string;
    descripción: string;
    ingredientes: Ingrediente[];
}