import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg',
  standalone: true,
    imports: [
    CommonModule
  ],
  template: `
    <ng-container [ngSwitch]="icon">
    <!-- Exempel:
      <app-svg icon="--namnIkon--" class="text-black hover:text-iris h-6 w-6"></app-svg>
    -->

      <!-- Board Icon -->
      <svg *ngSwitchCase="'board'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      [class]="class + ' fill-current stroke-current'">
        <g clip-path="url(#clip0_128_1000)">
          <path d="M19.7778 2H4.22222C2.99492 2 2 2.99492 2 4.22222V19.7778C2 21.0051 2.99492 22 4.22222 22H19.7778C21.0051 22 22 21.0051 22 19.7778V4.22222C22 2.99492 21.0051 2 19.7778 2Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M21 9L3 9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_128_1000">
            <rect width="32" height="32" fill="none"/>
          </clipPath>
        </defs>
      </svg>

      <!-- Home Icon -->
      <svg *ngSwitchCase="'home'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      [class]="class + ' stroke-current'" >
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M9 22V12H15V22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>

      <!-- Arrow Right Icon -->
      <svg *ngSwitchCase="'arrowRight'" fill="none" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" [class]="class + ' stroke-current'">
        <path d="M15 6L9 12L15 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <!-- Plus Square Icon -->
      <svg *ngSwitchCase="'plusSquare'" fill="none" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" [class]="class + ' fill-current'">
        <rect />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9ZM7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782Z"/>
      </svg>

      <!-- Plus Circle Icon -->
      <svg *ngSwitchCase="'plusCircle'" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" [class]="class + ' fill-current'">
        <rect />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"/>
      </svg>

      <!-- 3 Dots Horizontal Icon -->
      <svg *ngSwitchCase="'dotsH'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      [class]="class + ' fill-current stroke-current'">
      <path d="M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z"/></svg>

      <!-- Drag Horizontal Icon -->
      <svg *ngSwitchCase="'dragH'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      [class]="class + ' fill-current stroke-current'">
      <path d="M14 5V19M5 14L3 12L5 10M19 14L21 12L19 10M10 5L10 19"/></svg>

      <!-- Plus square Icon -->
      <svg *ngSwitchCase="'addNew'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      [class]="class + ' fill-current stroke-current'">
        <path d="M13,12 L16.5,12 C16.7761424,12 17,12.2238576 17,12.5 C17,12.7761424 16.7761424,13 16.5,13 L13,13 L13,16.5 C13,16.7761424 12.7761424,17 12.5,17 C12.2238576,17 12,16.7761424 12,16.5 L12,13 L8.5,13 C8.22385763,13 8,12.7761424 8,12.5 C8,12.2238576 8.22385763,12 8.5,12 L12,12 L12,8.5 C12,8.22385763 12.2238576,8 12.5,8 C12.7761424,8 13,8.22385763 13,8.5 L13,12 Z M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L19.5,3 C20.8807119,3 22,4.11928813 22,5.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L5.5,22 C4.11928813,22 3,20.8807119 3,19.5 L3,5.5 Z M4,5.5 L4,19.5 C4,20.3284271 4.67157288,21 5.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,5.5 C21,4.67157288 20.3284271,4 19.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 Z"/></svg>

      <!-- Arrow left circle icon -->
      <svg *ngSwitchCase="'arrowRightCircle'" fill="none" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" [class]="class + ' fill-current'">
        <rect/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L11.4142 12L13.7071 14.2929C14.0976 14.6834 14.0976 15.3166 13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071L9.5554 12.9696C9.0199 12.4341 9.0199 11.5659 9.55541 11.0304L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289Z"/>
      </svg>

      <!-- Default - plus svg-->
      <svg *ngSwitchDefault xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" [class]="class">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>
    </ng-container>
  `
})
export class SvgComponent {
  @Input() icon: string = '';
  @Input() class: string = '';
  @Input() isToggleButton: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleRotation(isOpened: boolean) {
    if (this.isToggleButton) {
      if (isOpened) {
        this.renderer.removeClass(this.el.nativeElement, 'rotated');
      } else {
        this.renderer.addClass(this.el.nativeElement, 'rotated');
      }
    }
  }
}
