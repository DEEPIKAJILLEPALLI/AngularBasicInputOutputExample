import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDispalyComponent } from './price-dispaly.component';

describe('PriceDispalyComponent', () => {
  let component: PriceDispalyComponent;
  let fixture: ComponentFixture<PriceDispalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceDispalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceDispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
