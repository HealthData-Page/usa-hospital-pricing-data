import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  hospitals: any;
  cards: any;
  searchVal = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get(`/assets/hospitals.json`).subscribe((response:any)=> {
      this.hospitals = response;
      this.cards = this.hospitals;
    });
  }

  onSearch(search: string) {
    if (search && /\S/.test(search)) {
      this.cards = this.hospitals.filter((x: any) =>
        x['Facility Name'].toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.cards = this.hospitals;
    }
  }

}
