import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListingFormComponent } from './data-listing-form.component';

describe('DataListingFormComponent', () => {
  let component: DataListingFormComponent;
  let fixture: ComponentFixture<DataListingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
