import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Color } from 'chart.js';
import { } from 'ng2-charts'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showDropdown: boolean = false
  activeLink: string = 'dashboard';
  isActive(link: string): boolean {
    return this.activeLink === link;
  }

  setActive(link: string): void {
    this.activeLink = link;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown
  }
  viewProfile() {

  }
  logOut() {

  }
}
