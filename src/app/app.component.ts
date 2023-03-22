import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency_converter';
  constructor(private api:ApiService){}

  othercurrdata:any=[]
  base='USD'
  cont2='USD'
  result:string='1'

  changeBase(c1:string){
    this.base=c1
    // console.log(this.base)
  }
  toCountry(c2:string){
    this.cont2=c2;
    // console.log(this.cont2)

  }
  convert(){
    // console.log(this.base)
    // console.log(this.base)
    this.api.getcurrencydata(this.base).subscribe((data:any)=>{
      
      this.othercurrdata = data
      this.result=this.othercurrdata.rates[this.cont2]

    })

  }

}
