$(document).ready(function(){

    let lstAds = {
        "fn": [
            {
                "nome": "clubefn",
                "link": "https://clubefn.com.br",
                "bg": "rgb(114, 0, 0)",
            },
            {
                "nome": "play9",
                "link": "https://play9.com.br",
                "bg": "rgb(242, 50, 140)",
            },
    ],
        "tep": [
            {
                "nome": "techeplay",
                "link": "https://youtube.com/@techeplay",
                "bg": "rgb(50, 150, 255)",
            },
    ]};

    let index = 0; // Índice inicial
    let keys = Object.keys(lstAds); // Lista de chaves principais
    
    setInterval(() => {
        // Calcula os índices principais e secundários
        let e = keys[Math.floor(index / lstAds[keys[0]].length) % keys.length];
        let i = index % lstAds[e].length;
    
        // Atualiza o background e o link com o caminho correto
        $("#carrossel").css("background-image", `url(./imagens/ads/${e}/${lstAds[e][i]["nome"]}.png)`);
        $("#link").attr("href", lstAds[e][i]["link"]);
        $("body").css("background-color", lstAds[e][i]["bg"]);
    
        index++; // Incrementa o índice
    }, 3000);

})
