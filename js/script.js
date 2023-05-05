//Container for the group of projects:
const portfolioContainers = document.querySelectorAll(".project");


//Using forEach() here because we are using querySelectorAll and have multiple containers
//Allows us to get to each "projectLinks" and each "imgContainer"
portfolioContainers.forEach(container => {
    const projectLinks = container.querySelector(".project-links");
    const imgContainer = container.querySelector(".img-container");


    //EventListener for when mouse enters the ".project" class element in html-desktop only
    container.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 1440) {
            projectLinks.classList.remove('project-links-hide');
            imgContainer.style.opacity = "0.25";
        }
    });

    //EventListener for when mouse leaves the ".project" class element in html-desktop only
    container.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 1440) {
            projectLinks.classList.add('project-links-hide');
            imgContainer.style.opacity = "1";
        }
    });
});
