import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');

    });

    it('Conjured should degrade twice as fast', function() {
        const gildedRose = new GildedRose([ 
            new Item('Conjured', 0, 0)
            ,new Item('Conjured', 1, 0)
            ,new Item('Conjured', 0, 50)
            ,new Item('Conjured', -1, 0)
            ,new Item('Conjured', -1, 10)
            ,new Item('Conjured', -2, 0)
            ,new Item('Conjured', -2, 20)
            ,new Item('Conjured', 10, 20)
            ,new Item('Conjured', 1, 15)        
        ]);

            const conjured = [
                new Item("Conjured", -1, 0),
                new Item("Conjured", 0, 0),
                new Item("Conjured", -1, 46),
                new Item("Conjured", -2, 0),
                new Item("Conjured", -2, 6),
                new Item("Conjured", -3, 0),
                new Item("Conjured", -3, 16),
                new Item("Conjured", 9, 18),
                new Item("Conjured", 0, 13)
            ];

        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal(conjured);

    });

    it('matches Sulfuras', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
    })

    it('matches Aged Brie', function() {
        const gildedRose = new GildedRose([
            new Item('Aged Brie', 0, 0)
            ,new Item('Aged Brie', 0, 50)
            ,new Item('Aged Brie', 1, 1)
            ,new Item('Aged Brie', -1, 50)
            ,new Item('Aged Brie', -1, 0)        
        ]);

        const brieRecord = [
            new Item("Aged Brie", -1, 2),
            new Item("Aged Brie", -1, 50),
            new Item("Aged Brie", 0, 2),
            new Item("Aged Brie", -2, 50),
            new Item("Aged Brie", -2, 2),
        ];

        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal(brieRecord);
    })

    it('matches backstage pass', function() {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)
            , new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50)
            , new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10)
            , new Item('Backstage passes to a TAFKAL80ETC concert', -1, 5)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 1, 3)
            , new Item('Backstage passes to a TAFKAL80ETC concert', -1, 15)       
        ]);

        const backStagePass = [
            new Item("Backstage passes to a TAFKAL80ETC concert", 14, 6),
            new Item("Backstage passes to a TAFKAL80ETC concert", 9, 12),
            new Item("Backstage passes to a TAFKAL80ETC concert", 4, 8),
            new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
            new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
            new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
            new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
            new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
            new Item("Backstage passes to a TAFKAL80ETC concert", 0, 6),
            new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
        ];

        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal(backStagePass);
    })

    it('matches the golden record', function() {
        const gildedRose = new GildedRose([ 
            new Item('foo0', 0, 0)
            , new Item('foo1', 1, 1)
            , new Item('foo2', 2, 2)
            , new Item('foo3', 4, 5)
            , new Item('foo4', -1, 0)
            , new Item('foo5', 14, 50)
            , new Item('foo6', -2, 8)
            , new Item('foo7', -10, 0)
            , new Item('foo8', -5, 50)
            , new Item('Aged Brie', 0, 0)
            , new Item('Aged Brie', 0, 1)
            , new Item('Aged Brie', 1, 1)
            , new Item('Aged Brie', 0, 50)
            , new Item('Aged Brie', 1, 50)
            , new Item('Aged Brie', -1, 0)
            , new Item('Aged Brie', -1, 50)
            , new Item('Aged Brie', 5, 0)
            , new Item('Aged Brie', 5, 50)
            , new Item('Aged Brie', 10, 20)
            , new Item('Sulfuras, Hand of Ragnaros', 0, 80)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)
            , new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50)
            , new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10)
            , new Item('Backstage passes to a TAFKAL80ETC concert', -1, 5)
            , new Item('Backstage passes to a TAFKAL80ETC concert', 1, 3)
            , new Item('Backstage passes to a TAFKAL80ETC concert', -1, 15)        
        
        ]);

        const goldenRecord = [
            new Item("foo0", -1, 0),
            new Item("foo1", 0, 0),
            new Item("foo2", 1, 1),
            new Item("foo3", 3, 4),
            new Item("foo4", -2, 0),
            new Item("foo5", 13, 49),
            new Item("foo6", -3, 6),
            new Item("foo7", -11, 0),
            new Item("foo8", -6, 48),
            new Item("Aged Brie", -1, 2),
            new Item("Aged Brie", -1, 3),
            new Item("Aged Brie", 0, 2),
            new Item("Aged Brie", -1, 50),
            new Item("Aged Brie", 0, 50),
            new Item("Aged Brie", -2, 2),
            new Item("Aged Brie", -2, 50),
            new Item("Aged Brie", 4, 1),
            new Item("Aged Brie", 4, 50),
            new Item("Aged Brie", 9, 21),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 14, 6),
            new Item("Backstage passes to a TAFKAL80ETC concert", 9, 12),
            new Item("Backstage passes to a TAFKAL80ETC concert", 4, 8),
            new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
            new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
            new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
            new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
            new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
            new Item("Backstage passes to a TAFKAL80ETC concert", 0, 6),
            new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
          ];
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal(goldenRecord);
    });
});
