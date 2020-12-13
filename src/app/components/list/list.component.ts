import { Component } from "@angular/core";
import { countriesArray } from "app/shared";

@Component({
  selector: "app-list",
  styleUrls: ["list.component.css"],
  templateUrl: "./list.component.html",
})
export class ListComponent {
  public countriesToBeRendered = countriesArray;

  constructor() {}

  public mapCountriesFound(country: Array<string>): void {
    this.countriesToBeRendered = country.map((country) => country);
  }
}
