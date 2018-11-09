import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoEventComponent } from './to-do-event.component';

describe('ToDoEventComponent', () => {
  let component: ToDoEventComponent;
  let fixture: ComponentFixture<ToDoEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
