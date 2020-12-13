import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from "@angular/core/testing";
import { ListComponent } from "./components/list/list.component";
import { SearchComponent } from "./components/search/search.component";
import { AppComponent } from "./app.component";
import { FilterService } from "./services/filter.service";
import { FormsModule } from "@angular/forms";
import { NgZone } from "@angular/core";
import { countriesArray } from "./shared";

describe("SearchComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let filterService: FilterService;
  let ngZone;
  let searchInput, noDataDiv;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [FilterService],
      declarations: [AppComponent, ListComponent, SearchComponent],
    }).compileComponents();
  }));
  beforeEach(inject([NgZone], (injectedNgZone: NgZone) => {
    ngZone = injectedNgZone;
  }));
  beforeEach(() => {
    filterService = new FilterService();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    searchInput = fixture.nativeElement.querySelectorAll(
      ".search_country input"
    );
    noDataDiv = fixture.nativeElement.querySelectorAll(".no_data_div");
  });

  it("check default/initial state of the application", () => {
    expect(searchInput[0].innerText).toEqual("");
    const names = [];
    const allCountryEmelements = document.querySelectorAll(
      ".card_container .card"
    );
    for (let index = 0; index < allCountryEmelements.length; index++) {
      names.push(allCountryEmelements[index].textContent.trim());
    }
    expect(names).toEqual(countriesArray);
  });
});
