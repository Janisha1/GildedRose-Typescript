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
        for (let i = 0; i < this.items.length; i++) {
/* Start of my refactor 1 - check if Sulfuras and continue next iteration (for) look if it is */
            if(this.items[i].name === 'Sulfuras, Hand of Ragnaros'){
                continue;
            }
/* End of my refactor 1 - Sulfuras check */

/* Start of my refactor 2  - Brie */
            if (this.items[i].name === 'Aged Brie') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
               if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                    if (this.items[i].sellIn < 0) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }                           
                }
                continue;
            }
/* End of my refactor 2 - Brie */

/* Start of my refactor 3 - Backstage Passes */
            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
                if (this.items[i].sellIn > 10) {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                } else if (this.items[i].sellIn < 11 && this.items[i].sellIn > 5) {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 2;
                    }
                } else if (this.items[i].sellIn < 6 && this.items[i].sellIn >=0) {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 3;
                    }
                } else if (this.items[i].sellIn < 0){
                    this.items[i].quality = 0; //this.items[i].quality - this.items[i].quality;
                }
                if (this.items[i].quality > 50) {
                    this.items[i].quality = 50;
                }
                continue;
            }
/* End of my refactor 3 - Backstage Passes */
        
            if (this.items[i].quality > 0) {
                this.items[i].quality = this.items[i].quality - 1
            }

            this.items[i].sellIn = this.items[i].sellIn - 1;

            if (this.items[i].sellIn < 0) {
                if (this.items[i].quality > 0) {
                    this.items[i].quality = this.items[i].quality - 1
                }
            }

        }

        return this.items;
    }
}
