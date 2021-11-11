import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVerProdutosComponent } from './dialog-ver-produtos.component';

describe('DialogVerProdutosComponent', () => {
  let component: DialogVerProdutosComponent;
  let fixture: ComponentFixture<DialogVerProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVerProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVerProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
