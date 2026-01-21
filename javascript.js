// 1. Uzman Bilgileri Veri Seti
const uzmanlar = {
    "1": { isim: "Uzm. Psk. Alp Aydın", 
           brans: "Klinik Psikolog", 
           resim: "img/ps1.jpg",
           hakkinda: "Boğaziçi Üniversitesi Psikoloji (Lisans), ODTÜ Klinik Psikoloji (Yüksek Lisans).10 yıllık deneyimiyle yetişkin terapisi üzerine uzmanlaşmıştır.Bilişsel Davranışçı Terapi (BDT) odaklı çalışmakta, anksiyete ve depresyon konularında uzmanlaşmıştır.Ergenlerde özgüven sorunları ve akran zorbalığı konularında danışmanlık vermektedir." },
   
    "2": { isim: "Uzm. Psk. Ali Ak",
           brans: "Klinik Psikolog", 
           resim: "img/ps2.jpg", 
           hakkinda: "Hacettepe Üniversitesi Psikoloji, Ankara Üniversitesi Eğitim Psikolojisi (YL).Travma ve tükenmişlik sendromu üzerine uzmandır.Ergenlerde özgüven sorunları ve akran zorbalığı konularında danışmanlık vermektedir.Varoluşçu psikoterapi ve bireysel farkındalık yolculuğu üzerine derinleşmiştir." },

    "3": { isim: "Uzm. Psk. Mert Parlak", 
           brans: "Klinik Psikolog", 
           resim: "img/psikolog3.jpg", 
           hakkinda: "İstanbul Üniversitesi Psikoloji, Marmara Üniversitesi Çocuk Gelişimi Uzmanlığı.Bütüncül psikoterapi yöntemlerini benimsemiştir.EMDR terapisi ile travma sonrası stres bozukluğu ve kayıp/yas süreçlerini yönetmektedir.Varoluşçu psikoterapi ve bireysel farkındalık yolculuğu üzerine derinleşmiştir." },
    
    "4": { isim: "Uzm. Psk. Hüseyin Park", 
           brans: "Çocuk ve Ergen Psikoloğu", 
           resim: "img/psk9.jpg", 
           hakkinda: "Koç Üniversitesi Psikoloji, Queen Mary University of London (Master).Çocuk ve ergen gelişimi üzerine çalışmaktadır.Oyun terapisi ve çocuklarda bağlanma sorunları üzerine 10 yıllık deneyime sahiptir.Varoluşçu psikoterapi ve bireysel farkındalık yolculuğu üzerine derinleşmiştir." },
    
    "5": { isim: "Uzm. Psk. Yeliz Bal",
           brans: "Çocuk ve Ergen Psikoloğu", 
           resim: "img/psk7.jpg", 
           hakkinda: "Ege Üniversitesi Psikoloji, Dokuz Eylül Üniversitesi Klinik Psikoloji.Çocuk gelişimi ve ergenlik dönemi sorunları üzerine çalışmaktadır.Çocuklarda dikkat eksikliği ve hiperaktivite (DEHB) ile sosyal fobi alanlarında yetkindir.Ergenlerde özgüven sorunları ve akran zorbalığı konularında danışmanlık vermektedir." },
    
    "6": { isim: "Uzm. Psk. Elif Gen",
           brans: "Ergen Psikoloğu", 
           resim: "img/psk8.jpg", 
           hakkinda: "Bilgi Üniversitesi Psikoloji, Varoluşçu Analiz Derneği Eğitimleri.Ergenlik dönemi sorunları üzerine uzmanlaşmıştır.Ergenlerde özgüven sorunları ve akran zorbalığı konularında danışmanlık vermektedir.Varoluşçu psikoterapi ve bireysel farkındalık yolculuğu üzerine derinleşmiştir." },
    
    "7": { isim: "Uzm. Psk. Boran Kurt", 
           brans: "Çocuk Psikoloğu",
           resim: "img/pk10.jpg", 
           hakkinda: "Ankara Üniversitesi Psikoloji, Şema Terapi Uluslararası Sertifikasyon Programı.Oyun terapisi ve çocuk psikolojisi uzmanıdır.Varoluşçu psikoterapi ve bireysel farkındalık yolculuğu üzerine derinleşmiştir.Varoluşçu psikoterapi ve bireysel farkındalık yolculuğu üzerine derinleşmiştir." },
    
    "8": { isim: "Uzm. Psk. Merve Ayliz",
           brans: "Klinik Psikolog", 
           resim: "img/psikolog4.jpg", 
           hakkinda: "Koç Üniversitesi Psikoloji, Queen Mary University of London (Master).Bilimsel temelli yaklaşımlarla yetişkin terapisi yapar.EMDR terapisi ile travma sonrası stres bozukluğu ve kayıp/yas süreçlerini yönetmektedir.Ergenlerde özgüven sorunları ve akran zorbalığı konularında danışmanlık vermektedir." },
   
    "9": { isim: "Uzm. Psk. Burcu Güneş", 
           brans: "Çocuk ve Ergen Psikoloğu", 
           resim: "img/psikolog5.jpg", 
           hakkinda: "Koç Üniversitesi Psikoloji, Queen Mary University of London (Master).Gelişim takibi ve stres yönetimi çalışmaktadır.Varoluşçu psikoterapi ve bireysel farkındalık yolculuğu üzerine derinleşmiştir.Varoluşçu psikoterapi ve bireysel farkındalık yolculuğu üzerine derinleşmiştir." }
};

