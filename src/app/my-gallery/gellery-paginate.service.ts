import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GelleryPaginateService {
  public paginateImages(images, perPage: number, currentPage, term = '', sortBy) {
    // filter logic    
    let filterCb = !term.trim() ? null : ({title}) => title.toLowerCase().includes(term.toLowerCase());
    let filtered = filterCb ?  images.filter(filterCb) : images;

    // sort logic  
    let sortCb = sortBy ? (a, b) => a[sortBy] > b[sortBy] ? 1: -1 : null;
    let sorted = sortCb ?  filtered.sort(sortCb) : filtered;

    // pagination logic
    let offset = (currentPage - 1) * perPage;
    let paginated = sorted.slice(offset, offset + +perPage);

    // calculate total pages
    let totalPages = Math.ceil(filtered.length / perPage);
    return {paginated, totalPages};
  } 
}
