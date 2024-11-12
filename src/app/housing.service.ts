import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: Housinglocation[] = [ 
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://cdn.prod.website-files.com/62b0dbf4e9b10d801adbb12e/6312673961b0df80c472e952_6308f9dd4aa5dc4410869f61_Plan%2520Details%2520-%2520Homestead%2520-%25201%2520Elevation%2520Rendered_11zon.jpeg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://assets.alot.com/assets/common/themes/u8744_602x312.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/OAKLAND%2C_CA%2C_USA_-_Skyline_and_Bridge_%28cropped%29.JPG/800px-OAKLAND%2C_CA%2C_USA_-_Skyline_and_Bridge_%28cropped%29.JPG',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: 'https://images.unsplash.com/photo-1506045412240-22980140a405',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];

  constructor() { }

  getAllHousingLocations() : Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: Number) : Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id)
  }
}
