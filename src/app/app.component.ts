import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * This is interface is for AppState
 */
interface AppState {
  text: string;
}
/**
 * Created this component for practice
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa';
  text1$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.text1$ = this.store.select('text');
  }

  /**
   * This function is used to change to Spanish language
   */
  spanish() {
    this.store.dispatch({type: 'ESP'});
  }

  /**
   * This function is used to change to French language
   */
  french() {
    this.store.dispatch({type: 'FRE'});
  }
}
