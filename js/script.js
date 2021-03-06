$(document).ready(function(){
    
    //#ex_01==================================================//
    const arr1 = [
        ["img_01.jpg", "동행1"],
        ["img_02.jpg", "동행2"],
        ["img_03.jpg", "동행3"],
        ["img_04.jpg", "동행4"]
    ];

    for(i=0; i<arr1.length; i++){
        $("#ex_01 .frame").append(`
            <div class="box" style="background-image:url(img/${arr1[i][0]})">
                <div class="dark">
                    <div class="cont">
                        <h4>${arr1[i][1]}</h4>
                        <a href="#">상세 보기</a>
                    </div>
                </div>
            </div>
        `);
    }


    //#ex_02==================================================//

    const arr2 = ["All", "마카롱", "뜨게질", "스케치", "사진 찍기", "영어교육", "작곡", "여행", "필라테스"];

    const arr_class = [
        {img:"class_01_01.jpg", category:"마카롱"},
        {img:"class_01_02.jpg", category:"마카롱"},
        {img:"class_01_03.jpg", category:"마카롱"},
        {img:"class_02_01.jpg", category:"뜨게질"},
        {img:"class_02_02.jpg", category:"뜨게질"},
        {img:"class_02_03.jpg", category:"뜨게질"},
        {img:"class_03_01.jpg", category:"스케치"},
        {img:"class_03_02.jpg", category:"스케치"},
        {img:"class_03_03.jpg", category:"스케치"},
        {img:"class_04_01.jpg", category:"사진 찍기"},
        {img:"class_04_02.jpg", category:"사진 찍기"},
        {img:"class_04_03.jpg", category:"사진 찍기"},
        {img:"class_05_01.jpg", category:"영어교육"},
        {img:"class_05_02.jpg", category:"영어교육"},
        {img:"class_05_03.jpg", category:"영어교육"},
        {img:"class_06_01.jpg", category:"작곡"},
        {img:"class_06_02.jpg", category:"작곡"},
        {img:"class_06_03.jpg", category:"작곡"},
        {img:"class_07_01.jpg", category:"여행"},
        {img:"class_07_02.jpg", category:"여행"},
        {img:"class_07_03.jpg", category:"여행"},
        {img:"class_11_01.jpg", category:"필라테스"},
        {img:"class_11_02.jpg", category:"필라테스"},
        {img:"class_11_03.jpg", category:"필라테스"}
    ];

    for(i=0; i<arr2.length; i++){
        $("#ex_02 .sel_btn").append(`<li><a href="">${arr2[i]}</a></li>`);
    }

    $("#ex_02 .sel_btn li:first").addClass("active");

    for(i=0; i<arr_class.length; i++){    
        $("#ex_02 .cont").append(`<div class="box" style="background-image:url(img/${arr_class[i].img})"></div>`);
    }
    $("#ex_02 .cont .box").addClass("active");


    //개별 버튼 클릭시
    $("#ex_02 .sel_btn li").not(":eq(0)").click(function(){
        let $cate = $(this).text();
        $("#ex_02 .sel_btn li").removeClass("active");
        $(this).addClass("active");
        const filterArr = arr_class.filter(v => {
            return v.category == $cate
        });
        console.log(filterArr);
        $("#ex_02 .cont .box").removeClass("active");
        $("#ex_02 .cont").empty();
        for(i=0; i<filterArr.length; i++){
            $("#ex_02 .cont").append(`<div class="box active" style="background-image:url(img/${filterArr[i].img})"></div>`);
        }
        $("#ex_02 .cont .box").addClass("active");
        return false;
    });

    //All 버튼 클릭시 
    $("#ex_02 .sel_btn li:eq(0)").click(function(){
        $("#ex_02 .cont .box").removeClass("active");
        $("#ex_02 .cont").empty();
        for(i=0; i<arr_class.length; i++){    
            $("#ex_02 .cont").append(`<div class="box" style="background-image:url(img/${arr_class[i].img})"></div>`);
        }
        $("#ex_02 .cont .box").addClass("active");
		return false;
    });


//#ex_03==================================================//  
    const arr3 = [
        ["ana.png", "ana_view.png", "아나", "새로운 세대를 지키기 위해 수년간의 은둔 생활에서 돌아온 베테랑 오버워치 요원"],
        ["ashe.png", "ashe_view.png", "애쉬", "미국 남서부를 뒤흔들고 있는 악명높은 데드락 갱단의 두목"],
        ["w_ball.png", "w_ball_view.png", "레킹볼", "구르는 로봇을 조종하는 달 출신의 유전자 조작 햄스터"],		
        ["baptiste.png", "baptiste_view.png", "바티스트", "실험적인 치유 장비들로 무장한 최정예 전투 의무병"],	
        ["bastion.png", "bastion_view.png", "바스티온", "자연에 매료되어 전 세계를 모험하지만 인간을 경계하는 변신 로봇"],
        ["brigitte.png", "brigitte_view.png", "브리기테", "도움이 필요한 자들을 위해 모험 떠난 용사"],	
    ];
    
    for(i=0; i<arr3.length; i++){
        $("#ex_03 .sel_btn").append(`<li><a href="" style="background-image:url(img/ex_03/${arr3[i][0]})"></a></li>`);
    }

    $("#ex_03 .sel_btn li").click(function(){
        let $index=$(this).index();
        $("#ex_03 .cont").show();
        $("#ex_03 .cont img").attr("src", "img/ex_03/"+arr3[$index][1]);
        $("#ex_03 .cont h4").text(arr3[$index][2]);
        $("#ex_03 .cont p").text(arr3[$index][3]);
        return false;
    });

    
    $(".input_line button").click(function(){
        const input_val = $(".input_line input").val(); 

        class Character{
            constructor(name){
                this.name = name;
            }
            process(){
                console.log(`${input_val}의 캐릭터가 생성되었습니다.`);
                $("#ex_03 .dark").addClass("active");
                $("#ex_03 .popup").addClass("active");
                $("#ex_03 .popup h3 span").text(input_val);
            }
        }
        const ch_name = new Character(input_val);
        ch_name.process();
    });

    $("#ex_03 .dark, #ex_03 .close").click(function(){
        $("#ex_03 .dark").removeClass("active");
        $("#ex_03 .popup").removeClass("active");
    });

    


});


   

