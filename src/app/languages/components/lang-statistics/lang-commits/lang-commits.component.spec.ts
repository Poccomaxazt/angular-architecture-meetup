import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangCommitsComponent } from './lang-commits.component';

describe('LangCommitsComponent', () => {
  let component: LangCommitsComponent;
  let fixture: ComponentFixture<LangCommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangCommitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
