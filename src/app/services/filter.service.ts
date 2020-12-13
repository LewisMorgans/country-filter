import { Injectable } from "@angular/core";
import { countriesArray } from "app/shared/index";

@Injectable()
export class FilterService {
  public filterCountries(searchString): Array<string> {
    const result = countriesArray.filter((country) =>
      country.toLowerCase().includes(searchString.toLowerCase())
    );

    return result;
  }
}
