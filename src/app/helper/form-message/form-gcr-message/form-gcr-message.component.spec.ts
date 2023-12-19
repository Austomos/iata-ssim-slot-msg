import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGcrMessageComponent } from './form-gcr-message.component';

describe('FormGcrMessageComponent', () => {
  let component: FormGcrMessageComponent;
  let fixture: ComponentFixture<FormGcrMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGcrMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGcrMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
