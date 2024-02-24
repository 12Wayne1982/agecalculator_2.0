import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router';
// data transfer between components
import { CalcNums } from 'src/app/service/calcNums';
import { ZodiacSigns } from 'src/app/service/zodiacSigns';
import { CalcNumsTransferService } from 'src/app/service/calc-nums-transfer.service';
import { ZodiacTransferService } from 'src/app/service/zodiac-transfer.service';

@Component({
  selector: 'app-add-age',
  templateUrl: './add-age.component.html',
  styleUrls: ['./add-age.component.css'],
})
export class AddAgeComponent implements OnInit {
  ageFormular: FormGroup;
  backendData: any;

  constructor(
    public formular: FormBuilder,
    private router: Router,
    private backendService: BackendService,
    private numsTransfer: CalcNumsTransferService,
    private zodiacSignsTransfer: ZodiacTransferService
  ) {
    this.ageFormular = this.formular.group({
      birthYear: [''],
      birthMonth: [''],
      birthDay: [''],
    });
  }

  ngOnInit(): void {}

  sendData(): any {
    console.log(this.ageFormular.value);
    this.backendService
      .getBackendData(this.ageFormular.value)
      .subscribe((response) => {
        console.log(response);
        this.backendData = response;

        // send calcNums to display age
        const calcNums = new CalcNums(
          this.backendData['DAYS'],
          this.backendData['HOURS'],
          this.backendData['MINUTES'],
          this.backendData['MONTHS'],
          this.backendData['SECONDS'],
          this.backendData['WEEKS'],
          this.backendData['YEARS']
        );
        this.numsTransfer.changeData(calcNums);

        // send zodiacSigns to display age
        const zodiacSigns = new ZodiacSigns(
          this.backendData['ZodiacDesc'],
          this.backendData['ZodiacTitle']
        );
        this.zodiacSignsTransfer.changeData(zodiacSigns);

        // route to display-age-component
        this.router.navigateByUrl('/display-age');
      });
  }
}
