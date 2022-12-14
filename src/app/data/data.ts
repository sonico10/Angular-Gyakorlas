export interface Item {
  id: number
  name: string
  str: number
  mag: number
  dex: number
  type: number //[head,body,legs,weapon]
  rarity: number //[normal,rare,epic,legendary]
  price: number
}

export const ITEMS: Item[] = [
  {
    id: 1,
    name: 'Larus dominicanus',
    str: 195,
    mag: 66,
    dex: -167,
    type: 2,
    rarity: 3,
    price: 1328,
  },
  {
    id: 2,
    name: 'Orcinus orca',
    str: 104,
    mag: 18,
    dex: -104,
    type: 0,
    rarity: 2,
    price: 6332,
  },
  {
    id: 3,
    name: 'Haliaetus leucogaster',
    str: 196,
    mag: -123,
    dex: -52,
    type: 0,
    rarity: 1,
    price: 669,
  },
  {
    id: 4,
    name: 'Colobus guerza',
    str: 133,
    mag: 86,
    dex: -46,
    type: 1,
    rarity: 1,
    price: 9010,
  },
  {
    id: 5,
    name: 'Pteronura brasiliensis',
    str: 31,
    mag: -92,
    dex: -116,
    type: 3,
    rarity: 2,
    price: 4399,
  },
  {
    id: 6,
    name: 'Bubo virginianus',
    str: -129,
    mag: -116,
    dex: -97,
    type: 3,
    rarity: 2,
    price: 2209,
  },
  {
    id: 7,
    name: 'Cacatua galerita',
    str: -79,
    mag: -198,
    dex: 114,
    type: 3,
    rarity: 3,
    price: 6126,
  },
  {
    id: 8,
    name: 'Marmota monax',
    str: -150,
    mag: -106,
    dex: -149,
    type: 2,
    rarity: 2,
    price: 9998,
  },
  {
    id: 9,
    name: 'Nectarinia chalybea',
    str: 107,
    mag: 146,
    dex: 126,
    type: 0,
    rarity: 3,
    price: 3845,
  },
  {
    id: 10,
    name: 'Tadorna tadorna',
    str: -139,
    mag: 156,
    dex: -163,
    type: 0,
    rarity: 3,
    price: 1168,
  },
  {
    id: 11,
    name: 'Zosterops pallidus',
    str: -112,
    mag: -27,
    dex: 52,
    type: 0,
    rarity: 3,
    price: 8981,
  },
  {
    id: 12,
    name: 'Aegypius tracheliotus',
    str: 182,
    mag: -157,
    dex: 154,
    type: 1,
    rarity: 0,
    price: 1968,
  },
  {
    id: 13,
    name: 'Dasyurus viverrinus',
    str: 67,
    mag: -88,
    dex: -199,
    type: 3,
    rarity: 3,
    price: 3214,
  },
  {
    id: 14,
    name: 'Nectarinia chalybea',
    str: 130,
    mag: 53,
    dex: 123,
    type: 1,
    rarity: 3,
    price: 4376,
  },
  {
    id: 15,
    name: 'Mungos mungo',
    str: -192,
    mag: 161,
    dex: 165,
    type: 2,
    rarity: 3,
    price: 2207,
  },
  {
    id: 16,
    name: 'Macropus fuliginosus',
    str: 194,
    mag: 79,
    dex: 50,
    type: 1,
    rarity: 2,
    price: 1179,
  },
  {
    id: 17,
    name: 'Ammospermophilus nelsoni',
    str: -193,
    mag: -188,
    dex: 156,
    type: 2,
    rarity: 2,
    price: 6703,
  },
  {
    id: 18,
    name: 'Lemur catta',
    str: 31,
    mag: -14,
    dex: 73,
    type: 2,
    rarity: 2,
    price: 3585,
  },
  {
    id: 19,
    name: 'Cervus elaphus',
    str: -168,
    mag: -137,
    dex: 178,
    type: 2,
    rarity: 1,
    price: 8710,
  },
  {
    id: 20,
    name: 'Colaptes campestroides',
    str: -142,
    mag: -177,
    dex: 115,
    type: 1,
    rarity: 3,
    price: 1710,
  },
  {
    id: 21,
    name: 'Rhea americana',
    str: 59,
    mag: -181,
    dex: -87,
    type: 2,
    rarity: 2,
    price: 2241,
  },
  {
    id: 22,
    name: 'Anthropoides paradisea',
    str: 82,
    mag: 188,
    dex: -119,
    type: 2,
    rarity: 1,
    price: 4866,
  },
  {
    id: 23,
    name: 'Nyctereutes procyonoides',
    str: -144,
    mag: -110,
    dex: 116,
    type: 0,
    rarity: 0,
    price: 1585,
  },
  {
    id: 24,
    name: 'Larus fuliginosus',
    str: 9,
    mag: 158,
    dex: -23,
    type: 0,
    rarity: 0,
    price: 7461,
  },
  {
    id: 25,
    name: 'Ovis dalli stonei',
    str: -150,
    mag: 83,
    dex: 85,
    type: 1,
    rarity: 0,
    price: 5016,
  },
  {
    id: 26,
    name: 'Corvus albus',
    str: -31,
    mag: -142,
    dex: -100,
    type: 3,
    rarity: 0,
    price: 9969,
  },
  {
    id: 27,
    name: 'Diomedea irrorata',
    str: -150,
    mag: -83,
    dex: -100,
    type: 2,
    rarity: 1,
    price: 8293,
  },
  {
    id: 28,
    name: 'Sarcorhamphus papa',
    str: -67,
    mag: 126,
    dex: -150,
    type: 0,
    rarity: 3,
    price: 5610,
  },
  {
    id: 29,
    name: 'Felis libyca',
    str: 10,
    mag: 33,
    dex: -67,
    type: 3,
    rarity: 2,
    price: 1223,
  },
  {
    id: 30,
    name: 'Toxostoma curvirostre',
    str: -85,
    mag: -134,
    dex: -106,
    type: 2,
    rarity: 2,
    price: 3986,
  },
  {
    id: 31,
    name: 'unavailable',
    str: 6,
    mag: 178,
    dex: -126,
    type: 2,
    rarity: 0,
    price: 8294,
  },
  {
    id: 32,
    name: 'Choloepus hoffmani',
    str: -84,
    mag: -176,
    dex: 9,
    type: 3,
    rarity: 0,
    price: 1782,
  },
  {
    id: 33,
    name: 'Cracticus nigroagularis',
    str: -109,
    mag: -31,
    dex: -179,
    type: 1,
    rarity: 2,
    price: 8327,
  },
  {
    id: 34,
    name: 'Certotrichas paena',
    str: 20,
    mag: -31,
    dex: -189,
    type: 3,
    rarity: 2,
    price: 6205,
  },
  {
    id: 35,
    name: 'Papio cynocephalus',
    str: 156,
    mag: -77,
    dex: -194,
    type: 2,
    rarity: 1,
    price: 3428,
  },
  {
    id: 36,
    name: 'Ramphastos tucanus',
    str: -190,
    mag: -129,
    dex: 47,
    type: 1,
    rarity: 3,
    price: 5905,
  },
  {
    id: 37,
    name: 'Canis lupus baileyi',
    str: -43,
    mag: -62,
    dex: 125,
    type: 3,
    rarity: 2,
    price: 308,
  },
  {
    id: 38,
    name: 'Epicrates cenchria maurus',
    str: -5,
    mag: -169,
    dex: -136,
    type: 3,
    rarity: 1,
    price: 9352,
  },
  {
    id: 39,
    name: 'Cygnus buccinator',
    str: -104,
    mag: -81,
    dex: 181,
    type: 1,
    rarity: 3,
    price: 9677,
  },
  {
    id: 40,
    name: 'Bassariscus astutus',
    str: 57,
    mag: 109,
    dex: -162,
    type: 0,
    rarity: 3,
    price: 7307,
  },
  {
    id: 41,
    name: 'Anthropoides paradisea',
    str: -199,
    mag: 84,
    dex: 48,
    type: 3,
    rarity: 1,
    price: 7844,
  },
  {
    id: 42,
    name: 'Anathana ellioti',
    str: 39,
    mag: 66,
    dex: -190,
    type: 2,
    rarity: 2,
    price: 1491,
  },
  {
    id: 43,
    name: 'Oryx gazella',
    str: 1,
    mag: 57,
    dex: 106,
    type: 1,
    rarity: 0,
    price: 5583,
  },
  {
    id: 44,
    name: 'Callorhinus ursinus',
    str: -102,
    mag: -87,
    dex: 38,
    type: 1,
    rarity: 2,
    price: 4267,
  },
  {
    id: 45,
    name: 'Limnocorax flavirostra',
    str: -164,
    mag: 123,
    dex: -64,
    type: 1,
    rarity: 0,
    price: 8141,
  },
  {
    id: 46,
    name: 'Papio cynocephalus',
    str: -23,
    mag: -38,
    dex: -23,
    type: 2,
    rarity: 2,
    price: 4214,
  },
  {
    id: 47,
    name: 'Phalacrocorax niger',
    str: 165,
    mag: -118,
    dex: -29,
    type: 0,
    rarity: 2,
    price: 7065,
  },
  {
    id: 48,
    name: 'Semnopithecus entellus',
    str: 104,
    mag: -36,
    dex: -183,
    type: 1,
    rarity: 0,
    price: 759,
  },
  {
    id: 49,
    name: 'Gekko gecko',
    str: -111,
    mag: -21,
    dex: 44,
    type: 1,
    rarity: 2,
    price: 3541,
  },
  {
    id: 50,
    name: 'Canis aureus',
    str: 113,
    mag: -117,
    dex: -160,
    type: 2,
    rarity: 0,
    price: 4686,
  },
  {
    id: 51,
    name: 'Delphinus delphis',
    str: 175,
    mag: -111,
    dex: -142,
    type: 1,
    rarity: 2,
    price: 5580,
  },
  {
    id: 52,
    name: 'unavailable',
    str: -140,
    mag: -152,
    dex: -5,
    type: 0,
    rarity: 1,
    price: 6337,
  },
  {
    id: 53,
    name: 'Hippotragus equinus',
    str: 94,
    mag: 165,
    dex: 133,
    type: 2,
    rarity: 2,
    price: 7792,
  },
  {
    id: 54,
    name: 'Mazama americana',
    str: -87,
    mag: 39,
    dex: -7,
    type: 1,
    rarity: 0,
    price: 9663,
  },
  {
    id: 55,
    name: 'Myiarchus tuberculifer',
    str: -193,
    mag: 178,
    dex: 197,
    type: 1,
    rarity: 3,
    price: 1501,
  },
  {
    id: 56,
    name: 'Tayassu tajacu',
    str: -132,
    mag: 197,
    dex: 144,
    type: 2,
    rarity: 3,
    price: 9257,
  },
  {
    id: 57,
    name: 'Globicephala melas',
    str: 70,
    mag: -24,
    dex: -134,
    type: 0,
    rarity: 1,
    price: 6159,
  },
  {
    id: 58,
    name: 'Haematopus ater',
    str: -132,
    mag: -120,
    dex: 157,
    type: 2,
    rarity: 0,
    price: 1627,
  },
  {
    id: 59,
    name: 'Dicrostonyx groenlandicus',
    str: -108,
    mag: 193,
    dex: 18,
    type: 1,
    rarity: 1,
    price: 9732,
  },
  {
    id: 60,
    name: 'Alcelaphus buselaphus caama',
    str: -47,
    mag: -30,
    dex: -132,
    type: 3,
    rarity: 2,
    price: 267,
  },
  {
    id: 61,
    name: 'Tockus erythrorhyncus',
    str: -87,
    mag: -140,
    dex: 84,
    type: 1,
    rarity: 1,
    price: 3794,
  },
  {
    id: 62,
    name: 'Cyrtodactylus louisiadensis',
    str: -26,
    mag: 155,
    dex: 82,
    type: 0,
    rarity: 1,
    price: 1013,
  },
  {
    id: 63,
    name: 'Hyaena brunnea',
    str: 125,
    mag: -93,
    dex: 31,
    type: 2,
    rarity: 1,
    price: 5976,
  },
  {
    id: 64,
    name: 'Corvus brachyrhynchos',
    str: 44,
    mag: 186,
    dex: -96,
    type: 3,
    rarity: 3,
    price: 8832,
  },
  {
    id: 65,
    name: 'Pycnonotus nigricans',
    str: 190,
    mag: -42,
    dex: -162,
    type: 3,
    rarity: 3,
    price: 3008,
  },
  {
    id: 66,
    name: 'Cacatua galerita',
    str: 153,
    mag: 46,
    dex: 174,
    type: 0,
    rarity: 2,
    price: 6275,
  },
  {
    id: 67,
    name: 'Spizaetus coronatus',
    str: 179,
    mag: -36,
    dex: 131,
    type: 0,
    rarity: 0,
    price: 1,
  },
  {
    id: 68,
    name: 'Porphyrio porphyrio',
    str: -35,
    mag: 148,
    dex: 91,
    type: 1,
    rarity: 3,
    price: 659,
  },
  {
    id: 69,
    name: 'Paradoxurus hermaphroditus',
    str: 152,
    mag: 136,
    dex: -166,
    type: 1,
    rarity: 3,
    price: 3587,
  },
  {
    id: 70,
    name: 'unavailable',
    str: 29,
    mag: 92,
    dex: 170,
    type: 2,
    rarity: 0,
    price: 3334,
  },
  {
    id: 71,
    name: 'Climacteris melanura',
    str: -158,
    mag: -191,
    dex: 167,
    type: 3,
    rarity: 2,
    price: 14,
  },
  {
    id: 72,
    name: 'Alcelaphus buselaphus caama',
    str: -139,
    mag: -79,
    dex: 154,
    type: 1,
    rarity: 3,
    price: 2814,
  },
  {
    id: 73,
    name: 'Amblyrhynchus cristatus',
    str: -98,
    mag: 146,
    dex: -22,
    type: 1,
    rarity: 2,
    price: 7586,
  },
  {
    id: 74,
    name: 'Grus rubicundus',
    str: 181,
    mag: -175,
    dex: 104,
    type: 3,
    rarity: 0,
    price: 7801,
  },
  {
    id: 75,
    name: 'Graspus graspus',
    str: 150,
    mag: -93,
    dex: 64,
    type: 1,
    rarity: 1,
    price: 7132,
  },
  {
    id: 76,
    name: 'Phacochoerus aethiopus',
    str: 87,
    mag: 115,
    dex: -21,
    type: 1,
    rarity: 3,
    price: 1935,
  },
  {
    id: 77,
    name: 'Manouria emys',
    str: 29,
    mag: -198,
    dex: -47,
    type: 2,
    rarity: 2,
    price: 9091,
  },
  {
    id: 78,
    name: 'Trichoglossus chlorolepidotus',
    str: 132,
    mag: -182,
    dex: 9,
    type: 2,
    rarity: 0,
    price: 1099,
  },
  {
    id: 79,
    name: 'Paradoxurus hermaphroditus',
    str: -156,
    mag: 16,
    dex: -15,
    type: 0,
    rarity: 2,
    price: 1485,
  },
  {
    id: 80,
    name: 'Geococcyx californianus',
    str: 59,
    mag: -74,
    dex: -26,
    type: 0,
    rarity: 2,
    price: 8868,
  },
  {
    id: 81,
    name: 'Pandon haliaetus',
    str: -157,
    mag: -66,
    dex: -163,
    type: 3,
    rarity: 2,
    price: 810,
  },
  {
    id: 82,
    name: 'Cabassous sp.',
    str: -161,
    mag: -193,
    dex: 110,
    type: 0,
    rarity: 3,
    price: 6944,
  },
  {
    id: 83,
    name: 'Castor fiber',
    str: 132,
    mag: -61,
    dex: 141,
    type: 2,
    rarity: 2,
    price: 3069,
  },
  {
    id: 84,
    name: 'Epicrates cenchria maurus',
    str: 195,
    mag: -157,
    dex: -28,
    type: 0,
    rarity: 1,
    price: 1570,
  },
  {
    id: 85,
    name: 'Vulpes chama',
    str: 96,
    mag: -67,
    dex: 146,
    type: 0,
    rarity: 3,
    price: 7099,
  },
  {
    id: 86,
    name: 'Cracticus nigroagularis',
    str: -25,
    mag: 147,
    dex: -94,
    type: 1,
    rarity: 0,
    price: 4881,
  },
  {
    id: 87,
    name: 'Grus rubicundus',
    str: -81,
    mag: -95,
    dex: 104,
    type: 2,
    rarity: 1,
    price: 8499,
  },
  {
    id: 88,
    name: 'Canis dingo',
    str: 41,
    mag: -180,
    dex: -193,
    type: 0,
    rarity: 0,
    price: 8483,
  },
  {
    id: 89,
    name: 'Sciurus niger',
    str: 190,
    mag: -72,
    dex: -143,
    type: 2,
    rarity: 2,
    price: 1565,
  },
  {
    id: 90,
    name: 'Salvadora hexalepis',
    str: 45,
    mag: -142,
    dex: -12,
    type: 3,
    rarity: 0,
    price: 6443,
  },
  {
    id: 91,
    name: 'Zenaida asiatica',
    str: -98,
    mag: 131,
    dex: 9,
    type: 0,
    rarity: 0,
    price: 1513,
  },
  {
    id: 92,
    name: 'Taurotagus oryx',
    str: -138,
    mag: -69,
    dex: 76,
    type: 0,
    rarity: 0,
    price: 7807,
  },
  {
    id: 93,
    name: 'Otaria flavescens',
    str: 19,
    mag: -194,
    dex: -181,
    type: 3,
    rarity: 1,
    price: 210,
  },
  {
    id: 94,
    name: 'Uraeginthus granatina',
    str: 183,
    mag: 70,
    dex: -123,
    type: 0,
    rarity: 1,
    price: 4758,
  },
  {
    id: 95,
    name: 'Trichoglossus haematodus moluccanus',
    str: 104,
    mag: -130,
    dex: -71,
    type: 0,
    rarity: 0,
    price: 9413,
  },
  {
    id: 96,
    name: 'Centrocercus urophasianus',
    str: -89,
    mag: -16,
    dex: -132,
    type: 3,
    rarity: 1,
    price: 6586,
  },
  {
    id: 97,
    name: 'Canis dingo',
    str: -57,
    mag: -191,
    dex: -89,
    type: 1,
    rarity: 0,
    price: 4860,
  },
  {
    id: 98,
    name: 'Coracias caudata',
    str: -124,
    mag: -82,
    dex: 6,
    type: 1,
    rarity: 0,
    price: 3825,
  },
  {
    id: 99,
    name: 'Platalea leucordia',
    str: 143,
    mag: -13,
    dex: 38,
    type: 0,
    rarity: 1,
    price: 5352,
  },
  {
    id: 100,
    name: 'Larus fuliginosus',
    str: -62,
    mag: -75,
    dex: 126,
    type: 0,
    rarity: 1,
    price: 2703,
  },
]
