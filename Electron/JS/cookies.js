$(document).ready(function()
{
    getTheme();
})

function setTheme(value)
{
    Cookies.set('theme', value);
    console.log("Setting Theme: " + value);  
}

function getTheme()
{
    var theme = Cookies.get('theme');
    if(theme == null)
    {
        setTheme("light");
        console.log("Default Theme Loaded");
    }
    theme = Cookies.get('theme');
    console.log("Current Theme: " + theme);
}