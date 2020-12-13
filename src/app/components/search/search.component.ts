import { Component, EventEmitter, Output } from "@angular/core";
import { FilterService } from "../../services/filter.service";

@Component({
  selector: "app-search",
  styleUrls: ["search.component.css"],
  templateUrl: "./search.component.html",
})
export class SearchComponent {

  @Output() selectedCountry = new EventEmitter();

  constructor(private readonly filterService: FilterService) {}

  public countrySearch(event: Event): void {
    this.selectedCountry.emit(this.filterService.filterCountries(event));
  }
}
