import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abount-me',
  templateUrl: './abount-me.component.html',
  styleUrls: ['./abount-me.component.css']
})
export class AbountMeComponent implements OnInit {

  title:string = 'Acerca de Mí';

  constructor() { }

  ngOnInit(): void {
  }

}
