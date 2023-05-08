import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxaComponent } from './axa.component';

describe('AxaComponent', () => {
  let component: AxaComponent;
  let fixture: ComponentFixture<AxaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
