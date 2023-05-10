import {Routes} from "@angular/router";
import {EstadisticaComponent} from "../ingreso-egreso/estadistica/estadistica.component";
import {DetalleComponent} from "../ingreso-egreso/detalle/detalle.component";

export const dashboardRoutes: Routes = [
  {path: '', component: EstadisticaComponent},
  {path: 'ingreso-egreso', component: EstadisticaComponent},
  {path: 'detalle', component: DetalleComponent},
]
