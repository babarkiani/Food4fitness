import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagec3',
  templateUrl: './pagec3.component.html',
  styleUrls: ['./pagec3.component.css']
})
export class Pagec3Component implements OnInit {

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
