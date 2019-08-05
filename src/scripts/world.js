//world is responsible for:
// keeping track of sprites
// sprite creation

const World = {
    sprites: [],
    money: 0,
    selectedSprite: undefined,
    loadImagesForSprite(sprite) {
        if (sprite.imgPaths) {
            sprite.imgPaths.forEach((imgPath) => {
                sprite.loadedImgs.push(loadImage(imgPath));
            });
        } else {
            console.warn("Sprite misses imgPath");
        }
    },

    createSprite(location, imgPath) {
        let newSprite = new Sprite(location, imgPath);
        this.loadImagesForSprite(newSprite);
        this.sprites.push(newSprite);
        return newSprite;
    }
};



