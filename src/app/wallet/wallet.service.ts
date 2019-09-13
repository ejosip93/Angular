import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  items = [];

  constructor() { }

  addToWallet(course) {
    if (!this.items.includes(course)) {
      this.items.push(course);
    }
  }

  getItems() {
    return this.items;
  }
}
