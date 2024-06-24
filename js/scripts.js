document.addEventListener("DOMContentLoaded", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerHTML = "Geolocalização não é suportada pelo navegador.";
    }
});

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("location").innerHTML = `Latitude: ${lat.toFixed(2)}, Longitude: ${lon.toFixed(2)}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "Usuário negou a solicitação de Geolocalização.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "Informações de localização não estão disponíveis.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "A solicitação para obter a localização expirou.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "Ocorreu um erro desconhecido.";
            break;
    }
}