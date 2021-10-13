import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProjetoProdutoComponent } from './formulario-projeto-produto.component';

describe('FormularioProjetoProdutoComponent', () => {
  let component: FormularioProjetoProdutoComponent;
  let fixture: ComponentFixture<FormularioProjetoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProjetoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProjetoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
