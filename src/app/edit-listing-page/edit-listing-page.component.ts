import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  listing: any; // not good temporarily
  constructor(private route: ActivatedRoute, private router: Router) {
    // not good temporarily
    this.listing = {
      id: 'null',
      name: 'null',
      description: 'null',
      price: 0,
    };
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
    if (!this.listing) { // not good temporarily
      this.listing = {
        id: 'null',
        name: 'null',
        description: 'null',
        price: 0,
      };
    }
  }
  onSubmit(): void {
    alert('Saving chnages to the listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
