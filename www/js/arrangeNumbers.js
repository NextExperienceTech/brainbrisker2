var ur = document.location.href;
var level = 1;
if (ur.indexOf("?") != -1) {
    var a = ur.split("=");
    var level = a[1];
} else {
    document.getElementById("lev1").checked = true;
}
if (level == 1) {
    document.getElementById("lev1").checked = true;
} else if (level == 2) {
    document.getElementById("lev2").checked = true;
} else if (level == 3) {
    document.getElementById("lev3").checked = true;
}
if (level == 1) {
    document.getElementById("lev1").checked = true;
    document.write("<table border=0 cellpadding=1 class=ngame>");
    document.write("<tr>");
    document.write('<td> <img name=i0 src="" onclick=moves(0)></td>');
    document.write('<td> <img name=i1 src="" onclick=moves(1)></td>');
    document.write('<td> <img name=i2 src="" onclick=moves(2)></td>');
    document.write("</tr>");
    document.write("<tr>");
    document.write('<td> <img name=i3 src="" onclick=moves(3)></td>');
    document.write('<td> <img name=i4 src="" onclick=moves(4)></td>');
    document.write('<td> <img name=i5 src="" onclick=moves(5)></td>');
    document.write("</tr>");
    document.write("<tr>");
    document.write('<td> <img name=i6 src="" onclick=moves(6)></td>');
    document.write('<td> <img name=i7 src="" onclick=moves(7)></td>');
    document.write('<td> <img name=i8 src="" onclick=moves(8)></td>');
    document.write("</tr>");
    document.write("</table>");

    Array.prototype.inArray = function(value) {
        var i;
        for (i = 0; i < this.length; i++) {
            if (this[i] == value) {
                return true;
            }
        }
        return false;
    };

    var xx;
    xx = 9;
    var jj = new Array();
    while (xx > 0) {
        var ff = Math.round(Math.random() * 8);
        if (!jj.inArray(ff)) {
            jj[jj.length] = ff;
            xx = xx - 1;
        }
    }
    for (var ffg = 0; ffg < jj.length; ffg++) {
        var g = jj[ffg];
        var p = eval("document.images.i" + ffg);
        p.src = "images1/" + g + ".svg";
    }

    function swap(x1, x2) {
        var temp = jj[x1];
        jj[x1] = jj[x2];
        jj[x2] = temp;
        var p = eval("document.images.i" + x1);
        p.src = "images1/" + jj[x1] + ".svg";
        p = eval("document.images.i" + x2);
        p.src = "images1/" + jj[x2] + ".svg";
    }
    var firstmove = 1;
    var t = 0;

    function tim() {
        frm.txt1.value = t;
        t = t + 1;
        ti = setTimeout("tim()", 1000);
        //console.log(t);
        document.getElementById("numberpopup").style.display = "none";
    }

    function moves(a) {

        var moved = false;
        if (a % 3 != 0) {
            if (jj[a - 1] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                }
                //console.log(val);
                swap(a - 1, a);
            }
        }
        if ((a + 1) % 3 != 0 && moved == false) {
            if (jj[a + 1] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                    //console.log(val);
                }
                swap(a + 1, a);
            }
        }
        if (a > 2 && moved == false) {
            if (jj[a - 3] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                   // console.log(val);
                }
                swap(a - 3, a);
            }
        }
        if (a < 6 && moved == false) {
            if (jj[a + 3] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                }
                swap(a + 3, a);
            }
        }
        var checker = true;
        for (var fg = 0; fg < 8; fg++) {
            if (jj[fg] == fg + 1) {} else {
                checker = false;
            }
            console.log(val);
        }
        if (checker == true) {
            if(val>1 && val<30)
            {
            alert("You won......at" + t + "Seconds"+"your score is 100%");
           // document.getElementById("numberpopup").style.display = "none";
            }
            else if(val>30 && val<60)
            {
                alert("You won......at" + t + "Seconds"+"your score is 75%");  
             //   document.getElementById("numberpopup").style.display = "none";
            }

            else if(val>60 && val<100)
            {
                alert("You won......at" + t + "Seconds"+"your score is 50%");  
               // document.getElementById("numberpopup").style.display = "none";
            }
            else
            {
                alert("you take lot of time,you got 35% "); 
                //document.getElementById("numberpopup").style.display = "none";  
            }
           location.reload(true);
        }

   
     }
    }


