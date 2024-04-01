import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  public sidebarItems =[
    { label: 'Listado', icon: 'ballot', url: './list' },
    { label: 'Añadir', icon: 'library_add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' }
  ]

}
