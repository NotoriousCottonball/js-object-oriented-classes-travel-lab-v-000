let eastWest = [
'1st Avenue',
'2nd Avenue',
'3rd Avenue',
'Lexington Avenue',
'Park',
'Madison Avenue',
'5th Avenue'
];

class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate)
    }
    startDate() {
        return this.startDate;
    }
    yearsExperienceFromBeginningOf(year) {
        return new Date(year, 0, 1).getFullYear() - this.startDate.getFullYear();
    }
}

