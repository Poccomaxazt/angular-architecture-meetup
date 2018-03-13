import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSkillComponent } from './server-skill.component';

describe('ServerSkillComponent', () => {
  let component: ServerSkillComponent;
  let fixture: ComponentFixture<ServerSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
