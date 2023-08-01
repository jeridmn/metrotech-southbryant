import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeAnimation } from './app.animation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit{
  title = 'metro-tech-2301265';
  menuOpened = false;
  fileContent


  constructor(public currentRoute: ActivatedRoute,
    public router: Router,
    private http: HttpClient) {

  }

  ngOnInit(): void {
    // this.fixHexRgbaColorsInScss('/src/app/app.component.css')
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

  // fixHexRgbaColorsInScss(file: string): void {
  //   console.log(file)
  //   const start = new Date();
  //   let replaceCount = 0;
  //   let fileContents = this.readAppComponentCSS(); // Load the file contents here using Angular's HttpClient or any appropriate method
  //   console.log(fileContents)

  //   fileContents = fileContents.replace(/#[a-f0-9]{8}/gi, function (x) {
  //     replaceCount++;
  //     return 'rgba(' +
  //       parseInt(x.substring(1, 3), 16) + ',' +
  //       parseInt(x.substring(3, 5), 16) + ',' +
  //       parseInt(x.substring(5, 7), 16) + ',' +
  //       (Math.round((parseInt(x.substring(7, 9), 16) / 255) * 100) / 100) + ')';
  //   });

  //   fileContents = fileContents.replace(/#[a-f0-9]{4}([!;}])/gi, function (x, end) {
  //     replaceCount++;
  //     return 'rgba(' +
  //       parseInt(x.substring(1, 2) + x.substring(1, 2), 16) + ',' +
  //       parseInt(x.substring(2, 3) + x.substring(2, 3), 16) + ',' +
  //       parseInt(x.substring(3, 4) + x.substring(3, 4), 16) + ',' +
  //       (Math.round((parseInt(x.substring(4, 5) + x.substring(4, 5), 16) / 255) * 100) / 100) + ')' + end;
  //   });

  //   // Write the updated file contents back using Angular's HttpClient or any appropriate method

  // }

  // readAppComponentCSS(): any {

  //   this.http.get('./src/app/app.component.css', { responseType: 'text' }).subscribe(
  //     (response: string) => {
  //       return response // The CSS contents will be logged to the console
  //       // You can perform any necessary operations on the CSS contents here
  //     },
  //     (error) => {

  //       console.error('Error reading app.component.css:', error);
  //     }
  //   );
  // }
}
