class Sprite {
    constructor(location, type) {

        this.type = type;
        //set the imgPath based on the path defined in fishTypes
        this.imgPaths = FishTypes[type];
        this.loadedImgs = [];
        this.direction = undefined;
        this.facingRight = true;

        this.currentLocation = location;
        this.direction = null;
        this.speed = new Location(0,0);

        this.framesSinceLastBirth = 0;
        this.size = 16;
    };

    grow() {
      if (this.size < 32) {
          this.size += 0.001;
      }
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

        if(this.reachedDirection()) {
            this.direction = null;
        } else {
            this.speed.x = this.direction.x >= this.currentLocation.x ? 1 : -1;
            this.speed.y = this.direction.y >= this.currentLocation.y ? 1 : -1;

            this.speed.x = this.direction.x == this.currentLocation.x ? 0: this.speed.x;
            this.speed.y = this.direction.y == this.currentLocation.y ? 0: this.speed.y;

            this.currentLocation.x += this.speed.x;
            this.currentLocation.y += this.speed.y;
        }
    };

    reachedDirection() {
        return (JSON.stringify(this.currentLocation) === JSON.stringify(this.direction));
    }

};
