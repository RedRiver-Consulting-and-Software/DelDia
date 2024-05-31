import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BoardService, BoardSummary } from '../../services/board.service';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../components/svgs.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, SvgComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  boards: BoardSummary[] = [];
  showBoards: boolean = true;

  isHomeRoute: boolean = false;
  isBoardRoute: boolean = false;

  constructor(private boardService: BoardService, private router: Router) {}

  ngOnInit(): void {
    this.boardService.getBoardSummaries().subscribe((data) => {
      this.boards = data;
      console.log(data)
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeRoute = this.router.url === '/';
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isBoardRoute = this.router.url.startsWith('/board/');
      }
    });
  }

  toggleBoards(): void {
    this.showBoards = !this.showBoards;
  }

}
