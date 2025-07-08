import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  imports: [],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss'
})
export class MainNav {
scrollTo(sectionId:string){
  const abt = document.getElementById(sectionId);
  if(abt){
         abt.scrollIntoView({behavior:'smooth'});
  }

}


}
