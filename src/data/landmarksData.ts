import { Landmark, Review } from '../types';

export const SOLAPUR_LANDMARKS: Landmark[] = [
  {
    name: 'Asra Chowk',
    marathiName: 'आसरा चौक',
    distance: '150 m',
    timeByBike: '1 min',
    timeByWalk: '2 mins',
    description: 'Prominent junction on Hotgi Road; we are located just a few paces towards Sainath Nagar.'
  },
  {
    name: 'Mannat Function Hall',
    marathiName: 'मन्नत फंक्शन हॉल',
    distance: '20 m',
    timeByBike: '30 sec',
    timeByWalk: '30 sec',
    description: 'Directly opposite to DK Ice Cream & Juice Center across Hotgi Road.'
  },
  {
    name: 'Jule Solapur',
    marathiName: 'जुळे सोलापूर',
    distance: '2.4 km',
    timeByBike: '6 mins',
    timeByWalk: '28 mins',
    description: 'Key residential hub. Quick straight ride along connecting Hotgi Road.'
  },
  {
    name: 'Saat Rasta',
    marathiName: 'सात रस्ता',
    distance: '3.6 km',
    timeByBike: '9 mins',
    timeByWalk: '42 mins',
    description: 'Commercial heart of Solapur city with easy auto-rickshaw availability.'
  },
  {
    name: 'Solapur Railway Station (SUR)',
    marathiName: 'सोलापूर रेल्वे स्टेशन',
    distance: '4.5 km',
    timeByBike: '12 mins',
    timeByWalk: '55 mins',
    description: 'Central train station connecting Mumbai, Pune, Hyderabad, and Bengaluru.'
  },
  {
    name: 'Shri Siddheshwar Temple & Lake',
    marathiName: 'श्री सिद्धेश्वर मंदिर व तलाव',
    distance: '5.2 km',
    timeByBike: '14 mins',
    timeByWalk: '1 hr',
    description: 'Historic patron deity temple of Solapur city.'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Vikram Jadhav',
    location: 'Hotgi Road, Solapur',
    rating: 5,
    date: '2 days ago',
    comment: 'The DK Special Royal Falooda is truly unmatched anywhere in Asra Chowk! The sabja seeds and thick rabdi combination is divine. We visit every weekend with family after dinner.',
    favoriteItem: 'DK Special Royal Falooda'
  },
  {
    id: 'rev-2',
    author: 'Pooja Kulkarni',
    location: 'Jule Solapur',
    rating: 5,
    date: '1 week ago',
    comment: 'Best fresh Mosambi and Anar juices in Solapur. They never add artificial syrup or excessive water—pure fruit extraction right in front of you. Extremely hygienic and polite staff.',
    favoriteItem: 'Pure Pomegranate Juice'
  },
  {
    id: 'rev-3',
    author: 'Sameer Inamdar',
    location: 'Near Mannat Hall, Solapur',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Their Mango Mastani reminds me of the authentic Pune style! Loaded with dry fruits and fresh ice cream. Perfect casual spot to sit with friends till late evening.',
    favoriteItem: 'Solapur Special Mango Mastani'
  },
  {
    id: 'rev-4',
    author: 'Snehal Deshmukh',
    location: 'Saat Rasta, Solapur',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Super fast service even during peak evening hours (8:30 PM - 10 PM). The Rabdi Kulfi Falooda with real sliced kulfi is mindblowing. Prices are very reasonable.',
    favoriteItem: 'Rabdi Kulfi Falooda'
  },
  {
    id: 'rev-5',
    author: 'Anand Shinde',
    location: 'Sainath Nagar, Solapur',
    rating: 4,
    date: '1 month ago',
    comment: 'Our daily go-to juice center. In hot summers, their Ganga Jamuna and Kokum Sarbat give instant energy. Highly recommend to anyone passing Hotgi Road.',
    favoriteItem: 'Ganga Jamuna Juice'
  }
];
