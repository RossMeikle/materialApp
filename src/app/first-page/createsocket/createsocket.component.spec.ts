import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesocketComponent } from './createsocket.component';

describe('CreatesocketComponent', () => {
  let component: CreatesocketComponent;
  let fixture: ComponentFixture<CreatesocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
