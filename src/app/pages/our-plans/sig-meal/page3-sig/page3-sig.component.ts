import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3-sig',
  templateUrl: './page3-sig.component.html',
  styleUrls: ['./page3-sig.component.css']
})
export class Page3SigComponent implements OnInit {

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
