import { Component,ElementRef,ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  constructor() { }
@ViewChild('mySidebar')side:ElementRef;
@ViewChild('btt')main:ElementRef;
  ngOnInit() {
  }

openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
  this.main.nativeElement.show=false;
}

closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
  this.main.nativeElement.show=true;
}


}
