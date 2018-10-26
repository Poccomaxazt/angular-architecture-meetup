import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangStatisticsComponent } from './lang-statistics.component';

describe('LangStatisticsComponent', () => {
  let component: LangStatisticsComponent;
  let fixture: ComponentFixture<LangStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
