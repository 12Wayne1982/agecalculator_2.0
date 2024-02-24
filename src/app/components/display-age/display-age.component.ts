import { Component, OnInit } from '@angular/core';
import { CalcNumsTransferService } from 'src/app/service/calc-nums-transfer.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-display-age',
  templateUrl: './display-age.component.html',
  styleUrls: ['./display-age.component.css'],
})
export class DisplayAgeComponent implements OnInit {
  transferedData: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  weeks: any;
  months: any;
  years: any;

  subscriptionSeconds!: Subscription;
  sourceSeconds = interval(1000);
  subscriptionMinutes!: Subscription;
  sourceMinutes = interval(60000);

  constructor(private numsTransfer: CalcNumsTransferService) {}

  ngOnInit(): void {
    // get data from add-age.component
    this.numsTransfer.currentData.subscribe((message) => {
      this.transferedData = message;
    });

    // number formatting

    this.seconds = new Intl.NumberFormat('de-DE').format(
      this.transferedData.seconds
    );

    this.minutes = new Intl.NumberFormat('de-DE').format(
      this.transferedData.minutes
    );
    this.hours = new Intl.NumberFormat('de-DE').format(
      this.transferedData.hours
    );
    this.days = new Intl.NumberFormat('de-DE').format(this.transferedData.days);
    this.weeks = new Intl.NumberFormat('de-DE').format(
      this.transferedData.weeks
    );
    this.months = new Intl.NumberFormat('de-DE').format(
      this.transferedData.months
    );
    this.years = new Intl.NumberFormat('de-DE').format(
      this.transferedData.years
    );

    // increment seconds und minutes
    this.subscriptionSeconds = this.sourceSeconds.subscribe(() =>
      this.secondsIncrement()
    );
    this.subscriptionMinutes = this.sourceMinutes.subscribe(() =>
      this.minutesIncrement()
    );
  }

  // increment seconds, minutes and change color
  secondsIncrement() {
    // count up
    this.transferedData.seconds++;
    // styling
    let moduloNum = this.transferedData.seconds % 4;
    this.changeColor(moduloNum, '#secondsID');
    // format
    this.seconds = new Intl.NumberFormat('de-DE').format(
      this.transferedData.seconds
    );
  }

  minutesIncrement() {
    // count up
    this.transferedData.minutes++;
    // styling
    let moduloNum = this.transferedData.seconds % 4;
    this.changeColor(moduloNum, '#minutesID');
    // format
    this.minutes = new Intl.NumberFormat('de-DE').format(
      this.transferedData.minutes
    );
  }

  changeColor(moduloNumParam: number, styleParam: string) {
    let elementSeconds = document.querySelector(styleParam) as HTMLInputElement;
    if (moduloNumParam == 0) {
      console.log('Modulo = 0');
      elementSeconds.style.color = '#88a2cf';
    }
    if (moduloNumParam == 1) {
      console.log('Modulo = 1');
      elementSeconds.style.color = 'hsl(0, 0%, 60%)';
    }
    if (moduloNumParam == 2) {
      console.log('Modulo = 2');
      elementSeconds.style.color = '#d1b76f';
    }
    if (moduloNumParam == 3) {
      console.log('Modulo = 3');
      elementSeconds.style.color = '#b082ab';
    }
  }

  ngOnDestroy() {
    this.subscriptionSeconds.unsubscribe();
    this.subscriptionMinutes.unsubscribe();
  }
}
