import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduadoViewComponent } from './graduado-view.component';

describe('GraduadoViewComponent', () => {
  let component: GraduadoViewComponent;
  let fixture: ComponentFixture<GraduadoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduadoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduadoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
