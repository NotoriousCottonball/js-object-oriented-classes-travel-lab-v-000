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
        return new Date(year).getFullYear() - this.startDate.getFullYear();
    }
}

d = new Date(new Date().getFullYear(), 0, 1);