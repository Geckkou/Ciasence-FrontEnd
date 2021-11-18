import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTableClientesComponent } from './dialog-table-clientes.component';

describe('DialogTableClientesComponent', () => {
  let component: DialogTableClientesComponent;
  let fixture: ComponentFixture<DialogTableClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTableClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTableClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
