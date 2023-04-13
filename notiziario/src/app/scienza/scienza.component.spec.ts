import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienzaComponent } from './scienza.component';

describe('ScienzaComponent', () => {
  let component: ScienzaComponent;
  let fixture: ComponentFixture<ScienzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
