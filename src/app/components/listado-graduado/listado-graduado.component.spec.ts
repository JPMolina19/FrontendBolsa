import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGraduadoComponent } from './listado-graduado.component';

describe('ListadoGraduadoComponent', () => {
  let component: ListadoGraduadoComponent;
  let fixture: ComponentFixture<ListadoGraduadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGraduadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoGraduadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
