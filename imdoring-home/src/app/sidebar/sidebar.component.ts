import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public items = [
    { title: "누구" },
    { title: "근황" },
    { title: "박수" },
    { title: "테스트1" },
    { title: "테스트2" },
    { title: "테스트3" },
  ]
}
