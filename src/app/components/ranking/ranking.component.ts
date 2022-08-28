import { Component, OnInit } from '@angular/core';
import { BarberService } from 'src/app/services/barber/barber.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private serveceBarber:BarberService) { }

  listBarber:any=[];
  rankingBarber:any=[];

  ngOnInit(): void {
    this.organizeRanking()
  }


  organizeRanking():void{
    this.serveceBarber.listBarber().subscribe(
      data=>{
        this.listBarber=data;
        console.log("aqui llege");
        console.log(this.listBarber);
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
        this.rankingBarber=this.listBarber.slice(0, 10);
        // this.listBarber.slice(0, 4).map(e=>{
        //   this.rankingBarber=e;
        // });
        console.log("llego al for")
        console.log(this.rankingBarber);
      })
  }
}
