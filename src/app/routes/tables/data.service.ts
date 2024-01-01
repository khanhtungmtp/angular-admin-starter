import { Injectable } from '@angular/core';

export interface PeriodicElement {
  title: string;
  position: number;
  userName: string;
  fullName: string;
  email?: string;
  roles?: string;
  phoneNumer?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    title: 'Hydrogen',
    phoneNumer: '13198765432',
    userName: '010-12345678',
    fullName: 'New York',
    roles: '555 Lexington Avenue',
    email: 'Hydrogen@gmail.com',
  },
  {
    position: 2,
    title: 'Hydrogen',
    phoneNumer: '13198765432',
    userName: '010-12345678',
    fullName: 'New York',
    roles: '555 Lexington Avenue',
    email: 'Hydrogen@gmail.com',
  },
  {
    position: 3,
    title: 'Hydrogen',
    phoneNumer: '13198765432',
    userName: '010-12345678',
    fullName: 'New York',
    roles: '555 Lexington Avenue',
    email: 'Hydrogen@gmail.com',
  },
  {
    position: 4,
    title: 'Hydrogen',
    phoneNumer: '13198765432',
    userName: '010-12345678',
    fullName: 'New York',
    roles: '555 Lexington Avenue',
    email: 'Hydrogen@gmail.com',
  },
  {
    position: 5,
    title: 'Hydrogen',
    phoneNumer: '13198765432',
    userName: '010-12345678',
    fullName: 'New York',
    roles: '555 Lexington Avenue',
    email: 'Hydrogen@gmail.com',
  },
];

@Injectable()
export class TablesDataService {
  getData() {
    return ELEMENT_DATA;
  }
}
