import { Component, OnInit } from '@angular/core';
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  fancybox :any;
  constructor() { }

  ngOnInit() {
    Fancybox.bind('[data-fancybox="gallery"]', {
      infinite: false
    });
  }
   myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  
}
