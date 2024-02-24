import { Component, OnInit } from '@angular/core';
import { ZodiacTransferService } from 'src/app/service/zodiac-transfer.service';

@Component({
  selector: 'app-display-zodiac-signs',
  templateUrl: './display-zodiac-signs.component.html',
  styleUrls: ['./display-zodiac-signs.component.css'],
})
export class DisplayZodiacSignsComponent implements OnInit {
  transferedData: any;
  constructor(private zodiacSignsTransfer: ZodiacTransferService) {}

  ngOnInit(): void {
    // get data from add-age.component
    this.zodiacSignsTransfer.currentData.subscribe((message) => {
      this.transferedData = message;
      console.log(this.transferedData);
    });
  }
}
