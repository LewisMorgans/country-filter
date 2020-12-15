import { Injectable } from "@angular/core";
import { countriesArray } from "app/shared/index";

@Injectable()
export class FilterService {
  private result: Array<string>;

  public filterCountries(searchString: string): Array<string> {
    return (this.result = countriesArray.filter((country) =>
      country.toLowerCase().includes(searchString.toLowerCase())
    ));
  }
}
