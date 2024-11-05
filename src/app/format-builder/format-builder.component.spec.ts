import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatBuilderComponent } from './format-builder.component';

describe('FormatBuilderComponent', () => {
  let component: FormatBuilderComponent;
  let fixture: ComponentFixture<FormatBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
