import { async, TestBed } from "@angular/core/testing";
import { FilterService } from "./filter.service";

describe("[Search Service Unit Tests]", () => {
  let service: FilterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [FilterService],
      declarations: [],
    }).compileComponents();
    service = TestBed.get(FilterService);
  }));

  it("[FilterCountries] Should allow fuzzy search", () => {
    const searchString = "ban";
    expect(service.filterCountries(searchString)).toEqual([
      "Albania",
      "Bangladesh",
      "Lebanon"
    ]);
  });

  it("[FilterCountries] Should allow multiple case inputs", () => {
    let searchString = "UKRA";
    expect(service.filterCountries(searchString)).toEqual(["Ukraine"]);
    searchString = "ukra";
    expect(service.filterCountries(searchString)).toEqual(["Ukraine"]);
    searchString = "UkRa";
    expect(service.filterCountries(searchString)).toEqual(["Ukraine"]);
  });
});
