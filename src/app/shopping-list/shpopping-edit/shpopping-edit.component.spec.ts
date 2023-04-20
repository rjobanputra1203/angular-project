import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpoppingEditComponent } from './shpopping-edit.component';

describe('ShpoppingEditComponent', () => {
  let component: ShpoppingEditComponent;
  let fixture: ComponentFixture<ShpoppingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShpoppingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShpoppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
