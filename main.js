var case1 = document.querySelector("#case1");
var case2 = document.querySelector("#case2");

var checkVoid = document.querySelector("#mySelect").value;


function toInput2() {
    //Check Unit
    //if (checkVoid != "dv" && inputSl !== "") {
    var checkVoid = document.querySelector("#mySelect").value;
    var inputSl = document.querySelector("#inputSl").value;
        var types = document.querySelector(".types2");
        var temp = '';

    if (checkVoid != "dv" && inputSl !== "") { 

        if (checkVoid == "km") {
            case1.innerHTML = 's(km)';
            case2.innerHTML = '&#8710;s (km)';
        }
        if (checkVoid == "hm") {
            case1.innerHTML = 's(hm)';
            case2.innerHTML = '&#8710;s (hm)';
        }
        if (checkVoid == "dam") {
            case1.innerHTML = 's(dam)';
            case2.innerHTML = '&#8710;s (dam)';
        }
        if (checkVoid == "m") {
            case1.innerHTML = 's(m)';
            case2.innerHTML = '&#8710;s (m)';
        }
        if (checkVoid == "dm") {
            case1.innerHTML = 's(dm)';
            case2.innerHTML = '&#8710;s (dm)';
        }
        if (checkVoid == "cm") {
            case1.innerHTML = 's(cm)';
            case2.innerHTML = '&#8710;s (cm)';
        }
        if (checkVoid == "mm") {
            case1.innerHTML = 's(mm)';
            case2.innerHTML = '&#8710;s (mm)';
        }
        //Unit m
        if (checkVoid == "tan") {
            case1.innerHTML = 'm (Tấn)';
            case2.innerHTML = '&#8710;m (Tấn)';
        }
        if (checkVoid == "ta") {
            case1.innerHTML = 'm (Tạ)';
            case2.innerHTML = '&#8710;m (Tạ)';
        }
        if (checkVoid == "yen") {
            case1.innerHTML = 'm (Yến)';
            case2.innerHTML = '&#8710;m (Yến)';
        }
        if (checkVoid == "kg") {
            case1.innerHTML = 'm (kg)';
            case2.innerHTML = '&#8710;m (kg)';
        }
        if (checkVoid == "hg") {
            case1.innerHTML = 'm (hg)';
            case2.innerHTML = '&#8710;m (hg)';
        }
        if (checkVoid == "deg") {
            case1.innerHTML = 'm (deg)';
            case2.innerHTML = '&#8710;m (deg)';
        }
        if (checkVoid == "g") {
            case1.innerHTML = 'm (g)';
            case2.innerHTML = '&#8710;m (g)';
        }

        if (checkVoid == "h") {
            case1.innerHTML = 't (h)';
            case2.innerHTML = '&#8710;t (h)';
        }
        if (checkVoid == "mi") {
            case1.innerHTML = 't (\')';
            case2.innerHTML = '&#8710;t (\')';
        }
        if (checkVoid == "s") {
            case1.innerHTML = 't (s)';
            case2.innerHTML = '&#8710;t (s)';
        }

        //SL DO
        

        for (var i = 1 ; i <= inputSl ; i++) {
            temp += '<tr>';
            for (var j = 1 ; j <= 3 ; j++) {
                if (j == 1) {
                    temp += '<td>' + i + '</td>';
                }
                else if (j == 2) {
                    temp += '<td><input type="number" step="any" id="number' + i + '" placeholder="Nhập..."></td>';
                }
                else if (j == 3) {
                    temp += '<td id="delEvg' + i + '"></td>';
                }
            }
            temp += '</tr>';
        }
        types.innerHTML = temp;

        document.getElementById("outPut").style.display = 'block';
    }
    if (checkVoid == "dv" || inputSl === "" || inputSl == 0) {
        alert("Kiểm tra lại !")
    }
    console.log(inputSl);
}

function outPut() {
    var temp = 0.0;
    var sum = 0.0;
    var avg = 0.0;
    var selectId = '';
    var valueEle = [];
    var inputSl = document.querySelector("#inputSl").value;
    for (var i = 1 ; i <= inputSl ; i++) {
        selectId = '#number' + i;
        var take = document.querySelector(selectId).value;
        valueEle[i-1] = take;
    }
    for (var i = 0 ; i < inputSl ; i++) {
        temp = parseFloat(valueEle[i]);
        valueEle[i] = temp;
        sum += temp;
    }
    avg = sum/inputSl;
    var avgOut = document.querySelector("#avgOut");
    avgOut.innerHTML = avg.toFixed(1);
    console.log(valueEle);

    var ele2 = [];
    for (var i = 1 ; i <= inputSl ; i++) {
        var fir = Math.abs(avg - valueEle[i-1]);
        ele2[i-1] = fir;
        var idOut = '#delEvg' + i;
        document.querySelector(idOut).innerHTML = fir.toFixed(1);
    }
    sum = 0;
    for (var i = 0 ; i < inputSl ; i++) {
        sum += ele2[i];
    }
    var avg2 = sum/inputSl;
    var avgOut2 = document.querySelector("#avgOut2");
    avgOut2.innerHTML = avg2.toFixed(1);
    var a1 = avg2 + parseFloat(document.querySelector("#SSDC").value);
    var a2 = parseFloat(a1.toFixed(1))/parseFloat(avg.toFixed(1))*100;
    document.querySelector("#TD").innerHTML = 'Sai số tuyệt đối: ' + a1.toFixed(1);
    document.querySelector("#TUONGD").innerHTML = 'Sai số tương đối: ' + a2.toFixed(2) + '%';
    document.querySelector("#KQ").innerHTML = 'Kết quả của phép đo: ' + avg.toFixed(1) + ' &#177; ' + a1.toFixed(1);
}
