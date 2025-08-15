

export class MapPage {
  constructor(page) {
    this.page = page;
    this.Map = page.locator('.mapboxgl-canvas');
  }
   

  async isMapVisible() {
    return await this.Map.first().isVisible();
  }

  async retrieveMap() {
    return await this.Map.first();
  }

   async getMapWidth() {
    return await this.Map.first().getAttribute('width');
  }

   async getMapHeight() {
    return await this.Map.first().getAttribute('height');
  }

}