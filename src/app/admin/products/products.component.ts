import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/products/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible:boolean = false;
  productObj: any = {
    "productId": 0,
    "productSku":"",
    "productName":"",
    "productPrice": 0,
    "productShortName":"",
    "productDescription":"",
    "createdDate": new Date(),
    "deliveryTimeSpan":"",
    "categoryId":"",
    "productImageUrl":""
  }

  constructor(private productSer:ProductService){}

  ngOnInit(): void {
    this.getCategory();
    this.getAllProducts();
  }

  categoryList: any[] = [];
  productList:any[] = [];

  getCategory(){
    this.productSer.getProductCategory().subscribe((res:any)=>{
      this.categoryList = res.data;      
    });
  }

  getAllProducts(){
    this.productSer.getAllProduct().subscribe((res:any)=>{
      this.productList = res;
      console.log(res)
    })
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

  onSave(){
    this.productSer.saveProduct(this.productObj).subscribe((res:any)=>{  
      if(res){
        alert("products Created")
        this.getAllProducts();
      }else{
        alert("there have some error")
      }
    });
  }
}
