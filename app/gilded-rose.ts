export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
//        for (let i = 0; i < this.items.length; i++) {
        for(let item of this.items) {
/* Start of my refactor 1 - check if Sulfuras and continue next iteration (for) look if it is */
            if(item.name === 'Sulfuras, Hand of Ragnaros'){
                continue;
            }
/* End of my refactor 1 - Sulfuras check */

/* Start of my refactor 2  - Brie */
            if (item.name === 'Aged Brie') {
                item.sellIn = item.sellIn - 1;
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                    if (item.sellIn < 0) {
                        item.quality = item.quality + 1;
                    }                           
                }
                continue;
            }
/* End of my refactor 2 - Brie */

/* Start of my refactor 3 - Backstage Passes */
            if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                item.sellIn = item.sellIn - 1;
                if (item.sellIn > 10) {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1;
                    }
                } else if (item.sellIn < 11 && item.sellIn > 5) {
                    if (item.quality < 50) {
                        item.quality = item.quality + 2;
                    }
                } else if (item.sellIn < 6 && item.sellIn >=0) {
                    if (item.quality < 50) {
                        item.quality = item.quality + 3;
                    }
                } else if (item.sellIn < 0){
                    item.quality = 0; //this.items[i].quality - this.items[i].quality;
                }
                if (item.quality > 50) {
                    item.quality = 50;
                }
                continue;
            }
/* End of my refactor 3 - Backstage Passes */
        
            if (item.quality > 0) {
                item.quality = item.quality - 1
            }

            item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0) {
                if (item.quality > 0) {
                    item.quality = item.quality - 1
                }
            }
        }
        return this.items;
    }
}
