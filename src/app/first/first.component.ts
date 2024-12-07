import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

public  fun(): string
  {
return "Marvellous Infosystems";
  }

 isDefaultText: boolean = true;

 toggleText():void{
  this.isDefaultText =!this.isDefaultText;
 }

displattext: string = "";
displytext:string =""

fun2(): void
{
   this.displattext = "marvellous";
}
fun3():void

{
this.displytext = 'marvellous Infosystem';

}
}
