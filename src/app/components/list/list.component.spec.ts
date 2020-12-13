import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { FilterService } from "app/services/filter.service";
import { SearchComponent } from "../search/search.component";
import { ListComponent } from "./list.component";

describe("[List Unit Tests]", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [FilterService],
      declarations: [ListComponent, SearchComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  }));

  it("[MapCountriesFound] Should assign event passed to method to local array variable", () => {
    const newArray = ["USA", "UK", "SE"];
    component.countriesToBeRendered = [];
    expect(component.countriesToBeRendered).toEqual([]);
    component.mapCountriesFound(newArray);
    expect(component.countriesToBeRendered).toEqual(newArray);
  });
});
