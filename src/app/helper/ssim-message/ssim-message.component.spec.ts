import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsimMessageComponent } from './ssim-message.component';

describe('SsimMessageComponent', () => {
  let component: SsimMessageComponent;
  let fixture: ComponentFixture<SsimMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsimMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsimMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
