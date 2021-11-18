import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTableProdutosComponent } from './dialog-table-produtos.component';

describe('DialogTableProdutosComponent', () => {
  let component: DialogTableProdutosComponent;
  let fixture: ComponentFixture<DialogTableProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTableProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTableProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