else if (level == 2) {
    document.getElementById("lev2").checked = true;
    document.write("<table border=0 cellpadding=1 class=ngame>");
    document.write("<tr>");
    document.write('<td> <img name=i0 src="" onclick=moves1(0)></td>');
    document.write('<td> <img name=i1 src="" onclick=moves1(1)></td>');
    document.write('<td> <img name=i2 src="" onclick=moves1(2)></td>');
    document.write('<td> <img name=i3 src=""  onclick=moves1(3)></td>');
    document.write("</tr>");
    document.write("<tr>");
    document.write('<td> <img name=i4 src="" onclick=moves1(4)></td>');
    document.write('<td> <img name=i5 src="" onclick=moves1(5)></td>');
    document.write('<td> <img name=i6 src="" onclick=moves1(6)></td>');
    document.write('<td> <img name=i7 src="" onclick=moves1(7)></td>');
    document.write("</tr>");
    document.write("<tr>");
    document.write('<td> <img name=i8 src="" onclick=moves1(8)></td>');
    document.write('<td> <img name=i9 src="" onclick=moves1(9)></td>');
    document.write('<td> <img name=i10 src="" onclick=moves1(10)></td>');
    document.write('<td> <img name=i11 src="" onclick=moves1(11)></td>');
    document.write("</tr>");
    document.write("<tr>");
    document.write('<td> <img name=i12 src="" onclick=moves1(12)></td>');
    document.write('<td> <img name=i13 src="" onclick=moves1(13)></td>');
    document.write('<td> <img name=i14 src="" onclick=moves1(14)></td>');
    document.write('<td> <img name=i15 src="" onclick=moves1(15)></td>');
    document.write("</tr>");
    document.write("</table>");
    Array.prototype.inArray = function(value) {
        var i;
        for (i = 0; i < this.length; i++) {
            if (this[i] == value) {
                return true;
            }
        }
        return false;
    };

    var xx;
    xx = 16;
    var jj = new Array();
    while (xx > 0) {
        var ff = Math.round(Math.random() * 15);
        if (!jj.inArray(ff)) {
            jj[jj.length] = ff;
            xx = xx - 1;
        }
    }
    for (var ffg = 0; ffg < jj.length; ffg++) {
        var g = jj[ffg];
        var p = eval("document.images.i" + ffg);
        p.src = "images1/" + g + ".svg";
    }

    function swap(x, y) {
        var temp = jj[x];
        jj[x] = jj[y];
        jj[y] = temp;
        var p = eval("document.images.i" + x);
        p.src = "images1/" + jj[x] + ".svg";
        var p = eval("document.images.i" + y);
        p.src = "images1/" + jj[y] + ".svg";
    }
    var firstmove = 1;
    var t = 0;

    function tim() {
        frm.txt1.value = t;
        t = t + 1;
        ti = setTimeout("tim()", 1000);
        document.getElementById("numberpopup").style.display = "none";

    }


    function moves1(a) {
        var moved = false;
        if (a % 4 != 0) {
            if (jj[a - 1] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                }
                swap(a - 1, a);
            }
        }
        if ((a + 1) % 4 != 0 && moved == false) {
            if (jj[a + 1] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                }
                swap(a + 1, a);
            }
        }
        if (a > 3 && moved == false) {
            if (jj[a - 4] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                }
                swap(a - 4, a);
            }
        }
        if (a < 12 && moved == false) {
            if (jj[a + 4] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                   
                }
                swap(a + 4, a);
            }
        }
        var checker = true;
        for (fg = 0; fg < 15; fg++) {
            if (jj[fg] == fg + 1) {} else {
                checker = false;
                //console.log(val); 
            }
        }
        if (checker == true) {
            if(val>1 && val<30)
            {
            alert("You won......at" + t + "Seconds"+"your score is 100%");
            }
            else if(val>30 && val<60)
            {
                alert("You won......at" + t + "Seconds"+"your score is 75%");  
            }
            else if(val>60 && val<100)
            {
                alert("You won......at" + t + "Seconds"+"your score is 50%");  
            }
            else
            {
                alert("you take lot of time,you got 35% ");   
            }           
            location.reload(true);
        }
    }
} 

