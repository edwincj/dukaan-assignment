import {
  Analytics,
  Appearance,
  Audience,
  Delivery,
  Discounts,
  Home,
  Marketing,
  Orders,
  Payments,
  Plugins,
  Products,
  Tools,
} from 'assets/Images';
const Navlinks = [
  {
    name: 'Home',
    selected: false,
    icon: Home,
  },
  {
    name: 'Orders',
    selected: false,
    icon: Orders,
  },
  {
    name: 'Products',
    selected: false,
    icon: Products,
  },
  {
    name: 'Delivery',
    selected: false,
    icon: Delivery,
  },
  {
    name: 'Marketing',
    selected: false,
    icon: Marketing,
  },
  {
    name: 'Analytics',
    selected: false,
    icon: Analytics,
  },

  {
    name: 'Payments',
    selected: true,
    icon: Payments,
  },
  {
    name: 'Tools',
    selected: false,
    icon: Tools,
  },
  {
    name: 'Discounts',
    selected: false,
    icon: Discounts,
  },
  {
    name: 'Audience',
    selected: false,
    icon: Audience,
  },
  {
    name: 'Appearance',
    selected: false,
    icon: Appearance,
  },
  {
    name: 'Plugins',
    selected: false,
    icon: Plugins,
  },
];

export default Navlinks;
