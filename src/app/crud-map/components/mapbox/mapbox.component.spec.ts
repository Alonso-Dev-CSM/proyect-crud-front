import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxComponentComponent } from './mapbox.component';

describe('MapboxComponentComponent', () => {
  let component: MapboxComponentComponent;
  let fixture: ComponentFixture<MapboxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapboxComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
