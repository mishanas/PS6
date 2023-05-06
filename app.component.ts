
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  data: any;

  constructor(private http: HttpClient) {}

  getData() {
    const apiUrl = 'http://localhost:4200/api/data'; 
    this.http.get(apiUrl).subscribe((response: any) => {
      this.data = response;
    });
  }
}

// slightly confused on the ngFor bit 

// <div *ngFor="let product of products"> 
//   <h2>{{ product.name }}</h2>
//   <p>{{ product.description }}</p>
// </div>

