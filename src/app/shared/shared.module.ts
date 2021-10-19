import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { DirectiveModule } from '../directives/directive.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectiveModule
  ],
  exports: [HeaderComponent, MenuComponent]
})
export class SharedModule { }
