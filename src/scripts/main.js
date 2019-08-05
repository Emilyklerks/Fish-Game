const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
function setup() {
    createCanvas(800, 600);

    //World.createSprite(new Location(200, 200), "GOLD");
    World.createSprite(new Location(400, 400), "ZEBRA");
    World.createSprite(new Location(400, 400), "ZEBRA");

}

function draw() {
    background(135, 216, 222);
    checkForBabies();
    displaySelection():

    World.sprites.forEach((sprite) => {

        if (sprite.speed.x > 0) {
            image(sprite.loadedImgs[0], sprite.currentLocation.x, sprite.currentLocation.y, sprite.size, sprite.size);
        } else {
            image(sprite.loadedImgs[1], sprite.currentLocation.x, sprite.currentLocation.y, sprite.size, sprite.size);
        }

        sprite.updatePosition();
        sprite.grow();
        sprite.framesSinceLastBirth++;
    });
}

function mouseClicked() {
    let clickedSpritesArray = World.sprites.filter(sprite => {
         return (
             Math.abs(sprite.currentLocation.x - mouseX) < 32
            && Math.abs(sprite.currentLocation.y - mouseY) < 32
         )
    });
    World.selectedSprite = clickedSpritesArray.length > 0 ? clickedSpritesArray[0] : undefined;
}

function checkForBabies() {
    //TODO: select the fish that will be checked for babies in a different way.
    // Now, only the fish with lowest x will be checked.
    let sortedSpritesCopy = World.sprites.sort( function(spriteA, spriteB) {
        return spriteA.currentLocation.x - spriteB.currentLocation.x;
    });

    if ( (Math.abs(sortedSpritesCopy[0].currentLocation.x - sortedSpritesCopy[1].currentLocation.x) < 10) &&
        (Math.abs(sortedSpritesCopy[0].currentLocation.y - sortedSpritesCopy[1].currentLocation.y) < 10) &&
        (sortedSpritesCopy[0].type === sortedSpritesCopy[1].type) ) {

            if(sortedSpritesCopy[0].framesSinceLastBirth > 2000 && sortedSpritesCopy[1].framesSinceLastBirth > 2000) {
                console.log("BABY WAS BORN!!")
                sortedSpritesCopy[0].framesSinceLastBirth = 0;
                sortedSpritesCopy[1].framesSinceLastBirth = 0;
                World.createSprite(sortedSpritesCopy[0].currentLocation, "ZEBRA");
            }

    }
}

function displaySelection() {
    stroke(255,0,0);
    noFill();

    if(World.selectedSprite) {
        rect(World.selectedSprite.currentLocation.x,
            World.selectedSprite.currentLocation.y,
            World.selectedSprite.size,
            World.selectedSprite.size);
    }
}

