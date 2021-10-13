import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProjetoComponent } from './formulario-projeto.component';

describe('FormularioProjetoComponent', () => {
  let component: FormularioProjetoComponent;
  let fixture: ComponentFixture<FormularioProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProjetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
