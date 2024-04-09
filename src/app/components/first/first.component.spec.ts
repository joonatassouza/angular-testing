import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstComponent } from './first.component';
import { SharedService } from 'src/app/services/shared.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { SecondComponent } from '../second/second.component';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let sharedServiceSpy: jasmine.SpyObj<SharedService>;

  beforeEach(async () => {
    const sharedServiceSpyObj = jasmine.createSpyObj('SharedService', [
      'calculateProductDiscount',
      'resultValue',
    ]);

    await TestBed.configureTestingModule({
      declarations: [FirstComponent, SecondComponent],
      providers: [{ provide: SharedService, useValue: sharedServiceSpyObj }],
      imports: [FormsModule],
    }).compileComponents();

    sharedServiceSpy = TestBed.inject(
      SharedService
    ) as jasmine.SpyObj<SharedService>;
    sharedServiceSpy.resultValue = of(0);
    sharedServiceSpy.calculateProductDiscount.and.returnValue(); // Mock calculateProductDiscount
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update final price on input change', () => {
    component.price = 100;
    component.discount = 10;
    component.calculateDiscount();
    sharedServiceSpy.resultValue = of(90);
    expect(sharedServiceSpy.calculateProductDiscount).toHaveBeenCalledWith(
      100,
      10
    );
    component.getFinalPrice(90);
    expect(component.finalPrice).toBe(90);
  });

  it('should update final price when receiving price from second component', () => {
    component.getFinalPrice(150);
    expect(component.finalPrice).toBe(150);
  });
});
