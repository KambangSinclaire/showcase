import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseListComponent } from './showcase-list.component';

describe('ShowcaseListComponent', () => {
  let component: ShowcaseListComponent;
  let fixture: ComponentFixture<ShowcaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
