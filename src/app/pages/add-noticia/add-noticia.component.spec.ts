import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoticiaComponent } from './add-noticia.component';

describe('AddNoticiaComponent', () => {
  let component: AddNoticiaComponent;
  let fixture: ComponentFixture<AddNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
