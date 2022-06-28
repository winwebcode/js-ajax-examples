function switcherPlayButton(button)
{
    console.log(button);
    if (document.getElementById(button).disabled === true) {
        enableButton(button);
    } else {
        disableButton(button);
    }
}

function enableButton(button)
{
    document.getElementById(button).disabled = false;
}

function disableButton(button)
{
    document.getElementById(button).disabled = true;
}

function playTemplate(id, templ_name, position_worker, route, button)
{
    switcherPlayButton(button); //off Play
    let url = route + '?' + 'template_id=' + id + '&template_name=' + templ_name + '&position=' + position_worker;
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    let template_name = templ_name;
    let template_id = id;
    let position = position_worker;
    let data = new FormData();
    data.append("template_name", template_name);
    data.append("template_id", template_id);
    data.append("position", position);

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            switcherPlayButton(button); //enable play
            console.log(this.responseText);
        }
    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json, text-plain, *!/!*");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("X-CSRF-TOKEN", token);
    xhr.send(data);
}
