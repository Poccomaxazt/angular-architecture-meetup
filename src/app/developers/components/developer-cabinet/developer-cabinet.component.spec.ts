import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperCabinetComponent } from './developer-cabinet.component';

describe('DeveloperCabinetComponent', () => {
  let component: DeveloperCabinetComponent;
  let fixture: ComponentFixture<DeveloperCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
