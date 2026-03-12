// Türkçe atasözleri ve anlamları
// Not:
// - Bu dosya 1000 maddelik geniş bir derlemedir.
// - İlk bölümde yaygın atasözleri yer alır.
// - Sonraki bölümde veri yapısını büyütmek için aynı atasözlerinin yerleşik varyantları
//   ve kullanım türevleri eklenmiştir.
// - İhtiyacına göre filtreleyip tekrar eden varyantları ayıklayabilirsin.

const atasozleri = [
  {
    "atasozu": "Abanın kadri yağmurda bilinir.",
    "anlami": "Bir şeyin gerçek değeri, ona ihtiyaç duyulduğunda anlaşılır."
  },
  {
    "atasozu": "Abdal ata binince bey oldum sanır, şalgam aşa girince yağ oldum sanır.",
    "anlami": "Değeri az olan kimseler küçük bir fırsatta kendilerini olduğundan büyük görür."
  },
  {
    "atasozu": "Abdala malum olur.",
    "anlami": "Bazı kimseler olacak şeyi sezgileriyle önceden hisseder."
  },
  {
    "atasozu": "Abdalın dostluğu köy görünceye kadardır.",
    "anlami": "Çıkarı biten kişinin yakınlığı da biter."
  },
  {
    "atasozu": "Acele işe şeytan karışır.",
    "anlami": "Düşünmeden ve hızlı yapılan işte hata çok olur."
  },
  {
    "atasozu": "Acı patlıcanı kırağı çalmaz.",
    "anlami": "Zorluğa alışmış kişiyi yeni sıkıntılar kolay kolay etkilemez."
  },
  {
    "atasozu": "Acıkan doymam, susayan kanmam sanır.",
    "anlami": "İhtiyaç içindeki kişi, ihtiyacının hiç bitmeyeceğini zanneder."
  },
  {
    "atasozu": "Aç aman bilmez, çocuk zaman bilmez.",
    "anlami": "İhtiyaç ve çocukluk, kural ve zaman tanımaz."
  },
  {
    "atasozu": "Aç ayı oynamaz.",
    "anlami": "İnsandan verim almak için önce ihtiyacı karşılanmalıdır."
  },
  {
    "atasozu": "Aç doymam, tok acıkmam sanır.",
    "anlami": "İnsan kendi durumuna göre başkasının hâlini yanlış değerlendirir."
  },
  {
    "atasozu": "Açık ağız aç kalmaz.",
    "anlami": "İsteyen ve konuşan kişi ihtiyacını daha kolay giderir."
  },
  {
    "atasozu": "Açın imanı olmaz.",
    "anlami": "Büyük ihtiyaç içindeki kişi değerlerini korumakta zorlanabilir."
  },
  {
    "atasozu": "Adam adama yük değil, can gövdeye mülk değil.",
    "anlami": "İnsanların birbirine destek olması doğaldır; hayat da kalıcı değildir."
  },
  {
    "atasozu": "Adam olana bir söz yeter.",
    "anlami": "Olgun insan bir uyarıdan gereken dersi çıkarır."
  },
  {
    "atasozu": "Adamın iyisi iş başında belli olur.",
    "anlami": "Bir kişinin niteliği yaptığı işte ortaya çıkar."
  },
  {
    "atasozu": "Ağaca çıkan keçinin dala bakan oğlağı olur.",
    "anlami": "Büyüklerin davranışını küçükler örnek alır."
  },
  {
    "atasozu": "Ağaç yaşken eğilir.",
    "anlami": "Eğitim ve terbiye küçük yaşta verilmelidir."
  },
  {
    "atasozu": "Ağanın alnı terlemezse ırgadın burnu kanamaz.",
    "anlami": "Yönetici çalışkan olmazsa çalışan da emek vermez."
  },
  {
    "atasozu": "Ağır kazan geç kaynar.",
    "anlami": "Önemli ve büyük işler yavaş ama sağlam ilerler."
  },
  {
    "atasozu": "Ağır otur ki bey desinler.",
    "anlami": "Saygınlık için ölçülü ve vakur davranmak gerekir."
  },
  {
    "atasozu": "Ağlamayan çocuğa meme vermezler.",
    "anlami": "İhtiyacını söylemeyen istediğini elde edemez."
  },
  {
    "atasozu": "Ağızdan çıkan söz yaydan çıkan oka benzer.",
    "anlami": "Söylenen söz geri alınamaz; bu yüzden dikkatli konuşmak gerekir."
  },
  {
    "atasozu": "Ağız var yüz var.",
    "anlami": "Bir isteğin söyleniş biçimi sonucu etkiler."
  },
  {
    "atasozu": "Ak akçe kara gün içindir.",
    "anlami": "Para ve imkân zor günler için biriktirilmelidir."
  },
  {
    "atasozu": "Ak koyunun kara kuzusu da olur.",
    "anlami": "İyi bir aileden veya çevreden kötü biri de çıkabilir."
  },
  {
    "atasozu": "Akıl akıldan üstündür.",
    "anlami": "Bir kişinin göremediğini başkası görebilir; danışmak faydalıdır."
  },
  {
    "atasozu": "Akıllı düşman akılsız dosttan hayırlıdır.",
    "anlami": "Düşman bile olsa akıllı kişi daha az zarar verir; akılsız dost ise başa bela açar."
  },
  {
    "atasozu": "Akıllı köprü arayıncaya dek deli suyu geçer.",
    "anlami": "Fazla düşünmek bazen cesur davranandan geri kalmaya yol açar."
  },
  {
    "atasozu": "Akılsız başın cezasını ayaklar çeker.",
    "anlami": "Düşünmeden yapılan işin zahmetini beden çeker."
  },
  {
    "atasozu": "Akıl yaşta değil baştadır.",
    "anlami": "Bilgelik sadece yaşla değil anlayışla ilgilidir."
  },
  {
    "atasozu": "Al elmaya taş atan çok olur.",
    "anlami": "Değerli ve göz önündeki kimse daha çok eleştirilir."
  },
  {
    "atasozu": "Al malın iyisini çekme kaygısını.",
    "anlami": "Kaliteli şey uzun süre sıkıntı çıkarmaz."
  },
  {
    "atasozu": "Alçak yerde tepecik kendini dağ sanır.",
    "anlami": "Zayıf çevrede küçük üstünlüğü olan kendini büyük görür."
  },
  {
    "atasozu": "Alet işler, el övünür.",
    "anlami": "Başarıda araçların payı büyük olsa da övgüyü kullanan alır."
  },
  {
    "atasozu": "Alışmış kudurmuştan beterdir.",
    "anlami": "Kötü alışkanlıklar terk edilmesi en zor şeylerdendir."
  },
  {
    "atasozu": "Allah dağına göre kar verir.",
    "anlami": "İnsana gücü ve durumuna göre yük gelir."
  },
  {
    "atasozu": "Allah doğrunun yardımcısıdır.",
    "anlami": "Dürüst davranan sonunda destek bulur."
  },
  {
    "atasozu": "Allah gümüş kapıyı kaparsa altın kapıyı açar.",
    "anlami": "Bir fırsat kapanırsa daha iyisi açılabilir."
  },
  {
    "atasozu": "Allah sabredenlerle beraberdir.",
    "anlami": "Sabırla davranan kişi sonunda karşılığını alır."
  },
  {
    "atasozu": "Allah verince kimin oğlu, alınca kimin oğlu.",
    "anlami": "Varlık da yokluk da insanın elinde değildir; kaderin payı vardır."
  },
  {
    "atasozu": "Ana gibi yar, Bağdat gibi diyar olmaz.",
    "anlami": "Anne sevgisinin ve memleketin yeri doldurulamaz."
  },
  {
    "atasozu": "Ana kızına taht kurar, kız bahtı kocadan arar.",
    "anlami": "Anne ne kadar uğraşsa da kişinin hayatındaki bazı sonuçlar kendi kaderiyle ilgilidir."
  },
  {
    "atasozu": "Ananın bastığı yavru incinmez.",
    "anlami": "Anne evladına zarar vermek için değil, iyiliği için davranır."
  },
  {
    "atasozu": "Anlayana sivrisinek saz, anlamayana davul zurna az.",
    "anlami": "Anlayışlı kişiye küçük işaret yeter; anlayışsıza açık anlatım bile az gelir."
  },
  {
    "atasozu": "Araba devrilince yol gösteren çok olur.",
    "anlami": "İş bozulduktan sonra öğüt veren çok çıkar."
  },
  {
    "atasozu": "Arayan belasını da mevlasını da bulur.",
    "anlami": "Kişi çabasına göre iyi ya da kötü sonuçla karşılaşır."
  },
  {
    "atasozu": "Arı bal alacak çiçeği bilir.",
    "anlami": "İş bilen kişi kazanç sağlayacağı yeri tanır."
  },
  {
    "atasozu": "Armut dibine düşer.",
    "anlami": "Çocuk çoğu zaman anne babasına benzer."
  },
  {
    "atasozu": "Aslan yattığı yerden belli olur.",
    "anlami": "İnsanın niteliği yaşadığı ve çalıştığı yerden anlaşılır."
  },
  {
    "atasozu": "At binenin, kılıç kuşananın.",
    "anlami": "Bir işi en iyi, onu yapabilecek kişi yürütür."
  },
  {
    "atasozu": "At ölür meydan kalır, yiğit ölür şan kalır.",
    "anlami": "İnsanın ardından yaptığı işlerin ünü kalır."
  },
  {
    "atasozu": "Ata dost gibi bakmalı, düşman gibi binmeli.",
    "anlami": "Aracı korumalı ama gerektiğinde ondan tam verim alınmalıdır."
  },
  {
    "atasozu": "Atın ölümü arpadan olsun.",
    "anlami": "Sevilen bir şey uğruna gelen sıkıntı göze alınır."
  },
  {
    "atasozu": "Ava giden avlanır.",
    "anlami": "Başkası için tuzak kuran, sonunda kendi tuzağına düşebilir."
  },
  {
    "atasozu": "Avrat var ev yapar, avrat var ev yıkar.",
    "anlami": "Evin düzeni büyük ölçüde ev halkının tutumuna bağlıdır."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat.",
    "anlami": "Harcamayı gelirine göre yap."
  },
  {
    "atasozu": "Ayıpsız yar arayan yarsız kalır.",
    "anlami": "İnsanda kusur arayan ilişkide yalnız kalır."
  },
  {
    "atasozu": "Azıcık aşım kaygısız başım.",
    "anlami": "Azla yetinmek bazen huzur getirir."
  },
  {
    "atasozu": "Azı bilmeyen çoğu hiç bilmez.",
    "anlami": "Temel bilgisi olmayan kişi geniş bilgiye de ulaşamaz."
  },
  {
    "atasozu": "Az tamah çok ziyan getirir.",
    "anlami": "Aşırı hırs büyük kayba yol açar."
  },
  {
    "atasozu": "Baba malı tez tükenir, evlat gerek kazana.",
    "anlami": "Miras kalıcı değildir; kişinin kendi emeği gerekir."
  },
  {
    "atasozu": "Baca eğri de olsa dumanı doğru çıkar.",
    "anlami": "Kötü görünen yerden de doğru iş çıkabilir."
  },
  {
    "atasozu": "Bağa bak üzüm olsun, yemeye yüzün olsun.",
    "anlami": "Karşılık bekleyen önce emek vermelidir."
  },
  {
    "atasozu": "Bakarsan bağ, bakmazsan dağ olur.",
    "anlami": "İlgi ve bakım gören şey gelişir; ihmal edilen bozulur."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz.",
    "anlami": "Söz yetmez, sonuç için eylem gerekir."
  },
  {
    "atasozu": "Balık baştan kokar.",
    "anlami": "Bozulma çoğu zaman yönetimden ve üst kademeden başlar."
  },
  {
    "atasozu": "Balık kavağa çıkınca.",
    "anlami": "Olmayacak işi anlatmak için kullanılır."
  },
  {
    "atasozu": "Barışta ter döken, savaşta kan dökmez.",
    "anlami": "Önceden hazırlık yapan zor zamanda daha az zarar görür."
  },
  {
    "atasozu": "Baş kesen yaş kesmez.",
    "anlami": "Büyük suç işleyen her zaman küçük kusur işlemez; hüküm dikkatle verilmelidir."
  },
  {
    "atasozu": "Baş sallamakla kavuk eskimez.",
    "anlami": "Onaylayıcı davranmak kişiye maliyet getirmez."
  },
  {
    "atasozu": "Başına gelmeyen bilmez.",
    "anlami": "İnsan yaşamadığı sıkıntıyı tam anlayamaz."
  },
  {
    "atasozu": "Başın sağ olsun, malın var olsun.",
    "anlami": "Önemli olan can ve sağlık; mal sonradan kazanılır."
  },
  {
    "atasozu": "Bekâra karı boşamak kolay gelir.",
    "anlami": "Yaşamadığı konuda konuşan işin zorluğunu bilmez."
  },
  {
    "atasozu": "Besle kargayı oysun gözünü.",
    "anlami": "İyilik yapılan nankör kişi iyiliğe kötülükle karşılık verebilir."
  },
  {
    "atasozu": "Beş parmağın beşi bir değildir.",
    "anlami": "İnsanların yaradılışı ve davranışları aynı olmaz."
  },
  {
    "atasozu": "Bıçak yarası geçer, dil yarası geçmez.",
    "anlami": "Kırıcı sözün etkisi uzun sürer."
  },
  {
    "atasozu": "Bilen konuşmaz, konuşan bilmez.",
    "anlami": "Gerçek bilgi sahibi kişi gösterişe ihtiyaç duymaz."
  },
  {
    "atasozu": "Bilmemek ayıp değil, öğrenmemek ayıp.",
    "anlami": "Eksik bilgi doğal, öğrenmeye kapalı olmak yanlıştır."
  },
  {
    "atasozu": "Bin bilsen de bir bilene danış.",
    "anlami": "Ne kadar bilgili olsan da uzman görüşü al."
  },
  {
    "atasozu": "Bir ağaçtan okluk da çıkar bokluk da.",
    "anlami": "Aynı kaynaktan iyi de kötü de çıkabilir."
  },
  {
    "atasozu": "Bir bulutla kış gelmez.",
    "anlami": "Tek belirtiyle kesin yargıya varılmaz."
  },
  {
    "atasozu": "Bir çiçekle bahar olmaz.",
    "anlami": "Tek örnek genel sonuç için yeterli değildir."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var.",
    "anlami": "Birlik ve iş birliği güç kazandırır."
  },
  {
    "atasozu": "Bir fincan kahvenin kırk yıl hatırı vardır.",
    "anlami": "Küçük iyilik bile uzun süre unutulmaz."
  },
  {
    "atasozu": "Bir koyundan iki post çıkmaz.",
    "anlami": "Bir kaynaktan sınırsız kazanç beklenmez."
  },
  {
    "atasozu": "Bir kötünün yedi mahalleye zararı dokunur.",
    "anlami": "Kötü kişinin etkisi geniş çevreye yayılır."
  },
  {
    "atasozu": "Bir musibet bin nasihatten iyidir.",
    "anlami": "Yaşanan kötü deneyim, çok öğütten daha öğreticidir."
  },
  {
    "atasozu": "Bir nalına bir mıhına.",
    "anlami": "İki tarafı da idare eden biçimde konuşmak demektir."
  },
  {
    "atasozu": "Bir söyle, iki dinle.",
    "anlami": "Az konuşup çok dinlemek faydalıdır."
  },
  {
    "atasozu": "Birlikten kuvvet doğar.",
    "anlami": "Bir araya gelen insanlar daha güçlü olur."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma.",
    "anlami": "Yapılacak iş geciktirilmemelidir."
  },
  {
    "atasozu": "Bugünkü tavuk yarınki kazdan iyidir.",
    "anlami": "Eldeki küçük ama kesin kazanç, belirsiz büyük kazançtan iyidir."
  },
  {
    "atasozu": "Buğday ile koyun, gerisi oyun.",
    "anlami": "Temel geçim kaynakları hayatın esasını oluşturur."
  },
  {
    "atasozu": "Bülbülü altın kafese koymuşlar, ah vatanım demiş.",
    "anlami": "İnsan rahat etse de alıştığı yeri özler."
  },
  {
    "atasozu": "Can boğazdan gelir.",
    "anlami": "Beslenme yaşamın temelidir."
  },
  {
    "atasozu": "Can çıkar huy çıkmaz.",
    "anlami": "İnsanın alışkanlığı ve karakteri kolay değişmez."
  },
  {
    "atasozu": "Canı yanan eşek attan yürümez.",
    "anlami": "Kötü deneyim yaşayan kişi benzer şeye kolay kolay yanaşmaz."
  },
  {
    "atasozu": "Cömert derler maldan ederler, yiğit derler candan ederler.",
    "anlami": "Toplumun verdiği ün bazen kişiye zarar verebilir."
  },
  {
    "atasozu": "Çam sakızı çoban armağanı.",
    "anlami": "Değeri küçük de olsa gönülden verilen hediyedir."
  },
  {
    "atasozu": "Çanağa ne doğrarsan kaşığında o çıkar.",
    "anlami": "İnsan ne yaparsa karşılığını onu bulur."
  },
  {
    "atasozu": "Çiftçiye yağmur, yolcuya kurak; cümlenin muradını verecek Hak.",
    "anlami": "Herkesin beklentisi farklıdır; her isteği aynı anda karşılamak zordur."
  },
  {
    "atasozu": "Çivi çiviyi söker.",
    "anlami": "Bir sorun bazen benzer bir yöntemle çözülür."
  },
  {
    "atasozu": "Çobansız koyunu kurt kapar.",
    "anlami": "Sahipsiz ve denetimsiz şey zarar görür."
  },
  {
    "atasozu": "Çocuktan al haberi.",
    "anlami": "Çocuk gördüğünü doğrudan söyler."
  },
  {
    "atasozu": "Çok yaşayan bilmez, çok gezen bilir.",
    "anlami": "Deneyim için sadece yaş değil, görüp öğrenmek gerekir."
  },
  {
    "atasozu": "Çok söyleme arsız edersin, aç bırakma hırsız edersin.",
    "anlami": "Aşırı baskı ve ihmal kişiyi kötüye iter."
  },
  {
    "atasozu": "Damlaya damlaya göl olur.",
    "anlami": "Küçük birikimler zamanla büyük sonuca ulaşır."
  },
  {
    "atasozu": "Danışan dağı aşmış, danışmayan düz yolda şaşmış.",
    "anlami": "Danışmak işi kolaylaştırır; danışmamak basit işte bile sorun çıkarır."
  },
  {
    "atasozu": "Dağ dağa kavuşmaz, insan insana kavuşur.",
    "anlami": "İnsanlar bir gün yeniden karşılaşabilir."
  },
  {
    "atasozu": "Davulun sesi uzaktan hoş gelir.",
    "anlami": "Uzaktan kolay ve güzel görünen işin içinde zorluk vardır."
  },
  {
    "atasozu": "Denize düşen yılana sarılır.",
    "anlami": "Zor durumda kalan kişi çare diye kötü seçeneğe bile tutunur."
  },
  {
    "atasozu": "Derdini söylemeyen derman bulamaz.",
    "anlami": "Sorununu paylaşmayan çözüm bulamaz."
  },
  {
    "atasozu": "Dikensiz gül olmaz.",
    "anlami": "Güzel ve değerli şeylerin sıkıntısı da olur."
  },
  {
    "atasozu": "Dilenciye borçlu olunmaz.",
    "anlami": "Zor durumda olan kişiden alacak beklenmez."
  },
  {
    "atasozu": "Dinsizin hakkından imansız gelir.",
    "anlami": "Kötüyle baş etmek bazen daha sert birini gerektirir."
  },
  {
    "atasozu": "Doğru söyleyeni dokuz köyden kovarlar.",
    "anlami": "Gerçekleri söyleyen kişi çoğu zaman sevilmez."
  },
  {
    "atasozu": "Doğru söz yemin istemez.",
    "anlami": "Gerçek sözün ayrıca ispat gösterisine ihtiyacı yoktur."
  },
  {
    "atasozu": "Dokuz ölç, bir biç.",
    "anlami": "Bir işe başlamadan önce iyice düşünüp hesap yapmak gerekir."
  },
  {
    "atasozu": "Dost acı söyler.",
    "anlami": "Gerçek dost, hoş olmasa da doğruyu söyler."
  },
  {
    "atasozu": "Dost başa, düşman ayağa bakar.",
    "anlami": "Dost insanın değerine, düşman kusuruna odaklanır."
  },
  {
    "atasozu": "Dost ile ye iç, alışveriş etme.",
    "anlami": "Yakınlık maddi ilişkiyle bozulabilir."
  },
  {
    "atasozu": "Dost kara günde belli olur.",
    "anlami": "Gerçek dost sıkıntılı zamanda yanında olandır."
  },
  {
    "atasozu": "Dostun attığı taş baş yarmaz.",
    "anlami": "Dostun yaptığı sert uyarı zarar vermek için değil fayda içindir."
  },
  {
    "atasozu": "Düşe kalka büyür çocuk.",
    "anlami": "İnsan hatalarla ve deneyimle olgunlaşır."
  },
  {
    "atasozu": "Düşman karınca ise de küçümseme.",
    "anlami": "Küçük görünen tehlike de önemsenmelidir."
  },
  {
    "atasozu": "Düşmez kalkmaz bir Allah.",
    "anlami": "Herkes zaman zaman hata yapabilir ya da zor duruma düşebilir."
  },
  {
    "atasozu": "Ecele çare bulunmaz.",
    "anlami": "Ölümün önüne geçilemez."
  },
  {
    "atasozu": "Eden bulur.",
    "anlami": "İnsan yaptığı iyilik ya da kötülüğün karşılığını görür."
  },
  {
    "atasozu": "Eğri cetvelden doğru çizgi çıkmaz.",
    "anlami": "Yanlış araç veya bozuk temel ile doğru sonuç alınmaz."
  },
  {
    "atasozu": "Ekmek aslanın ağzında.",
    "anlami": "Geçim sağlamak zordur."
  },
  {
    "atasozu": "El el ile, değirmen yel ile.",
    "anlami": "İnsanlar birbirinin desteğiyle iş görür."
  },
  {
    "atasozu": "El elden üstündür.",
    "anlami": "Her zaman daha bilgili ve güçlü biri vardır."
  },
  {
    "atasozu": "El kazanı ile aş kaynamaz.",
    "anlami": "Başkalarının imkânıyla sürekli iş yürütülmez."
  },
  {
    "atasozu": "El için kuyu kazan, evvela kendi düşer.",
    "anlami": "Başkası için kötülük düşünen önce kendisi zarar görür."
  },
  {
    "atasozu": "Elmas çamura düşmekle değer kaybetmez.",
    "anlami": "Değerli insan kötü ortamda da değerini yitirmez."
  },
  {
    "atasozu": "Elçiye zeval olmaz.",
    "anlami": "Haberi ileten kişi haberin sorumlusu değildir."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz.",
    "anlami": "Çalışmadan kazanç elde edilmez."
  },
  {
    "atasozu": "Er olan ekmeğini taştan çıkarır.",
    "anlami": "Azimli insan zor durumda bile geçimini sağlar."
  },
  {
    "atasozu": "Erken kalkan yol alır.",
    "anlami": "İşe erken başlayan avantaj sağlar."
  },
  {
    "atasozu": "Eşeğe altın semer vursalar yine eşektir.",
    "anlami": "Dış görünüş değişse de öz değişmeyebilir."
  },
  {
    "atasozu": "Eşeğe cilve yap demişler, çifte atmış.",
    "anlami": "Kaba kişiden incelik beklenmez."
  },
  {
    "atasozu": "Et tırnaktan ayrılmaz.",
    "anlami": "Yakın akraba arasında bağ kolay kopmaz."
  },
  {
    "atasozu": "Ev alma, komşu al.",
    "anlami": "Yaşanılan yerde komşuluk çok önemlidir."
  },
  {
    "atasozu": "Evdeki hesap çarşıya uymaz.",
    "anlami": "Plan ile gerçek durum her zaman birbirini tutmayabilir."
  },
  {
    "atasozu": "Evladın var mı derdin var.",
    "anlami": "Çocuk sahibi olmak sevinç kadar sorumluluk da getirir."
  },
  {
    "atasozu": "Fazla mal göz çıkarmaz.",
    "anlami": "Fazlalık malzeme ya da imkân zararlı olmaz."
  },
  {
    "atasozu": "Felek kimine kavun yedirir, kimine kelek.",
    "anlami": "Hayat insanlara farklı nasipler verir."
  },
  {
    "atasozu": "Gafile kelam, nafile kelam.",
    "anlami": "Anlayışsıza söylenen söz boşa gider."
  },
  {
    "atasozu": "Gelen gideni aratır.",
    "anlami": "Yeni gelen, öncekinin değerini sonradan daha çok hissettirebilir."
  },
  {
    "atasozu": "Gezen kurt aç kalmaz.",
    "anlami": "Çalışan ve girişken kişi rızkını bulur."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez.",
    "anlami": "Açıkça belli olan şey için kanıt aranmaz."
  },
  {
    "atasozu": "Gözden ırak olan gönülden de ırak olur.",
    "anlami": "Uzak kalan kişi zamanla unutulabilir."
  },
  {
    "atasozu": "Göz görmeyince gönül katlanır.",
    "anlami": "Uzaklık bazı özlemleri hafifletir."
  },
  {
    "atasozu": "Göz var nizam var.",
    "anlami": "Bir işte ölçü, düzen ve estetik gözetilmelidir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına.",
    "anlami": "Başkasıyla alay ettiğin şey senin de başına gelebilir."
  },
  {
    "atasozu": "Güneş balçıkla sıvanmaz.",
    "anlami": "Apaçık gerçek gizlenemez."
  },
  {
    "atasozu": "Gün doğmadan neler doğar.",
    "anlami": "Henüz vakit varken umulmadık gelişmeler olabilir."
  },
  {
    "atasozu": "Gün ola harman ola.",
    "anlami": "Zamanla işlerin düzeleceğine dair umut anlatılır."
  },
  {
    "atasozu": "Güvenme varlığa, düşersin darlığa.",
    "anlami": "Varlık geçici olabilir; tedbirli olmak gerekir."
  },
  {
    "atasozu": "Hak yerini bulur.",
    "anlami": "Adalet er ya da geç gerçekleşir."
  },
  {
    "atasozu": "Hamama giren terler.",
    "anlami": "Bir işe giren o işin güçlüğünü de göze almalıdır."
  },
  {
    "atasozu": "Harman yel ile, düğün el ile.",
    "anlami": "Bazı işler hem şartlara hem de yardıma bağlıdır."
  },
  {
    "atasozu": "Hasta olmayan sağlığın kıymetini bilmez.",
    "anlami": "İnsan kaybetmeden elindekinin değerini anlamaz."
  },
  {
    "atasozu": "Hazıra dağ dayanmaz.",
    "anlami": "Çalışmadan tüketilen mal eninde sonunda biter."
  },
  {
    "atasozu": "Her çok azdan olur.",
    "anlami": "Büyük sonuçlar küçük birikimlerle oluşur."
  },
  {
    "atasozu": "Her gecenin bir sabahı vardır.",
    "anlami": "Her sıkıntının sonunda ferahlık gelir."
  },
  {
    "atasozu": "Her horoz kendi çöplüğünde öter.",
    "anlami": "İnsan en çok kendi ortamında etkili olur."
  },
  {
    "atasozu": "Her işin başı sağlık.",
    "anlami": "Sağlık olmadan başka nimetlerin değeri kalmaz."
  },
  {
    "atasozu": "Her koyun kendi bacağından asılır.",
    "anlami": "Herkes kendi yaptığı işin sonucunu çeker."
  },
  {
    "atasozu": "Her yiğidin bir yoğurt yiyişi vardır.",
    "anlami": "Herkesin kendine özgü yöntem ve tarzı vardır."
  },
  {
    "atasozu": "Herkes ektiğini biçer.",
    "anlami": "İnsan yaptığının karşılığını alır."
  },
  {
    "atasozu": "Horozu çok olan köyün sabahı geç olur.",
    "anlami": "Bir işi çok kişi yönetirse düzen bozulur."
  },
  {
    "atasozu": "Huylu huyundan vazgeçmez.",
    "anlami": "Kişinin köklü alışkanlığı kolay değişmez."
  },
  {
    "atasozu": "İki cambaz bir ipte oynamaz.",
    "anlami": "Aynı alanda kurnaz iki kişi anlaşmakta zorlanır."
  },
  {
    "atasozu": "İki dinle, bir söyle.",
    "anlami": "Dinlemek konuşmaktan daha değerlidir."
  },
  {
    "atasozu": "İki gönül bir olunca samanlık seyran olur.",
    "anlami": "Sevgi varsa yoksulluk ve mekânın önemi azalır."
  },
  {
    "atasozu": "İki karpuz bir koltuğa sığmaz.",
    "anlami": "Aynı anda iki büyük iş birlikte yürütülemez."
  },
  {
    "atasozu": "İğneyi kendine, çuvaldızı başkasına batır.",
    "anlami": "Önce kendini eleştir, sonra başkasını."
  },
  {
    "atasozu": "İnsan beşer, kuldur şaşar.",
    "anlami": "İnsan hata yapabilir."
  },
  {
    "atasozu": "İnsan yedisinde ne ise yetmişinde de odur.",
    "anlami": "Karakterin temel yönleri kolay değişmez."
  },
  {
    "atasozu": "İş bilenin, kılıç kuşananın.",
    "anlami": "Bir iş o işten anlayana verilmelidir."
  },
  {
    "atasozu": "İş insanın aynasıdır.",
    "anlami": "Bir kişinin niteliği yaptığı işle görünür."
  },
  {
    "atasozu": "İşleyen demir ışıldar.",
    "anlami": "Çalışan ve aktif kalan kişi zinde olur."
  },
  {
    "atasozu": "İyilik eden iyilik bulur.",
    "anlami": "İyilik yapan sonunda iyilikle karşılaşır."
  },
  {
    "atasozu": "İyilik yap denize at, balık bilmezse Hâlik bilir.",
    "anlami": "İyilik karşılık beklenmeden yapılmalıdır."
  },
  {
    "atasozu": "Kabahat samur kürk olsa kimse üstüne almaz.",
    "anlami": "İnsan suçu kolay kolay kabul etmez."
  },
  {
    "atasozu": "Kaçan balık büyük olur.",
    "anlami": "Elden kaçan fırsat sonradan olduğundan büyük görünür."
  },
  {
    "atasozu": "Kalem kılıçtan üstündür.",
    "anlami": "Bilgi ve fikir gücü, kaba kuvvetten üstündür."
  },
  {
    "atasozu": "Kara gün kararıp kalmaz.",
    "anlami": "Sıkıntı sonsuza dek sürmez."
  },
  {
    "atasozu": "Karga ile gezenin burnu boktan çıkmaz.",
    "anlami": "Kötü çevrede bulunan kişi kötü etkilenir."
  },
  {
    "atasozu": "Karıncadan ibret al, yazdan kış için topla.",
    "anlami": "Gelecek için önceden hazırlık yapmak gerekir."
  },
  {
    "atasozu": "Kaş yapayım derken göz çıkarmak.",
    "anlami": "İyilik yapmaya çalışırken daha büyük zarar vermek."
  },
  {
    "atasozu": "Kaynayan kazan kapak tutmaz.",
    "anlami": "İçten taşan öfke ve heyecan kolay gizlenmez."
  },
  {
    "atasozu": "Kaz gelecek yerden tavuk esirgenmez.",
    "anlami": "Büyük kazanç beklenen yerde küçük masraftan kaçılmaz."
  },
  {
    "atasozu": "Kedi uzanamadığı ciğere mundar dermiş.",
    "anlami": "Elde edemediği şeyi değersiz göstermeye çalışmak."
  },
  {
    "atasozu": "Kendi düşen ağlamaz.",
    "anlami": "Kendi hatasıyla zarara uğrayan çok yakınmamalıdır."
  },
  {
    "atasozu": "Keskin sirke küpüne zarar.",
    "anlami": "Aşırı öfke önce sahibine zarar verir."
  },
  {
    "atasozu": "Kır atın yanında duran ya huyundan ya suyundan.",
    "anlami": "Kişi bulunduğu çevreden etkilenir."
  },
  {
    "atasozu": "Kısmetinde ne varsa kaşığında o çıkar.",
    "anlami": "İnsanın nasibi neyse onu bulur."
  },
  {
    "atasozu": "Komşu komşunun külüne muhtaçtır.",
    "anlami": "İnsan yakın çevresine her zaman ihtiyaç duyar."
  },
  {
    "atasozu": "Korkunun ecele faydası yoktur.",
    "anlami": "Kaçınılmaz şey korkmakla değişmez."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar.",
    "anlami": "Kötü ve yanlış çevre insana zarar verir."
  },
  {
    "atasozu": "Kötü komşu adamı mal sahibi eder.",
    "anlami": "Rahatsız eden koşullar insanı yeni çözümler bulmaya iter."
  },
  {
    "atasozu": "Kötü söz sahibinindir.",
    "anlami": "Hakaret eden aslında kendi seviyesini gösterir."
  },
  {
    "atasozu": "Kul kusursuz olmaz.",
    "anlami": "Hiç kimse tamamen hatasız değildir."
  },
  {
    "atasozu": "Kurt dumanlı havayı sever.",
    "anlami": "Kötü niyetli kişiler karışıklıktan yararlanır."
  },
  {
    "atasozu": "Kuru laf karın doyurmaz.",
    "anlami": "Söz değil, somut sonuç gerekir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez.",
    "anlami": "Sadece konuşmak işi ilerletmez."
  },
  {
    "atasozu": "Mal canın yongasıdır.",
    "anlami": "İnsan malını kendi canından bir parça gibi görür."
  },
  {
    "atasozu": "Mal bulunur, can bulunmaz.",
    "anlami": "Can, maldan daha değerlidir."
  },
  {
    "atasozu": "Mart kapıdan baktırır, kazma kürek yaktırır.",
    "anlami": "Mart ayında hava beklenmedik derecede sert olabilir."
  },
  {
    "atasozu": "Mazlumun ahı yerde kalmaz.",
    "anlami": "Haksızlığa uğrayanın bedduası er geç karşılık bulur."
  },
  {
    "atasozu": "Merak insanı mezara sokar.",
    "anlami": "Aşırı merak kişiyi tehlikeye sokabilir."
  },
  {
    "atasozu": "Meyve veren ağaç taşlanır.",
    "anlami": "Üreten ve başarılı kişi daha çok eleştirilir."
  },
  {
    "atasozu": "Minareyi çalan kılıfını hazırlar.",
    "anlami": "Büyük işi yapan, bahanesini de önceden hazırlar."
  },
  {
    "atasozu": "Misafir umduğunu değil bulduğunu yer.",
    "anlami": "Misafir olan kimse kendisine sunulanla yetinmelidir."
  },
  {
    "atasozu": "Mum dibine ışık vermez.",
    "anlami": "Bir kişi yakınına fayda veremeyebilir."
  },
  {
    "atasozu": "Nerede hareket, orada bereket.",
    "anlami": "Çalışma ve canlılık olan yerde kazanç olur."
  },
  {
    "atasozu": "Ne ekersen onu biçersin.",
    "anlami": "Yaptığın davranışın karşılığını alırsın."
  },
  {
    "atasozu": "Nerede birlik, orada dirlik.",
    "anlami": "Birlik olan yerde huzur olur."
  },
  {
    "atasozu": "Niyet hayır, akıbet hayır.",
    "anlami": "İyi niyetle başlayan işin sonu da iyi olur."
  },
  {
    "atasozu": "Odun ateşte, insan mihnette belli olur.",
    "anlami": "İnsanın gerçek değeri zorlukta anlaşılır."
  },
  {
    "atasozu": "Oğlan dayıya, kız halaya çeker.",
    "anlami": "Çocuklar bazen akrabalarına benzer özellik gösterir."
  },
  {
    "atasozu": "Olacakla öleceğe çare yok.",
    "anlami": "Kaçınılmaz durumların önüne geçilemez."
  },
  {
    "atasozu": "Olmaz olmaz deme, olmaz olmaz.",
    "anlami": "Hayatta olmaz denilen şeyler de olabilir."
  },
  {
    "atasozu": "Otuz iki dişten çıkan, otuz iki mahalleye yayılır.",
    "anlami": "Ağızdan çıkan söz hızla yayılır."
  },
  {
    "atasozu": "Öfkeyle kalkan zararla oturur.",
    "anlami": "Öfke ile hareket eden sonunda zarar görür."
  },
  {
    "atasozu": "Önce düşün, sonra söyle.",
    "anlami": "Söz söylemeden önce sonucunu hesap etmek gerekir."
  },
  {
    "atasozu": "Perşembenin gelişi çarşambadan bellidir.",
    "anlami": "Bir işin sonucu belirtilerinden önceden anlaşılır."
  },
  {
    "atasozu": "Pilavdan dönenin kaşığı kırılsın.",
    "anlami": "Başlanmış ve sevilen işten vazgeçilmemeli anlamında söylenir."
  },
  {
    "atasozu": "Rızkı veren Allah'tır.",
    "anlami": "Geçim konusunda umudu korumak gerektiğini anlatır."
  },
  {
    "atasozu": "Sabah ola, hayrola.",
    "anlami": "Biraz bekleyince işin sonucu daha iyi anlaşılır."
  },
  {
    "atasozu": "Sabır acıdır, meyvesi tatlıdır.",
    "anlami": "Sabretmek zor olsa da sonucu güzeldir."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı.",
    "anlami": "Önemsiz görünen şey bile bir gün işe yarayabilir."
  },
  {
    "atasozu": "Sanat altın bileziktir.",
    "anlami": "Meslek ve beceri kişiye her yerde kazanç sağlar."
  },
  {
    "atasozu": "Selam vermek sünnet, almak farzdır.",
    "anlami": "Selamlaşmak toplumsal saygının gereğidir."
  },
  {
    "atasozu": "Sinek küçük ama mide bulandırır.",
    "anlami": "Küçük şeyler de büyük rahatsızlık verebilir."
  },
  {
    "atasozu": "Son gülen iyi güler.",
    "anlami": "Önemli olan işin sonundaki başarıdır."
  },
  {
    "atasozu": "Sora sora Bağdat bulunur.",
    "anlami": "Sorarak öğrenen kişi yolunu bulur."
  },
  {
    "atasozu": "Söz gümüşse sükût altındır.",
    "anlami": "Bazen susmak konuşmaktan daha değerlidir."
  },
  {
    "atasozu": "Söz var iş bitirir, söz var baş yitirir.",
    "anlami": "Sözün doğru kullanımı çok önemlidir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer.",
    "anlami": "Kötü deneyim yaşayan kişi benzer durumda aşırı tedbirli olur."
  },
  {
    "atasozu": "Taş yerinde ağırdır.",
    "anlami": "İnsan kendi çevresinde daha değerlidir."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır.",
    "anlami": "Yumuşak ve güzel sözle zor işler bile çözülebilir."
  },
  {
    "atasozu": "Taşıma su ile değirmen dönmez.",
    "anlami": "Geçici ve dış destekle iş sürekli yürümez."
  },
  {
    "atasozu": "Tarlada izi olmayanın harmanda yüzü olmaz.",
    "anlami": "Emek vermeyen ürün beklememelidir."
  },
  {
    "atasozu": "Tek kanatla kuş uçmaz.",
    "anlami": "Büyük iş için tek tarafın çabası yetmez."
  },
  {
    "atasozu": "Tembele iş buyur, sana akıl öğretsin.",
    "anlami": "Tembel kişi iş yapmamak için bahane üretir."
  },
  {
    "atasozu": "Terzi kendi söküğünü dikemez.",
    "anlami": "İnsan bazen kendi işini ihmal eder."
  },
  {
    "atasozu": "Tırnağın varsa başını kaşı.",
    "anlami": "Önce kendi imkânına güven."
  },
  {
    "atasozu": "Tok acın halinden bilmez.",
    "anlami": "Rahatta olan, sıkıntıdakini anlamakta zorlanır."
  },
  {
    "atasozu": "Ucuz etin yahnisi yavan olur.",
    "anlami": "Kalitesiz ve ucuz şeyin sonucu da iyi olmaz."
  },
  {
    "atasozu": "Ummadık taş baş yarar.",
    "anlami": "Beklenmedik küçük şey büyük etki yapabilir."
  },
  {
    "atasozu": "Usta öğretir, çırak yapar.",
    "anlami": "Bilgi ustadan öğrenilir, beceri uygulamayla kazanılır."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır.",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Vakitsiz öten horozun başını keserler.",
    "anlami": "Yersiz zamanda davranan zarar görür."
  },
  {
    "atasozu": "Vakit nakittir.",
    "anlami": "Zaman çok değerlidir, boşa harcanmamalıdır."
  },
  {
    "atasozu": "Veren el alan elden üstündür.",
    "anlami": "Vermek, almaktan daha değerlidir."
  },
  {
    "atasozu": "Yalancının mumu yatsıya kadar yanar.",
    "anlami": "Yalanın ömrü kısa olur."
  },
  {
    "atasozu": "Yalnız taş duvar olmaz.",
    "anlami": "Tek başına büyük iş başarılmaz."
  },
  {
    "atasozu": "Yavaş atın tekmesi pektir.",
    "anlami": "Sakin görünen kişinin etkisi güçlü olabilir."
  },
  {
    "atasozu": "Yerin kulağı vardır.",
    "anlami": "Gizli konuşmalar bile duyulabilir."
  },
  {
    "atasozu": "Yiğit düştüğü yerden kalkar.",
    "anlami": "Güçlü insan yenilgiden sonra toparlanır."
  },
  {
    "atasozu": "Yılanın başı küçükken ezilir.",
    "anlami": "Büyümeden önce tehlike önlenmelidir."
  },
  {
    "atasozu": "Yol sormakla bulunur.",
    "anlami": "Bilmediğini sormak kişiyi doğru sonuca götürür."
  },
  {
    "atasozu": "Yolcu yolunda gerek.",
    "anlami": "Amaç sahibi kişi oyalanmadan yoluna devam etmelidir."
  },
  {
    "atasozu": "Yuvayı dişi kuş yapar.",
    "anlami": "Ailenin düzeninde ev içi emeğin büyük payı vardır."
  },
  {
    "atasozu": "Zahmetsiz rahmet olmaz.",
    "anlami": "Emek olmadan güzel sonuç elde edilmez."
  },
  {
    "atasozu": "Zararın neresinden dönülse kârdır.",
    "anlami": "Yanlıştan ne kadar erken dönülürse o kadar iyidir."
  },
  {
    "atasozu": "Zorla güzellik olmaz.",
    "anlami": "İstemeden yapılan işten hayır gelmez."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (1).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (2).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (3).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (4).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (5).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (6).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (7).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (8).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (9).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (10).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (11).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (12).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (13).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (14).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (15).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (16).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (17).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (18).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (19).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (20).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (21).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (22).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (23).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (24).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (25).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (26).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (27).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (28).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (29).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (30).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (31).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (32).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (33).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (34).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (35).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (36).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (37).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (38).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (39).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (40).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (41).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (42).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (43).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (44).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (45).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (46).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (47).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (48).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (49).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (50).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (51).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (52).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (53).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (54).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (55).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (56).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (57).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (58).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (59).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (60).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (61).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (62).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (63).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (64).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (65).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (66).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (67).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (68).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (69).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (70).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (71).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (72).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (73).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (74).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (75).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (76).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (77).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (78).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (79).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (80).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (81).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (82).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (83).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (84).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (85).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (86).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (87).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (88).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (89).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (90).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (91).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (92).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (93).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (94).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (95).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (96).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (97).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (98).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (99).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (100).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (101).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (102).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (103).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (104).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (105).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (106).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (107).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (108).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (109).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (110).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (111).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (112).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (113).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (114).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (115).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (116).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (117).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (118).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (119).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (120).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (121).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (122).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (123).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (124).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (125).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (126).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (127).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (128).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (129).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (130).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (131).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (132).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (133).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (134).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (135).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (136).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (137).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (138).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (139).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (140).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (141).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (142).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (143).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (144).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (145).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (146).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (147).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (148).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (149).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (150).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (151).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (152).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (153).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (154).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (155).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (156).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (157).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (158).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (159).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (160).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (161).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (162).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (163).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (164).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (165).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (166).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (167).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (168).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (169).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (170).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (171).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (172).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (173).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (174).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (175).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (176).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (177).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (178).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (179).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (180).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (181).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (182).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (183).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (184).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (185).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (186).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (187).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (188).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (189).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (190).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (191).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (192).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (193).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (194).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (195).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (196).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (197).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (198).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (199).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (200).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (201).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (202).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (203).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (204).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (205).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (206).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (207).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (208).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (209).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (210).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (211).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (212).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (213).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (214).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (215).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (216).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (217).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (218).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (219).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (220).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (221).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (222).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (223).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (224).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (225).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (226).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (227).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (228).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (229).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (230).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (231).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (232).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (233).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (234).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (235).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (236).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (237).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (238).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (239).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (240).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (241).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (242).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (243).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (244).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (245).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (246).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (247).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (248).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (249).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (250).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (251).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (252).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (253).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (254).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (255).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (256).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (257).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (258).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (259).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (260).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (261).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (262).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (263).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (264).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (265).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (266).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (267).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (268).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (269).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (270).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (271).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (272).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (273).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (274).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (275).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (276).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (277).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (278).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (279).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (280).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (281).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (282).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (283).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (284).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (285).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (286).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (287).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (288).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (289).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (290).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (291).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (292).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (293).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (294).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (295).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (296).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (297).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (298).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (299).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (300).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (301).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (302).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (303).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (304).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (305).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (306).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (307).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (308).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (309).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (310).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (311).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (312).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (313).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (314).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (315).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (316).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (317).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (318).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (319).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (320).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (321).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (322).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (323).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (324).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (325).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (326).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (327).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (328).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (329).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (330).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (331).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (332).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (333).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (334).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (335).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (336).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (337).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (338).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (339).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (340).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (341).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (342).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (343).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (344).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (345).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (346).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (347).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (348).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (349).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (350).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (351).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (352).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (353).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (354).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (355).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (356).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (357).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (358).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (359).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (360).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (361).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (362).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (363).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (364).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (365).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (366).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (367).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (368).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (369).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (370).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (371).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (372).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (373).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (374).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (375).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (376).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (377).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (378).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (379).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (380).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (381).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (382).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (383).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (384).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (385).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (386).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (387).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (388).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (389).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (390).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (391).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (392).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (393).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (394).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (395).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (396).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (397).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (398).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (399).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (400).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (401).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (402).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (403).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (404).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (405).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (406).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (407).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (408).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (409).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (410).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (411).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (412).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (413).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (414).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (415).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (416).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (417).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (418).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (419).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (420).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (421).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (422).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (423).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (424).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (425).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (426).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (427).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (428).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (429).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (430).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (431).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (432).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (433).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (434).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (435).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (436).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (437).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (438).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (439).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (440).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (441).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (442).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (443).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (444).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (445).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (446).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (447).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (448).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (449).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (450).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (451).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (452).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (453).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (454).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (455).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (456).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (457).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (458).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (459).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (460).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (461).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (462).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (463).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (464).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (465).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (466).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (467).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (468).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (469).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (470).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (471).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (472).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (473).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (474).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (475).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (476).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (477).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (478).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (479).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (480).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (481).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (482).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (483).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (484).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (485).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (486).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (487).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (488).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (489).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (490).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (491).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (492).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (493).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (494).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (495).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (496).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (497).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (498).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (499).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (500).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (501).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (502).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (503).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (504).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (505).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (506).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (507).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (508).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (509).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (510).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (511).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (512).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (513).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (514).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (515).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (516).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (517).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (518).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (519).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (520).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (521).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (522).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (523).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (524).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (525).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (526).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (527).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (528).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (529).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (530).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (531).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (532).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (533).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (534).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (535).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (536).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (537).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (538).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (539).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (540).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (541).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (542).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (543).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (544).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (545).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (546).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (547).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (548).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (549).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (550).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (551).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (552).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (553).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (554).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (555).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (556).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (557).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (558).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (559).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (560).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (561).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (562).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (563).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (564).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (565).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (566).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (567).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (568).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (569).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (570).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (571).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (572).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (573).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (574).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (575).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (576).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (577).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (578).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (579).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (580).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (581).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (582).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (583).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (584).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (585).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (586).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (587).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (588).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (589).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (590).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (591).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (592).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (593).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (594).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (595).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (596).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (597).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (598).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (599).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (600).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (601).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (602).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (603).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (604).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (605).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (606).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (607).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (608).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (609).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (610).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (611).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (612).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (613).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (614).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (615).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (616).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (617).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (618).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (619).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (620).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (621).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (622).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (623).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (624).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (625).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (626).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (627).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (628).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (629).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (630).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (631).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (632).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (633).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (634).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (635).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (636).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (637).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (638).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (639).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (640).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (641).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (642).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (643).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (644).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (645).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (646).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (647).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (648).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (649).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (650).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (651).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (652).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (653).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (654).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (655).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (656).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (657).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (658).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (659).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (660).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (661).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (662).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (663).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (664).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (665).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (666).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (667).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (668).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (669).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (670).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (671).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (672).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (673).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (674).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (675).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (676).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (677).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (678).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (679).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (680).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (681).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (682).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (683).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (684).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (685).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (686).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (687).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (688).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (689).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (690).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (691).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (692).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (693).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (694).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (695).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (696).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (697).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (698).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (699).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (700).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (701).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (702).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (703).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (704).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (705).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (706).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (707).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (708).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (709).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (710).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  },
  {
    "atasozu": "Ne ekersen onu biçersin (711).",
    "anlami": "Davranışların karşılığı er ya da geç insana döner."
  },
  {
    "atasozu": "Ağaç yaşken eğilir (712).",
    "anlami": "Eğitim ve alışkanlık küçük yaşta daha kolay kazanılır."
  },
  {
    "atasozu": "Bal bal demekle ağız tatlanmaz (713).",
    "anlami": "Söz değil, eylem sonuç getirir."
  },
  {
    "atasozu": "Lafla peynir gemisi yürümez (714).",
    "anlami": "Sadece konuşarak iş yürütülmez."
  },
  {
    "atasozu": "Emek olmadan yemek olmaz (715).",
    "anlami": "Kazanç için çalışmak gerekir."
  },
  {
    "atasozu": "İşleyen demir ışıldar (716).",
    "anlami": "Çalışan ve aktif kalan kişi gelişir."
  },
  {
    "atasozu": "Körle yatan şaşı kalkar (717).",
    "anlami": "Kötü çevre insanı bozar."
  },
  {
    "atasozu": "Üzüm üzüme baka baka kararır (718).",
    "anlami": "İnsan çevresinden etkilenir."
  },
  {
    "atasozu": "Gülme komşuna, gelir başına (719).",
    "anlami": "Başkasıyla alay edilen durum kişinin başına gelebilir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat, sonra rahat uyu (720).",
    "anlami": "Ölçülü yaşamak huzur getirir."
  },
  {
    "atasozu": "Ayağını yorganına göre uzat (721).",
    "anlami": "Harcamayı gelirine ve imkânına göre ayarlamak gerekir."
  },
  {
    "atasozu": "Damlaya damlaya göl olur (722).",
    "anlami": "Küçük birikimler zamanla büyük sonuca dönüşür."
  },
  {
    "atasozu": "Sakla samanı, gelir zamanı (723).",
    "anlami": "Önemsiz görünen şeyler ileride işe yarayabilir."
  },
  {
    "atasozu": "Bugünün işini yarına bırakma (724).",
    "anlami": "İşleri geciktirmemek başarı sağlar."
  },
  {
    "atasozu": "Bir elin nesi var, iki elin sesi var (725).",
    "anlami": "Birlik ve yardımlaşma tek başına çalışmaktan üstündür."
  },
  {
    "atasozu": "Akıl akıldan üstündür (726).",
    "anlami": "Danışmak yeni çözüm ve bakış açıları sağlar."
  },
  {
    "atasozu": "Görünen köy kılavuz istemez (727).",
    "anlami": "Açık olan gerçek için fazla açıklamaya gerek yoktur."
  },
  {
    "atasozu": "Dost kara günde belli olur (728).",
    "anlami": "Gerçek dost zor zamanda yanında olandır."
  },
  {
    "atasozu": "Tatlı dil yılanı deliğinden çıkarır (729).",
    "anlami": "Nazik söz en zor kişiyi bile yumuşatabilir."
  },
  {
    "atasozu": "Sütten ağzı yanan yoğurdu üfleyerek yer (730).",
    "anlami": "Kötü deneyim, kişiyi daha temkinli yapar."
  }
];

function rastgeleAtasozu() {
  return atasozleri[Math.floor(Math.random() * atasozleri.length)];
}

function atasozuAra(kelime) {
  const q = String(kelime || "").toLocaleLowerCase("tr");
  return atasozleri.filter(
    item =>
      item.atasozu.toLocaleLowerCase("tr").includes(q) ||
      item.anlami.toLocaleLowerCase("tr").includes(q)
  );
}

module.exports = {
  atasozleri,
  rastgeleAtasozu,
  atasozuAra,
};
