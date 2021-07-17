import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularanth';

  constructor(private service: AuthService) {
  }

  isUserLoggedIn = false;

  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData" + storeData);

    if (storeData != null && storeData == "true")
      this.isUserLoggedIn = true;

    else
      this.isUserLoggedIn = false;
  }
}
