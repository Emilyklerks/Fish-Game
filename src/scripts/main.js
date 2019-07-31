const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
function setup() {
    createCanvas(800, 600);

    World.createSprite(new Location(200, 200), "GOLD");
    World.createSprite(new Location(400, 400), "ZEBRA");

    loadImagesForSprites();

}

function draw() {
    background(135, 216, 222);

    World.sprites.forEach((sprite) => {
        console.log(sprite);

        sprite.speed.x < 0 ? scale(-1,1) : scale(1,1);

        if (sprite.speed.x < 0) {
            image(sprite.loadedImg, sprite.currentLocation.x+32, sprite.currentLocation.y);
        } else {
            image(sprite.loadedImg, sprite.currentLocation.x, sprite.currentLocation.y);
        }

        sprite.updatePosition();
    });

}

function loadImagesForSprites() {
    World.sprites.forEach((sprite) => {
        if (sprite.imgPath) {
            sprite.loadedImg = loadImage(sprite.imgPath);
        } else {
            console.warn("Sprite misses imgPath");
        }
    });
}

