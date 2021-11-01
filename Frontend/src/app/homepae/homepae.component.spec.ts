import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepaeComponent } from './homepae.component';

describe('HomepaeComponent', () => {
  let component: HomepaeComponent;
  let fixture: ComponentFixture<HomepaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
