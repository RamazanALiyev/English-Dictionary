let button = document.querySelector('button');
let word = document.querySelector('#empty');
let translate = document.querySelector('.translate');
const words = [{
    eachWord: 'comma',
    translate: 'vergül'
}, {
    eachWord: 'bracket',
    translate: 'moterize'
}, {
    eachWord: 'midday',
    translate: 'günorta'
}, {
    eachWord: 'nearly',
    translate: 'təxminən'
}, {
    eachWord: 'almost',
    translate: 'təxminən'
}, {
    eachWord: 'in the morning',
    translate: 'səhər'
}, {
    eachWord: 'in the afternoon',
    translate: 'günorta'
}, {
    eachWord: 'in the evening',
    translate: 'axşam'
}, {
    eachWord: 'at night',
    translate: 'gecə'
}, {
    eachWord: 'midnight',
    translate: 'gecə yarisi'
}, {
    eachWord: 'spotlight',
    translate: 'projektor'
}, {
    eachWord: 'ordinal',
    translate: 'sira'
}, {
    eachWord: 'days of the week',
    translate: 'həftənin günləri'
}, {
    eachWord: 'months of the year',
    translate: 'ilin aylari'
}, {
    eachWord: 'seasons',
    translate: 'fəsil'
}, {
    eachWord: 'special days',
    translate: 'xüsusi günlər'
}, {
    eachWord: 'pencil shapener',
    translate: 'karandaş yonan'
}, {
    eachWord: 'folder',
    translate: 'qovluq'
}, {
    eachWord: 'the weekend',
    translate: 'həftə sonu'
}, {
    eachWord: 'a weekday',
    translate: 'həftə içi'
}, {
    eachWord: 'have a good weekend',
    translate: 'həftə sonunuz xoş keçsin'
},
{
    eachWord: 'continent',
    translate: 'qitə'
},
{
    eachWord: 'country',
    translate: 'ölkə'
},
{
    eachWord: 'vowel',
    translate: 'sait'
},
{
    eachWord: 'word stress',
    translate: 'söz vurğusu'
},
{
    eachWord: 'dye',
    translate: 'boya'
},
{
    eachWord: 'forever',
    translate: 'əbədi'
},
{
    eachWord: 'no way',
    translate: 'heç bir şəkildə'
}, {
    eachWord: 'crazy',
    translate: 'dəli, sərsəm'
},
{
    eachWord: 'adult',
    translate: 'yaşli, yetkin'
},
{
    eachWord: 'fad',
    translate: 'dəb, şiltaq'
},
{
    eachWord: 'natural',
    translate: 'təbii'
},
{
    eachWord: 'iron',
    translate: 'ütü, dəmir'
},
{
    eachWord: 'whatever',
    translate: 'nə olursa olsun'
},
{
    eachWord: 'for now',
    translate: 'hələlik, indi üçün'
},
{
    eachWord: 'pink',
    translate: 'çəhrayi'
}, {
    eachWord: 'cliff',
    translate: 'uçurum'
}, {
    eachWord: 'garbage',
    translate: 'zibil, tullanti'
},
{
    eachWord: 'afford',
    translate: 'mümkün etmək, imkan vermək'
},
{
    eachWord: 'throughtful',
    translate: 'düşüncəli'
},
{
    eachWord: 'take out',
    translate: 'çixarmaq, təmizləmək'
},
{
    eachWord: 'according',
    translate: 'görə, etibarilə'
}, {
    eachWord: 'temper',
    translate: 'xasiyyət'
}, {
    eachWord: 'intention',
    translate: 'niyyət'
},
{
    eachWord: 'resist',
    translate: 'müqavimət göstərmək'
},
{
    eachWord: 'bite',
    translate: 'dişləmək'
},
{
    eachWord: 'relosolutions',
    translate: 'qərarlar'
},
{
    eachWord: 'stick',
    translate: 'çubuq'
},
{
    eachWord: 'disappear',
    translate: 'yox olmaq, itmək'
},
{
    eachWord: 'judge',
    translate: 'hakim, mühakimə etmək'
},
{
    eachWord: 'treat',
    translate: 'müalicə etmək'
},
{
    eachWord: 'mean',
    translate: 'alçaq, layiqsiz'
},
{
    eachWord: 'tissue',
    translate: 'salfetka'
},
{
    eachWord: 'dreadful',
    translate: 'qorxulu'
},
{
    eachWord: 'teribble',
    translate: 'qorxulu'
},
{
    eachWord: 'stamp',
    translate: 'möhür'
},
{
    eachWord: 'tiny',
    translate: 'balaca'
},
{
    eachWord: 'exactly',
    translate: 'tam olaraq'
},
{
    eachWord: 'whereabout',
    translate: 'dəqiq ünvan'
},
{
    eachWord: 'forename',
    translate: 'ad'
},
{
    eachWord: 'familyname',
    translate: 'soyad'
},
{
    eachWord: 'date of birth',
    translate: 'doğm tarixi'
},
{
    eachWord: 'mother tongue',
    translate: 'ana dili'
},
{
    eachWord: 'occupation',
    translate: 'iş, imkan'
},
{
    eachWord: 'job',
    translate: 'iş'
},
{
    eachWord: 'signature',
    translate: 'imza'
},
{
    eachWord: 'cousin',
    translate: 'əmi,dayi,xala(oğlu,qızı)'
},
{
    eachWord: 'aunt',
    translate: 'xala, bibi'
},
{
    eachWord: 'uncle',
    translate: 'əmi, dayı'
},
{
    eachWord: 'brother-in-low',
    translate: 'qayın'
},
{
    eachWord: 'sister-in-low',
    translate: 'baldız'
},
{
    eachWord: 'mother-in-low',
    translate: 'qayınana'
},
{
    eachWord: 'father-in-low',
    translate: 'qayınata'
},
{
    eachWord: 'nephew',
    translate: 'bacı oğlu, qardaş oğlu'
},
{
    eachWord: 'niece',
    translate: 'bacı qızı, qardaş qızı'
},
{
    eachWord: 'got married',
    translate: 'evləndi'
},
{
    eachWord: 'was born',
    translate: 'doğulub'
},
{
    eachWord: 'older',
    translate: 'daha yaşlı'
},
{
    eachWord: 'younger',
    translate: 'cavan, gənc'
},
{
    eachWord: 'dirty',
    translate: 'çirkli'
},
{
    eachWord: 'bike',
    translate: 'velosiped'
},
{
    eachWord: 'gate',
    translate: 'qapı, darvaza'
},
{
    eachWord: 'respond',
    translate: 'cavab vermək'
},
{
    eachWord: 'answer',
    translate: 'cavab vermək'
},
{
    eachWord: 'chess',
    translate: 'şahmat'
},
{
    eachWord: 'dictate',
    translate: 'imla demək, hökm etmək'
},
{
    eachWord: 'wall',
    translate: 'divar'
},
{
    eachWord: 'instruction',
    translate: 'göstəriş, təlimat'
},
{
    eachWord: 'stand up',
    translate: 'ayağa qalxmaq'
},
{
    eachWord: 'sit down',
    translate: 'oturmaq'
},
{
    eachWord: 'here you are',
    translate: 'buyurun'
},
{
    eachWord: 'a diary',
    translate: 'gündəlik'
},
{
    eachWord: 'an identity card',
    translate: 'şəxsiyyət vəsiqəsi'
},
{
    eachWord: 'roleplay',
    translate: 'rol oynamaq'
},
{
    eachWord: 'swap',
    translate: 'dəyişdirmək'
},
{
    eachWord: 'snake',
    translate: 'ilan'
},
{
    eachWord: 'clue',
    translate: 'ipucu'
},
{
    eachWord: 'yell',
    translate: 'qışqırmaq, çığırtı'
},
{
    eachWord: 'bell',
    translate: 'zəng'
},
{
    eachWord: 'windergarten',
    translate: 'uşaq baxçası'
},
{
    eachWord: 'rose',
    translate: 'qızılgül'
},
{
    eachWord: 'tulip',
    translate: 'laləgülü, dağlaləsi'
},
{
    eachWord: 'tent',
    translate: 'çadır'
},
{
    eachWord: 'campfire',
    translate: 'tonqal'
},
{
    eachWord: 'hiking',
    translate: 'gəzini, turizm'
},
{
    eachWord: 'walking',
    translate: 'gəzinti, turizm'
},
{
    eachWord: 'touring',
    translate: 'gəzinti, turizm'
},
{
    eachWord: 'squirrel',
    translate: 'dələ'
},
{
    eachWord: 'basement',
    translate: 'zirzəmi'
},
{
    eachWord: 'ride',
    translate: 'sürmək, çapmaq'
},
{
    eachWord: 'jump',
    translate: 'tullanmaq'
},
{
    eachWord: 'climb',
    translate: 'dırmaşmaq'
},
{
    eachWord: 'fall over',
    translate: 'yıxılmaq'
},
{
    eachWord: 'lie down',
    translate: 'uzanmaq'
},
{
    eachWord: 'run',
    translate: 'qacmaq'
},
{
    eachWord: 'walk',
    translate: 'gəzmək'
},
{
    eachWord: 'get on',
    translate: 'minmək, daxil olmaq'
},
{
    eachWord: 'get off',
    translate: 'düşmək'
},
{
    eachWord: 'lie',
    translate: 'yalan'
},
{
    eachWord: 'push',
    translate: 'itələmək'
},
{
    eachWord: 'hold',
    translate: 'saxlamaq'
},
{
    eachWord: 'put down',
    translate: 'yerə qoymaq'
},
{
    eachWord: 'touch',
    translate: 'toxunmaq'
},
{
    eachWord: 'pull',
    translate: 'çəkmək, dartmaq'
},
{
    eachWord: 'carry',
    translate: 'daşımaq'
},
{
    eachWord: 'pick up',
    translate: 'götürmək, qaldırmaq'
},
{
    eachWord: 'turn on',
    translate: 'yandırmaq'
},
{
    eachWord: 'drop',
    translate: 'düşmək, salmaq'
},
{
    eachWord: 'break',
    translate: 'qırmaq, fasilə'
},
{
    eachWord: 'check',
    translate: 'yanaq'
},
{
    eachWord: 'neck',
    translate: 'boğaz'
},
{
    eachWord: 'wrist',
    translate: 'bilək'
},
{
    eachWord: 'waist',
    translate: 'bel'
},
{
    eachWord: 'ankle',
    translate: 'topuq'
},
{
    eachWord: 'bull',
    translate: 'öküz'
},
{
    eachWord: 'boot',
    translate: 'çəkmə, ayaqqabı'
},
{
    eachWord: 'highlight',
    translate: 'vurğulamaq'
},
{
    eachWord: 'turn light',
    translate: 'sağa dönün'
},
{
    eachWord: 'slow down',
    translate: 'yavaşlatmaq'
},
{
    eachWord: "don't worry",
    translate: 'narahat olma'
},
{
    eachWord: 'be careful',
    translate: 'ehtiyatlı ol'
},
{
    eachWord: 'vice versa',
    translate: 'əksinə'
},
{
    eachWord: 'speech',
    translate: 'nitq'
},
{
    eachWord: 'condition',
    translate: 'şərt, vəziyyət'
},
{
    eachWord: 'keep awake',
    translate: 'oyaq qalmaq'
},
{
    eachWord: 'jacket',
    translate: 'pencək'
},

{
    eachWord: 'sign',
    translate: 'işarə, nişan'
},
{
    eachWord: 'skirt',
    translate: 'yupka'
},
{
    eachWord: 'be quiet',
    translate: 'sakit ol'
},
{
    eachWord: 'firmly',
    translate: 'tərəddüdsüz, ikiəlli'
},
{
    eachWord: 'casual',
    translate: 'təsadüfi'
},
{
    eachWord: 'hug',
    translate: 'qucaqlamaq'
},
{
    eachWord: 'a pat on the bag',
    translate: 'kürəyinə vurmaq'
},
{
    eachWord: 'beard',
    translate: 'saqqal'
},
{
    eachWord: 'mousetache',
    translate: 'bığ'
},
{
    eachWord: 'blonde',
    translate: 'sarışın'
},
{
    eachWord: 'straight hair',
    translate: 'düz saç'
},{
    eachWord: 'curly hair',
    translate: 'buruq saç'
},{
    eachWord: 'wavy hair',
    translate: 'dalğalı saç'
},{
    eachWord: 'cross out',
    translate: 'üstündən xətt çəkmək'
},{
    eachWord: 'friendly',
    translate: 'mehriban'
},{
    eachWord: 'kind',
    translate: 'mehriban'
},{
    eachWord: 'relaxed',
    translate: 'rahat'
},{
    eachWord: 'laugh',
    translate: 'gülmək'
},{
    eachWord: 'pleasant, nice',
    translate: 'xoş, xoşagələn'
},{
    eachWord: 'clever, intelligent',
    translate: 'ağıllı'
},{
    eachWord: 'glossary',
    translate: 'lüğət'
},{
    eachWord: 'friendly',
    translate: 'mehriban, mülayim'
},{
    eachWord: 'kind',
    translate: 'mehriban, mülayim'
},{
    eachWord: 'nice',
    translate: 'gözəl'
},{
    eachWord: 'fun',
    translate: 'əyləncəli'
},{
    eachWord: 'funny',
    translate: 'gülməli'
},{
    eachWord: 'relaxed',
    translate: 'rahat'
},{
    eachWord: 'clever',
    translate: 'ağıllı'
},{
    eachWord: 'quiet',
    translate: 'sakit'
},{
    eachWord: 'serious',
    translate: 'ciddi'
},{
    eachWord: 'pleasant',
    translate: 'xoş'
},{
    eachWord: 'horrible, terrible',
    translate: 'dəhşətli'
},{
    eachWord: 'laugh',
    translate: 'gülüş'
},{
    eachWord: 'calm',
    translate: 'sakit'
},{
    eachWord: 'intelligent',
    translate: 'ağıllı'
},
{
    eachWord: 'stupid',
    translate: 'axmaq'
},
{
    eachWord: 'relationship',
    translate: 'münasibət'
},
{
    eachWord: 'ex-boyfriend',
    translate: 'keçmiş sevgili'
},
{
    eachWord: 'couples',
    translate: 'cütlər'
},
{
    eachWord: 'split up',
    translate: 'ayrılma'
},
{
    eachWord: 'partner',
    translate: 'tərəfdaş'
},
{
    eachWord: 'be together',
    translate: 'birlikdə olmaq'
},
{
    eachWord: 'flatmate',
    translate: 'mənzil yoldaş'
},
{
    eachWord: 'close friend',
    translate: 'yaxın dost'
},
{
    eachWord: 'chest',
    translate: 'sinə'
},
{
    eachWord: 'wrist',
    translate: 'bilək'
},
{
    eachWord: 'ankle',
    translate: 'topuq'
},
{
    eachWord: 'occasionally',
    translate: 'arabir'
},
{
    eachWord: 'hardly ever',
    translate: 'nadır hallarda'
},
{
    eachWord: 'rarely',
    translate: 'nadir hallarda'
},
{
    eachWord: "what's the matter",
    translate: 'nə məsələdir?'
},
{
    eachWord: 'boiling',
    translate: 'qaynar'
},
{
    eachWord: 'freezing',
    translate: 'donma'
},
{
    eachWord: 'I feel tired',
    translate: 'Yorğunam'
},
{
    eachWord: 'I feel thirsty',
    translate: 'Susuzam'
},
{
    eachWord: 'I feel boiling',
    translate: 'Mən qaynar hiss edirəm'
},
{
    eachWord: 'I feel freezing',
    translate: 'Mən donmuşam'
},
{
    eachWord: 'I feel nerveous',
    translate: 'Mən əsəbi hiss edirəm'
},
{
    eachWord: 'I feel ill',
    translate: 'Xəstə hiss edirəm'
},
{
    eachWord: 'I feel well',
    translate: 'Özümü yaxşı hiss edirəm'
},
{
    eachWord: "He's excited",
    translate: "O həyəcanlıdır"
},
{
    eachWord: "She's worried",
    translate: 'O narahatdır'
},
{
    eachWord: 'fright',
    translate: 'qorxu'
},
{
    eachWord: 'scare',
    translate: 'qorxu'
},
{
    eachWord: "he's embrassed",
    translate: 'O utanır'
},
{
    eachWord: "she's suprised",
    translate: 'O təəccübləndi'
},
{
    eachWord: "he's in love",
    translate: 'O aşiqdir'
},
{
    eachWord: 'upset',
    translate: 'qəmli, dilxor'
},
{
    eachWord: 'rest',
    translate: 'istirahət etmək'
},
{
    eachWord: 'get to work',
    translate: 'işə getmək'
},
{
    eachWord: 'have a shower',
    translate: 'duş almaq'
},
{
    eachWord: 'have breakfast',
    translate: 'səhər yeməyi yemək'
},
{
    eachWord: 'I have dinner',
    translate: 'nahar edirəm'
},
{
    eachWord: 'What do you do?',
    translate: 'Sən nə edirsən?'
},
{
    eachWord: 'during the week',
    translate: 'Həftə ərzində'
},
{
    eachWord: 'once a week',
    translate: 'Həftədə bir dəfə'
},
{
    eachWord: 'twice a week',
    translate: 'Həftədə iki dəfə'
},
{
    eachWord: 'always',
    translate: 'həmişə'
},
{
    eachWord: 'often',
    translate: 'tez-tez'
},
{
    eachWord: 'sometimes',
    translate: 'bəzən'
},
{
    eachWord: 'occasionally',
    translate: 'ara-bir'
},
{
    eachWord: 'hardly ever',
    translate: 'nadir hallarda'
},
{
    eachWord: 'rarely',
    translate: 'nadir hallarda'
},
{
    eachWord: 'never',
    translate: 'heç vaxt'
},
{
    eachWord: 'a pale',
    translate: 'solğun'
},
{
    eachWord: 'scarf',
    translate: 'şərf'
},
{
    eachWord: 'headscarf',
    translate: 'hicab'
},
{
    eachWord: 'tie',
    translate: 'qalstuk'
},
{
    eachWord: 'hat',
    translate: 'papaq'
},
{
    eachWord: 'belt',
    translate: 'kəmər'
},
{
    eachWord: 'umbrella',
    translate: 'çətir'
},
{
    eachWord: 'watch',
    translate: 'saat'
},
{
    eachWord: 'a pair of shoes',
    translate: 'bir cüt ayaqqabı'
},
{
    eachWord: 'socks',
    translate: 'corab'
},

];

