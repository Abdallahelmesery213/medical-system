import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from 'primeng/inputtext';
import { TaxServices } from '../service/invoice-service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


interface Clinic {
  name: string;
  // code?: string;
}

@Component({
  selector: 'app-new-invoice',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    DropdownModule, 
    FormsModule, 
    CommonModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
		RippleModule,
    TableModule
  ],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.scss',
  providers: [TaxServices]
})
export class NewInvoiceComponent implements OnInit {
  clinics: Clinic[] | undefined;
  numberr: any;
  taxs = [];
  newArr: [] = [];
  taxSerArr: any;
  finalObj: any | undefined;
  taxSer: any | undefined;
  myForm: FormGroup;
  taxVal: number = 0;

  constructor(
    private taxService: TaxServices,
    private fb: FormBuilder,
    private toaster: ToastrService
    
  ){

    this.myForm = this.fb.group({
      serviceName: [''],
      serviceNo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.clinics = [
      { name: 'Clinic: العيادة' },
      { name: 'الأشعة' },
      { name: 'الطوارئ' },
      { name: 'المختبر' },
      { name: 'عيادة أسنان' },
    ];
    this.numberr = [
      { number: 1 },
      
    ];

    this.taxService.getTax().subscribe((res: any) =>{
      this.taxs = res;
      console.log(res)
    })

  }

  onSubmit() {
    if (this.myForm.valid) {
      debugger
      let serviceNo =  this.myForm.value.serviceNo.id
      this.finalObj = [this.taxs.find((item: any)=>item.id==serviceNo)];
      this.taxs.forEach((item)=> {
        debugger
        console.log(this)
        if(item["id"] == serviceNo){
          if(!this.newArr.includes(item)){
            this.newArr.push(item);
          }
          else {
            this.toaster.error("هذه الخدمة تمت اضافتها بالفعل")
          }
        } 
        
      })
      // this.taxSer = this.finalObj[0].serviceTax; 
      
    } else {
      this.toaster.error("من فضلك أدخل الخدمة")
    }
  }

}
