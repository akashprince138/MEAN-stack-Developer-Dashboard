import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'action'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addUser = ()=>{
    this.router.navigate(['/add-user']);
  }

  delete = (data)=>{
    console.log('data',data);
    if(confirm("Are you sure to delete ")) {
    console.log("Implement delete functionality here");
    }
  }
}

const ELEMENT_DATA: any[] = [
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
  {name: "akash", email: 'akash@gmail.com', phone: 1234567890, action: ''},
];