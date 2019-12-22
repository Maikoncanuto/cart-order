import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public displayedColumns = ['name', 'valueItem', 'update', 'delete'];
  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  itens$: Observable<Item[]>;

  constructor(private itemService: ItemService,private dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef , private router: Router) {
    this.itens$ = itemService.entities$;

  }

  ngOnInit() {
    this.getItens();
  }

    ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }

  getItens() {
    this.itemService.getAll().subscribe((res) => {
      res.forEach(element => {
        console.log(element);
      });

      this.dataSource.data = res ;
      this.changeDetectorRefs.detectChanges();
    });
  }



  public redirectToDelete = (id: string) => {
    let url: string = `/item/delete/${id}`;
    this.router.navigate([url]);
  }

}
