// TR (varsayılan) <-> EN. Metin düğümleri ve placeholder/alt öznitelikleri sözlükle çevrilir.
const EN = {
"Nasıl çalışır?":"How it works","Güvenlik":"Safety","SSS":"FAQ","Listeye katıl":"Join the list",
"iOS · App Store'da çok yakında":"iOS · Coming soon to the App Store","İstanbul · Ankara · İzmir":"Istanbul · Ankara · Izmir",
"Bütçen uyuyor,":"Your budgets match,","peki yaşam tarzın?":"but do your lifestyles?",
"25 soruluk uyum testiyle sana en uygun ev arkadaşlarını gör. Karşılıklı beğeni olmadan mesaj yok.":"Take a 25-question compatibility test and see the roommates who fit you best. No messages without a mutual like.",
"Bekleme listesine katıl →":"Join the waitlist →","Ücretsiz":"Free","18 yaş ve üzeri":"18+ only","Karşılıklı beğeni olmadan mesaj yok":"No messages without a mutual like",
"İstanbul'da bir mutfakta birlikte kahvaltı hazırlayan ev arkadaşları":"Roommates making breakfast together in an Istanbul kitchen",
"ÖRNEK UYUM ORANI":"SAMPLE COMPATIBILITY","Uyku":"Sleep","23:30 civarı":"Around 23:30","Temizlik":"Cleaning","Orta düzen":"Moderately tidy","Misafir":"Guests","Nadiren":"Rarely","Bütçe":"Budget",
"Test sonucu örneğidir (kurgusal profil).":"Sample test result (fictional profile).",
"Neden şimdi?":"Why now?","Kira herkesi bütçeye baktırıyor. Yaşam tarzına bakan yok.":"Rent makes everyone look at the budget. Nobody looks at lifestyle.",
"Ev arkadaşı aramak artık bir tercih değil, zorunluluk. Ama ilanlar sadece rakamı ve semti konuşuyor: kimse saat 02:00'de müzik açılıp açılmadığını sormuyor.":"Finding a roommate is no longer a choice, it's a necessity. But listings only talk about price and neighborhood: nobody asks whether music plays at 2 a.m.",
"İstanbul'da ilan kiraları 4 yılda":"Rise in Istanbul listing rents over 4 years","Kaynak: BETAM / sahibindex, Eylül 2022 – Ağustos 2026":"Source: BETAM / sahibindex, Sep 2022 – Aug 2026",
"Yeni kiracı kiraları 1 yılda":"Rise in new-tenant rents in 1 year","Kaynak: TCMB Yeni Kiracı Kira Endeksi (YKKE), Ağustos 2026":"Source: Central Bank of Türkiye New Tenant Rent Index, Aug 2026",
"Taşınma günü koli taşıyan öğrenciler":"Students carrying boxes on moving day","Taşınma günü: 4 kişi, 6 koli, asansör yok.":"Moving day: 4 people, 6 boxes, no elevator.",
"Bütçe konuşuluyor: “9.000 TL + faturalar”.":"Budget gets discussed: “9,000 TL + bills”.","Uyku saati konuşulmuyor: “kaçta uyuyorsun?”":"Sleep schedules don't: “what time do you go to bed?”",
"Bulaşık, ses, misafir ve ortak alan alışkanlıkları hiç sorulmuyor.":"Dishes, noise, guests and shared-space habits never come up.",
"İyi ev arkadaşlığı iyi niyetle değil, iyi eşleşmeyle başlar.":"Good roommates don't start with good intentions. They start with a good match.",
"Uygulamadan":"In the app","Önce uyum, sonra sohbet.":"Compatibility first, then chat.","Uyum testi ekranı":"Compatibility test screen",
"25 soruluk uyum testi":"25-question compatibility test","Uyku, temizlik, misafir, bütçe…":"Sleep, cleaning, guests, budget…",
"Ev arkadaşları destesi":"Roommate deck","Uyum yüzdesiyle aday":"Candidates with a match score","Evi var / evi yok filtresi":"Has a place / looking filter",
"Eşleşmeler ekranı":"Matches screen","Karşılıklı beğeni = eşleşme":"Mutual like = match","Sohbet ancak o zaman açılır":"Only then does chat open",
"Dört adımda uyumlu ev arkadaşı":"A compatible roommate in four steps","Uyum testi 25 soru, yaklaşık 4 dakika sürüyor.":"The test is 25 questions and takes about 4 minutes.",
"25 soruyu cevapla":"Answer 25 questions","Uyku saatinden misafir alışkanlığına, temizlikten bütçe aralığına kadar 25 kısa soru.":"25 short questions, from sleep schedule and guests to cleaning and budget.",
"Uyum yüzdesini gör":"See your match score","Cevapların karşılaştırılır; sana en yakın profiller uyum oranıyla sıralanır.":"Your answers are compared; the closest profiles are ranked by compatibility.",
"Karşılıklı beğen":"Like each other","Sen beğen, o da beğensin. Eşleşme yalnızca iki taraf da istediğinde olur.":"You like them, they like you. A match only happens when both want it.",
"Sohbeti başlat":"Start chatting","Eşleşince sohbet açılır; ilk mesajı sen at, buluşmayı planla.":"Once matched, chat opens: send the first message and plan to meet.",
"Oturma odasında sohbet eden iki ev arkadaşı":"Two roommates chatting in the living room","Cuma akşamı: pizza, dizi, iki kişilik kanepe.":"Friday night: pizza, a series, a two-seat sofa.",
"İki taraf da beğenmeden mesaj kutusu açılmaz.":"The inbox stays closed until both sides like each other.","İstenmeyen mesaj yok; sadece karşılıklı ilgiyle başlayan sohbetler.":"No unwanted messages; only conversations that start with mutual interest.",
"Kırmızı bayrak":"Red flags","Aynı bütçe, iki farklı ev.":"Same budget, two very different homes.","Sorun karakter değil; baştan konuşulmayan detaylar.":"The problem isn't character; it's the details nobody discussed up front.",
"Dağınık ev":"Messy home","Bulaşık üç gündür lavaboda, kimse sahiplenmiyor.":"Dishes have been in the sink for three days; nobody owns it.",
"Gece 03:00'te hoparlör açılıyor, “ben böyleyim” deniyor.":"The speaker goes on at 3 a.m.: “that's just how I am.”","Kira günü her ay sürpriz oluyor.":"Rent day is a surprise every month.",
"Ortak alan kimsenin alanı değil.":"Shared space is nobody's space.","İlk mesaj: “selam”. İkinci mesaj: yok.":"First message: “hi”. Second message: none.",
"Uyumlu ev":"Compatible home","Temizlik sırası buzdolabında yazıyor, kimse tripli değil.":"The cleaning rota is on the fridge, no drama.",
"Sessiz saatler ilk hafta konuşulmuş: 23:00–08:00.":"Quiet hours agreed in week one: 23:00–08:00.","Kira ve faturalar testte belliydi, sürpriz yok.":"Rent and bills were clear from the test, no surprises.",
"Ortak alan ortak: masayı en son kalkan toplar.":"Shared space is shared: last one up clears the table.","İlk mesajdan itibaren net iletişim.":"Clear communication from the first message.",
"Dağınık ve düzenli mutfak karşılaştırması":"Messy vs. tidy kitchen comparison","Güven, ilk mesajdan önce başlar.":"Trust starts before the first message.",
"Ev arkadaşı ararken rahat olman gerekiyor. Uygulamada bunlar standart:":"You should feel at ease while searching. These are standard in the app:",
"E-posta doğrulaması":"Email verification","Hesap açan herkes e-posta adresini doğrular.":"Everyone who signs up verifies their email.",
"Fotoğraflar otomatik taranır":"Photos are scanned automatically","Yüklediğin görseller profiline eklenmeden önce otomatik taramadan geçer.":"Uploaded photos pass an automatic check before they appear on your profile.",
"Karşılıklı beğeni şartı":"Mutual like required","İki taraf da beğenmeden mesaj gönderilemez.":"No one can message you until you both like each other.",
"Şikâyet et ve engelle":"Report and block","Rahatsız eden bir profil için tek dokunuşla şikâyet et ve engelle.":"Report and block an uncomfortable profile with one tap.",
"Sohbette güvenlik notu":"Safety note in chat","Her sohbetin başında kapora ve ödeme dolandırıcılığına karşı bir güvenlik notu görürsün.":"Every chat starts with a safety note about deposit and payment scams.",
"Hesabını sil":"Delete your account","İstediğin an hesabını uygulama içinden silebilirsin.":"Delete your account from inside the app at any time.",
"Tek kural: kapora gibi ödemeleri evi görmeden ve uygulama dışında yapma.":"One rule: never pay deposits before seeing the place or outside the app.",
"Merak edilenler":"Frequently asked","Roomie ücretli mi?":"Is Roomie paid?","Hayır, Roomie ücretsiz.":"No, Roomie is free.",
"Hangi şehirlerde var?":"Which cities?","İstanbul, Ankara ve İzmir.":"Istanbul, Ankara and Izmir.","Kaç yaşından itibaren kullanabilirim?":"How old do I need to be?",
"Roomie 18 yaş ve üzeri kullanıcılar içindir.":"Roomie is for users aged 18 and over.","Uyum testi kaç soru, ne kadar sürüyor?":"How long is the test?",
"25 soru, yaklaşık 4 dakika. Doğru ya da yanlış cevap yok. Uyum yüzdesi bir eşleştirme göstergesidir, garanti değildir.":"25 questions, about 4 minutes. There are no right or wrong answers. The match score is an indicator, not a guarantee.",
"Verilerim nasıl kullanılıyor?":"How is my data used?","Doğum tarihin ve e-posta adresin diğer kullanıcılarla paylaşılmaz. Ayrıntılar:":"Your date of birth and email are never shown to other users. Details:",
"Gizlilik ve KVKK":"Privacy policy","App Store'a ne zaman gelecek?":"When will it be on the App Store?",
"Uygulama App Store incelemesinde. Bekleme listesine katılırsan yayın günü ilk sen haber alırsın.":"The app is in App Store review. Join the waitlist and you'll hear first on launch day.",
"Sorun mu var, öneri mi?":"Problem or idea?","Bekleme listesi":"Waitlist","Bekleme listesine katıl, ilk sen gör.":"Join the waitlist and be first in.",
"Yayın günü daveti ilk sıradakilere gönderiyoruz. Lansman dışında e-posta göndermiyoruz.":"Launch-day invites go to the top of the list first. We only email you about the launch.",
"Bilgiler yalnızca şehir/ilçe yoğunluğunu planlamak ve lansman haberini göndermek için kullanılır.":"Your details are only used to plan demand by city/district and to announce the launch.",
"Kişisel verilerin yayımlanmaz; yalnızca toplu sayılar kullanılır.":"Your personal data is never published; only aggregate numbers are used.",
"Listeden her zaman çıkabilirsin:":"You can leave the list any time:","E-posta *":"Email *","ornek@mail.com":"you@example.com","Şehir *":"City *","Şehir seç":"Choose a city",
"İlçe ve üniversite ekle (opsiyonel)":"Add district and university (optional)","İlçe":"District","ör. Kadıköy":"e.g. Kadıköy","Üniversite":"University","Üniversite seç":"Choose a university",
"Sen hangisisin? *":"Which one are you? *","Evim var":"I have a place","Boş odam var, ev arkadaşı arıyorum.":"I have a spare room and need a roommate.",
"Ev arıyorum":"I'm looking for a place","Oda ya da eve taşınmak istiyorum.":"I want to move into a room or flat.","Birlikte ev arayacağız":"Let's find a place together",
"Yeni bir evi birlikte tutalım.":"Let's rent a new place together.","Bekleme listesi için verdiğim bilgilerin işlenmesine onay veriyorum. Ayrıntılar:":"I consent to my details being processed for the waitlist. Details:",
"Kullanım Koşulları":"Terms of use","Diğer":"Other","Diğer (listede yok)":"Other (not listed)","Üniversiteyle ilgim yok / mezunum":"Not a student / graduated"
};
const MSG = {
 tr:{email:'Geçerli bir e-posta yaz.',city:'Şehir seç.',role:'Hangisi olduğunu seç.',consent:'Devam etmek için onay kutusunu işaretle.',ok:'Listedesin! 🎉 Yayın günü ilk sen haber alacaksın.',fail:'Bir sorun oldu, tekrar dene.',net:'Bağlantı sorunu, tekrar dene.',sending:'Gönderiliyor…',submit:'Listeye katıl',count:n=>n+' kişi listede.'},
 en:{email:'Enter a valid email.',city:'Choose a city.',role:'Choose which one you are.',consent:'Please tick the consent box to continue.',ok:"You're on the list! 🎉 You'll hear first on launch day.",fail:'Something went wrong, try again.',net:'Connection problem, try again.',sending:'Sending…',submit:'Join the list',count:n=>n+' people on the list.'}
};
const norm = t => t.replace(/\s+/g,' ').trim();
const TR = {}; for (const k in EN) TR[EN[k]] = k;
let LANG = 'tr';
function applyLang(lang){
  const dict = lang==='en' ? EN : TR;
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n; while((n=w.nextNode())){ const k=norm(n.nodeValue); if(k && dict[k]){ const lead=n.nodeValue.match(/^\s*/)[0], trail=n.nodeValue.match(/\s*$/)[0]; n.nodeValue=lead+dict[k]+trail; } }
  document.querySelectorAll('[placeholder],[alt]').forEach(e=>{ for(const a of ['placeholder','alt']){ const v=e.getAttribute(a); if(v && dict[v]) e.setAttribute(a,dict[v]); } });
  document.documentElement.lang = lang; LANG = lang;
  document.title = lang==='en' ? 'Roomie — Your budgets match, but do your lifestyles?' : 'Roomie — Bütçen uyuyor, peki yaşam tarzın?';
  const b=document.getElementById('lang'); if(b) b.textContent = lang==='en' ? 'TR' : 'EN';
  try{ localStorage.setItem('roomie-lang', lang); }catch(e){}
  window.dispatchEvent(new Event('langchange'));
}
window.t = k => MSG[LANG][k];
document.addEventListener('DOMContentLoaded',()=>{
  let saved=null; try{ saved=localStorage.getItem('roomie-lang'); }catch(e){}
  const q=new URLSearchParams(location.search).get('lang');
  const start = q || saved || ((navigator.language||'tr').toLowerCase().startsWith('tr') ? 'tr' : 'en');
  if(start==='en') applyLang('en'); else { const b=document.getElementById('lang'); if(b) b.textContent='EN'; }
  document.getElementById('lang')?.addEventListener('click',()=>applyLang(LANG==='en'?'tr':'en'));
});
