import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteListComponent } from './upadte-list.component';

describe('UpadteListComponent', () => {
  let component: UpadteListComponent;
  let fixture: ComponentFixture<UpadteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
