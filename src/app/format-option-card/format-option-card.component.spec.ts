import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatOptionCardComponent } from './format-option-card.component';

describe('FormatOptionCardComponent', () => {
  let component: FormatOptionCardComponent;
  let fixture: ComponentFixture<FormatOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatOptionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
