
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});




let close = document.getElementById("hidecookie");
let cookie = document.getElementById("cookies-simple-with-icon-and-dismiss-button");

close = document.addEventListener('click', () => {
cookie.classList.add('hidden')
console.log("this closes well")
});



const fixedNav = document.getElementById("navigation");

document.addEventListener('scroll', () => {
    if(window.scrollY > 56){
    fixedNav.classList.add("fixed"),
    fixedNav.classList.add("bg-white/75"),
    fixedNav.classList.add("md:bg-black/5");
    fixedNav.classList.add("dark:bg-gray-300");
}
else{
    fixedNav.classList.remove("fixed"),
    fixedNav.classList.remove("bg-white/75"),
    fixedNav.classList.remove("md:bg-black/5");
    fixedNav.classList.remove("dark:bg-gray-700");
}
});