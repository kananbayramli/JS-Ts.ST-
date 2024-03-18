// var kecid = 50;



// var stu1Name = "Kenan Bayram";
// var stu1Birth = "1995";
// var noteMath = 70;
// var noteBio = 70;
// var noteHistory = 80;
// var stu1Yas = 2024 - Number(stu1Birth);
// var stu1Average = (noteBio + noteMath + noteHistory) / 3;
// var kecib = stu1Average >= 50;

// console.log("Yas: "+stu1Yas+" Ortalama: " + stu1Average + " Kecib: "+ kecib);


// var stu2Name = "Kamal Bayram";
// var stu2Birth = "1997";
// var noteMath1 = 40;
// var noteBio1 = 40;
// var noteHistory1 = 50;
// var stu2Yas = 2024 - Number(stu2Birth);
// var stu2Average = (noteMath1 + noteBio1 + noteHistory1) / 3;
// var kecib1 = stu2Average >= 50;
// console.log("Yas: "+stu2Yas+" Ortalama: " + stu2Average + " Kecib: "+ kecib1);


// var num = 60;
// if(num >= 10 && num <= 50)
// {console.log("10 ve 50 arasindadir");}
// else{console.log("deyil");}


// var num = 2;

// if(num >=1 && num <= 9)
// {
//     console.log("tek ve pozitiv reqem");
// }

// var x = 6 , y = 5, z = 3;

// if(x >= y && x >= z)
// {
//     console.log("x is max");
// }
// else if(y >= x && y >= z)
// {
//     console.log("y is MAX");
// }
// else{
//     console.log("z IS MAX");
// }


// var ad = "Kenan";
// var soyad = "Bayram";
// var yas = 66;
// var seher = "Baki";
// var pensiya = 65 - yas;
// var pensiyaMesaj = pensiya > 0 ? `Pensiyama ${pensiya} il qaldi` : "Artiq pensiyadayam"

// let mesaj = `Menim adim ${ad}dir ve soyadim ${soyad}dir. Menim ${yas} yasim var. Men ${seher}da yashayiram. ${pensiyaMesaj} `;

// console.log(mesaj);

// let url = "https://www.kananbayram.com";
// let kursAdi = "Full Web Sayt Kursu";

// // url uzunlugunu tapin.
// let uzunluq = url.length;
// console.log(uzunluq);

// //kursadi nece sozden ibaretdir
// let list = kursAdi.split(" ");
// console.log(list.length);

// //url https-lemi bashliyir? //startwithsiz
// let start = url.substring(0,5); 
// let yoxla = start === "https"
// console.log(yoxla);

// // kurs adi icerisinde "HTML" sozu varmi?
// let yoxlaHtml = kursAdi.includes("HTML");
// console.log(yoxlaHtml);

// //https://www.kananbayram.com/full-web bunu duzeldin.
// var urlHelper =`${list[0].toLowerCase()}-${list[1].toLowerCase()}`
// var baseUrl = `${url}/${urlHelper}`;
// console.log(baseUrl);


//************Array*************
// 1- Alma, Armud , Banan , Ciyelek elementlerine sahib list yaradin
// var fruits = ["Alma", "Armud", "Banan", "Ciyelek"];

// // 2- listin nece elementi var ?
// console.log(fruits.length);

// // 3- Listin ilk ve son elementleri nelerdir?
// sonelement = fruits.pop(); //son elementi listden silir ve ozunde saxlayir
// ilkelement = fruits.shift(); //ilk elementi silir ve ozunde saxlayir
// console.log(`Son element ${sonelement}`);
// console.log(`Ilk element ${ilkelement}`);

// console.log(fruits[0]); //ilk
// console.log(fruits[fruits.length-1]); //son


// // 4- Alma listin bir elementidirmi?
// var yoxla = fruits.includes("Alma");
// console.log(yoxla);

// // 5- Gilas meyvesini liste elave edin
// fruits[fruits.length] = "Gilas";
// fruits.push("Ananas"); //elementi sona elave edir
// fruits.unshift("Heyva"); //listin evveline elementi elave edir

// console.log(fruits);


// Telebelrin adini yashini ve ortalamasini gosterin

// var std1 = ["Kenan", "Bayram", 1995, [70, 80, 90]];

// console.log(`Name: ${std1[0]} \nSurname: ${std1[1]}\nYas:${(new Date()).getFullYear() - std1[2]}\nOrtalama: ${((std1[3][0]) + (std1[3][1]) + (std1[3][2])) / 3}`);




/* 
    1- Sifarish bilgilerini object icerinde saxlayin;
    2- Her sifariwin vergi daxil qiymetini hesablayin ; (vergi 18%)
    3- Butun sifariwlerin vergi daxil qiymetini hesablayin;
*/

let sifariw1 = {
    "sif_id" : 102,
    "sif_tarix": "30.12.2024",
    "odeme" : "kart",
    "kargo_adres":{
        "Kuce" : "Anashkin",
        "Rayon" : "Sabunchu",
        "Sheher" : "Baki"
    },
    "products" : [
        {
            "pro_id" : 6,
            "pro_Name" : "Samsung s 26",
            "pro_price" : 2300
        }
    ]
}

var sifVergiDaxil = (sifariw1.products[0].pro_price * 1.18)

let sifariw2 = {
    "sif_id" : 103,
    "sif_tarix": "31.12.2024",
    "odeme" : "kart",
    "kargo_adres":{
        "Kuce" : "Anashkin",
        "Rayon" : "Sabunchu",
        "Sheher" : "Baki"
    },
    "products" : [
        {
            "pro_id" : 7,
            "pro_Name" : "IPhone 13 Pro Max",
            "pro_price" : 3300
        }
    ]
}

var sifVergiDaxi2 = (sifariw2.products[0].pro_price * 1.18)
console.log(sifVergiDaxi2);

var totalSum = sifVergiDaxil + sifVergiDaxi2;
console.log(`Total Sum : ${totalSum}`)
