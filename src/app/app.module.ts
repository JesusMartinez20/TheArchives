import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from "@angular/router";

//Angular Material
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';



//Componentes
import { GrafosComponent } from "./Grafos/Grafos.component";
import { ShellComponent } from './shell/shell.component';
import { QuicksortComponent } from './quicksort/quicksort.component';
import { PilasComponent } from './pilas/pilas.component';
import { ColasComponent } from './colas/colas.component';
import { RadixComponent } from './radix/radix.component';
import { BurbujaComponent } from './burbuja/burbuja.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { InsercionComponent } from './insercion/insercion.component';
import { BucketComponent } from './bucket/bucket.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { MergeComponent } from './merge/merge.component';
import { ArreglosComponent } from './arreglos/arreglos.component';
import { CadenasComponent } from './cadenas/cadenas.component';
import { MatricesComponent } from './matrices/matrices.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MetodosComponent } from './metodos/metodos.component';
import { EstructurasComponent } from './estructuras/estructuras.component';

//Rutas
const appRoutes: Routes = [
  {path: "Grafos", component: GrafosComponent},
  {path: "shell", component: ShellComponent},
  {path: "quicksort", component: QuicksortComponent},
  {path: "pilas", component: PilasComponent},
  {path: "colas", component: ColasComponent},
  {path: "radix", component: RadixComponent},
  {path: "burbuja", component: BurbujaComponent},
  {path: "seleccion", component: SeleccionComponent},
  {path: "insercion", component: InsercionComponent},
  {path: "bucket", component: BucketComponent},
  {path: "cuentas", component: CuentasComponent},
  {path: "merge", component: MergeComponent},
  {path: "arreglos", component: ArreglosComponent},
  {path: "cadenas", component: CadenasComponent},
  {path: "matriz", component: MatricesComponent},
  {path: "metodos", component: MetodosComponent},
  {path: "estructuras", component: EstructurasComponent},
  {path: "", component: HomepageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GrafosComponent,
    ShellComponent,
    QuicksortComponent,
    PilasComponent,
    ColasComponent,
    RadixComponent,
    BurbujaComponent,
    SeleccionComponent,
    InsercionComponent,
    BucketComponent,
    CuentasComponent,
    MergeComponent,
    ArreglosComponent,
    CadenasComponent,
    MatricesComponent,
    HomepageComponent,
    MetodosComponent,
    EstructurasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
