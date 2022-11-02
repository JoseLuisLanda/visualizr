import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfelementComponent } from './afelement.component';

describe('AfelementComponent', () => {
  let component: AfelementComponent;
  let fixture: ComponentFixture<AfelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
