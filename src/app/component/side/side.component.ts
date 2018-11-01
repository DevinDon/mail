import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Folder {
  path: string[];
  name: string;
}

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  folders: Folder[];

  constructor() {
    this.folders = [
      { path: ['/focus'], name: '重点收件箱' },
      { path: ['/other'], name: '其他收件箱' },
      { path: ['/trash'], name: '垃圾箱' }
    ];
  }

  ngOnInit() { }

}
