class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }
    startDate() {
        return this.startDate;
    }
    yearsExperienceFromBeginningOf(year) {
        return new Date(year, 0, 1).getFullYear() - this.startDate.getFullYear();
    }
}

class Route {
    constructor(start, end) {
      this.start = start; 
      this.end = end;
    }

     blocksTravelled() {

         let totalVertical = Math.abs(this.endingLocation.vertical  - this.beginningLocation.vertical);

         let totalHorizontal = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));

         return totalVertical + totalHorizontal;
    }

     estimatedTime(isDuringPeakHours) {
        if (!!isDuringPeakHours) {
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        }
    }
} 
