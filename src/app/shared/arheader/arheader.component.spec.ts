import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARHeaderComponent } from './arheader.component';

describe('ARHeaderComponent', () => {
  let component: ARHeaderComponent;
  let fixture: ComponentFixture<ARHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
