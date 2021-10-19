import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  public getMenu(): Menu[]{
    return [
      {
        menuItemId: 2,
        name: 'Recetas',
        icon: 'https://th.bing.com/th/id/OIP.IdpDXnmPgL7-glV00MeNHwD6D6?pid=ImgDet&rs=1',
        url: '/recetas-list'
      },
      {
        menuItemId: 1,
        name: 'Ingredientes',
        icon: 'https://image.flaticon.com/icons/png/512/271/271380.png',
        url: '/ingredientes-list'
      },
      {
        menuItemId: 3,
        name: 'Varios',
        icon: '',
        url: '/'
      }
    ]
  }
}
