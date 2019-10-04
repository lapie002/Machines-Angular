import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilIndex: number;
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    console.log("index de appareil : " + this.appareilIndex + " nom : " + this.appareilName);
    this.onSwitch();
  }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.appareilIndex);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.appareilIndex);
    }
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
}
