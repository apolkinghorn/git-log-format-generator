import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatDemonstrationComponent } from './format-demonstration.component';

describe('FormatDemonstrationComponent', () => {
  let component: FormatDemonstrationComponent;
  let fixture: ComponentFixture<FormatDemonstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatDemonstrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatDemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
