import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number | any;
  person: Person | any;
  form: FormGroup | any;

  constructor(
    public personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPerson'];
    this.personService.find(this.id).subscribe((data: Person)=>{
      this.person = data;
    });

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
    this.personService.update(this.id, this.form.value).subscribe(res => {
         console.log('Usuario actualizado');
         this.router.navigateByUrl('person/index');
    })
  }

}
