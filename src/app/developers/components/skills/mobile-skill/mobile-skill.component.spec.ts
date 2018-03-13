import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSkillComponent } from './mobile-skill.component';

describe('MobileSkillComponent', () => {
  let component: MobileSkillComponent;
  let fixture: ComponentFixture<MobileSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
