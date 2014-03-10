function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
var companies = new Array();
companies.push(
    ["current", "likelion", "라이크라이언", 
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "carffeine", "카페인", 
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "gachyon", "Gachyon",
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "1day1song", "원데이원송",
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "spacosa", "스파코사",
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "sundaytoz", "선데이토즈",
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "lockin", "락인컴퍼니",
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "bove", "아이디어보브", 
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "realtrip", "마이리얼트립",
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "iamschool", "아이멤컴퍼니",
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);
companies.push(
    ["current", "trazy", "윌로3",
    "온라인 프로그래밍 교육 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언(<a href='http://codelion.net' target='_blank' style='color:white;'>http://codelion.net</a>)을 진행하고 있습니다."]);

companies = shuffle(companies);

$(function(){
  
  for(var i in companies){
    one_company = $("<li></li>").addClass(companies[i][0])
                    .append($("<div></div>").addClass("isotope-alt-image")
                      .append($("<img />").attr("src", "/img/"+companies[i][1]+".png")
                                        .attr("alt", "image"))
                      .append($("<div></div>")
                        .append("<h4 style='margin-bottom:0px;'>"+companies[i][2]+"</h4>")
                        .append("<p>"+companies[i][3]+"</p>")));
    $("#companies").append(one_company);
  }
});

