
function setItem(){

    var textInput = document.getElementById("todo");
    
    if (textInput.value == ""){

        //Jika input kosong
        alert("Anda harus mengisi kegiatan yang ingin anda lakukan");

    } else {

        //Mengambil elemen input
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
        btnHapus.setAttribute("onclick","hapus(event);");
        var textHapus = document.createTextNode("Hapus");
        btnHapus.appendChild(textHapus);

        var btnSelesai = document.createElement("button");
        btnSelesai.setAttribute("class","btn-selesai");
        btnSelesai.setAttribute("onclick","selesai(event);");
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

function hapus(e){
    var item = e.target.parentElement.parentElement;
    item.parentNode.removeChild(item);
}

function selesai(e){
    var btn = e.target;
    var item = e.target.parentElement.parentElement;
    item.setAttribute("class", "item item-selesai");
    btn.parentNode.removeChild(btn);
}