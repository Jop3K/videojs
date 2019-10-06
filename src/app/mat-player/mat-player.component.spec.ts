import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPlayerComponent } from './mat-player.component';

describe('MatPlayerComponent', () => {
  let component: MatPlayerComponent;
  let fixture: ComponentFixture<MatPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
