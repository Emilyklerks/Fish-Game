class Location {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static moveFromATowardsB(locA, locB, speed) {
        if (locB.x > locA.x) {
            locA.x += 1;
        }
        if(locB.x < locA.x) {
            locA.x -= 1 ;
        }

        if (locB.y > locA.y) {
            locA.y += 1;
        }
        if(locB.y < locA.y) {
            locA.y -= 1 ;
        }

        return locA;

    }
}