class Sprite {
    constructor(location, imgPath) {
        this.currentLocation = location;
        this.imgPath = imgPath;
        this.loadedImg = undefined;
        this.direction = undefined;
    };

    //updatePosition is run every frame for every sprite
    updatePosition() {
        if (!this.direction) {
            this.updateDirection();
        }
        this.moveInDirection();
    };

    updateDirection() {
        const randomX = Math.floor(Math.random() * Math.floor(GAME_WIDTH));
        const randomY = Math.floor(Math.random() * Math.floor(GAME_HEIGHT));
        this.direction = new Location(randomX, randomY);
    };

    moveInDirection() {
        if(JSON.stringify(this.currentLocation) === JSON.stringify(this.direction)) {
            this.direction = null;
        } else {
            this.currentLocation = Location.moveFromATowardsB(this.currentLocation, this.direction);
        }
    };

};
