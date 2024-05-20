import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg',
  standalone: true,
    imports: [
    CommonModule
  ],
  template: `
    <ng-container [ngSwitch]="icon">
      <!-- logo -->
      <svg *ngSwitchCase="'logo'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
      [class]="class + ' fill-current stroke-current'">
        <path
          d="M149.3 216v80c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24h101.3c13.3 0 24 10.7 24 24zM0 376v80c0 13.3 10.7 24 24 24h101.3c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24zM125.3 32H24C10.7 32 0 42.7 0 56v80c0 13.3 10.7 24 24 24h101.3c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm80 448H488c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24H205.3c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24zm-24-424v80c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H205.3c-13.3 0-24 10.7-24 24zm24 264H488c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24H205.3c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24z"/>
      </svg>

      <!-- 3 Dots Horizontal -->
      <svg *ngSwitchCase="'dotsH'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      [class]="class + ' fill-current stroke-current'">
      <path d="M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z"/></svg>

      <!-- Drag Horizontal -->
      <svg *ngSwitchCase="'dragH'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      [class]="class + ' fill-current stroke-current'">
      <path d="M14 5V19M5 14L3 12L5 10M19 14L21 12L19 10M10 5L10 19"/></svg>

      <!-- Plus square -->
      <svg *ngSwitchCase="'addNew'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      [class]="class + ' fill-current stroke-current'">
        <path d="M13,12 L16.5,12 C16.7761424,12 17,12.2238576 17,12.5 C17,12.7761424 16.7761424,13 16.5,13 L13,13 L13,16.5 C13,16.7761424 12.7761424,17 12.5,17 C12.2238576,17 12,16.7761424 12,16.5 L12,13 L8.5,13 C8.22385763,13 8,12.7761424 8,12.5 C8,12.2238576 8.22385763,12 8.5,12 L12,12 L12,8.5 C12,8.22385763 12.2238576,8 12.5,8 C12.7761424,8 13,8.22385763 13,8.5 L13,12 Z M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L19.5,3 C20.8807119,3 22,4.11928813 22,5.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L5.5,22 C4.11928813,22 3,20.8807119 3,19.5 L3,5.5 Z M4,5.5 L4,19.5 C4,20.3284271 4.67157288,21 5.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,5.5 C21,4.67157288 20.3284271,4 19.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 Z"/></svg>

      <!-- User cirle -->
      <svg *ngSwitchCase="'userCircle'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
      [class]="class + ' fill-current stroke-current'">
        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8 .4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>

      <!-- Default - plus svg-->
      <svg *ngSwitchDefault xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" [class]="class">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>
    </ng-container>
  `
})
export class SvgComponent {
  @Input() icon: string = '';
  @Input() class: string = '';
}
