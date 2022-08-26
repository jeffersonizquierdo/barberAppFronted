import { Component, OnInit } from '@angular/core';
import { BarberService } from 'src/app/services/barber/barber.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  listBarber:any=[];
  rankingBarber:any=[];

  constructor(private serveceBarber:BarberService) { }



  ngOnInit(): void {
    this.organizeRanking();
  }

  organizeRanking():void{
    this.serveceBarber.listBarber().subscribe(
      data=>{
        this.listBarber=data;
        this.listBarber.sort((a,b)=>{
          if(a.qualification>b.qualification){
            return -1;
          }
          if(a.qualification<b.qualification){
            return 1;
          }
          if(a.nickname.toLowerCase() > b.nickname.toLowerCase()){
            return 1;
          }
          if(a.nickname.toLowerCase() < b.nickname.toLowerCase()){
            return -1;
          }
          return 0;
        })
      })

      for(let i=0; i<10; i++){
        this.rankingBarber.push(this.listBarber[i]);
      }
  }

}
