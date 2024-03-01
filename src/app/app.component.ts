import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myValue:boolean = true;
  num1:number = 0;
  hide:boolean = true;
  onClick(){
    this.num1 = (this.num1 + 1);
  }

  onDoubleClick(){
    this.hide = !this.hide;
  }
}
