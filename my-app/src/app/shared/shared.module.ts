import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertService } from './services/alert/alert.service';
import { NoDataComponent } from './components/no-data/no-data.component';
import { MatStepperModule } from '@angular/material/stepper';
import { LayoutModule } from '@angular/cdk/layout';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { DisplayTypePipe } from './pipes/display/type/display-type.pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AlertComponent,
    NoDataComponent,
    PageNotFoundComponent,
    DisplayTypePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
    MatStepperModule,
    LayoutModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatSlideToggleModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
    NoDataComponent,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    DisplayTypePipe,
    MatSlideToggleModule,
  ],
  entryComponents: [
    AlertComponent
  ],
  providers: [
    AlertService
  ]
})
export class SharedModule { }