else if (level == 3) {
    document.getElementById("lev3").checked = true;
    document.write("<table border=0 cellpadding=1 class=ngame>");
    document.write("<tr>");
    document.write('<td> <img name=i0 src="" onclick=moves1(0)></td>');
    document.write('<td> <img name=i1 src="" onclick=moves1(1)></td>');
    document.write('<td> <img name=i2 src="" onclick=moves1(2)></td>');
    document.write('<td> <img name=i3 src=""  onclick=moves1(3)></td>');
    document.write('<td> <img name=i4 src=""  onclick=moves1(4)></td>');
    document.write("</tr>");
    document.write("<tr>");
    document.write('<td> <img name=i5 src="" onclick=moves1(5)></td>');
    document.write('<td> <img name=i6 src="" onclick=moves1(6)></td>');
    document.write('<td> <img name=i7 src="" onclick=moves1(7)></td>');
    document.write('<td> <img name=i8 src="" onclick=moves1(8)></td>');
    document.write('<td> <img name=i9 src=""  onclick=moves1(9)></td>');
    document.write("</tr>");
    document.write("<tr>");
    document.write('<td> <img name=i10 src="" onclick=moves1(10)></td>');
    document.write('<td> <img name=i11 src="" onclick=moves1(11)></td>');
    document.write('<td> <img name=i12 src="" onclick=moves1(12)></td>');
    document.write('<td> <img name=i13 src="" onclick=moves1(13)></td>');
    document.write('<td> <img name=i14 src=""  onclick=moves1(14)></td>');
    document.write("</tr>");
    document.write("<tr>");
    document.write('<td> <img name=i15 src="" onclick=moves1(15)></td>');
    document.write('<td> <img name=i16 src="" onclick=moves1(16)></td>');
    document.write('<td> <img name=i17 src="" onclick=moves1(17)></td>');
    document.write('<td> <img name=i18 src="" onclick=moves1(18)></td>');
    document.write('<td> <img name=i19 src=""  onclick=moves1(19)></td>');
    document.write("</tr>");
    document.write("<tr>");
    document.write('<td> <img name=i20 src="" onclick=moves1(20)></td>');
    document.write('<td> <img name=i21 src="" onclick=moves1(21)></td>');
    document.write('<td> <img name=i22 src="" onclick=moves1(22)></td>');
    document.write('<td> <img name=i23 src="" onclick=moves1(23)></td>');
    document.write('<td> <img name=i24 src=""  onclick=moves1(24)></td>');
    document.write("</tr>");
    document.write("</table>");
    Array.prototype.inArray = function(value) {
        var i;
        for (i = 0; i < this.length; i++) {
            if (this[i] == value) {
                return true;
            }
        }
        return false;
    };

    var xx;
    xx = 25;
    var jj = new Array();
    while (xx > 0) {
        var ff = Math.round(Math.random() * 24);
        if (!jj.inArray(ff)) {
            jj[jj.length] = ff;
            xx = xx - 1;
        }
    }
    for (var ffg = 0; ffg < jj.length; ffg++) {
        var g = jj[ffg];
        var p = eval("document.images.i" + ffg);
        p.src = "images1/" + g + ".svg";
    }

    function swap(m, n) {
        var temp = jj[m];
        jj[m] = jj[n];
        jj[n] = temp;
        var p = eval("document.images.i" + m);
        p.src = "images1/" + jj[m] + ".svg";
        var p = eval("document.images.i" + n);
        p.src = "images1/" + jj[n] + ".svg";
    }
    var firstmove = 1;
    var t = 0;

    function tim() {
        frm.txt1.value = t;
        t = t + 1;
        ti = setTimeout("tim()", 1000);
        document.getElementById("numberpopup").style.display = "none";

    }


    function moves1(a) {

        var moved = false;
        if (a % 5 != 0) {
            if (jj[a - 1] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                }
                swap(a - 1, a);
            }
        }
        if ((a + 1) % 5 != 0 && moved == false) {
            if (jj[a + 1] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                }
                swap(a + 1, a);
            }
        }
        if (a > 4 && moved == false) {
            if (jj[a - 5] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                }
                swap(a - 5, a);
            }
        }
        if (a < 20 && moved == false) {
            if (jj[a + 5] == 0) {
                moved = true;
                if (moved == true) {
                    val = firstmove++;
                    frm.txt.value = val;
                }
                swap(a + 5, a);
            }
        }
        var checker = true;
        for (fg = 0; fg < 24; fg++) {
            if (jj[fg] == fg + 1) {} else {
                checker = false;
            }
        }
        if (checker == true) {
            if(val>1 && val<30)
            {
            alert("You won......at" + t + "Seconds"+"your score is 100%");
            }
            else if(val>30 && val<60)
            {
                alert("You won......at" + t + "Seconds"+"your score is 75%");  
            }
            else if(val>60 && val<100)
            {
                alert("You won......at" + t + "Seconds"+"your score is 50%");  
            }
            else
            {
                alert("you take lot of time,you got 35% ");   
            }
            location.reload(true);
        }
    }
}