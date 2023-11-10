import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Employee } from '../../DTO/employee.model';
import { Department } from '../../DTO/department.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: Employee;
  @Input() item2: Department[];
  @Input() index: any;

  availableDepartments: Department[];
  selectedDepartment!: Department;



  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.departmentX()

  }

  openVerticalCenteredModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => { });

    this.toGetavailableDepartments()

  }

  toGetavailableDepartments() {
    this.availableDepartments = this.item2.filter((ele) => ele.id != this.item.currentDepartment.id);
    console.log(this.item.currentDepartment);

    console.log(this.availableDepartments);
  }


  changeDepartment() {
    if (this.selectedDepartment.name != this.item.currentDepartment.name) {
      this.item.currentDepartment.name = this.selectedDepartment.name;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'modified is success',
        showConfirmButton: false,
        timer: 2000,
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }


  }

}
