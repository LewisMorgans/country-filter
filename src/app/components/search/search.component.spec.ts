import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { FilterService } from "app/services/filter.service";
import { SearchComponent } from "./search.component";

describe("[Search Unit Tests]", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchInput;
  let mockFilterService;

  beforeEach(async(() => {
    mockFilterService = {
      filterCountries: () => {
        "Albania";
      },
    };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [{ provide: FilterService, useValue: mockFilterService }],
      declarations: [SearchComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("[CountrySearch] Should emit the result of the filter service to the parent component", () => {
    const event = new Event("Albania");
    const spy = spyOn(component.selectedCountry, "emit").and.callThrough();
    component.countrySearch(event);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
