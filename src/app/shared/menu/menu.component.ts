import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuList: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuList = this.menuService.getMenu();
  }

}
