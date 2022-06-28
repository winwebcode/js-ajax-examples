document.addEventListener("DOMContentLoaded", userSwitcher);
document.addEventListener("DOMContentLoaded", binomSwitcher);

function userSwitcher()
{
    if (document.getElementById("position").value !== 'personal') {
        hideUsers();
    } else {
        showUsers();
    }
}

function hideUsers()
{
    document.getElementById("user_gid").style.display = "none";
}
function showUsers()
{
    document.getElementById("user_gid").style.display = "block";
}

function binomSwitcher()
{
    if (document.getElementById("bind_binom").value !== '1') {
        hideBinomFields();
    } else {
        showBinomFields();
    }
}

function hideBinomFields()
{
    removeBinomFields();
    document.getElementById("ts_name_binom").style.display = "none";
    document.getElementById("group_name_binom").style.display = "none";
    document.getElementById("binom").style.display = "none";
    document.getElementById("metric").style.display = "none";
    document.getElementById("metric_min_value").style.display = "none";
    document.getElementById("metric_max_value").style.display = "none";
    document.getElementById("period").style.display = "none";
    document.getElementById("label_binom_min").style.display = "none";
    document.getElementById("label_binom_max").style.display = "none";
}

function removeBinomFields()
{
    document.getElementById("ts_name_binom").remove();
    document.getElementById("group_name_binom").remove();
    document.getElementById("binom").remove();
    document.getElementById("metric").remove();
    document.getElementById("metric_min_value").remove();
    document.getElementById("metric_max_value").remove();
    document.getElementById("period").remove();
}


function showBinomFields()
{
    document.getElementById("ts_name_binom").style.display = "block";
    document.getElementById("group_name_binom").style.display = "block";
    document.getElementById("binom").style.display = "block";
    document.getElementById("metric").style.display = "block";
    document.getElementById("metric_min_value").style.display = "block";
    document.getElementById("metric_max_value").style.display = "block";
    document.getElementById("period").style.display = "block";
    document.getElementById("label_binom_min").style.display = "block";
    document.getElementById("label_binom_max").style.display = "block";
}
