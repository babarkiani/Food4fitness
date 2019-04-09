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
  @ViewChild('main') main1: ElementRef;
  @ViewChild('cart_link_phone') cart_link_phone:ElementRef;
  ngOnInit() {

   
    
  }

openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-300px";
  document.getElementById("cart_link_phone").style.display = "none";
 
}

closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("cart_link_phone").style.display = "flex";

}


}
