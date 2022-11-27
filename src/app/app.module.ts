import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzTabsModule } from 'ng-zorro-antd/tabs'

import { IconDefinition } from '@ant-design/icons-angular'
import { NzIconModule } from 'ng-zorro-antd/icon'
import {
  ShopFill,
  ShoppingFill,
  RadarChartOutline,
  ExclamationCircleOutline,
  FilterFill,
} from '@ant-design/icons-angular/icons'
import { InventoryComponent } from './inventory/inventory.component'
import { StoreComponent } from './store/store.component'
import { CharacterComponent } from './character/character.component'
import { RouterModule } from '@angular/router'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { itemsDisplay } from './misc/itemsDisplay.component'
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzSegmentedModule } from 'ng-zorro-antd/segmented'
import { NzBackTopModule } from 'ng-zorro-antd/back-top'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'

const icons: IconDefinition[] = [
  ShopFill,
  ShoppingFill,
  RadarChartOutline,
  ExclamationCircleOutline,
  FilterFill,
]

const zorroModules = [
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzLayoutModule,
  NzModalModule,
  NzMenuModule,
  NzTabsModule,
  NzCardModule,
  NzGridModule,
  NzStatisticModule,
  NzDrawerModule,
  NzSegmentedModule,
  NzBackTopModule,
  NzSpaceModule,
  NzCheckboxModule,
]

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    StoreComponent,
    CharacterComponent,
    itemsDisplay,
  ],
  imports: [
    ...zorroModules,
    NzIconModule.forRoot(icons),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'character', component: CharacterComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
