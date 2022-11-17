const btn = document.getElementById("btn-svc");
btn.addEventListener("click", ()=> {
    Swal.fire({
        icon: "warning",
        title: "Atención",
        text: "Este es un acceso exclusivo para Agencias de Viaje",
        position: "top",
        confirmButtonColor: "#d33",
        imageWith: 600,
        imageHeigth: 150,
        background: "url(../imagenes/atencion.jpg)",
    });
});