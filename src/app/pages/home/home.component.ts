import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeRoutes } from '../../constants/routes.constants';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public homeRoutes = HomeRoutes;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  ngOnInit() {
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public navigateTo(location: string): void {
    this.router.navigate(
      [`./${location}`],
      {
        queryParamsHandling: 'preserve',
        relativeTo: this.activatedRoute
      }
    );
  }

  public navigateBack(): void {
    this.router.navigate(
      [`./`],
      {
        queryParamsHandling: 'preserve',
        relativeTo: this.activatedRoute.parent
      }
    );
  }

  public getCurrentPath(): string {
    return this.router.url;
  }

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

}
