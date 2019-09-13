import { Component, OnInit } from '@angular/core';
import {WalletService} from './wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  items;

  constructor(private walletService: WalletService) { }

  ngOnInit() {
    this.items = this.walletService.getItems();
  }

}
