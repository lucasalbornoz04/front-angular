import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbountMeComponent } from './abount-me.component';

describe('AbountMeComponent', () => {
  let component: AbountMeComponent;
  let fixture: ComponentFixture<AbountMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbountMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbountMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
