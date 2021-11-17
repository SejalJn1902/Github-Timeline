import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {
  @Input() githubProfile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
