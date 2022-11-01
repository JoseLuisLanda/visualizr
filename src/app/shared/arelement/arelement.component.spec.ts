import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARElementComponent } from './arelement.component';

describe('ARElementComponent', () => {
  let component: ARElementComponent;
  let fixture: ComponentFixture<ARElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
