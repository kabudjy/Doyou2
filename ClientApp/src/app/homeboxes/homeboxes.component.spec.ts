import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeboxesComponent } from './homeboxes.component';

describe('HomeboxesComponent', () => {
  let component: HomeboxesComponent;
  let fixture: ComponentFixture<HomeboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeboxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