// --- SAYFA KONTROLLERİ ---

document.addEventListener("DOMContentLoaded", () => {
    
    // --- FONKSİYON 1: PROFİL DETAY SAYFASI ---
    const urlParams = new URLSearchParams(window.location.search);
    const uzmanId = urlParams.get('id');
    const profileName = document.querySelector(".profile-info h1");

    if (uzmanId && uzmanlar[uzmanId] && profileName) {
        const uzman = uzmanlar[uzmanId];
        profileName.innerText = uzman.isim;
        document.querySelector(".specialty").innerText = uzman.brans;
        document.querySelector(".detail-img").src = uzman.resim;
        document.querySelector(".about p").innerText = uzman.hakkinda;
    }

    // --- FONKSİYON 2: MODAL İŞLEMLERİ ---
    const modal = document.getElementById("appointmentModal");
    const appointmentBtn = document.querySelector(".appointment-btn");
    const closeBtn = document.querySelector(".close-btn");

    if (appointmentBtn && modal) {
        appointmentBtn.onclick = () => {
            modal.style.display = "block";
            document.getElementById("modalExpertName").innerText = "Uzman: " + profileName.innerText;
        };
    }

    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    };

    // --- FONKSİYON 3: FİLTRELEME (ANA SAYFA) ---
    const filterButtons = document.querySelectorAll(".cat-btn");
    const expertCards = document.querySelectorAll(".expert-card");

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Aktif buton stilini güncelle
                document.querySelector(".cat-btn.active").classList.remove("active");
                button.classList.add("active");

                const filterValue = button.getAttribute("data-filter").toLowerCase().trim();

                expertCards.forEach(card => {
                    const cardCategory = card.querySelector(".specialty").innerText.toLowerCase().trim();

                    if (filterValue === "all" || cardCategory === filterValue) {
                        card.classList.remove("hidden");
                        setTimeout(() => card.classList.remove("fade-out"), 10);
                    } else {
                        card.classList.add("fade-out");
                        setTimeout(() => card.classList.add("hidden"), 400);
                    }
                });
            });
        });
    }

    // --- FONKSİYON 4: RANDEVU FORMU GÖNDERİMİ ---
    const appointmentForm = document.getElementById("appointmentForm");
    if (appointmentForm) {
        appointmentForm.onsubmit = function(e) {
            e.preventDefault();
            document.querySelector(".modal-content").innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h2 style="color: #2ecc71;">✓ Randevunuz Alındı!</h2>
                    <p>En kısa sürede size dönüş yapılacaktır.</p>
                    <button onclick="location.reload()" class="view-btn">Kapat</button>
                </div>`;
        };
    }
});

// Giriş Formu Kontrolü
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.onsubmit = function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        alert("Hoş geldiniz! " + email + " adresi ile giriş yapılıyor...");
        window.location.href = "index.html"; // Girişten sonra ana sayfaya yönlendir
    };
}