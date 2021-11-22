import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditarClientesComponent } from './dialog-editar-clientes.component';

describe('DialogEditarClientesComponent', () => {
  let component: DialogEditarClientesComponent;
  let fixture: ComponentFixture<DialogEditarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditarClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
