import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondComponent } from './second.component';
import { SharedService } from 'src/app/services/shared.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;
  let sharedServiceSpy: jasmine.SpyObj<SharedService>;

  beforeEach(async () => {
    const sharedServiceSpyObj = jasmine.createSpyObj('SharedService', [
      'resultValue',
    ]);

    await TestBed.configureTestingModule({
      declarations: [SecondComponent],
      imports: [FormsModule],
      providers: [{ provide: SharedService, useValue: sharedServiceSpyObj }],
    }).compileComponents();

    sharedServiceSpy = TestBed.inject(
      SharedService
    ) as jasmine.SpyObj<SharedService>;
    sharedServiceSpy.resultValue = of(100);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update product price and calculate final price on initialization', () => {
    expect(component.productPrice).toBe(100);
    expect(component.finalPrice).toBe(100);
  });

  it('should emit final price with tax', () => {
    const emitSpy = spyOn(component.priceWithTax, 'emit');
    component.calculateProductPrice();
    expect(emitSpy).toHaveBeenCalledWith(100); // Assuming tax is 0
  });
});
