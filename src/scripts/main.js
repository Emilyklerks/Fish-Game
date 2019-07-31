const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
function setup() {
    createCanvas(800, 600);

    World.createSprite(new Location(200, 200), "assets/fish.png");

    loadImagesForSprites();

}

function draw() {
    background(135, 216, 222);

    World.sprites.forEach((sprite) => {
        image(sprite.loadedImg, sprite.currentLocation.x, sprite.currentLocation.y);
        sprite.updatePosition();
        console.log(sprite);
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

