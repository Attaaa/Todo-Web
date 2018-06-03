
function setItem(){

    var textInput = document.getElementById("todo");
    
    if (textInput.value == ""){
        alert("Anda harus mengisi kegiatan yang ingin anda lakukan");
    } else {
        var nodeText = document.createTextNode(textInput.value);

        var container = document.getElementById("ci");

        var item = document.createElement("div");
        item.setAttribute("class","item");

        var itemText = document.createElement("div");
        itemText.setAttribute("class","item-text");
        itemText.appendChild(nodeText);

        var itemBtn = document.createElement("div");
        itemBtn.setAttribute("class","item-btn");

        var btnHapus = document.createElement("button");
        btnHapus.setAttribute("class","btn-hapus");
        var textHapus = document.createTextNode("Hapus");
        btnHapus.appendChild(textHapus);

        var btnSelesai = document.createElement("button");
        btnSelesai.setAttribute("class","btn-selesai");
        var textSelesai = document.createTextNode("Selesai");
        btnSelesai.appendChild(textSelesai);

        itemBtn.appendChild(btnSelesai);
        itemBtn.appendChild(btnHapus);

        item.appendChild(itemText);
        item.appendChild(itemBtn);

        container.appendChild(item);

        textInput.value = "";
    }

}