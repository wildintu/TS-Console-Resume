import $ from 'jquery';

let n = 'Name: '
let names = 'Lexi';
let c = 'Career: ';
let career = 'Coding / Marketing';
let am = 'About Me: '
let aboutMe = 'I am obsessed with my dog and sunsets'
let int = 'My Interests:'
let interests = ['coffee', 'tech', 'tigers', 'fitness'];
let mpe = 'My Previous Experience:'
let pastPositions = [
    { company: 'Ultaca', location: 'Pelham, AL', title: 'Marketing Manager', description: 'Assist with all marketing needs' },
    { company: 'Vestavia CC', location: 'Vestavia, AL', title: 'Merchandise Manager', description: 'Assist with merchandise needs' },
    { company: 'Southern Shirt', location: 'Tuscaloosa, AL', title: 'Marketing Manager', description: 'Assist with marketing needs' }
];

console.log(n + names.toUpperCase() + "\n" + c + career + "\n" + am + aboutMe);

console.log('\n' + int);

function displayInterests(inter: string) {
    console.log('* ' + inter);
}

displayInterests('Coffee')
displayInterests('Tech')
displayInterests('Tigers')
displayInterests('Fitness')

console.log("\n" + mpe);
function displayPosition(cName: string, jobTitle: string, jDescription: string) {
    console.log('* ' + jobTitle + " at " + cName + " to " + jDescription)
}

displayPosition('Ultaca', 'Marketing Manager', 'Assist with all marketing needs')
displayPosition('Vestavia CC', 'Merchandise Manager', 'Assist with merchandise needs')
displayPosition('Southern Shirt', 'Marketing Manager', 'Assist with marketing needs')

function displaySkill() {
    for (let skill of skills) {
        if (skill.isCool) {
            console.log('* ' + "BAM: " + skill.skill)
        } else {
            console.log('* ' + skill.skill)
        }
    }
}

let sk = 'My Skills:'
let skills = [
    { skill: 'Marketing', isCool: true },
    { skill: 'Photography', isCool: true },
    { skill: 'Email', isCool: false },
    { skill: 'Facebook Ads', isCool: false }
];


console.log('\n' + sk);
displaySkill()