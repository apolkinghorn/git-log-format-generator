import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatOptionSearchComponent } from './format-option-search.component';

describe('FormatOptionSearchComponent', () => {
  let component: FormatOptionSearchComponent;
  let fixture: ComponentFixture<FormatOptionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatOptionSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatOptionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
