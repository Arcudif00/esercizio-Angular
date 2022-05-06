import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface CityForm {
  codice: number;
  nome: string;
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  message: string ="Calabria";
  view: boolean = false;
  formUser: FormGroup;
  citiesList : CityForm[]= [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.formUser= new FormGroup ({
      citta : new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      cognome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
    this.reggioCalabria();
  }

 reggioCalabria (){
  this.http.get<CityForm[]>('https://comuni-ita.herokuapp.com/api/comuni').subscribe(
    data => {
      this.citiesList = data;
    }
  )
 }

  onClick(){
    this.view = true;
  }

  onSubmit(form: FormGroup){
  }
}
