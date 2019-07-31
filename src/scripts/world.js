//world is responsible for:
// keeping track of sprites
// sprite creation

const World = {
    sprites: [],
    createSprite(location, imgPath) {
        let newSprite = new Sprite(location, imgPath);
        this.sprites.push(newSprite);
        return newSprite;
    }
};



