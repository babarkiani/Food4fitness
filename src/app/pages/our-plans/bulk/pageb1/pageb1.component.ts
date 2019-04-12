import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageb1',
  templateUrl: './pageb1.component.html',
  styleUrls: ['./pageb1.component.css']
})
export class Pageb1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    var toggler = document.getElementsByClassName("caret-reciept");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested-reciept-list").classList.toggle("active-reciept-list");
        this.classList.toggle("caret-reciept-down");
      });
    }
  }
  

}
