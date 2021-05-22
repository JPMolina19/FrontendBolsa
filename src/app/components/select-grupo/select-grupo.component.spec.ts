import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGrupoComponent } from './select-grupo.component';

describe('SelectGrupoComponent', () => {
  let component: SelectGrupoComponent;
  let fixture: ComponentFixture<SelectGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
