import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserSkillComponent } from './browser-skill.component';

describe('BrowserSkillComponent', () => {
  let component: BrowserSkillComponent;
  let fixture: ComponentFixture<BrowserSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
