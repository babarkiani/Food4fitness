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
@ViewChild('main')main1:ElementRef;
  ngOnInit() {

   
    
  }

openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-300px";
 
}

closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";

}


}
