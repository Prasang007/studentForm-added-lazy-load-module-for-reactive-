import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenStudentFormComponent } from './template-driven-student-form.component';

describe('TemplateDrivenStudentFormComponent', () => {
  let component: TemplateDrivenStudentFormComponent;
  let fixture: ComponentFixture<TemplateDrivenStudentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenStudentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