button.addEventListener('click', findNewWord);

function findNewWord() {
    let index = Math.floor(Math.random() * words.length);
    button.textContent = words[index].translate;
    translate.addEventListener('click', function () {
        button.textContent = words[index].eachWord;
    })
}

let cross = document.querySelector('.cross');
let tick = document.querySelector('.tick');
let count = document.querySelector('.counter');
let counter = 0;
const phrases = ['excellent', 'superior', 'perfect', 'fine', 'wonderful', 'magnificent', 'nice', 'elegant', 'fine', 'commendable', 'praiseworthy',
    'laudable',
];
const upset = ['upset', 'sad', 'angry', 'hopeless', 'sorrowful', 'bad', 'failed',
    'unsuccessful', 'lame', 'luckless', 'unhappy', 'unfortunate'
];
let emptyParagraph = document.querySelector('#emptyParagraph');
let emptyparagraph = document.querySelector('#emptyparagraph');

tick.addEventListener('click', findNewWord);
cross.addEventListener('click', findNewWord);
tick.addEventListener('click', sum);

function sum() {
    count.textContent = ++counter;
    let indexNumber = Math.floor(Math.random() * phrases.length);
    emptyParagraph.textContent = phrases[indexNumber];
    emptyparagraph.textContent = '';
    if (counter >= 100) {
        emptyParagraph.innerHTML = 'Congratulations <i class="far fa-smile"></i>';
        counter = 99;
    }
}

cross.addEventListener('click', minus);

function minus() {
    count.textContent = --counter;
    let indexNumber = Math.floor(Math.random() * upset.length);
    emptyParagraph.textContent = '';
    emptyparagraph.textContent = upset[indexNumber];
    if (counter <= (-5)) {
        emptyparagraph.innerHTML = 'What a pity! <i class="far fa-angry"></i>';
        counter = (-4);
    }
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
    count.textContent = 0;
});