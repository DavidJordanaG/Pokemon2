import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  constructor(private activatedRoute: ActivatedRoute, private dades: ApiServiceService) { }

  ngOnInit() {
    
   
  
}}
