import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule,MatIconModule,MatInputModule,MatCardModule,MatProgressSpinnerModule } from '@angular/material';


@NgModule({
imports: [MatButtonModule, MatToolbarModule,MatIconModule,MatInputModule,MatCardModule,MatProgressSpinnerModule],
exports: [MatButtonModule, MatToolbarModule,MatIconModule,MatInputModule,MatCardModule,MatProgressSpinnerModule]
})


export class MaterialModule { }