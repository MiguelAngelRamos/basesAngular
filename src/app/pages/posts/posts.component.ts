import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.mensajes = this.dataService.getPosts();
    // .subscribe( (posts:any[]) => {
    //   // viene un objeto en post y lo asignamos a un arreglo, especificamos que posts sera un arreglo de tipo any para no entrar en conflicto con this.mensajes que si es un arreglo propiamente tal
    //   this.mensajes = posts
    // })
  }
  escuchaClick(id:number){
    console.log('Click en: ', id);
  }
}
