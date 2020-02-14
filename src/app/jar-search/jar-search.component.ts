import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jar-search',
  templateUrl: './jar-search.component.html',
  styleUrls: ['./jar-search.component.css']
})
export class JarSearchComponent implements OnInit {
  jarData: any = [];
  jarid: any;
  temp=false;

  constructor(
    public restApi: RestApiService,
    private http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {}

  findJar() {
    {
      this.restApi.getJar(this.jarid).subscribe(data => {
        console.log(data);
        this.jarData = data[0];
        console.log("this.jarData.length", this.jarData.length)
        if(this.jarData.length == undefined)
        {
          this.temp=true;
        }
      })
    }
  }
}
