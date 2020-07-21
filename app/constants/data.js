import { images } from './images';

const data = {
  step1: {
    image: images.logo,
    step1Image: images.step1Image,
    step1Logo: images.step1Logo,
  },
  profile: {
    personal: images.personal,
    personalText: 'Personal Detail',
    myorder: images.myorder,
    myorderText: 'My Orders',
    mymeasurement: 'jkk',
    mymeasurementText: 'My Measurements',
    mywishlist: images.heart,
    mywishlistText: 'My Wishlist',
    payment: '',
    paymentText: 'Payment',
    chevron: images.chevron,
  },
  designers: {
    data:[
    {
      image: images.d3,
      name: 'Jennifer',
      location: 'Doha',
      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      tags: [ 'Jewellery','Beauty','Jewellery'],
    },
    {
      image: images.d2,
      name: 'Brake',
      location: 'AlKhor',
      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      tags: ['jewelery','beauty','beauty'],
    },
    {
      image: images.d3,
      name: 'Shemina',
      location: 'Lusial',
      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      tags: ['jewelery','beauty','dress'],
    },
    {
      image: images.d2,
      name: 'Brake',
      location: 'AlKhor1',
      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      tags: ['jewelery','beauty'],
    },
    {
      image: images.d3,
      name: 'Jennifer',
      location: 'Doha1',
      message: 'Lorem ipsum dolor sit amet, consetetur sadips',
      tags: ['jewelery','beauty'],
    },
    {
      image: images.d2,
      name: 'Brake',
      location: 'AlKhor2',
      message: 'Lorem ipsum dolor sit amet, consetetur sadips',
      tags: ['jewelery','beauty'],
    },
    ],
  },
  brands: {
    image:[ 
      {
        key: 1,
        val: images.brand1,
      },
      {
        key: 2,
        val: images.brand2,
      },
      { 
        key: 3,
        val:images.brand3,
      },
      {
        key:  4,
        val:images.brand4,
      },
      {
        key: 5,
        val: images.brand1,
      },
      {
        key: 6,
        val: images.brand2,
      },
      { 
        key: 7,
        val:images.brand3,
      },
      {
        key: 8,
        val:images.brand4,
      },
     ]
  },
  category:[
    {
      image: images.category1,
      name: 'Fashion',
    },
    {
      image: images.category,
      name: 'Beauty',
    },
    {
      image: images.category2,
      name: 'Jewellery',
    },
    {
      image: images.category1,
      name: 'Bags & Accessories',
    },
  ]
};

export { data };
