import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.css']
})
export class ItemDeleteComponent implements OnInit {

  public item: Item;

  constructor(private location: Location, private dialog: MatDialog,
    private activeRoute: ActivatedRoute, private itemService: ItemService, ) {

  }

  ngOnInit() {
    this.getItemById();
  }
  private getItemById() {
    let id: number = this.activeRoute.snapshot.params['id'];
    this.itemService.getByKey(id).subscribe(res => {
      this.item = res as Item;
    });
  }

  public onCancel = () => {
    this.location.back();
  }


}
