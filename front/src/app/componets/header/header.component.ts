import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:string = 'Lucas Albornoz';
  subTitle:string = 'Full Stack Developer Jr.';

  constructor() { }

  ngOnInit(): void {
  }

}
