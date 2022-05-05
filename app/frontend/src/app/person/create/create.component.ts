import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup | any;

  constructor(
    public personService: PersonService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nombres:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellidos: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      numeroID: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      contrasena:  new FormControl('', [ Validators.required]),
      tipoID:  new FormControl('', [ Validators.required]),
      fechaNaci:  new FormControl('', [ Validators.required])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.personService.create(this.form.value).subscribe(res => {
         console.log('Usuario creado');
         this.router.navigateByUrl('person/index');
    })
  }

}
