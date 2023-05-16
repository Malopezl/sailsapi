import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RideService } from 'src/services/ride';
import { Ride } from 'src/models/ride';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.page.html',
  styleUrls: ['./rides.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RidesPage implements OnInit {

  rides!: Observable<Ride[]>;

  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.rides = this.rideService.getAll();
  }

}