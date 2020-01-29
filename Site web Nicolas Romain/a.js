function afficher_cacher()
{
    if(document.getElementById("règles-du-jeux").style.visibility=="hidden")
    {
        document.getElementById("règles-du-jeux").style.visibility="visible";
        document.getElementById("bouton_règles-du-jeux").innerHTML="Cacher les règles du jeu";
    }
    else
    {
        document.getElementById("règles-du-jeux").style.visibility="hidden";
        document.getElementById("bouton_règles-du-jeux").innerHTML="Afficher les règles du jeu";
    }
    return true;
}