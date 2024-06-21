import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  /**
   * Represents whether the header is hidden or not.
   */
  isHidden: boolean = false;

  /**
   * Represents the timeout used for hiding the header after scrolling.
   */
  timeout: any;

  /**
   * Event listener for the window scroll event.
   * It updates the current section based on the scroll position and hides the header while scrolling.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Hide the header while scrolling down
    this.isHidden = true;

    // Clear the previous timeout if it exists
    clearTimeout(this.timeout);

    // Set a timeout to show the header after 300ms of scroll stop
    this.timeout = setTimeout(() => {
      this.isHidden = false;
    }, 300);
  }
}