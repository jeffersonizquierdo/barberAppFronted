import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit ,OnDestroy{
  
  ngOnDestroy(): void {
    document.body.classList.remove("cambio")
  }


  constructor() { }

  ngOnInit(): void {
    document.body.classList.add("cambio")
  }

}
