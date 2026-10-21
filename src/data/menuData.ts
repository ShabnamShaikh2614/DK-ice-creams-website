import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // --- FRESH JUICES ---
  {
    id: 'juice-mosambi',
    name: 'Fresh Mosambi (Sweet Lime) Juice',
    marathiName: 'मोसंबी ज्यूस',
    category: 'juices',
    price: 60,
    description: 'Freshly cold-pressed sweet lime with a pinch of rock salt and black pepper.',
    ingredients: ['Fresh Sweet Lime', 'Rock Salt', 'Mint sprig'],
    tag: 'Bestseller',
    isPopular: true,
    isSugarFreeAvailable: true,
    accentColor: '#0EA5E9',
    imageUrl: '/src/assets/images/fresh_juice_parlor_1792567111901.jpg'
  },
  {
    id: 'juice-anar',
    name: 'Pure Pomegranate (Anar) Juice',
    marathiName: 'डाळिंब ज्यूस',
    category: 'juices',
    price: 80,
    description: '100% pure ruby red pomegranate arils crushed fresh on order. Rich in antioxidants.',
    ingredients: ['Fresh Pomegranate', 'Zero added water'],
    tag: 'Healthy Pick',
    isPopular: true,
    isSugarFreeAvailable: true,
    accentColor: '#EC4899',
    imageUrl: '/src/assets/images/fresh_juice_parlor_1792567111901.jpg'
  },
  {
    id: 'juice-ganga-jamuna',
    name: 'Ganga Jamuna Juice',
    marathiName: 'गंगा जमुना ज्यूस',
    category: 'juices',
    price: 70,
    description: 'Solapur favorite twist blending sweet lime (Mosambi) and ripe Orange for the perfect sweet-tang balance.',
    ingredients: ['Mosambi', 'Nagpur Orange', 'Lemon zest'],
    tag: 'Local Favorite',
    isPopular: true,
    isSugarFreeAvailable: true,
    accentColor: '#F43F5E'
  },
  {
    id: 'juice-mango',
    name: 'Alphonso Mango Juice',
    marathiName: 'हापूस आंबा ज्यूस',
    category: 'juices',
    price: 90,
    description: 'Thick, sweet pulp of genuine Ratnagiri Alphonso mangoes. Seasonal bliss in a chilled glass.',
    ingredients: ['Fresh Mango Pulp', 'Cardamom hint', 'Ice'],
    tag: 'Seasonal Special',
    isPopular: true,
    isSeasonal: true,
    accentColor: '#38BDF8',
    imageUrl: '/src/assets/images/fresh_juice_parlor_1792567111901.jpg'
  },
  {
    id: 'juice-pineapple',
    name: 'Chilled Pineapple Juice',
    marathiName: 'अननस ज्यूस',
    category: 'juices',
    price: 60,
    description: 'Golden ripe tropical pineapple extracted fresh with mint and chaat masala.',
    ingredients: ['Fresh Pineapple', 'Black salt', 'Mint'],
    tag: 'Refreshing',
    isSugarFreeAvailable: true,
    accentColor: '#0284C7'
  },
  {
    id: 'juice-watermelon',
    name: 'Fresh Watermelon Juice',
    marathiName: 'कलिंगड ज्यूस',
    category: 'juices',
    price: 50,
    description: 'Naturally sweet and hydrating red watermelon juice with fresh mint leaves.',
    ingredients: ['Crisp Red Watermelon', 'Mint', 'Lime drop'],
    tag: 'Super Cooler',
    isSugarFreeAvailable: true,
    accentColor: '#F472B6'
  },
  {
    id: 'juice-sitaphal',
    name: 'Sitaphal (Custard Apple) Cream Shake',
    marathiName: 'सीताफळ शेक',
    category: 'juices',
    price: 90,
    description: 'Creamy de-seeded fresh custard apple pulp whipped with fresh chilled dairy milk.',
    ingredients: ['Fresh Sitaphal Pulp', 'Creamy Milk', 'Cardamom'],
    tag: 'Winter Classic',
    isSeasonal: true,
    accentColor: '#38BDF8'
  },
  {
    id: 'juice-chikoo',
    name: 'Fresh Chikoo Milkshake',
    marathiName: 'चीकू शेक',
    category: 'juices',
    price: 70,
    description: 'Sweet Solapur farm chikoos blended into a wholesome, velvety thick milkshake.',
    ingredients: ['Fresh Chikoo', 'Full Cream Milk', 'Honey drizzle'],
    accentColor: '#FB7185'
  },

  // --- ROYAL FALOODAS ---
  {
    id: 'falooda-dk-special',
    name: 'DK Special Royal Falooda',
    marathiName: 'डीके स्पेशल रॉयल फालुदा',
    category: 'faloodas',
    price: 130,
    description: 'Our iconic specialty: Rich rose syrup, soaked basil seeds (sabja), golden cornstarch vermicelli, thick rabdi, and dual scoops of creamy ice cream crowned with cashew nuts, almonds, and pistachios.',
    ingredients: ['Rose Essence', 'Sabja Seeds', 'Falooda Sev', 'Mawa Rabdi', 'Vanilla & Kesar Scoop', 'Dry Fruits'],
    tag: 'House Signature',
    isPopular: true,
    accentColor: '#EC4899',
    imageUrl: '/src/assets/images/royal_falooda_glass_1792567111187.jpg'
  },
  {
    id: 'falooda-rabdi-kulfi',
    name: 'Rabdi Kulfi Falooda',
    marathiName: 'रबडी कुल्फी फालुदा',
    category: 'faloodas',
    price: 140,
    description: 'Traditional slow-cooked thick rabdi paired with sliced malai kulfi, chilled vermicelli, and fragrant saffron-cardamom syrup.',
    ingredients: ['Malai Kulfi Slices', 'Slow-cooked Rabdi', 'Falooda Sev', 'Saffron Syrup', 'Slivered Pistachios'],
    tag: 'Chef Recommendation',
    isPopular: true,
    accentColor: '#38BDF8',
    imageUrl: '/src/assets/images/royal_falooda_glass_1792567111187.jpg'
  },
  {
    id: 'falooda-kesar-pista',
    name: 'Kesar Pista Royal Falooda',
    marathiName: 'केसर पिस्ता फालुदा',
    category: 'faloodas',
    price: 120,
    description: 'Golden Kashmiri saffron milk base with sabja seeds, rose jelly, and two generous scoops of Kesar Pista ice cream.',
    ingredients: ['Kashmiri Kesar Milk', 'Pistachio Flakes', 'Falooda Sev', 'Sabja Seeds', 'Kesar Pista Scoop'],
    accentColor: '#EAB308'
  },
  {
    id: 'falooda-mango',
    name: 'Mango Royal Falooda',
    marathiName: 'मँगो रॉयल फालुदा',
    category: 'faloodas',
    price: 130,
    description: 'A summer fantasy: Alphonso mango crush, sabja seeds, vermicelli, rich mango ice cream, and tutti frutti.',
    ingredients: ['Alphonso Mango Pulp', 'Falooda Sev', 'Mango Ice Cream', 'Tutti Frutti', 'Cashews'],
    isSeasonal: true,
    accentColor: '#F59E0B'
  },
  {
    id: 'falooda-rose-supreme',
    name: 'Rose Supreme Falooda',
    marathiName: 'गुलाब फालुदा',
    category: 'faloodas',
    price: 100,
    description: 'Classic aromatic rose syrup layered with soaked basil seeds, delicate vermicelli, and velvety vanilla ice cream.',
    ingredients: ['Damask Rose Syrup', 'Sabja', 'Falooda Sev', 'Vanilla Scoop', 'Glazed Cherry'],
    accentColor: '#F43F5E'
  },
  {
    id: 'falooda-chocolate',
    name: 'Nutty Chocolate Falooda',
    marathiName: 'चॉकलेट फालुदा',
    category: 'faloodas',
    price: 125,
    description: 'Decadent chocolate sauce base with falooda noodles, dark chocolate scoop, roasted almonds, and chocolate vermicelli.',
    ingredients: ['Chocolate Ganache', 'Falooda Sev', 'Chocolate Scoop', 'Roasted Almonds', 'Choco Chips'],
    accentColor: '#78350F'
  },

  // --- MASTANI & SHAKES ---
  {
    id: 'mastani-mango',
    name: 'Solapur Special Mango Mastani',
    marathiName: 'मँगो मस्तानी',
    category: 'mastani',
    price: 120,
    description: 'Maharashtra legendary dessert drink: Extra-thick Alphonso mango milkshake topped with a large scoop of mango ice cream, tutti frutti, and roasted cashews.',
    ingredients: ['Thick Mango Shake', 'Mango Ice Cream Scoop', 'Tutti Frutti', 'Roasted Cashews', 'Glazed Cherry'],
    tag: 'Must Try',
    isPopular: true,
    accentColor: '#F59E0B'
  },
  {
    id: 'mastani-rajbhog',
    name: 'Royal Rajbhog Mastani',
    marathiName: 'राजभोग मस्तानी',
    category: 'mastani',
    price: 130,
    description: 'A royal concoction of saffron-almond shake, rich mawa flavors, topped with Rajbhog ice cream and edible silver leaf.',
    ingredients: ['Rajbhog Thick Shake', 'Rajbhog Scoop', 'Almonds', 'Cardamom', 'Kesar'],
    tag: 'Festive Delight',
    accentColor: '#D97706'
  },
  {
    id: 'mastani-kesar-pista',
    name: 'Kesar Pista Mastani',
    marathiName: 'केसर पिस्ता मस्तानी',
    category: 'mastani',
    price: 125,
    description: 'Rich pistachio and saffron flavored thick shake with a creamy Kesar Pista ice cream crown and crunchy nuts.',
    ingredients: ['Kesar Milkshake', 'Kesar Pista Scoop', 'Roasted Pistachios', 'Badam Slivers'],
    accentColor: '#84CC16'
  },
  {
    id: 'mastani-chocolate',
    name: 'Chocolate Brownie Mastani',
    marathiName: 'चॉकलेट ब्राउनी मस्तानी',
    category: 'mastani',
    price: 130,
    description: 'Rich chocolate fudge shake loaded with chocolate brownie chunks, chocolate ice cream scoop, and chocolate chips.',
    ingredients: ['Chocolate Milkshake', 'Chocolate Ice Cream', 'Brownie Crumbles', 'Choco Sauce'],
    accentColor: '#713F12'
  },
  {
    id: 'shake-cold-coffee',
    name: 'Cold Coffee with Ice Cream',
    marathiName: 'कोल्ड कॉफी विथ आईस्क्रीम',
    category: 'mastani',
    price: 75,
    description: 'Frothy brewed roasted coffee milkshake crowned with a chilled vanilla ice cream scoop and cocoa dust.',
    ingredients: ['Roasted Coffee Blend', 'Chilled Milk', 'Vanilla Ice Cream', 'Cocoa Powder'],
    accentColor: '#854D0E'
  },

  // --- ARTISANAL   // --- ARTISANAL ICE CREAM SCOOPS & SUNDAES ---
  {
    id: 'sundae-strawberry-cream',
    name: 'Strawberry & Vanilla Dream Sundae',
    marathiName: 'स्ट्रॉबेरी ड्रीम संडे',
    category: 'icecreams',
    price: 110,
    description: 'Decadent double scoop of fresh strawberry and rich vanilla bean ice cream loaded with fresh strawberry slices, pastel sprinkles, whipped cream, and berry coulis.',
    ingredients: ['Fresh Strawberry Ice Cream', 'Vanilla Scoop', 'Whipped Cream', 'Pastel Sprinkles', 'Berry Coulis'],
    tag: 'Pastel Special',
    isPopular: true,
    accentColor: '#EC4899',
    imageUrl: '/src/assets/images/delicious_icecream_sundae_1792567087675.jpg'
  },
  {
    id: 'icecream-rajbhog',
    name: 'Royal Rajbhog Ice Cream Cone / Scoop',
    marathiName: 'राजभोग आईस्क्रीम',
    category: 'icecreams',
    price: 60,
    description: 'Traditional royal recipe with saffron, cardamom, condensed milk shreds, and roasted almonds & cashews in a crisp waffle cone.',
    ingredients: ['Pure Dairy Milk', 'Kashmiri Saffron', 'Pistachios', 'Almonds', 'Cardamom'],
    tag: 'Customer Favorite',
    isPopular: true,
    accentColor: '#0EA5E9',
    imageUrl: '/src/assets/images/colorful_icecream_cones_1792567111321.jpg'
  },
  {
    id: 'icecream-kesar-pista',
    name: 'Kesar Pista Supreme Cone',
    marathiName: 'केसर पिस्ता आईस्क्रीम',
    category: 'icecreams',
    price: 55,
    description: 'Slow-churned pure milk ice cream infused with golden saffron strands and roasted Iranian pistachios on crispy waffle.',
    ingredients: ['Full Cream Milk', 'Saffron', 'Roasted Pistachio Chunks'],
    accentColor: '#F472B6',
    imageUrl: '/src/assets/images/colorful_icecream_cones_1792567111321.jpg'
  },
  {
    id: 'icecream-roasted-almond',
    name: 'Roasted Almond Crunch Scoop',
    marathiName: 'रोस्टेड बदाम आईस्क्रीम',
    category: 'icecreams',
    price: 60,
    description: 'Caramelized butterscotch cream base filled with oven-roasted California almond crunches.',
    ingredients: ['Caramel Base', 'Roasted Almonds', 'Cream'],
    accentColor: '#38BDF8',
    imageUrl: '/src/assets/images/colorful_icecream_cones_1792567111321.jpg'
  },
  {
    id: 'icecream-alphonso-mango',
    name: 'Alphonso Mango Scoop',
    marathiName: 'हापूस आंबा आईस्क्रीम',
    category: 'icecreams',
    price: 50,
    description: 'Pure Ratnagiri Alphonso mango pulp infused into smooth velvety ice cream. No synthetic essence.',
    ingredients: ['Ratnagiri Mango Pulp', 'Pure Milk Cream', 'Sugar'],
    accentColor: '#FB7185',
    imageUrl: '/src/assets/images/colorful_icecream_cones_1792567111321.jpg'
  },
  {
    id: 'icecream-belgian-chocolate',
    name: 'Belgian Dark Chocolate Scoop',
    marathiName: 'बेल्जियन चॉकलेट आईस्क्रीम',
    category: 'icecreams',
    price: 60,
    description: 'Intense dark cocoa indulgence with melted fudge swirls and crunchy dark chocolate flakes.',
    ingredients: ['Belgian Cocoa', 'Dark Chocolate Chips', 'Fresh Cream'],
    accentColor: '#0284C7'
  },
  {
    id: 'icecream-tender-coconut',
    name: 'Tender Coconut Scoop',
    marathiName: 'टेंडर कोकोनट आईस्क्रीम',
    category: 'icecreams',
    price: 60,
    description: 'Delicate malai of fresh green tender coconuts folded into chilled dairy ice cream.',
    ingredients: ['Fresh Tender Coconut Meat', 'Coconut Water', 'Pure Cream'],
    accentColor: '#06B6D4'
  },

  // --- TRADITIONAL LASSI & SARBAT ---
  {
    id: 'lassi-special-malai',
    name: 'DK Special Malai Lassi',
    marathiName: 'डीके स्पेशल मलाई लस्सी',
    category: 'lassi',
    price: 60,
    description: 'Churned thick fresh curd served in a tall glass, crowned with thick clotted malai (cream) and saffron dry fruit slivers.',
    ingredients: ['Fresh Buffalo Curd', 'Thick Malai Top', 'Cardamom', 'Cashews & Badam'],
    tag: 'Classic',
    isPopular: true,
    accentColor: '#FBBF24'
  },
  {
    id: 'lassi-rose',
    name: 'Gulabi Rose Lassi',
    marathiName: 'गुलाबी लस्सी',
    category: 'lassi',
    price: 65,
    description: 'Fragrant natural rose petal syrup churned with sweet yoghurt and topped with dried organic rose petals.',
    ingredients: ['Sweet Curd', 'Rose Syrup', 'Rose Petals', 'Pistachios'],
    accentColor: '#FB7185'
  },
  {
    id: 'sarbat-kokum',
    name: 'Konkani Kokum Sarbat',
    marathiName: 'कोकम सरबत',
    category: 'lassi',
    price: 40,
    description: 'Authentic Maharashtrian digestive cooler with organic kokum extract, roasted cumin, and black salt.',
    ingredients: ['Organic Kokum', 'Jeera Powder', 'Black Salt', 'Chilled Water'],
    tag: 'Digestive & Cool',
    isSugarFreeAvailable: true,
    accentColor: '#BE123C'
  },
  {
    id: 'sarbat-nimbu-soda',
    name: 'Fresh Nimbu Soda / Sarbat',
    marathiName: 'लिंबू सोडा / सरबत',
    category: 'lassi',
    price: 35,
    description: 'Zesty fresh Indian lemons squeezed with choice of chilled water or bubbly soda, sweet & salted.',
    ingredients: ['Fresh Lemon', 'Mint Sprig', 'Rock Salt', 'Club Soda / Chilled Water'],
    isSugarFreeAvailable: true,
    accentColor: '#84CC16'
  }
];
