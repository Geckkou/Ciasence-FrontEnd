import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPtaxComponent } from './dialog-ptax.component';

describe('DialogPtaxComponent', () => {
  let component: DialogPtaxComponent;
  let fixture: ComponentFixture<DialogPtaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPtaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPtaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
