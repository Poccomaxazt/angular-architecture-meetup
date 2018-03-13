import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSkillComponent } from './desktop-skill.component';

describe('DesktopSkillComponent', () => {
  let component: DesktopSkillComponent;
  let fixture: ComponentFixture<DesktopSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
