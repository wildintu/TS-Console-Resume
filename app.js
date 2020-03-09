"use strict";
var n = 'Name: ';
var names = 'Lexi';
var c = 'Career: ';
var career = 'Coding / Marketing';
var am = 'About Me: ';
var aboutMe = 'I am obsessed with my dog and sunsets';
var int = 'My Interests:';
var interests = ['coffee', 'tech', 'tigers', 'fitness'];
var mpe = 'My Previous Experience:';
var pastPositions = [
    { company: 'Ultaca', location: 'Pelham, AL', title: 'Marketing Manager', description: 'Assist with all marketing needs' },
    { company: 'Vestavia CC', location: 'Vestavia, AL', title: 'Merchandise Manager', description: 'Assist with merchandise needs' },
    { company: 'Southern Shirt', location: 'Tuscaloosa, AL', title: 'Marketing Manager', description: 'Assist with marketing needs' }
];
console.log(n + names.toUpperCase() + "\n" + c + career + "\n" + am + aboutMe);
console.log('\n' + int);
function displayInterests(inter) {
    console.log('* ' + inter);
}
displayInterests('Coffee');
displayInterests('Tech');
displayInterests('Tigers');
displayInterests('Fitness');
console.log("\n" + mpe);
function displayPosition(cName, jobTitle, jDescription) {
    console.log('* ' + jobTitle + " at " + cName + " to " + jDescription);
}
displayPosition('Ultaca', 'Marketing Manager', 'Assist with all marketing needs');
displayPosition('Vestavia CC', 'Merchandise Manager', 'Assist with merchandise needs');
displayPosition('Southern Shirt', 'Marketing Manager', 'Assist with marketing needs');
function displaySkill() {
    for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
        var skill = skills_1[_i];
        if (skill.isCool) {
            console.log('* ' + "BAM: " + skill.skill);
        }
        else {
            console.log('* ' + skill.skill);
        }
    }
}
var sk = 'My Skills:';
var skills = [
    { skill: 'Marketing', isCool: true },
    { skill: 'Photography', isCool: true },
    { skill: 'Email', isCool: false },
    { skill: 'Facebook Ads', isCool: false }
];
console.log('\n' + sk);
displaySkill();
