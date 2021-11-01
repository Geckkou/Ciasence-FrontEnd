import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProdutosComponent } from './dialog-produtos.component';

describe('DialogProdutosComponent', () => {
  let component: DialogProdutosComponent;
  let fixture: ComponentFixture<DialogProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
