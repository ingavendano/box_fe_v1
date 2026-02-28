import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rastreo } from './rastreo';

describe('Rastreo', () => {
  let component: Rastreo;
  let fixture: ComponentFixture<Rastreo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rastreo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rastreo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
