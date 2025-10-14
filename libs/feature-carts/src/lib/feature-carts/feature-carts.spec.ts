import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCarts } from './feature-carts';

describe('FeatureCarts', () => {
  let component: FeatureCarts;
  let fixture: ComponentFixture<FeatureCarts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCarts],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCarts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
