import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatExpansionModule} from '@angular/material/expansion'

const materialComponents=[
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatExpansionModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    materialComponents
  ]
})

export class AngularMaterialModule { }
