import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-detalls',
  templateUrl: './detalls.page.html',
  styleUrls: ['./detalls.page.scss'],
})
export class DetallsPage implements OnInit {
  public detalls: string;

  constructor(private activatedRoute: ActivatedRoute, private dades: ApiServiceService) { }

  ngOnInit() {
    this.detalls = this.activatedRoute.snapshot.paramMap.get('id');
 
    

 
}
