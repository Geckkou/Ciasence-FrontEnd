import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditarProdutosComponent } from './dialog-editar-produtos.component';

describe('DialogEditarProdutosComponent', () => {
  let component: DialogEditarProdutosComponent;
  let fixture: ComponentFixture<DialogEditarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditarProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
