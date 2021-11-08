import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProdutoProjetoComponent } from './dialog-produto-projeto.component';

describe('DialogProdutoProjetoComponent', () => {
  let component: DialogProdutoProjetoComponent;
  let fixture: ComponentFixture<DialogProdutoProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProdutoProjetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProdutoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
