import { Component, Input, OnInit } from '@angular/core'
import { ITEMS, Item } from '../data/data'

@Component({
  selector: 'app-itemsDisplay',
  template: `
    <button nz-button nzType="primary" (click)="open()" style="float: right;">
      <span nz-icon nzType="filter" nzTheme="fill"></span>
    </button>
    <nz-drawer
      [nzClosable]="false"
      [nzVisible]="visible"
      nzPlacement="right"
      nzTitle="Sorting and Filtering"
      (nzOnClose)="close()"
    >
      <!--Filter Button -->

      <ng-container *nzDrawerContent>
        <nz-space nzDirection="vertical" nzSize="middle" nzAlign="start">
          <p>Sort by Stats</p>
          <nz-segmented
            [nzOptions]="sort_stat_options"
            [ngModel]="sort_stat_selected"
            (nzValueChange)="sort_stats_changed($event)"
          ></nz-segmented>

          <p>Filter by Rarity</p>
          <nz-space nzDirection="horizontal" nzSize="middle" nzAlign="start">
            <ng-container
              *ngFor="let item of filter_rarity_options; let i = index"
            >
              <label
                nz-checkbox
                nzValue="{{ item }}"
                ngModel="{{ filter_rarity_selected[i] }}"
                (ngModelChange)="filter_rarity_changed($event, i)"
              >
                {{ item }}
              </label>
            </ng-container>
          </nz-space>
        </nz-space>
      </ng-container>
    </nz-drawer>
    <!--Filterring Drawer -->

    <div nz-row [nzGutter]="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <div *ngFor="let item of filtering()">
        <ng-container *ngIf="item.type == itemsType">
          <div nz-col [nzSpan]="6">
            <nz-card
              style="
              width: 240px;
              border-radius: 12px;
              margin-left: 8px;
              margin-top: 8px;
              box-shadow: 1px 5px 15px 0px rgba(0,0,0,0.75);
            "
              [nzCover]="coverTemplate"
              [nzExtra]="item.price.toString() + ' G'"
              [nzActions]="[buyTemplate]"
            >
              <nz-card-meta
                nzTitle="{{ item.name }}"
                [nzDescription]="statsTemplate"
              ></nz-card-meta>
            </nz-card>
            <ng-template #buyTemplate>
              <button
                nz-button
                nzType="text"
                nzSize="large"
                nzBlock
                style="color:#0096FF;"
              >
                Buy
              </button>
            </ng-template>
            <ng-template #statsTemplate>
              <nz-statistic
                [nzValue]="(item.str | number)!"
                [nzTitle]="'Strength'"
              ></nz-statistic>

              <nz-statistic
                [nzValue]="(item.mag | number)!"
                [nzTitle]="'Magic'"
              ></nz-statistic>

              <nz-statistic
                [nzValue]="(item.dex | number)!"
                [nzTitle]="'Dexterity'"
              ></nz-statistic>
            </ng-template>
            <ng-template #coverTemplate>
              <img
                alt="example"
                src="{{ images[itemsType] }}"
                style="
              border-radius: 25px;
              height: 100px;
              width: 100px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 10px;
              padding: 10px;
              border-color: {{ colors[item.rarity] }};
              border-width:10px;
              border-style:solid;
              background-color:'white'
            "
              />
            </ng-template>
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class itemsDisplay implements OnInit {
  items = ITEMS //The collections of items

  colors = ['#989797', '#00008B', '#990FFF', '#FFC300'] //Rarity colors

  images = [
    'https://mcishop.azureedge.net/mciassets/w_3_0065916_leather-viking-helmet_415.png',
    'https://i.pinimg.com/originals/f3/ad/59/f3ad593fce021e6c82d73fd5408573eb.png',
    'http://atlas-content-cdn.pixelsquid.com/stock-images/fantasy-knight-boots-boot-armour-3A7z869-600.jpg',
    'https://cdna.artstation.com/p/assets/images/images/024/181/782/large/emanuel-silva-soul-reaver-front.jpg?1581562711',
  ] //Images for items

  @Input() itemsType = 0

  sort_stat_options = ['None', 'Strength', 'Magic', 'Dexterity']
  filter_rarity_options = ['Common', 'Rare', 'Epic', 'Legendary']

  sort_stat_selected = 0
  filter_rarity_selected = [false, false, false, false]

  visible = false

  sort_stats_changed(event: number): void {
    this.sort_stat_selected = event
    switch (event) {
      case 1:
        this.items.sort((a, b) => a.str - b.str)
        break
      case 2:
        this.items.sort((a, b) => a.dex - b.dex)
        break
      case 3:
        this.items.sort((a, b) => a.mag - b.mag)
        break
      default:
        this.items.sort((a, b) => a.id - b.id)
        break
    }
  }

  filter_rarity_changed(event: number, id: number): void {
    this.filter_rarity_selected[id] = !this.filter_rarity_selected[id]
  }

  filtering(): Item[] {
    let filter_selected: number[] = []

    this.filter_rarity_selected.forEach((i, index) => {
      i ? filter_selected.push(index) : ''
    })

    if (this.filter_rarity_selected.includes(true)) {
      return this.items.filter((i) => filter_selected.includes(i.rarity))
    }
    return this.items
  }

  open(): void {
    this.visible = true
  }

  close(): void {
    this.visible = false
  }
  ngOnInit(): void {}
}
