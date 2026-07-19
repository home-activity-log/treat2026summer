
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function() {
    const dice = getRandomInt(1, 15);

    if ( dice >= 1 && dice <= 5) { 
        result.textContent = "🎯録画か動画を30分見てもいい券を獲得";
    } else if ( dice >= 11 && dice <= 15) { 
        result.textContent = "🎯 お母さんに足をニモニモしてもらう券を獲得";
    } else if ( dice >= 16 && dice <= 20) { 
        result.textContent = "🎯 60分だけゲーム時間延長できる券を獲得";
    } else if ( dice >= 26 && dice <= 30) { 
        result.textContent = "🎯 猫にブラッシングをする券を獲得";
    } else if ( dice >= 31 && dice <= 35) { 
        result.textContent = "🎯 お小遣いに200円を獲得";
    } else if ( dice >= 36 && dice <= 40) { 
        result.textContent = "🎯 Xiaomiに掃除させるボタンを押す権利を獲得";
    } else if ( dice >= 41 && dice <= 45) { 
        result.textContent = "🎯 ご褒美スロットをもう１回出来る券を獲得";
    } else if ( dice >= 51 && dice <= 53) { 
        result.textContent = "🎯 お母さんに何でもお願いごとが出来る券を獲得";
    } else if ( dice >= 54 && dice <= 56) { 
        result.textContent = "🎯 お父さんに何でもお願いごとが出来る券を獲得";
    } else if ( dice >= 60 && dice <= 62) { 
        result.textContent = "🎯 とれとれ倉庫に行ける券を獲得";
    } else if ( dice >= 66 && dice <= 67) { 
        result.textContent = "🎯 車で遠くまでお出かけ出来る券を獲得";
    } else if ( dice >= 68 && dice <= 69) { 
        result.textContent = "🎯 ご褒美スロットをあと２回出来る券を獲得";
    } else if ( dice >= 70 && dice <= 71) { 
        result.textContent = "🎯 お小遣いに500円を獲得";
    } else if ( dice >= 72 && dice <= 72) { 
        result.textContent = "🎯 夏休み中に魚釣り出来る券を獲得";
    } else if ( dice >= 74 && dice <= 76) { 
        result.textContent = "💀 部屋のゴミを１個拾ってゴミ箱へ入れる";
    } else if ( dice >= 77 && dice <= 79) { 
        result.textContent = "💀 落ちている鉛筆か消しゴムを１つ片づける";
    } else if ( dice >= 80 && dice <= 82) { 
        result.textContent = "💀 落ちている本を１冊本棚に戻す";
    } else if ( dice >= 83 && dice <= 85) { 
        result.textContent = "💀 ベランダのお掃除をする";
    } else if ( dice >= 86 && dice <= 88) { 
        result.textContent = "💀 腕立て伏せ20回する";
    } else if ( dice >= 89 && dice <= 91) { 
        result.textContent = "💀 ぶら下がり棒を20秒する";
    } else if ( dice >= 92 && dice <= 94) { 
        result.textContent = "💀 お父さんにマッサージを10分してあげる";
    } else if ( dice >= 95 && dice <= 97) { 
        result.textContent = "💀 お母さんにマッサージを10分してあげる";
    } else if ( dice >= 98 && dice <= 99) { 
        result.textContent = "💀 剣道の素振り100回する";
    } else if ( dice >= 100 && dice <= 100) { 
        result.textContent = "💀 ゲーム時間が60分減ってしまう";
    } else { 
        result.textContent = "はずれ" ;
    }
  
});
