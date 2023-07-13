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
        for(let item of this.items) {
/* Start of my refactor 1 - check if Sulfuras and continue next iteration (for) look if it is */
            if(item.name === 'Sulfuras, Hand of Ragnaros'){
                continue;
            }
/* End of my refactor 1 - Sulfuras check */

            item.sellIn = item.sellIn - 1;

            switch(item.name){
                case 'Aged Brie': 
                    item.quality += (item.sellIn >= 0 ? 1 : 2);
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if (item.sellIn < 0) {item.quality = 0;}
                    else if (item.sellIn < 6) {item.quality += 3;}
                    else if (item.sellIn < 11) {item.quality += 2;}
                    else item.quality ++;
                    break;
                default:
                    item.quality -= (item.sellIn >= 0 ? 1 : 2);
                    break;   
            }

            if (item.quality > 50){
                item.quality = 50;
            }
            if (item.quality < 0){
                item.quality = 0;
            }
        }
        return this.items;
    }
}
