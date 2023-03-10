let imagesHome = []
let IND = 0;

let NAME_SKILLS = [];
let STAT_SKILLS = [];
STAT_SKILLS.push("25%","75%","100%", "100%","95%")
NAME_SKILLS.push("jquery", "html","SQL","C++", "JavaScript")


let competences = [];
let emoji = [];
competences.push("Graphic Design","Web Design")
emoji.push("&#128512;","&#128512;", );


function addPhotoProfile(){
    let el = document.getElementById("photo-profile");
    let img = document.createElement('img');
    img.setAttribute('src',"../photos/profile.jpg");
    img.setAttribute('alt',"Photo profile");
    el.append(img);
}

function addMenu(){
    addPhotoProfile();
    let sections = document.getElementById("description")
    sections = sections.children;
    // console.log(sections[0].id)
    let Menu_list = document.getElementById("menu-list")
    // console.log(sections)

    for(let sec of sections ) {

        let new_nodeTag_a = document.createElement('a')
        new_nodeTag_a.innerHTML = "<br>" + sec.id;
        // console.log(sec.id)

        new_nodeTag_a.href = "#ID_"+sec.id
        Menu_list.append(new_nodeTag_a)

        let lienIdText = "ID_"+sec.id
        sec.setAttribute('id', lienIdText)

    }

}

function createHomeSection(){
    imagesHome.push("../photos/home1.jpg");
    imagesHome.push("../photos/home2.jpg");

    let home_section = document.getElementById("photo-home")
    let img = document.createElement('img');
    img.setAttribute('src',imagesHome[0]);
    img.setAttribute('alt',"photos home");


    home_section.append(img);
}
function ImagesHome(){
    createHomeSection()
    let elements = document.getElementById("photo-home")

    window.setInterval(function (){
        elements.firstElementChild.setAttribute('src',imagesHome[IND] )
        IND = (IND + 1) % imagesHome.length;

    }, 4000)
}

function CreateBoxAbout(){

    let section = document.getElementById("boite-about")
    competences.forEach((element, index) => {
        let div = document.createElement('div')
        div.classList.add('boite');

        let em = document.createElement('span')
        em.classList.add('xx')
        em.innerHTML = emoji[index]

        let text = document.createElement('span')
        text.classList.add('text-box')
        text.innerHTML = element;

        div.append(em)
        div.append(text)

        section.append(div)
    })
}

function createSkill(){

    let elements = document.getElementById("Skills-Competences")
    NAME_SKILLS.forEach((element, index) => {
        let skill_info = document.createElement('div');
        skill_info.classList.add('skill-info');

        let skill_name = document.createElement('div');
        skill_name.innerHTML = element;
        skill_name.classList.add("name-skill")

        let skill_container = document.createElement('div');
        skill_container.classList.add("container-skills");

        let stat_skill = document.createElement('div');
        stat_skill.classList.add("stat-skill");
        stat_skill.innerHTML = STAT_SKILLS[index];

        stat_skill.style = "background-color: #04AA6D;" + "width: " + STAT_SKILLS[index] +";";

        skill_container.append(stat_skill)
        skill_info.append(skill_name)
        skill_info.append(skill_container)
        elements.append(skill_info)
    })



}

function hireme(){
    let bouton = document.getElementById('btn-hire')
    bouton.addEventListener('click', function (){
        window.open('https://github.com/adjy', '_blank');

    })
}

function desac_education(){
    let elements = document.querySelectorAll('.educ-description')
    for(let elem of elements)
        elem.classList.add("desactive")
}

function  education(){
    let elements = document.querySelectorAll('.section-education');

    for(let elem of elements){
        elem.addEventListener('mousedown', function (){
            for(let elem2 of elements){
                if(elem != elem2){
                    elem2.classList.remove("section-education-active")

                    elem2.children[1].innerHTML = "+";
                    elem2.nextElementSibling.classList.add("desactive")
                }

            }
            if(elem.nextElementSibling.classList.contains('desactive'))
                elem.children[1].innerHTML = "-";
            else
                elem.children[1].innerHTML = "+";

            elem.classList.toggle("section-education-active")
            elem.nextElementSibling.classList.toggle("desactive")

        })

    }
}

document.addEventListener('DOMContentLoaded', function () {
    addMenu();
    ImagesHome()
    CreateBoxAbout()
    createSkill()
    hireme()
    desac_education()
    education();


})
