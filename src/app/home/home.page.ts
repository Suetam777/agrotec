import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isMobile: boolean;
  submenuVisible: { [key: string]: boolean } = {};

  constructor(private platform: Platform) {
    this.isMobile = this.platform.is('mobile') || this.platform.is('tablet');
    this.submenuVisible['produtosSubmenu'] = false;
  }

  toggleSubmenu(submenu: string) {
    this.submenuVisible[submenu] = !this.submenuVisible[submenu];
  }

  closeMenu() {
    const menu = document.querySelector('ion-menu');
    if (menu) {
      menu.close();
    }
  }
}
