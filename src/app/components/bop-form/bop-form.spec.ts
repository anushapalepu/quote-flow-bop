import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BopForm } from './bop-form';

describe('BopForm', () => {
  let component: BopForm;
  let fixture: ComponentFixture<BopForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BopForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BopForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
