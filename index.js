const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img'),
    lyricsContainer = document.getElementById('lyrics');  // Add this to access the lyrics section

const music = new Audio();
//song list
const songs = [
    {
        path: 'across_the_miles.mp3',
        displayName: 'Across The Miles',
        cover: 'across_the_miles.jpeg',
        artist: 'Thiago Costa & Suno AI',
        lyrics: `Your voice travels through the static haze<br>
A melody that bridges the days<br>
Your laugh<br>
A light<br>
It brightens my screen<br>
In every pixel<br>
You're my dream<br>

Across the miles<br>
We’ll make it through<br>
This love’s a map that leads to you<br>
Connection strong<br>
No space too wide<br>
The heart knows no divide<br>

Time zones mix<br>
The sun and moon collide<br>
Texting love when worlds don’t align<br>
These early mornings<br>
The restless nights<br>
Are worth it all to keep this right<br>

Across the miles<br>
We’ll make it through<br>
This love’s a map that leads to you<br>
Connection strong<br>
No space too wide<br>
The heart knows no divide<br>

Each "I miss you" whispers hope<br>
While we dream<br>
The stars elope<br>
We’ll thread the clocks<br>
We’ll bend the time<br>
Until we’re side by side<br>

Plane tickets and countdowns on the wall<br>
The waiting's hard<br>
But we’ll have it all<br>
Pictures held close<br>
Phone calls that shine<br>
The world seems small when you're mine`
    },
    {
        path: 'kiseki.mp3',
        displayName: 'キセキ',
        cover: 'kiseki.png',
        artist: 'Greeeen',
        lyrics: `明日 今日よりも好きになれる 溢れる想いが<br>
        止まらない<br>
        今もこんなに好きでいるのに 言葉に<br>
        出来ない<br>
        君のくれた日々が積み重なり 過ぎ去った日々2人歩いた<br>
        『軌跡』<br>
        僕らの出逢いがもし偶然ならば? 運命ならば?<br>
        君に巡り合えた それって『奇跡』<br>
        2人寄り添って歩いて 永久の愛を形にして<br>
        いつまでも君の横で 笑っていたくて<br>
        アリガトウや ah 愛してるじゃまだ足りないけど<br>
        せめて言わせて 「幸せです」と<br>
        いつも君の右の手の平を ただ僕の左の手の平が<br>
        そっと包んでくそれだけで ただ愛を感じていた<br>
        日々の中で 小さな幸せ 見つけ重ね ゆっくり歩いた<br>
        『軌跡』<br>
        僕らの出会いは大きな世界で<br>
        小さな出来事 巡り合えた それって『奇跡』<br>
        うまく行かない日だって 2人で居れば晴れだって!<br>
        強がりや寂しさも 忘れられるから<br>
        僕は君でなら 僕で居れるから!<br>
        だからいつも そばにいてよ 『愛しい君へ』<br>
        2人フザけあった帰り道 それも大切な僕らの日々<br>
        「想いよ届け!!!」と伝えた時に 初めて見せた表情の君<br>
        少し間が空いて 君がうなずいて 僕らの心 満たされてく<br>
        愛で<br>
        ぼくらまだ旅の途中で またこれから先も 何十年<br>
        続いていけるような未来へ<br>
        例えばほら 明日を見失いそうに 僕らなったとしても<br>
        2人寄り添って歩いて 永久の愛を形にして<br>
        いつまでも君の横で 笑っていたくて<br>
        アリガトウや ah 愛してるじゃまだ足りないけど<br>
        せめて言わせて 「幸せです」と<br>
        うまく行かない日だって 2人で居れば晴れだって!<br>
        喜びや悲しみも 全て分け合える<br>
        君がいるから 生きていけるから!<br>
        だからいつも そばにいてよ 『愛しい君へ』<br>
        最後の一秒まで<br>
        明日 今日より笑顔になれる 君がいるだけで そう<br>
        思えるから<br>
        何十年 何百年 何千年 時を超えよう 君を愛してる`
    },
    {
        path: 'worldwide.mp3',
        displayName: 'Worldwide',
        cover: 'worldwide.jpg',
        artist: 'Big Time Rush',
        lyrics: `Wait a minute before you tell me anything,<br>
        how was your day?<br>
        Cause I've been missing<br>
        You by my side, yeah<br>
        Did I awake you out of your dreams?<br>
        I'm sorry but I couldn't sleep<br>
        You calm me down<br>
        There's something 'bout the sound of your voice<br>
        I-I-I-I'm never never<br>
        Never as far away as it may seem, oh<br>
        Soon we'll be together<br>
        We'll pick up right where we left off<br>
        Paris, London, Tokyo<br>
        There's just one thing that I gotta do<br>
        Hello, tuck you in every night on the phone<br>
        Hello, tuck you in every night)<br>
        And I can hardly take another goodbye<br>
        Baby, won't be long<br>
        You're the one that I'm waiting on<br>
        Hello, tuck you in every night on the phone, woah<br>
        Girl I'll be thinking about you worldwide, worldwide, worldwide<br>
        Girl I'll be thinking about you worldwide, worldwide, worldwide<br>
        (Girl I'll be thinking about you)<br>
        Yes, I may meet a million pretty girls that know my name<br>
        But don't you worry<br>
        Cause you have my heart<br>
        It ain't easy to keep on moving city to city<br>
        Just get up and go<br>
        The show must go on so I need you to be strong<br>
        I-I-I-I'm never never<br>
        Never as far away as it may seem<br>
        No never<br>
        Soon we'll be together<br>
        We'll pick up right where we left off<br>
        Paris, London, Tokyo<br>
        There's just one thing that I gotta do<br>
        Hello, tuck you in every night on the phone<br>
        Hello, tuck you in every night)<br>
        And I can hardly take another goodbye<br>
        Baby, won't be long<br>
        You're the one that I'm waiting on<br>
        Hello, tuck you in every night on the phone, woah<br>
        Girl I'll be thinking about you worldwide, worldwide, worldwide<br>
        Girl I'll be thinking about you worldwide, worldwide, worldwide<br>
        (Girl I'll be thinking about you)<br>
        Oh<br>
        Wherever the wind blows me<br>
        Yes you're still the one and only girl on my mind<br>
        No, there ain't no one better<br>
        So always remember<br>
        Always remember, girl you're mine<br>
        Paris, London, Tokyo<br>
        There's just one thing that I gotta do<br>
        Hello, tuck you in every night on the phone<br>
        Hello, tuck you in every night)<br>
        And I can hardly take another goodbye<br>
        Baby, won't be long<br>
        You're the one that I'm waiting on<br>
        Hello, tuck you in every night on the phone<br>
        Girl I'll be thinking about you worldwide, worldwide, worldwide<br>
        Girl I'll be thinking about you worldwide, worldwide, worldwide<br>
        (Girl I'll be thinking about you)<br>
        Worldwide<br>
        Yes, I may meet a million pretty girls that know my name<br>
        But don't you worry<br>
        Cause you have my heart`
    },
    {
        path: 'anone.mp3',
        displayName: 'あのね',
        cover: 'anone.jpg',
        artist: '「ユイカ」',
        lyrics: `どうせだったらもうちょっと<br>
        男らしく余裕見せたらよかったな<br>
        どうせだったらもうちょっと<br>
        可愛らしく甘えて見せたらよかったな<br>
        後悔ばっかが募って<br>
        でも後戻りはもうできなくて<br>
        ずっと ずっと<br>
        "君だらけ"の毎日<br>
        君の気を引きたくて<br>
        君の気持ちを知りたくて<br>
        わざとからかったり<br>
        わざと未読したり<br>
        はぁ ばかみたいだな<br>
        妬いたりしないかな<br>
        あの人は誰?<br>
        不安になったの?<br>
        別にそんなんじゃないよ<br>
        君しか見えない<br>
        私だけ見てて<br>
        早く言わなきゃ<br>
        でもね<br>
        君が好きだ なんてまだ言えない<br>
        焦る思いが胸を締め付ける<br>
        恋をしてる<br>
        私 恋をしてる<br>
        あのね「好きなんです」<br>
        言えない 言えないよ<br>
        "好きだよ"なんてまだ まだって<br>
        こんな自分が (こんな自分が) 嫌いになりそう (嫌いになりそう)<br>
        想いを伝えたいのに<br>
        気持ちは固まってるのに<br>
        好きとか笑うかな?<br>
        私も 笑われちゃうかな?<br>
        君しか見えない<br>
        ずっと 私だけ見てて<br>
        気持ちが同じなら<br>
        もっと早く言えたのに<br>
        晴れた青い春に<br>
        桜が空を舞う<br>
        二人の想いが 今重なり合う<br>
        恋をしてる<br>
        今 恋をしてる<br>
        あのね「幸せなんです」<br>
        どうせだったらもうちょっと<br>
        男らしく余裕見せたらよかったな<br>
        どうせだったらもうちょっと<br>
        可愛らしく甘えて見せたらよかったな<br>
        そんな後悔も幸せ<br>
        だって 今はこうして二人で<br>
        笑いあってるから<br>
        今なら言える"好きだよ`
    },
    {
        path: 'sukidakara.mp3',
        displayName: '好きだから',
        cover: 'sukidakara.jpg',
        artist: '「ユイカ」',
        lyrics: `かっこいいから好きなんじゃない<br>
        好きだからかっこいいんだよ<br>
        誰かにばかにされても何ともない<br>
        だって私の「ヒーロー」<br>
        いつも「眠い」って言うくせに<br>
        授業は起きているとことか<br>
        みんなの前ではクールなのに<br>
        犬の前ではデレデレなとことか<br>
        あぁ 本当に愛してやまない貴方のこと<br>
        私だけの「ヒーロー」になってよ<br>
        LINEだってしていたいし<br>
        一緒に帰ったりしたいよ<br>
        放課後部活に行く貴方に<br>
        「またね」ってひとりごと<br>
        休みの日だって会いたいし<br>
        寝落ち電話もしてみたいけど<br>
        そんな勇気はちっともなくて<br>
        あきれるなぁ<br>
        振り向いてほしくて<br>
        意識してほしくて<br>
        香水をつけて<br>
        1人でむせて<br>
        貴方が欲しくて<br>
        貴方のものになりたくて<br>
        「明日こそは」って<br>
        ベッドの上でシミュレーション<br>
        貴方を考えながら<br>
        また明日<br>
        かわいいから好きなんじゃない<br>
        好きだからかわいいんだよ<br>
        誰かにばかにされても何ともない<br>
        だって僕の「ヒロイン」<br>
        「今日こそ起きる！」って言うくせに<br>
        結局授業で寝るとことか<br>
        みんなの前ではおてんばなのに<br>
        案外涙もろいとことか<br>
        あぁ 本当に愛してやまない君のこと<br>
        僕だけの「ヒロイン」にならないかな<br>
        勉強とか教えてあげたいし<br>
        一緒に映画とか観に行きたいよ<br>
        放課後友達と笑う君に<br>
        「ばいばい」ってひとりごと<br>
        君のストーリーに載りたいし<br>
        「俺の彼女」自慢もしてみたいけど<br>
        告白なんかできそうになくて<br>
        あきれるなぁ<br>
        振り向いてほしくて<br>
        意識してほしくて<br>
        ワックスをつけて<br>
        ベトベトになっちゃって<br>
        君が欲しくて<br>
        君のものになりたくて<br>
        「明日こそは」って<br>
        布団の中でシミュレーション<br>
        君を考えながら<br>
        また明日<br>
        貴方に貴方の相談をしたんだ<br>
        君が男の相談をしてきたんだ<br>
        「やめとけ」なんて言わないでよ<br>
        他の男になんて行くなよ<br>
        ずっとずっと見ていてよ<br>
        振り向いてほしくて<br>
        意識してほしくて<br>
        ずっと隣にいてくれませんか<br>
        貴方が好きなの<br>
        君を愛おしく思うよ<br>
        「明日こそは」って<br>
        今日もシミュレーション<br>
        君との恋は<br>
        甘いムスクの香りがしたんだ`  
    },
    {
        path: 'thinkingoutloud.mp3',
        displayName: 'Thnking Out Loud',
        cover: 'photograph.jpg',
        artist: 'Ed Sheeran',
        lyrics: `When your legs don't work like they used to before<br>
        And I can't sweep you off of your feet<br>
        Will your mouth still remember the taste of my love<br>
        Will your eyes still smile from your cheeks<br>
        And darling I will be loving you 'til we're 70<br>
        And baby my heart could still fall as hard at 23<br>
        And I'm thinking 'bout how people fall in love in mysterious ways<br>
        Maybe just the touch of a hand<br>
        Oh me I fall in love with you every single day<br>
        And I just wanna tell you I am<br>
        So honey now<br>
        Take me into your loving arms<br>
        Kiss me under the light of a thousand stars<br>
        Place your head on my beating heart<br>
        I'm thinking out loud<br>
        Maybe we found love right where we are<br>
        When my hair's all but gone and my memory fades<br>
        And the crowds don't remember my name<br>
        When my hands don't play the strings the same way, mm<br>
        I know you will still love me the same<br>
        'Cause honey your soul can never grow old, it's evergreen<br>
        Baby your smile's forever in my mind and memory<br>
        I'm thinking 'bout how people fall in love in mysterious ways<br>
        Maybe it's all part of a plan<br>
        I'll just keep on making the same mistakes<br>
        Hoping that you'll understand<br>
        But baby now<br>
        Take me into your loving arms<br>
        Kiss me under the light of a thousand stars<br>
        Place your head on my beating heart<br>
        I'm thinking out loud<br>
        That maybe we found love right where we are, oh<br>
        So baby now<br>
        Take me into your loving arms<br>
        Kiss me under the light of a thousand stars<br>
        Oh darling, place your head on my beating heart<br>
        I'm thinking out loud<br>
        That maybe we found love right where we are<br>
        Oh baby, we found love right where we are (maybe)<br>
        And we found love right where we are`  
    },
    {
        path: 'perfect.mp3',
        displayName: 'Perfect',
        cover: 'perfect.png',
        artist: 'Ed Sheeran',
        lyrics: `I found a love for me<br>
        Oh, darling, just dive right in and follow my lead<br>
        Well, I found a girl, beautiful and sweet<br>
        Oh, I never knew you were the someone waitin' for me<br>
        'Cause we were just kids when we fell in love, not knowin' what it was<br>
        I will not give you up this time<br>
        Oh, darling, just kiss me slow, your heart is all I own<br>
        And in your eyes, you're holding mine<br>
        Baby, I'm dancin' in the dark with you between my arms<br>
        Barefoot on the grass while listenin' to our favourite song<br>
        When you said you looked a mess, I whispered underneath my breath<br>
        But you heard it, "Darling, you look perfect tonight"<br>
        Well, I found a woman, stronger than anyone I know<br>
        She shares my dreams, I hope that someday, I'll share her home<br>
        I found a love to carry more than just my secrets<br>
        To carry love, to carry children of our own<br>
        We are still kids, but we're so in love, fightin' against all odds<br>
        I know we'll be alright this time<br>
        Darling, just hold my hand, be my girl, I'll be your man<br>
        I see my future in your eyes<br>
        Oh, baby, I'm dancin' in the dark with you between my arms<br>
        Barefoot on the grass while listenin' to our favourite song<br>
        When I saw you in that dress, lookin' so beautiful<br>
        I don't deserve this, darling, you look perfect tonight<br>
        No, no, no<br>
        Mm, oh<br>
        Baby, I'm dancin' in the dark with you between my arms<br>
        Barefoot on the grass, oh, listenin' to our favourite song<br>
        I have faith in what I see, now I know I have met<br>
        An angel in person, and she looks perfect<br>
        Though I don't deserve this, you look perfect tonight`  
    },
    {
        path: 'photograph.mp3',
        displayName: 'Photograph',
        cover: 'photograph.jpg',
        artist: 'Ed Sheeran',
        lyrics: `Loving can hurt, loving can hurt sometimes<br>
        But it's the only thing that I know<br>
        When it gets hard, you know it can get hard sometimes<br>
        It is the only thing makes us feel alive<br>
        We keep this love in a photograph<br>
        We made these memories for ourselves<br>
        Where our eyes are never closing<br>
        Hearts are never broken<br>
        And time's forever frozen still<br>
        So you can keep me<br>
        Inside the pocket of your ripped jeans<br>
        Holding me closer 'til our eyes meet<br>
        You won't ever be alone, wait for me to come home<br>
        Loving can heal, loving can mend your soul<br>
        And it's the only thing that I know, know<br>
        I swear it will get easier<br>
        Remember that with every piece of ya<br>
        Hmm, and it's the only thing we take with us when we die<br>
        Hmm, we keep this love in this photograph<br>
        We made these memories for ourselves<br>
        Where our eyes are never closing<br>
        Hearts were never broken<br>
        And time's forever frozen, still<br>
        So you can keep me<br>
        Inside the pocket of your ripped jeans<br>
        Holding me closer 'til our eyes meet<br>
        You won't ever be alone<br>
        And if you hurt me<br>
        That's okay, baby, only words bleed<br>
        Inside these pages, you just hold me<br>
        And I won't ever let you go<br>
        Wait for me to come home<br>
        Wait for me to come home<br>
        Wait for me to come home<br>
        Wait for me to come home<br>
        Oh, you can fit me<br>
        Inside the necklace you got when you were sixteen<br>
        Next to your heartbeat where I should be<br>
        Keep it deep within your soul<br>
        And if you hurt me<br>
        Well, that's okay, baby, only words bleed<br>
        Inside these pages, you just hold me<br>
        And I won't ever let you go<br>
        When I'm away, I will remember how you kissed me<br>
        Under the lamppost back on Sixth street<br>
        Hearing you whisper through the phone<br>
        "Wait for me to come home"`  
    },
    {
        path: 'koidorobou.mp3',
        displayName: '恋泥棒',
        cover: 'koidorobou.png',
        artist: '「ユイカ」',
        lyrics: `3, 2, 1で盗まれた<br>
        私の恋心<br>
        勝手に盗んだ貴方は<br>
        恋泥棒だ<br>
        貴方を探して3秒<br>
        聞き慣れた笑い声に振り向いて<br>
        貴方を見つけて2秒<br>
        誰にも見えない口元がにやけて<br>
        貴方と目が合う1秒<br>
        その瞬間に やられた<br>
        もう抜け出せないや<br>
        恋の始まりの合図<br>
        この胸の高鳴りはもう<br>
        止められないよ<br>
        3, 2, 1で盗まれた<br>
        私の恋心<br>
        勝手に盗んだんだから<br>
        捨てずに貴方が持っててね<br>
        3, 2, 1で捕まえる<br>
        窃盗容疑の貴方を<br>
        私と貴方の 恋のかけ引き<br>
        私と貴方の 恋の始まり<br>
        どうせ貴方はきっと<br>
        私の気持ちには気づいてるんでしょ？<br>
        それなのに貴方はずっと<br>
        知らないふりして私と話すんだ<br>
        もういっそ貴方にちゃんと<br>
        伝えてみようかな<br>
        なんて できるわけないのにね<br>
        遠くにいてもわかる<br>
        貴方の歩き方さえ<br>
        愛おしくて<br>
        3, 2, 1で盗んでよ<br>
        私の全部を<br>
        淡い期待だけ残して行かないで<br>
        3, 2, 1で捕まえるの<br>
        そこから動いちゃだめだよ<br>
        私と貴方の 恋を続かせてよ<br>
        2人きりの放課後<br>
        うるさくなる心臓が<br>
        私の言葉を詰まらせて<br>
        何も言えなくて<br>
        大きく息を吸って<br>
        「あのね 私 貴方のことが」<br>
        ってそのとき貴方が口を開いた<br>
        「ちょっと待って 僕から言わせて」<br>
        3, 2, 1で盗まれた<br>
        私の恋心<br>
        勝手に盗んだんだから<br>
        そのままずっと離さないで<br>
        3, 2, 1で結ばれたんだ<br>
        このまま永遠に<br>
        終わらない 終われない<br>
        そんな恋にしよう<br>
        私と貴方の 恋物語` 
    }, 
    {
        path: 'thewayyouare.mp3',
        displayName: 'Just The Way You Are',
        cover: 'thewayyouare.jpeg',
        artist: 'Bruno Mars',
        lyrics: `Oh, her eyes, her eyes<br>
        Make the stars look like they're not shinin'<br>
        Her hair, her hair<br>
        Falls perfectly without her tryin'<br>
        She's so beautiful and I tell her everyday<br>
        Yeah, I know, I know<br>
        When I compliment her, she won't believe me<br>
        And it's so, it's so<br>
        Sad to think that she don't see what I see<br>
        But every time she asks me, "Do I look okay?"<br>
        I say<br>
        When I see your face<br>
        There's not a thing that I would change<br>
        'Cause you're amazing<br>
        Just the way you are<br>
        And when you smile<br>
        The whole world stops and stares for a while<br>
        'Cause girl, you're amazing<br>
        Just the way you are<br>
        Yeah<br>
        Her lips, her lips<br>
        I could kiss them all day if she'd let me<br>
        Her laugh, her laugh<br>
        She hates, but I think it's so sexy<br>
        She's so beautiful and I tell her everyday<br>
        Oh, you know, you know<br>
        You know I'd never ask you to change<br>
        If perfect's what you're searchin' for, then just stay the same<br>
        So don't even bother askin' if you look okay<br>
        You know I'll say<br>
        When I see your face<br>
        There's not a thing that I would change<br>
        'Cause you're amazing<br>
        Just the way you are<br>
        And when you smile<br>
        The whole world stops and stares for a while<br>
        'Cause girl, you're amazing<br>
        Just the way you are<br>
        The way you are<br>
        The way you are<br>
        Girl, you're amazing<br>
        Just the way you are<br>
        When I see your face<br>
        There's not a thing that I would change<br>
        'Cause you're amazing<br>
        Just the way you are<br>
        And when you smile<br>
        The whole world stops and stares for a while<br>
        'Cause girl, you're amazing<br>
        Just the way you are<br>
        Yeah`

    },
    {
        path: 'fightmusic.mp3',
        displayName: 'Fight Music',
        cover: 'fightmusic.jpeg',
        artist: 'SEKAI NO OWARI',
        lyrics: `あぁもう嫌になっちゃうな、ほんと何も上手くいかないや<br>
        戦うべき「敵」は本当は僕らは分かってる<br>
        99戦中99敗もう涙も出ないよほんと、もうなんつーの<br>
        そうねコイツは所謂「挫折」だね<br>
        あーもう何にも考えたくもないや<br>
        酒でも飲んで全て忘れちまうか<br>
        そんなことが何の解決にもならないことなんて<br>
        学校に行ってない僕でもわかるんだ<br>
        僕らがいますぐ欲しいのは「ソレ」から逃げる「理由」なんかじゃなくて<br>
        僕らがいますぐ欲しいのは「ソレ」と戦う「勇気」が欲しいんだ<br>
        どれだけ遠くに逃げても「ソレ」は僕の前に立ちはだかる<br>
        だから僕がいますぐ欲しいのは「ソレ」と戦う「勇気」が欲しいんだ<br>
        Ah何で勝てないのかなんて本当は僕も分かってる<br>
        だって本気なんか出して負けたら どうする?<br>
        もうさ戦いを挑むから負けんだ<br>
        戦わなくていい「理由」を探しにいく為の旅でもふらっと行こうかな<br>
        あぁもう地球をどれだけ廻ったって<br>
        少しも楽になんかならないんだ<br>
        そんなことが何の解決にもならないことなんて<br>
        僕らはずっと解っていたんだ<br>
        僕らがいますぐ欲しいのは「ソレ」から逃げる「理由」なんかじゃなくて<br>
        僕らがいますぐ欲しいのは「ソレ」と戦う「勇気」が欲しいんだ<br>
        どれだけ遠くに逃げても「ソレ」は僕の前に立ちはだかる<br>
        だから僕がいますぐ欲しいのは「ソレ」と戦う「勇気」が欲しいんだ<br>
        僕がいますぐ欲しいのは「ソレ」から逃げる「理由」なんかじゃなくて<br>
        僕がいますぐ欲しいのは「ソレ」と戦う「勇気」が欲しいんだ<br>
        どんなに醜く負けても僕は勝つまで戦う「理由」があんだ<br>
        こんな所で負けられない、くらえ僕のカイシンの一撃 イエーイ<br>
        あぁもう嫌になっちゃうよほんと、これで100戦中100敗<br>
        それでも僕は戦い続けるよ 勝つ為に`
    },
    {
        path: 'nemurihime.mp3',
        displayName: '眠り姫',
        cover: 'nemurihime.png',
        artist: 'SEKAI NO OWARI',
        lyrics: `君と僕とで世界を 冒険してきたけど<br>
        泣いたり 笑ったりして<br>
        僕らはどんなときでも<br>
        手を繋いできたけど<br>
        いつかは いつの日かは<br>
        ある朝 僕が目を覚ますと<br>
        この世界には君はいないんだね<br>
        驚かそうとして 隠れてみても<br>
        君は探しにこないんだ<br>
        Ah 君はいつの日か<br>
        深い眠りにおちてしまうんだね<br>
        そしたら もう目を覚まさないんだね<br>
        僕らがいままで 冒険した世界と<br>
        僕は一人で戦わなきゃいけないんだね<br>
        ボーっと火を吹くドラゴンも<br>
        僕ら二人で戦ったね<br>
        勇者の剣も見つけてきたよね<br>
        Ah このまま君が<br>
        起きなかったらどうしよう<br>
        そんなこと思いながら<br>
        君の寝顔を見ていたんだ<br>
        こんな青空のときでも<br>
        どんな嵐のときでも<br>
        手を繋いできたけど<br>
        こんなに嬉しいときも<br>
        どんなに悲しいときも<br>
        いつかは いつの日かは<br>
        ある朝 僕が目を覚ますと<br>
        この世界には君はいないんだね<br>
        起こそうとして 揺さぶるけど<br>
        君はもう目を覚まさないんだ<br>
        Ah 君はいつの日か<br>
        深い眠りにおちてしまうんだね<br>
        そしたら もう目を覚まさないんだね<br>
        僕らがいままで 冒険した世界と<br>
        僕は一人で戦わなきゃいけないんだね<br>
        Ah まだ見ぬ宝も<br>
        僕ら二人で探しに行ったね<br>
        星が降る夜に船を出してさ<br>
        Ah このまま君が<br>
        起きなかったらどうしよう<br>
        そんなこと思いながら 君の寝顔を<br>
        見ていたんだ<br>
        Ah 君はいつの日か<br>
        深い眠りにおちてしまうんだね<br>
        そしたらもう目を覚まさないんだね<br>
        僕らがいままで 冒険した世界と<br>
        僕は一人で戦わなきゃいけないんだね<br>
        ボーっと火を吹くドラゴンも<br>
        僕ら二人で戦ったね<br>
        勇者の剣も見つけてきたよね<br>
        Ah このまま君が<br>
        起きなかったらどうしよう<br>
        そんなこと思いながら<br>
        君の寝顔を見ていたんだ<br>
        Yeah oh`
    },
    {
        path: 'rewritethestars.mp3',
        displayName: 'Rewrite The Stars',
        cover: 'rewritethestars.jpg',
        artist: 'Anne-Marie & James Arthur',
        lyrics: `You know I want you<br>
        It's not a secret I try to hide<br>
        You know you want me<br>
        So don’t keep sayin' our hands are tied<br>
        You claim it's not in the cards<br>
        And fate is pullin’ you miles away and out of reach from me<br>
        But you're here in my heart<br>
        So who can stop me if I decide that you're my destiny?<br>
        What if we rewrite the stars?<br>
        Say you were made to be mine<br>
        Nothin' could keep us apart<br>
        You'd be the one I was meant to find<br>
        It's up to you and it's up to me<br>
        No one can say what we get to be<br>
        So why don't we rewrite the stars?<br>
        Maybe the world could be ours tonight<br>
        Ah-oh (No, no, no, no)<br>
        Ah-oh (Mm)<br>
        You think it’s easy<br>
        You think I don’t wanna run to you, yeah<br>
        But there are mountains (There are mountains)<br>
        And there are doors that we can't walk through<br>
        I know you’re wonderin' why<br>
        Because we're able to be just you and me within these walls<br>
        But when we go outside<br>
        You're gonna wake up and see that it was hopeless after all<br>
        No one can rewrite the stars<br>
        How can you say you’ll be mine?<br>
        Everything keeps us apart<br>
        And I'm not the one you were meant to find (The one you were meant to find)<br>
        It's not up to you, it's not up to me (Yeah)<br>
        When everyone tells us what we can be<br>
        And how can we rewrite the stars?<br>
        Say that the world can be ours tonight<br>
        All I want is to fly with you<br>
        All I want is to fall with you<br>
        So just give me all of you<br>
        It feels impossible<br>
        It's not impossible<br>
        Is it impossible?<br>
        Say that it's possible<br>
        How do we rewrite the stars?<br>
        Say you were made to be mine<br>
        And nothin' could keep us apart<br>
        'Cause you are the one I was meant to find<br>
        It's up to you and it's up to me<br>
        No one could say what we get to be<br>
        And why don't we rewrite the stars?<br>
        Changin' the world to be ours<br>
        Ah-oh (No, no, no, no)<br>
        Ah-oh (Mm)<br>
        You know I want you<br>
        It's not a secret I try to hide<br>
        But I can't have you<br>
        We're bound to break and my hands are tied`
    },
    {
        path: 'lovesosweet.mp3',
        displayName: 'Love So Sweet',
        cover: 'lovesosweet.jpg',
        artist: '嵐',
        lyrics: `Wow oh oh, yeah, yeah, yeah<br>
        Wow oh oh, yeah, yeah, yeah<br>
        Wow oh oh<br>
        輝いたのは鏡でも<br>
        太陽でもなくて<br>
        君だと気付いたときから<br>
        あの涙ぐむ雲のずっと上には<br>
        頬笑む月 love story またひとつ<br>
        傷ついた夢は きのうの彼方へ<br>
        空に響け 愛の歌<br>
        思い出 ずっとずっと 忘れない空<br>
        ふたりが離れていっても<br>
        こんな好きな人に 出逢う季節<br>
        二度と無い<br>
        光ってもっと 最高の lady<br>
        きっとそっと想い届く<br>
        信じることがすべて Love So Sweet<br>
        Wow oh oh, yeah, yeah, yeah<br>
        Wow oh oh, yeah, yeah, yeah<br>
        Wow oh oh<br>
        そこからいつも見えるよに<br>
        この手を空に向け 広がる<br>
        君との思い出<br>
        あの頑なで 意地っ張りな<br>
        僕を変えた君の手 love story<br>
        歩き出す<br>
        曲がりくねってた 二つの旅路は<br>
        ここでひとつ 虹になれ<br>
        思い出 ずっとずっと<br>
        追いかけた夢<br>
        ふたりが遠くへ行っても<br>
        どんな辛い夜も<br>
        くじけそうな誓いでも<br>
        笑ってもっと 最後の lady<br>
        きっとそっと願い届く<br>
        明けない夜はないよ Love So Sweet<br>
        伝えきれぬ愛しさは<br>
        花になって 街に降って<br>
        どこにいても君を<br>
        "ここ" に感じてる<br>
        思い出 ずっとずっと 忘れない空<br>
        ふたりが離れていっても<br>
        こんな好きな人に<br>
        出逢う季節二度と無い<br>
        光ってもっと 最高の lady<br>
        きっとそっと想い届く<br>
        信じることがすべて<br>
        明けない夜はないよ<br>
        信じることがすべて Love So Sweet<br>
        Wow oh oh, yeah, yeah, yeah<br>
        Wow oh oh, yeah, yeah, yeah<br>
        Wow oh oh<br>
        No, no, no, yeah<br>
        Wow oh oh, yeah, yeah, yeah<br>
        Wow oh oh, yeah, yeah, yeah<br>
        Wow oh oh`
    },
    {
        path: 'lovelikeyou.mp3',
        displayName: 'Love Like You',
        cover: 'lovelikeyou.png',
        artist: 'Rebecca Sugar',
        lyrics: `If I could begin to be<br>
        Half of what you think of me<br>
        I could do about anything<br>
        I could even learn how to love<br>
        When I see the way you act<br>
        Wondering when I'm coming back<br>
        I could do about anything<br>
        I could even learn how to love like you<br>
        I always thought I might be bad<br>
        Now I'm sure that it's true<br>
        'Cause I think you're so good<br>
        And I'm nothing like you<br>
        Look at you go<br>
        I just adore you<br>
        I wish that I knew<br>
        What makes you think I'm so special<br>
        If I could begin to do<br>
        Something that does right by you<br>
        I would do about anything<br>
        I would even learn how to love<br>
        When I see the way you look<br>
        Shaken by how long it took<br>
        I could do about anything<br>
        I could even learn how to love like you<br>
        Love like you<br>
        Love me like you`
    },
    {
        path: 'exagerado.mp3',
        displayName: 'Exagerado',
        cover: 'exagerado.jpeg',
        artist: 'Cazuza',
        lyrics: `Amor da minha vida<br>
        Daqui até a eternidade<br>
        Nossos destinos foram traçados<br>
        Na maternidade<br>
        Paixão cruel, desenfreada<br>
        Te trago mil rosas roubadas<br>
        Pra desculpar minhas mentiras<br>
        Minhas mancadas<br>
        Exagerado<br>
        Jogado aos teus pés<br>
        Eu sou mesmo exagerado<br>
        Adoro um amor inventado<br>
        Eu nunca mais vou respirar<br>
        Se você não me notar<br>
        Eu posso até morrer de fome<br>
        Se você não me amar<br>
        Por você eu largo tudo<br>
        Vou mendigar, roubar, matar<br>
        Até nas coisas mais banais<br>
        Pra mim é tudo ou nunca mais<br>
        Exagerado<br>
        Jogado aos teus pés<br>
        Eu sou mesmo exagerado<br>
        Adoro um amor inventado<br>
        E por você eu largo tudo<br>
        Carreira, dinheiro, canudo<br>
        Até nas coisas mais banais<br>
        Pra mim é tudo ou nunca mais<br>
        Exagerado<br>
        Jogado aos teus pés<br>
        Eu sou mesmo exagerado<br>
        Adoro um amor inventado<br>
        Jogado aos teus pés<br>
        Com mil rosas roubadas, exagerado<br>
        Eu adoro um amor inventado<br>
        Jogado aos teus pés, baby, baby<br>
        Eu sou mesmo exagerado<br>
        Adoro um amor inventado`
    },
    {
        path: 'assimsemvoce.mp3',
        displayName: 'Fico Assim Sem Você',
        cover: 'ficoassimsemvoce.png',
        artist: 'Adriana Calcanhotto',
        lyrics: `Avião sem asa, fogueira sem brasa<br>
        Sou eu assim sem você<br>
        Futebol sem bola<br>
        Piu-piu sem Frajola<br>
        Sou eu assim sem você<br>
        Por que é que tem que ser assim?<br>
        Se o meu desejo não tem fim<br>
        Eu te quero a todo instante<br>
        Nem mil alto-falantes<br>
        Vão poder falar por mim<br>
        Amor sem beijinho<br>
        Buchecha sem Claudinho<br>
        Sou eu assim sem você<br>
        Circo sem palhaço<br>
        Namoro sem amasso<br>
        Sou eu assim sem você<br>   
        Tô louca pra te ver chegar<br>
        Tô louca pra te ter nas mãos<br>
        Deitar no teu abraço<br>
        Retomar o pedaço<br>
        Que falta no meu coração<br> 
        Eu não existo longe de você<br>
        E a solidão é o meu pior castigo<br>
        Eu conto as horas<br>
        Pra poder te ver<br>
        Mas o relógio tá de mal comigo<br>     
        Por quê? Por quê?<br>      
        Neném sem chupeta<br>
        Romeu sem Julieta<br>
        Sou eu assim sem você<br>
        Carro sem estrada<br>
        Queijo sem goiabada<br>
        Sou eu assim sem você<br>      
        Por que é que tem que ser assim?<br>
        Se o meu desejo não tem fim<br>
        Eu te quero a todo instante<br>
        Nem mil alto-falantes<br>
        Vão poder falar por mim<br>        
        Eu não existo longe de você<br>
        E a solidão é o meu pior castigo<br>
        Eu conto as horas pra poder te ver<br>
        Mas o relógio tá de mal comigo<br>       
        Eu não existo longe de você<br>
        E a solidão é o meu pior castigo<br>
        Eu conto as horas pra poder te ver<br>
        Mas o relógio tá de mal comigo`
    },
    {
        path: 'diewithasmile.mp3',
        displayName: 'Die With A Smile',
        cover: 'diewithasmile.jpeg',
        artist: 'Bruno Mars & Lady Gaga',
        lyrics: `I, I just woke up from a dream<br>
        Where you and I had to say goodbye<br>
        And I don't know what it all means<br>
        But since I survived, I realized<br>
        Wherever you go, that's where I'll follow<br>
        Nobody's promised tomorrow<br>
        So I'ma love you every night like it's the last night<br>
        Like it's the last night<br>
        If the world was ending, I'd wanna be next to you<br>
        If the party was over and our time on Earth was through<br>
        I'd wanna hold you just for a while and die with a smile<br>
        If the world was ending, I'd wanna be next to you<br>
        (Ooh)<br>
        Oh, lost, lost in the words that we scream<br>
        I don't even wanna do this anymore<br>
        'Cause you already know what you mean to me<br>
        And our love's the only war worth fighting for<br>
        Wherever you go, that's where I'll follow<br>
        Nobody's promised tomorrow<br>
        So I'ma love you every night like it's the last night<br>
        Like it's the last night<br>
        If the world was ending, I'd wanna be next to you<br>
        If the party was over and our time on Earth was through<br>
        I'd wanna hold you just for a while and die with a smile<br>
        If the world was ending, I'd wanna be next to you<br>
        Right next to you<br>
        Next to you<br>
        Right next to you<br>
        Oh-oh, oh<br>
        If the world was ending, I'd wanna be next to you<br>
        If the party was over and our time on Earth was through<br>
        I'd wanna hold you just for a while and die with a smile<br>
        If the world was ending, I'd wanna be next to you<br>
        If the world was ending, I'd wanna be next to you<br>
        I'd wanna be next to you`
    },
    {
        path: 'lostinjapan.mp3',
        displayName: 'Lost In Japan',
        cover: 'lostinjapan.png',
        artist: 'Shawn Mendes',
        lyrics: `All it'd take is one flight<br>
        We'd be in the same time zone<br>
        Looking through your timeline<br>
        Seeing all the rainbows, I<br>
        I got an idea<br>
        And I know that it sounds crazy<br>
        I just wanna see ya<br>
        Oh, I gotta ask<br>
        Do you got plans tonight?<br>
        I'm a couple hundred miles from Japan, and I<br>
        I was thinkin' I could fly to your hotel tonight<br>
        'Cause I can't get you off my mind<br>
        Can't get you off my mind<br>
        Can't get you off my mind (uh)<br>
        I could feel the tension<br>
        We could cut it with a knife<br>
        I know it's more than just a friendship<br>
        I can hear you think I'm right, yeah<br>
        Do I gotta convince you<br>
        That you shouldn't fall asleep?<br>
        It'll only be a couple hours<br>
        And I'm about to leave<br>
        Do you got plans tonight?<br>
        I'm a couple hundred miles from Japan, and I<br>
        I was thinkin' I could fly to your hotel tonight<br>
        'Cause I can't get you off my mind<br>
        Can't get you off my mind<br>
        Can't get you off my mind<br>
        Do you got plans tonight?<br>
        I was hopin' I could get lost in your paradise<br>
        The only thing I'm thinkin' 'bout is you and I<br>
        'Cause I can't get you off my mind<br>
        Can't get you off my mind<br>
        I can't seem to get you off my mind<br>
        Let's get lost tonight (uh)<br>
        Let's get lost tonight<br>
        Baby, you and<br>
        I can't seem to get you off my mind<br>
        Let's get lost tonight<br>
        Let's get lost tonight<br>
        Baby, you and<br>
        I can't seem to get you off my mind<br>
        Do you got plans tonight?<br>
        I'm a couple hundred miles from Japan, and I<br>
        I was thinkin' I could fly to your hotel tonight<br>
        'Cause I can't get you off my mind<br>
        I can't get you off my mind<br>
        Do you got plans tonight, baby?<br>
        I was hopin' I could get lost in your paradise (paradise)<br>
        The only thing I'm thinkin' 'bout is you and I<br>
        And I can't get you off my mind<br>
        Can't get you off my mind<br>
        I can't seem to get you off my mind, yeah<br>
        Let's get lost tonight<br>
        Let's get lost tonight<br>
        Baby, you and<br>
        I can't seem to get you off my mind<br>
        Let's get lost tonight<br>
        Let's get lost tonight<br>
        Baby, you and<br>
        I can't seem to get you off my mind`
    },
    {
        path: 'meuabrigo.mp3',
        displayName: 'Meu Abrigo',
        cover: 'meuabrigo.jpg',
        artist: 'Melim',
        lyrics: `Desejo a você<br>
        O que há de melhor<br>
        A minha companhia<br>
        Pra não se sentir só<br>
        O sol, a lua e o mar<br>
        Passagem pra viajar<br>
        Pra gente se perder<br>
        E se encontrar<br>
        Vida boa, brisa e paz<br>
        Nossas brincadeiras ao entardecer<br>
        Rir atoa é bom demais<br>
        O meu melhor lugar sempre é você<br>
        Você é a razão da minha felicidade<br>
        Não vá dizer que eu não sou sua cara-metade<br>
        Meu amor, por favor, vem viver comigo<br>
        No seu colo é o meu abrigo<br>
        Quero presentear<br>
        Com flores Iemanjá<br>
        Pedir um paraíso<br>
        Pra gente se encostar<br>
        Uma viola a tocar<br>
        Melodias pra gente dançar<br>
        A benção das estrelas<br>
        A nos iluminar<br>
        Vida boa, brisa e paz<br>
        Trocando olhares ao anoitecer<br>
        Rir atoa é bom demais<br>
        Olhar pro céu, sorrir e agradecer<br>
        Você é a razão da minha felicidade<br>
        Não vá dizer que eu não sou sua cara-metade<br>
        Meu amor por favor, vem viver comigo<br>
        No seu colo é o meu abrigo<br>
        Meu abrigo<br>
        No seu colo é o meu abrigo<br>
        O meu abrigo<br>
        Você é a razão da minha felicidade<br>
        Não vá dizer que eu não sou sua cara-metade<br>
        Meu amor por favor, vem viver comigo<br>
        No seu colo é o meu abrigo<br>
        Meu abrigo<br>
        No seu colo é o meu abrigo<br>
        No seu colo é o meu abrigo`
    },
    {
        path: 'ouvidizer.mp3',
        displayName: 'Ouvi Dizer',
        cover: 'ouvidizer.jpeg',
        artist: 'Melim',
        lyrics: `Pa-pa-pa-pa-ra-pa-pa-pa<br>
        Uh-oh-uh-oh-oh-oh<br>
        Uh-oh-uh-oh-oh-oh<br>
        Ah, se eu acordasse todo dia com o seu bom dia<br>
        De tanto café na cama faltariam xícaras<br>
        Me atrasaria, só pra ficar de preguiça<br>
        Se toda arte se inspirasse em seus traços<br>
        Então qualquer esboço viraria um quadro Monalisa<br>
        Com você tudo fica tão leve<br>
        Que até te levo na garupa da bicicleta<br>
        O preto e branco tem cor<br>
        A vida tem mais humor<br>
        E pouco a pouco o vazio se completa<br>
        O errado se acerta<br>
        O quebrado conserta<br>
        E assim tudo muda mesmo sem mudar<br>
        A paz se multiplicou<br>
        Que bom que você chegou pra somar<br>
        Ouvi dizer que existe paraíso na terra<br>
        E coisas que eu nunca entendi<br>
        Coisas que eu nunca entendi<br>
        Só ouvi dizer que quando arrepia já era<br>
        Coisas que eu só entendi<br>
        Quando eu te conheci<br>
        Pa-pa-pa-pa-ra-pa-pa-pa<br>
        Uh-oh-uh-oh-oh-oh<br>
        Uh-oh-uh-oh-oh-oh<br>
        Com você tudo fica tão leve<br>
        Que até te levo na garupa da bicicleta<br>
        O preto e branco tem cor<br>
        A vida tem mais humor<br>
        E pouco a pouco o vazio se completa<br>
        O errado se acerta<br>
        O quebrado conserta<br>
        E assim tudo muda mesmo sem mudar<br>
        A paz se multiplicou<br>
        Que bom que você chegou pra somar<br>
        Ouvi dizer que existe paraíso na terra<br>
        E coisas que eu nunca entendi<br>
        Coisas que eu nunca entendi<br>
        Só ouvi dizer que quando arrepia já era<br>
        Coisas que eu só entendi<br>
        Quando eu te conheci<br>
        Ouvi dizer que existe paraíso na terra<br>
        E coisas que eu nunca entendi<br>
        Coisas que eu nunca entendi<br>
        Só ouvi dizer que quando arrepia já era<br>
        Coisas que eu só entendi<br>
        Quando eu te conheci<br>
        Pa-pa-pa-pa-ra-pa-pa-pa<br>
        Uh-oh-uh-oh-oh-oh<br>
        Uh-oh-uh-oh-oh-oh<br>
        Na-ra-na<br>
        Pa-pa-pa-pa-ra-pa-pa-pa<br>
        Uh-oh-uh-oh-oh-oh<br>
        Uh-oh-uh-oh-oh-oh<br>
        Na-ra-na`
    },
    {
        path: 'goldenhour.mp3',
        displayName: 'Golden Hour',
        cover: 'goldenhour.jpeg',
        artist: 'JVKE',
        lyrics: `It was just two lovers<br>
        Sittin' in the car, listening to Blonde<br>
        Fallin' for each other<br>
        Pink and orange skies, feelin' super childish<br>
        No Donald Glover<br>
        Missed call from my mother<br>
        Like, "Where you at tonight?" Got no alibi<br>
        I was all alone with the love of my life<br>
        She's got glitter for skin<br>
        My radiant beam in the night<br>
        I don't need no light to see you<br>
        Shine<br>
        It's your golden hour (oh)<br>
        You slow down time<br>
        In your golden hour (oh)<br>
        We were just two lovers<br>
        Feet up on the dash, drivin' nowhere fast<br>
        Burnin' through the summer<br>
        Radio on blast, make the moment last<br>
        She got solar power<br>
        Minutes feel like hours<br>
        She knew she was the baddest, can you even imagine<br>
        Fallin' like I did?<br>
        For the love of my life<br>
        She's got glow on her face<br>
        A glorious look in her eyes<br>
        My angel of light<br>
        I was all alone with the love of my life<br>
        She's got glitter for skin<br>
        My radiant beam in the night<br>
        I don't need no light to see you<br>
        Shine<br>
        It's your golden hour (oh)<br>
        You slow down time<br>
        In your golden hour (oh)`
    },
    {
        path: 'churaqt.mp3',
        displayName: 'CH(URAQT)',
        cover: 'churaqt.jpg',
        artist: 'Jennifer Tee',
        lyrics: `I think the chemists made a mistake<br>
        Designing the fractionating column<br>
        'Cause it should be you at the bottom<br>
        'Cause you're smoking hot<br>
        I also heard you're like an alkane<br>
        Single bonds between carbon atoms<br>
        I was hoping maybe I could change that<br>
        'Cause alkanes are lame<br>
        Your boiling point's so high<br>
        Even bitumen can't deny<br>
        Every fraction has a use and yours is<br>
        Stealing my heart<br>
        Be the carbon to my hydrogen<br>
        Then it'll be me and you not them<br>
        Our displayed formula would be<br>
        Shaped as a heart<br>
        You're my living oxygen<br>
        We have good chemistry, maybe we should react<br>
        Can you complete my combustion?<br>
        I was thinking that we could bond<br>
        The name's Bond, covalent bond<br>
        If you were a molecular formula<br>
        You'd be C-H-U-R-A-Q-T<br>
        Your boiling point's so high<br>
        Even bitumen can't <br>
        Every fraction has a use and yours is<br>
        Stealing my heart<br>
        Be the carbon to my hydrogen<br>
        Then it'll be me and you not them<br>
        Our displayed formula would be<br>
        Shaped as a heart<br>
        You're my functional group<br>
        Like an ester, you're sweet too<br>
        Our love's like most polymers<br>
        Non-biodegradable<br>
        So can you be an alkene with me instead?<br>
        Our love remains unsaturated<br>
        You don't need no UV light to react with my heart<br>
        Our displayed formula would be shaped as a heart`
    },
    {
        path: 'nijirosensou.mp3',
        displayName: '虹色の戦争',
        cover: 'nijirosensou.png',
        artist: 'SEKAI NO OWARI',
        lyrics: `One, two, three<br>
        花に声があるなら何を叫ぶのだろう<br>
        「自由の解放」の歌を<br>
        世界に響かせているだろう<br>
        平和に耳があるなら<br>
        何が聴こえるだろう<br>
        偽物の自由の歌が<br>
        爆音で聴こえるだろう<br>
        花が叫ぶ愛の世界で<br>
        僕等は平和を歌っている<br>
        鳥籠の中で終わりを迎えた<br>
        「自由」は僕になんて言うだろう<br>
        生物達の虹色の戦争<br>
        貴方が殺した命の歌が僕の頭に響く<br>
        The war of the rainbow color<br>
        生物達の虹色の戦争<br>
        貴方が殺した自由の歌は<br>
        貴方の心に響いてますか?<br>
        The war of the rainbow color<br>
        虫に歌があるなら何を叫ぶのだろう<br>
        「平和の解放」の歌を<br>
        世界に響かせてるだろう<br>
        自由に耳があるなら<br>
        何が聴こえるだろう<br>
        偽物の平和の歌が<br>
        爆音で聴こえるだろう<br>
        虫が叫ぶ平和な世界で<br>
        僕らは愛を歌っている<br>
        虫籠の中で終わりを<br>
        迎えた「命」は僕に何て言うだろう<br>
        生物達の虹色の戦争<br>
        貴方が殺した命の歌が僕の頭に響く<br>
        The war of the rainbow color<br>
        生物達の虹色の戦争<br>
        貴方が殺した自由の歌は<br>
        貴方の心に響いてますか?<br>
        The war of the rainbow color<br>
        青色の空に神様がきて<br>
        願いを1つ叶えるなら<br>
        花や虫は何を願うのだろう<br>
        青色の空に神様がきて<br>
        願いを1つ叶えるなら<br>
        僕等の命の炎は<br>
        消えてしまうのだろう yeah yeah lalalalala woo`
    },
    {
        path: 'eden.mp3',
        displayName: 'Eden',
        cover: 'eden.jpg',
        artist: 'MONKEY MAJIK',
        lyrics: `さよなら　明日は戻らない<br>
        これはあなたに残した願い<br>
        桜のように　今はただ風に吹かれる<br>
        土から埃へ<br>
        重ねた日々を心において<br>
        姿が変わっても<br>
        どんなことでも　もう泣かないよ<br>
        またいつかどこかで会えるから<br>
        だから怖くないよ　この涙を拭いて<br>
        愛することは　寂しくないよ<br>
        だからいつもどおりに　前を向いて歩きます<br>
        誰かの為に生きられるように<br>
        It's never too late<br>
        I know it's hard but it won't work unless you try<br>
        堅く閉ざされた　重たい扉に<br>
        ざわめきたつ胸が　僕を惑わせる<br>
        出口なんてない　入りくんだ迷宮か？<br>
        かすかに残された　記憶を頼りに<br>
        見つけ出そうとしているのです<br>
        生まれてきたわけを<br>
        くじけそうでも　あきらめないで<br>
        あと少し頑張ってみようかな<br>
        君のその笑顔で　僕は生きていける<br>
        愛することを　教えてくれた<br>
        だからいつもどおりの　その笑顔で見ていてね<br>
        君だけの為に　生きられるように<br>
        It's never too late<br>
        I know it's hard but it won't work unless you try<br>
        この雪が溶ける頃　春がやってくるね<br>
        どんなに寒くても<br>
        また春は必ず<br>
        だから怖くないよこの涙を拭いて<br>
        愛することは寂しくないよ<br>
        だからいつもどおりに　前を向いて歩きます<br>
        誰かの為に　生きられるように<br>
        君のその笑顔で　僕は生きていける<br>
        愛することを　教えてくれた<br>
        だからいつもどおりの　その笑顔で見ていてね<br>
        君だけの為に　生きられるように<br>
        It's never too late<br>
        ありがとう　永遠にふたりで<br>
        I know, I know, I know<br>
        Ooh-la-la-li-la-la-la-la-la-li`
    },
    {
        path: 'heavyrotation.mp3',
        displayName: 'ヘビーローテーション',
        cover: 'heavyrotation.jpg',
        artist: 'AKB48',
        lyrics: `One, two, three, four!<br>
        I want you! (I want you!)<br>
        I need you! (I need you!)<br>
        I love you! (I love you!)<br>
        頭の中<br>
        ガンガン鳴ってる music<br>
        ヘビーローテーション<br>
        ポップコーンが<br>
        弾けるように<br>
        好きという文字が躍る<br>
        顔や声を<br>
        想うだけで<br>
        居ても立ってもいられない<br>
        こんな気持ちになれるって<br>
        僕はついているね<br>
        I want you! (I want you!)<br>
        I need you! (I need you!)<br>
        I love you! (I love you!)<br>
        君に会えて<br>
        ドンドン近づくその距離に<br>
        Max ハイテンション<br>
        I want you! (I want you!)<br>
        I need you! (I need you!)<br>
        I love you! (I love you!)<br>
        ハートの奥<br>
        ジャンジャン溢れる愛しさは<br>
        ヘビーローテーション<br>
        人は誰も<br>
        一生のうち<br>
        何回愛せるのだろう？<br>
        たった一度<br>
        忘れられない<br>
        恋ができたら満足さ<br>
        そんなときめきを感じて<br>
        花は綻ぶのかな<br>
        I feel you! (I feel you!)<br>
        I touch you! (I touch you!)<br>
        I hold you! (I hold you!)<br>
        夢の中で<br>
        ダンダン大きくなって行く<br>
        僕のイマジネーション<br>
        I feel you! (I feel you!)<br>
        I touch you! (I touch you!)<br>
        I hold you! (I hold you!)<br>
        この想いを<br>
        ビンビン伝えて欲しいから<br>
        ヘビーローテーション<br>
        いつも聴いてた<br>
        Favorite song<br>
        あの曲のように<br>
        ずっと 繰り返して<br>
        24時間<br>
        君だけリクエスト中<br>
        I want you! (I want you!)<br>
        I need you! (I need you!)<br>
        I love you! (I love you!)<br>
        君に会えて<br>
        ドンドン近づくその距離に<br>
        Max ハイテンション<br>
        I want you! (I want you!)<br>
        I need you! (I need you!)<br>
        I love you! (I love you!)<br>
        ハートの奥<br>
        ジャンジャン溢れる愛しさは<br>
        ヘビーローテーション<br>
        ヘビーローテーション`
    },
    {
        path: 'kakurenbo.mp3',
        displayName: 'かくれんぼ',
        cover: 'kakurenbo.jpeg',
        artist: 'ALiA',
        lyrics: `「いっせーのー」で鳴り響いたスタートの合図<br>
        なぞった線で結んだ世界<br>
        色付けていく ここから<br>
        物心がつく頃 すでに此処にあった<br>
        僕じゃない誰かの記憶は<br>
        夕陽とともに蘇る<br>
        古ぼけた絵本を取り出して<br>
        落書きの中に１つの答えを見つけた<br>
        自分の価値に 目を疑って<br>
        どこまでだって 堕ちていけるの<br>
        どこか遠くに 消えてしまいたい<br>
        こんな世界じゃ 僕はいらない<br>
        カウントダウンは始まっているよ<br>
        "いっせーのー"で声を上げて<br>
        聴こえてくるんだ<br>
        自分の影の長さに気付く<br>
        もうこんな時間だ<br>
        一等星が顔を出した<br>
        届きそうで手を伸ばした<br>
        次は僕に着いてきなよ<br>
        どんな暗闇でも<br>
        幕は上がりだした<br>
        (もういいかい？まーだだよ)<br>
        色付けていく ここから<br>
        10年後の僕らはすれ違いばかりで<br>
        幻想に想いを馳せては<br>
        "戻れない"そう思いこんだ<br>
        くたびれた心に追い討ちを<br>
        あの頃と変わらない夕陽も<br>
        なんとも思わない<br>
        自分を信じ 歩いていければ<br>
        どこまでだって 昇れるのにな<br>
        カットを跨ぐ その空白に<br>
        大切なモノ 見落としている<br>
        見つけられないと泣きわめく君へ<br>
        "いっせーのー"で声を上げて<br>
        聴こえてくるんだ<br>
        自分の影の長さに気付く<br>
        もうこんな時間だ<br>
        一等賞で駆け抜ける君<br>
        くっついていただけの僕でも<br>
        君の前を歩けるかな？<br>
        こんな頼りない僕でも<br>
        宝箱はホコリをかぶったまま<br>
        無くした鍵はずっと<br>
        君のポケットの中にあった<br>
        散らばっていた全てが<br>
        今ひとつに重なる<br>
        手を取り 始めよう<br>
        僕たちの物語<br>
        一度はいらないと思った<br>
        今なら胸を張れる気がしたんだ<br>
        愛おしくて 掛け声はいつも<br>
        "いっせーのー"で声を上げて<br>
        "いっせーのー"で声を上げて<br>
        聴こえてくるんだ<br>
        自分の影の長さに気付く<br>
        もうこんな時間だ<br>
        一等星が顔を出した<br>
        届きそうで手を伸ばした<br>
        次は僕に着いてきなよ<br>
        どんな暗闇でも<br>
        泣きじゃくった声で<br>
        (もういいかい？まーだだよ)<br>
        笑う君が見えた<br>
        (もういいかい？まーだだよ)<br>
        幕は上がりだした<br>
        色付けていく ここから`
    },
    {
        path: 'hikarunara.mp3',
        displayName: '光るなら',
        cover: 'hikarunara.webp',
        artist: 'Goose House',
        lyrics: `雨上がりの虹も<br>
        凛と咲いた花も<br>
        色づき溢れだす<br>
        茜色の空 仰ぐ君に<br>
        あの日 恋に落ちた<br>
        瞬間のドラマチック<br>
        フィルムの中の一コマも<br>
        消えないよ 心に<br>
        刻むから<br>
        君だよ 君なんだよ<br>
        教えてくれた<br>
        暗闇も光るなら<br>
        星空になる<br>
        悲しみを笑顔に<br>
        もう隠さないで<br>
        煌めくどんな星も<br>
        君を照らすから<br>
        眠りも忘れて<br>
        迎えた朝日が<br>
        やたらと突き刺さる<br>
        低気圧運ぶ 頭痛だって<br>
        忘れる 君に会えば<br>
        静寂はロマンティック<br>
        紅茶に溶けたシュガーのように<br>
        全身に巡るよ 君の声<br>
        君だよ 君なんだよ<br>
        笑顔をくれた<br>
        涙も光るなら<br>
        流星になる<br>
        傷ついたその手を<br>
        もう離さないで<br>
        願いを込めた空に<br>
        明日が来るから<br>
        導いてくれた 光は 君だよ<br>
        つられて僕も 走りだした<br>
        知らぬ間に クロスし始めた<br>
        ほら 今だ ここで 光るなら<br>
        君だよ 君なんだよ<br>
        教えてくれた<br>
        暗闇は終わるから<br>
        君だよ 君なんだよ<br>
        教えてくれた<br>
        暗闇も光るなら<br>
        星空になる<br>
        悲しみを笑顔に<br>
        もう隠さないで<br>
        煌めくどんな星も<br>
        君を照らすから<br>
        答えはいつでも 偶然？必然？<br>
        いつか選んだ道こそ 運命になる<br>
        握りしめたその希望も不安も<br>
        きっと2人を動かす 光になるから`
    },
    {
        path: 'somethingjustlikethis.mp3',
        displayName: 'Something Just Like This',
        cover: 'somethingjustlikethis.png',
        artist: 'Coldplay',
        lyrics: `I've been reading books of old, the legends and the myths<br>
        Achilles and his gold, Hercules and his gifts<br>
        Spider-Man's control and Batman with his fists<br>
        And clearly, I don't see myself upon that list<br>
        But she said, "Where d'you wanna go? How much you wanna risk?<br>
        I'm not looking for somebody with some superhuman gifts<br>
        Some superhero, some fairy tale bliss<br>
        Just something I can turn to, somebody I can kiss"<br>
        I want something just like this<br>
        Doo-doo-doo, doo-doo-doo<br>
        Doo-doo-doo, doo, doo<br>
        Doo-doo-doo, doo-doo-doo<br>
        Oh, I want something just like this<br>
        Doo-doo-doo, doo-doo-doo<br>
        Doo-doo-doo, doo, doo<br>
        Doo-doo-doo, doo, doo-doo<br>
        Oh, I want something just like this<br>
        I want something just like this<br>
        I've been reading books of old, the legends and the myths<br>
        The testaments they told, the moon and its eclipse<br>
        And Superman unrolls a suit before he lifts<br>
        But I'm not the kind of person that it fits<br>
        She said, "Where d'you wanna go? How much you wanna risk?<br>
        I'm not looking for somebody with some superhuman gifts<br>
        Some superhero, some fairy tale bliss<br>
        Just something I can turn to, somebody I can miss"<br>
        I want something just like this<br>
        I want something just like this<br>
        Oh, I want something just like this<br>
        Doo-doo-doo, doo-doo-doo<br>
        Doo-doo-doo, doo, doo<br>
        Doo-doo-doo, doo-doo-doo<br>
        Oh, I want something just like this<br>
        Doo-doo-doo, doo-doo-doo<br>
        Doo-doo-doo, doo, doo<br>
        Doo-doo-doo, doo, doo-doo<br>
        Where d'you wanna go? How much you wanna risk?<br>
        I'm not looking for somebody with some superhuman gifts<br>
        Some superhero, some fairy tale bliss<br>
        Just something I can turn to, somebody I can kiss<br>
        I want something just like this<br>
        Oh, I want something just like this<br>
        Oh, I want something just like this<br>
        Oh, I want something just like this`
    },
    {
        path: 'stereohearts.mp3',
        displayName: 'Stereo Hearts',
        cover: 'stereohearts.jpg',
        artist: 'Gym Class Heroes',
        lyrics: `My heart's a stereo<br>
        It beats for you, so listen close<br>
        Hear my thoughts in every no-ote<br>
        Make me your radio<br>
        And turn me up when you feel low (turn it up a little bit)<br>
        This melody was meant for you (right there)<br>
        Just sing along to my stereo (Gym Class Hero, baby)<br>
        If I was just another dusty record on the shelf<br>
        Would you blow me off and play me like everybody else?<br>
        If I asked you to scratch my back, could you manage that?<br>
        Like it yikky yeah, check it Travie, I can handle that<br>
        Furthermore, I apologize for any skipping tracks<br>
        It's just the last girl that played me left a couple cracks<br>
        I used to, used to, used to, used to, now I'm over that<br>
        'Cause holding grudges over love is ancient artifacts<br>
        If I could only find a note to make you understand<br>
        I'd sing it softly in your ear and grab you by the hand<br>
        Just keep it stuck inside your head, like your favorite tune<br>
        And know my hearts a stereo that only plays for you<br>
        My heart's a stereo<br>
        It beats for you, so listen close<br>
        Hear my thoughts in every no-ote<br>
        Make me your radio<br>
        And turn me up when you feel low<br>
        This melody was meant for you<br>
        Just sing along to my stereo<br>
        to my stereo<br>
        (Oh, oh-oh, oh) just sing along to my stereo<br>
        Let's go!<br>
        If I was an old-school, fifty-pound boombox (remember them?)<br>
        Would you hold me on your shoulder, wherever you walk?<br>
        Would you turn my volume up in front of the cops?<br>
        And crank it higher every time they told you to stop<br>
        And all I ask is that you don't get mad at me<br>
        When you have to purchase mad D batteries<br>
        Appreciate every mixtape your friends make<br>
        You never know, we come and go like on the interstate (never know)<br>
        I think I finally found a note to make you understand<br>
        If you can hit it, sing along and take me by the hand<br>
        Just keep me stuck inside your head, like your favorite tune<br>
        You know my heart's a stereo that only plays for you<br>
        My heart's a stereo<br>
        It beats for you, so listen close (listen)<br>
        Hear my thoughts in every no-ote<br>
        Make me your radio (come on)<br>
        And turn me up when you feel low (turn it up)<br>
        This melody was meant for you<br>
        Just sing along to my stereo (sing along like)<br>
        to my stereo<br>
        (Oh, oh-oh, oh) just sing along to my stereo<br>
        I only pray you'll never leave me behind (never leave me)<br>
        Because good music can be so hard to find (so hard to find)<br>
        I take your hand, hold it closer to mine (yeah)<br>
        Thought love was dead, but now you're changing my mind<br>
        My heart's a stereo<br>
        It beats for you, so listen close<br>
        Hear my thoughts in every no-ote<br>
        Make me your radio<br>
        And turn me up when you feel low<br>
        This melody was meant for you<br>
        Just sing along to my stereo`
    },
    {
        path: 'whatmakesyoubeautiful.mp3',
        displayName: 'What Makes You Beautiful',
        cover: 'whatmakesyoubeautiful.jpeg',
        artist: 'One Direction',
        lyrics: `You're insecure, don't know what for<br>
        You're turnin' heads when you walk through the door<br>
        Don't need makeup to cover up (Huh)<br>
        Bein' the way that you are is enough<br>
        Everyone else in the room can see it<br>
        Everyone else but you<br>
        Baby, you light up my world like nobody else<br>
        The way that you flip your hair gets me overwhelmed<br>
        But when you smile at the ground, it ain't hard to tell<br>
        You don't know, oh-oh, you don't know you're beautiful<br>
        If only you saw what I can see<br>
        You'll understand why I want you so desperately<br>
        Right now I'm looking at you and I can't believe<br>
        You don't know, oh-oh, you don't know you're beautiful, oh-oh<br>
        That's what makes you beautiful<br>
        So c-come on, you got it wrong<br>
        To prove I'm right, I put it in a song<br>
        I don't know why you're being shy<br>
        And turn away when I look into your eyes<br>
        Everyone else in the room can see it<br>
        Everyone else but you<br>
        Baby, you light up my world like nobody else ('Body else)<br>
        The way that you flip your hair gets me overwhelmed<br>
        But when you smile at the ground, it ain't hard to tell<br>
        You don't know, oh-oh, you don't know you're beautiful (Oh)<br>
        If only you saw what I can see<br>
        You'll understand why I want you so desperately<br>
        Right now I'm looking at you and I can't believe<br>
        You don't know, oh-oh, you don't know you're beautiful, oh-oh<br>
        That's what makes you beautiful<br>
        Na, na-na-na, na-na-na, na, na<br>
        Na, na-na-na, na-na<br>
        Na, na-na-na, na-na-na, na, na<br>
        Na, na-na-na, na-na<br>
        Baby, you light up my world like nobody else<br>
        The way that you flip your hair gets me overwhelmed<br>
        But when you smile at the ground, it ain't hard to tell<br>
        (You don't know, oh-oh) You don't know you're beautiful<br>
        Baby, you light up my world like nobody else (Light up my world like nobody else)<br>
        The way that you flip your hair (C'mon) gets me overwhelmed<br>
        But when you smile at the ground (Smile at the ground), it ain't hard to tell<br>
        You don't know, oh-oh, you don't know you're beautiful (Oh, woah)<br>
        If only you saw what I can see<br>
        You'll understand why I want you so desperately (Desperately)<br>
        Right now I'm looking at you and I can't believe<br>
        You don't know (Don't know), oh-oh, you don't know you're beautiful, oh-oh<br>
        You don't know you're beautiful, oh-oh<br>
        That's what makes you beautiful`
    },
    {
        path: 'untilifoundyou.mp3',
        displayName: 'Until I found you',
        cover: 'untilifoundyou.jpeg',
        artist: 'Stephen Sanchez & Em Beihold',
        lyrics: `Georgia, wrap me up in all your<br>
        I want you in my arms<br>
        Oh, let me hold you<br>
        I'll never let you go again like I did<br>
        Oh, I used to say<br>
        I would never fall in love again until I found her<br>
        I said, "I would never fall unless it's you I fall into"<br>
        I was lost within the darkness, but then I found her<br>
        I found you<br>
        Georgia, pulled me in, I asked to<br>
        Love her once again<br>
        You fell, I caught you<br>
        I'll never let you go again like I did<br>
        Oh, I used to say<br>
        I would never fall in love again until I found her<br>
        I said, "I would never fall unless it's you I fall into"<br>
        I was lost within the darkness, but then I found her<br>
        I found you<br>
        I would never fall in love again until I found her<br>
        I said, "I would never fall unless it's you I fall into"<br>
        I was lost within the darkness, but then I found her<br>
        I found you`
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
    const lyricsContainer = document.getElementById('lyrics');
    lyricsContainer.innerHTML = `<p>${song.lyrics || 'No lyrics available'}</p>`;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);



