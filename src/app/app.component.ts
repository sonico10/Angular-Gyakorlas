import { Component } from '@angular/core'
import { NzModalService } from 'ng-zorro-antd/modal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'StickPedia'

  constructor(private nzModal: NzModalService) {}
}
