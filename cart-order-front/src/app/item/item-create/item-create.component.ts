import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  public basicForm: FormGroup;
  private dialogConfig;
  itens$: Observable<Item[]>;


  constructor(private location: Location, private fb: FormBuilder,private itemService: ItemService) {
    this.itens$ = itemService.entities$;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.basicForm = this.fb.group({
      name:  new FormControl('', [Validators.required, Validators.max(30)]),
      valueItem: [null, Validators.required],
    })

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }

  }


  public hasError = (controlName: string, errorName: string) => {
    return this.basicForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }



  public createItem = (basicFormValue) => {

    this.itemService.add(basicFormValue);
    console.log(basicFormValue);
  }


}
