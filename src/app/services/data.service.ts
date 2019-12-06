import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'; // su funcion es ejecutarse cuando se obtiene informacion 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  getPosts(){
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    // .pipe(
    //   tap( posts=>{
    //   console.log(posts)
    // })
    // );
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(tap(console.log));
  }
}
