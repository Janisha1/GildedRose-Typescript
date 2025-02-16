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
            if(item.name === 'Sulfuras, Hand of Ragnaros'){
                continue;
            }

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
                case 'Conjured':
                    item.quality -= (item.sellIn >= 0 ? 2 : 4);
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
