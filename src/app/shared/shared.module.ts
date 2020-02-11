import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatListModule, MatDatepickerModule, MatSelectModule, MatBadgeModule, MatIcon, MatIconModule, MatToolbar, MatToolbarModule, MatMenu, MatMenuModule, MatTabsModule, MatTableModule, MatCardModule, MatGridListModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DataSource } from '@angular/cdk/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule
  ]
})
export class SharedModule { }