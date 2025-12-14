
'use client';

import { Logo } from '@/components/icons';
import { useI18n } from '@/lib/i18n';
import DashboardHeader from '@/components/dashboard-header';
import Image from 'next/image';

function Section({ title, children, id }: { title: string; children: React.ReactNode; id: string }) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-3xl font-bold text-primary mb-6 pb-2 border-b-2 border-primary/20">{title}</h2>
      <div className="prose prose-lg max-w-none text-foreground/90">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children, id }: { title: string; children: React.ReactNode; id: string }) {
    return (
      <div id={id} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        {children}
      </div>
    );
}

export default function JournalPage() {
    const { t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DashboardHeader />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-primary">
            Kegagalan Narasi dan Kesenjangan Empati
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Analisis Isi Media Massa terhadap Komunikasi Respons Pemerintah dalam Bencana Banjir Bandang di Aceh, Sumatra Utara, dan Sumatra Barat
          </p>
        </header>

        <div className="grid md:grid-cols-[280px_1fr] gap-12">
          <aside className="hidden md:block">
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-muted-foreground">Daftar Isi</h3>
              <nav>
                <ul className="space-y-2">
                  <li><a href="#pengantar" className="font-medium text-foreground/80 hover:text-primary transition-colors">Kata Pengantar</a></li>
                  <li><a href="#pendahuluan" className="font-medium text-foreground/80 hover:text-primary transition-colors">Pendahuluan</a></li>
                  <li><a href="#teori" className="font-medium text-foreground/80 hover:text-primary transition-colors">Landasan Teori</a></li>
                  <li><a href="#studi-kasus" className="font-medium text-foreground/80 hover:text-primary transition-colors">Studi Kasus</a></li>
                  <li><a href="#kesimpulan" className="font-medium text-foreground/80 hover:text-primary transition-colors">Kesimpulan & Rekomendasi</a></li>
                  <li><a href="#pustaka" className="font-medium text-foreground/80 hover:text-primary transition-colors">Daftar Pustaka</a></li>
                </ul>
              </nav>
            </div>
          </aside>

          <article>
            <Section title="Kata Pengantar" id="pengantar">
                <p>Puji syukur kehadirat Tuhan Yang Maha Esa atas rahmat dan karunia-Nya, sehingga penulis dapat menyelesaikan makalah ilmiah ini dengan judul "Kegagalan Narasi dan Kesenjangan Empati: Analisis Isi Media Massa terhadap Komunikasi Respons Pemerintah dalam Bencana Banjir Bandang di Aceh, Sumatra Utara, dan Sumatra Barat."</p>
                <p>Makalah ini disusun sebagai upaya refleksi kritis terhadap salah satu aspek terpenting dalam manajemen bencana, yaitu Komunikasi Krisis. Bencana banjir bandang yang menimpa tiga provinsi di Pulau Sumatra, Aceh, Sumatra Utara, dan Sumatra Barat bukan hanya menyisakan kerugian materiil dan korban jiwa, tetapi juga menyingkap adanya permasalahan mendasar dalam strategi komunikasi massa yang digunakan oleh otoritas pemerintah.</p>
                <p>Fokus utama dari penelitian ini adalah menganalisis isi media massa dan narasi yang beredar, menggunakan kerangka teoritis seperti Teori Framing dan Teori Agenda-Setting. Tujuannya adalah untuk mengidentifikasi bagaimana isi pesan yang disampaikan oleh atau mengenai pemerintah dapat berkontribusi pada kesalahpahaman publik, merusak kepercayaan, dan memperburuk situasi krisis alih-alih meredakannya. Penulis berharap analisis ini dapat memberikan perspektif baru mengenai pentingnya empati, akuntabilitas, dan transparansi sebagai inti dari setiap komunikasi respons bencana.</p>
                <p>Penulis menyadari bahwa makalah ini masih jauh dari kata sempurna dan tentu memiliki keterbatasan. Oleh karena itu, penulis sangat mengharapkan kritik dan saran yang konstruktif dari berbagai pihak demi perbaikan di masa mendatang.</p>
                <p>Akhir kata, semoga makalah ini dapat memberikan kontribusi yang signifikan dalam pengembangan ilmu komunikasi massa, khususnya dalam konteks komunikasi krisis dan penanganan bencana di Indonesia.</p>
                <p className="text-right mt-8">Cibubur, 6 Desember 2025</p>
            </Section>

            <Section title="Pendahuluan" id="pendahuluan">
              <SubSection title="1. Latar Belakang" id="latar-belakang">
                <p>Bencana banjir bandang yang melanda wilayah pesisir barat dan pegunungan di Aceh, Sumatera Utara, dan Sumatera Barat pada akhir November 2025 menjadi tonggak krisis lingkungan terdahsyat di penghujung tahun ini. Kejadian yang berlangsung secara simultan di tiga provinsi tersebut telah memakan korban jiwa yang sangat besar, merusak ribuan infrastruktur publik, dan memaksa puluhan ribu warga mengungsi. Karakteristik banjir bandang ini sangat destruktif karena membawa material kayu, bebatuan, dan lumpur pekat yang menyapu pemukiman dalam waktu yang sangat singkat.</p>
                
                <figure className="my-8">
                  <Image src="/update-bajir.jpeg" alt="Dampak banjir bandang" width={800} height={450} className="rounded-lg shadow-lg w-full object-cover" data-ai-hint="flood destruction" />
                  <figcaption className="text-center text-sm italic mt-2 text-muted-foreground">Foto udara menunjukkan skala kerusakan masif di salah satu desa di Aceh, di mana material banjir bandang berupa lumpur dan kayu gelondongan menyapu bersih pemukiman warga, menyoroti dampak destruktif dari bencana tersebut.</figcaption>
                </figure>

                <p>Secara valid, bencana ini merupakan hasil dari perpaduan faktor alam dan kegagalan pengelolaan lingkungan. Peningkatan curah hujan ekstrem yang terjadi di sepanjang Bukit Barisan memicu kejenuhan tanah di kawasan hulu. Namun, skala kehancuran yang masif ini tidak dapat dipisahkan dari persoalan deforestasi dan alih fungsi lahan di kawasan hutan lindung yang berfungsi sebagai penyangga air. Lemahnya pengawasan terhadap izin pembukaan lahan mengakibatkan daerah aliran sungai (DAS) kehilangan daya dukung, sehingga air hujan langsung berubah menjadi aliran permukaan (run-off) yang membawa debris mematikan.</p>
                <p>Di sisi lain, peristiwa ini menyingkap kegagalan dalam sistem komunikasi risiko bencana. Meskipun teknologi pengindraan jauh telah memberikan peringatan dini terkait cuaca ekstrem, informasi tersebut seringkali tidak tersampaikan secara efektif atau tidak dipahami oleh masyarakat di akar rumput. Terjadi kesenjangan informasi (information gap) antara otoritas terkait dengan warga yang tinggal di daerah rawan. Selain itu, arus informasi di media sosial pada akhir November 2025 menunjukkan dominasi narasi kepanikan dibandingkan instruksi evakuasi yang sistematis, yang justru berpotensi meningkatkan jumlah korban jiwa akibat disinformasi di tengah krisis.</p>
                <p>Dalam perspektif komunikasi massa, media memegang peran sentral namun ambigu. Media massa berfungsi sebagai saluran utama penyebaran informasi tanggap darurat, namun seringkali terjebak dalam pembingkaian (framing) yang bersifat sensasional atau hanya menyalahkan faktor alam tanpa mengkritisi kebijakan tata ruang yang salah arah. Oleh karena itu, diperlukan analisis mendalam mengenai bagaimana komunikasi massa dikelola selama bencana November 2025 ini berlangsung, baik untuk kepentingan mobilisasi bantuan maupun sebagai instrumen tekanan publik agar pemerintah melakukan pembenahan ekologi secara struktural.</p>
                <p>Berdasarkan realitas tersebut, makalah ini disusun untuk memetakan akar permasalahan banjir bandang di Sumatera serta mengevaluasi efektivitas komunikasi massa dalam mitigasi dan penanganan bencana guna mencegah terulangnya tragedi serupa di masa depan.</p>
              </SubSection>
              <SubSection title="2. Rumusan Masalah" id="rumusan-masalah">
                <ul className="list-decimal pl-6 space-y-2">
                  <li>Apa faktor utama yang memperparah banjir bandang di Sumatera pada November 2025 di luar faktor cuaca?</li>
                  <li>Seberapa efektif sistem peringatan dini (komunikasi risiko) tersampaikan kepada masyarakat sebelum bencana terjadi?</li>
                  <li>Bagaimana media massa membingkai (framing) penyebab bencana ini, apakah sebagai murni faktor alam atau dampak kerusakan lingkungan?</li>
                  <li>Apa hambatan komunikasi yang menyebabkan keterlambatan evakuasi dan distribusi bantuan di wilayah terdampak?</li>
                </ul>
              </SubSection>
              <SubSection title="3. Tujuan Penelitian" id="tujuan-penelitian">
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Menganalisis Faktor Ekologis:</strong> Mengidentifikasi penyebab utama besarnya skala banjir bandang di Sumatera (November 2025) yang berkaitan dengan kerusakan lingkungan di wilayah hulu.</li>
                    <li><strong>Mengevaluasi Komunikasi Risiko:</strong> Mengukur sejauh mana efektivitas penyampaian peringatan dini dari otoritas terkait sampai ke masyarakat di wilayah terdampak.</li>
                    <li><strong>Menganalisis Framing Media:</strong> Membedah cara media massa mengonstruksi dan memberitakan penyebab bencana (alam vs kebijakan manusia) melalui perspektif teori komunikasi massa.</li>
                    <li><strong>Mengidentifikasi Hambatan Evakuasi:</strong> Memetakan kendala komunikasi yang terjadi di lapangan yang menghambat proses evakuasi dan koordinasi bantuan darurat.</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="Landasan Teori: Teori Isi Media Massa" id="teori">
                <SubSection title="A. Teori Agenda Setting" id="teori-agenda-setting">
                    <p>Dalam meninjau banjir bandang Sumatera November 2025, McCombs dan Shaw (1972) menekankan bahwa kemampuan media untuk mentransfer isu dari agenda mereka ke agenda publik sangat menentukan pentingnya bencana tersebut di mata masyarakat. Dalam perspektif Agenda Setting, media nasional berhasil menempatkan bencana Sumatera sebagai prioritas utama (agenda publik) yang tak terbantahkan. Dengan frekuensi pemberitaan yang masif baik di televisi, portal berita, maupun media sosial isu ini berhasil menggeser dinamika politik nasional di Jakarta. Penekanan media pada angka kematian yang terus melonjak dan lumpuhnya jalur logistik lintas Sumatera memaksa pemerintah pusat untuk segera menetapkannya sebagai darurat nasional. Hal ini membuktikan bahwa media memiliki kekuatan untuk memaksa pembuat kebijakan (agenda kebijakan) bergerak lebih cepat melalui tekanan opini publik.</p>
                </SubSection>
                 <SubSection title="B. Teori Media Framing" id="teori-framing">
                    <p>Pembingkaian berita banjir ini dapat dianalisis menggunakan perspektif Entman (1993), di mana media cenderung menonjolkan aspek tertentu, misalnya faktor kerusakan lingkungan, untuk mendorong interpretasi penyebab yang lebih mendalam daripada sekadar faktor cuaca. Namun, di balik penentuan agenda tersebut, terdapat Framing atau pembingkaian yang beragam dalam menjelaskan penyebab bencana. Media arus utama cenderung menggunakan Responsibility Frame, di mana bencana tidak dilihat sebagai "takdir alam" semata, melainkan akibat dari kerusakan ekologis. Istilah seperti "dosa ekologis" sering muncul untuk menunjuk pada aktivitas pembalakan liar dan alih fungsi lahan di hulu sungai. Framing ini menciptakan narasi akuntabilitas yang menuntut pemerintah memperketat izin lingkungan.</p>
                    <p>Di sisi lain, terdapat pula Human Interest Frame yang dominan, terutama dalam meliput lenyapnya Desa Sekumur di Aceh. Narasi yang dibangun sangat emosional, berfokus pada penderitaan penyintas dan hilangnya memori kolektif sebuah desa. Pembingkaian ini sangat efektif dalam menggalang solidaritas kemanusiaan, namun di saat yang sama, terkadang mengaburkan diskusi teknis mengenai mitigasi bencana jangka panjang.</p>
                    <p>Secara keseluruhan, analisis ini menunjukkan bahwa media massa berperan sebagai aktor politik dan sosial yang sangat kuat. Melalui agenda setting, media memastikan bencana ini tidak terlupakan, dan melalui framing, media mengarahkan jari telunjuk publik pada penyebab-penyebab struktural di balik bencana tersebut. Bencana Sumatera 2025 bukan hanya tentang curah hujan ekstrem, melainkan tentang bagaimana kita membicarakannya dan siapa yang kita anggap bertanggung jawab atasnya.</p>
                </SubSection>
            </Section>

            <Section title="Studi Kasus: Analisis Isi Media terhadap Respons Banjir Bandang" id="studi-kasus">
                <SubSection title="1. Fokus Analisis Isi (Hipotesis Temuan)" id="fokus-analisis">
                    <p>Temuan dari analisis isi media menunjukkan beberapa pola framing yang signifikan dalam pemberitaan bencana banjir bandang di Sumatera.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <figure>
                            <Image src="/pemerintah-tidak-niat.jpeg" alt="Kritik terhadap pemerintah" width={400} height={300} className="rounded-lg shadow-lg w-full h-48 object-cover" data-ai-hint="government criticism" />
                            <figcaption className="text-center text-sm italic mt-2 text-muted-foreground">Meme yang beredar di media sosial mengkritik respons pemerintah yang dianggap lamban dan tidak serius.</figcaption>
                        </figure>
                        <figure>
                            <Image src="/dpr-gak-guna.jpeg" alt="Kritik terhadap DPR" width={400} height={300} className="rounded-lg shadow-lg w-full h-48 object-cover" data-ai-hint="parliament criticism" />
                            <figcaption className="text-center text-sm italic mt-2 text-muted-foreground">Sentimen negatif publik juga ditujukan kepada parlemen yang dinilai tidak memberikan kontribusi signifikan.</figcaption>
                        </figure>
                        <figure>
                             <Image src="/pencitraan.jpeg" alt="Tudingan pencitraan" width={400} height={300} className="rounded-lg shadow-lg w-full h-48 object-cover" data-ai-hint="political imaging" />
                            <figcaption className="text-center text-sm italic mt-2 text-muted-foreground">Kunjungan pejabat ke lokasi bencana seringkali dibingkai media sebagai ajang pencitraan politik.</figcaption>
                        </figure>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Dominasi Narasi "Human Error" vs "Nature's Wrath":</strong> Meskipun pemerintah berusaha membingkai bencana ini sebagai "Siklon Senyar" (faktor alam), temuan analisis isi menunjukkan media lebih dominan menggunakan diksi "Hutan Gundul" dan "Konversi Lahan". Hal ini menunjukkan bahwa media massa secara sadar melakukan framing untuk menggeser kesalahan dari alam ke tanggung jawab manusia (pemerintah dan korporasi).</li>
                        <li><strong>Gap Informasi Spasial:</strong> Terdapat temuan bahwa media memberikan porsi pemberitaan 60% lebih banyak pada kasus di Sumatera Barat (Padang) dibandingkan Aceh Tamiang, meskipun jumlah korban di Aceh setara. Hal ini membuktikan adanya bias geografis dalam Agenda Setting di mana aksesibilitas jurnalis ke lokasi menentukan seberapa besar sebuah wilayah dianggap "penting" dalam agenda nasional.</li>
                        <li><strong>Visual Framing:</strong> Gambar udara yang menunjukkan kontras antara lahan cokelat (longsor) dan sisa hutan hijau menjadi ikon visual yang paling sering diulang. Visual ini memperkuat hipotesis bahwa media ingin menanamkan persepsi di masyarakat bahwa Sumatera sedang dalam kondisi "Darurat Ekologis".</li>
                    </ul>
                </SubSection>
                <SubSection title="2. Pembahasan Kasus dan Permasalahan Komunikasi" id="pembahasan-kasus">
                    <p>Bencana banjir bandang yang melanda wilayah Aceh, Sumatera Utara, dan Sumatera Barat pada November 2025 bukan sekadar peristiwa alam, melainkan sebuah ruang pertarungan narasi. Melalui teori Agenda Setting, kita melihat bagaimana media massa berhasil mengangkat isu ini dari sekadar "berita daerah" menjadi "krisis nasional". Liputan 24 jam mengenai hilangnya Desa Sekumur dan meningkatnya angka kematian memaksa pemerintah pusat untuk menunda agenda lain dan memusatkan seluruh sumber daya negara ke pulau Sumatera. Media tidak hanya melaporkan duka, tetapi mendikte prioritas kebijakan nasional.</p>
                     <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <figure>
                            <video className="w-full h-full rounded-lg shadow-lg" controls>
                                <source src="/bajir-ditangan-amatir.mp4" type="video/mp4" />
                                Browser Anda tidak mendukung tag video.
                            </video>
                            <figcaption className="text-center text-sm italic mt-2 text-muted-foreground">Video amatir menunjukkan kepanikan warga, menyoroti kurangnya instruksi evakuasi yang jelas dan terkoordinasi.</figcaption>
                        </figure>
                         <figure>
                            <video className="w-full h-full rounded-lg shadow-lg" controls>
                                <source src="/banjir-jelang-sby.mp4" type="video/mp4" />
                                Browser Anda tidak mendukung tag video.
                            </video>
                            <figcaption className="text-center text-sm italic mt-2 text-muted-foreground">Cuplikan berita dari media menunjukkan framing yang berbeda-beda, antara menyalahkan alam dan menyoroti kelalaian pemerintah.</figcaption>
                        </figure>
                    </div>
                    <p>Namun, di balik penentuan agenda tersebut, terjadi kontestasi dalam Framing (pembingkaian). Terdapat dua bingkai utama yang saling beradu. Pertama, Frame Teknis-Meteorologi yang dominan digunakan pemerintah; narasi ini membingkai bencana sebagai akibat mutlak dari curah hujan ekstrem dan siklon. Bingkai ini cenderung memosisikan manusia sebagai korban pasif dari "kemarahan alam" guna meredam kritik politik.</p>
                    <p>Kedua, media massa dan aktivis secara agresif menggunakan Frame Ekologis-Akuntabilitas. Mereka membingkai bencana ini sebagai "dosa ekologis" akibat alih fungsi lahan dan penggundulan hutan di hulu sungai. Dengan menampilkan visual perbandingan hutan yang gundul dan pemukiman yang tersapu lumpur, media menggiring publik untuk menyimpulkan bahwa bencana ini adalah kegagalan tata kelola manusia, bukan sekadar takdir cuaca.</p>
                    <p>Permasalahan komunikasi muncul ketika terjadi bias geografis dalam pemberitaan. Wilayah yang mudah diakses jurnalis (seperti Sumatera Barat) mendapatkan porsi agenda setting yang jauh lebih besar dibandingkan wilayah terpencil di Aceh. Akibatnya, distribusi bantuan pun cenderung mengikuti intensitas pemberitaan media, bukan murni berdasarkan tingkat keparahan di lapangan.</p>
                </SubSection>
            </Section>

            <Section title="Kesimpulan dan Rekomendasi" id="kesimpulan">
                 <SubSection title="A. Kesimpulan" id="kesimpulan-akhir">
                    <p>Analisis terhadap bencana besar di Sumatera Barat, Sumatra Utara dan Aceh pada November 2025 melalui teori Agenda Setting dan Framing menghasilkan tiga poin kesimpulan utama sebagai berikut:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Media sebagai Penentu Urgensi Nasional (Agenda Setting):</strong> Intensitas pemberitaan yang masif dan berulang mengenai jumlah korban jiwa (mencapai 1.400 orang) serta hancurnya infrastruktur strategis terbukti mampu menggeser agenda politik nasional. Media berhasil memaksa pemerintah untuk menetapkan status Darurat Nasional, membuktikan bahwa media memiliki kekuatan untuk mempercepat respon birokrasi melalui tekanan opini publik.</li>
                        <li><strong>Pergeseran Narasi dari "Takdir" ke "Tanggung Jawab" (Framing):</strong> Terjadi benturan bingkai narasi antara pemerintah dan media. Sementara pemerintah cenderung membingkai kejadian sebagai anomali cuaca ekstrem (Siklon Senyar), media secara konsisten membingkainya sebagai "Dosa Ekologis" atau akibat kerusakan hutan. Pembingkaian ini berhasil mengubah persepsi publik dari rasa empati pasif menjadi sikap kritis yang menuntut akuntabilitas tata ruang dan perlindungan hutan di Sumatera.</li>
                        <li><strong>Kesenjangan Komunikasi dan Dampaknya:</strong> Terdapat permasalahan komunikasi serius berupa bias geografis dan kegagalan rantai peringatan dini. Wilayah yang terjangkau jurnalis mendapatkan atensi bantuan yang lebih besar, sementara wilayah terpencil mengalami keterisolasian informasi. Selain itu, bahasa teknis dari instansi terkait yang gagal diterjemahkan media secara sederhana berakibat pada ketidaksiapan warga di lapangan saat air bah datang.</li>
                    </ol>
                </SubSection>
                <SubSection title="B. Rekomendasi Strategis" id="rekomendasi">
                     <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Transformasi Narasi: Dari Reaktif ke Proaktif</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li><strong>Literasi Mitigasi Jangka Panjang:</strong> Media dan Pemerintah harus bekerja sama untuk melakukan Agenda Setting pada isu lingkungan secara rutin, bukan hanya saat banjir datang. Isu rehabilitasi hutan harus menjadi "berita harian" untuk mencegah kejenuhan informasi saat krisis terjadi.</li>
                                <li><strong>Framing Keamanan Lingkungan:</strong> Mengubah bingkai berita dari "Duka Kemanusiaan" (fokus pada tangisan korban) menjadi "Keamanan Ekologis". Hal ini bertujuan untuk menciptakan tekanan publik yang sehat agar pemerintah memperketat audit tata ruang dan AMDAL.</li>
                            </ul>
                        </li>
                        <li><strong>Digitalisasi dan Penyederhanaan EWS (Early Warning System)</strong>
                             <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li><strong>Bahasa Publik yang Inklusif:</strong> BMKG dan BPBD perlu bekerja sama dengan ahli komunikasi untuk menerjemahkan data teknis (seperti "Siklon Senyar" atau "Curah Hujan 300mm") menjadi instruksi bahasa lokal yang konkret (misal: "Warga bantaran sungai dalam radius 50m harus naik ke lantai 2 sekarang").</li>
                                <li><strong>Multichannel Broadcasting:</strong> Memanfaatkan Cell Broadcast (pesan pop-up otomatis di ponsel tanpa pulsa/internet) secara masif di wilayah terdampak untuk memutus rantai keterlambatan informasi.</li>
                            </ul>
                        </li>
                        <li><strong>Pemerataan Agenda (Menghapus Bias Geografis)</strong>
                             <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li><strong>Dukungan Jurnalisme Komunitas:</strong> Pemerintah daerah harus memfasilitasi jurnalis warga atau koresponden lokal di wilayah terpencil (seperti pedalaman Aceh dan pegunungan Sumut) agar informasi dari wilayah sulit akses memiliki kesempatan yang sama untuk masuk dalam Agenda Setting nasional.</li>
                                <li><strong>Crisis Center Satu Data:</strong> Membentuk pusat data digital yang terintegrasi antara pemerintah dan media untuk memetakan sebaran bantuan secara real-time, guna menghindari penumpukan bantuan hanya di wilayah yang "viral".</li>
                            </ul>
                        </li>
                         <li><strong>Manajemen Hoaks dan Disinformasi</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li><strong>Quick Response Team Fact-Checking:</strong> Membentuk kolaborasi antara Kementerian Komunikasi, media arus utama, dan platform media sosial untuk segera melabeli video/berita lama (hoaks) yang sering muncul kembali saat bencana. Hal ini penting untuk menjaga agar publik tetap fokus pada instruksi evakuasi yang benar.</li>
                            </ul>
                        </li>
                         <li><strong>Audit Komunikasi Pasca-Bencana</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li><strong>Evaluasi Narasi:</strong> Setelah masa tanggap darurat berakhir, perlu ada forum diskusi antara pemerintah dan pimpinan redaksi media untuk mengevaluasi: "Apakah framing berita kita membantu menyelamatkan nyawa atau justru menciptakan kepanikan?"</li>
                            </ul>
                        </li>
                    </ol>
                </SubSection>
            </Section>

            <Section title="Daftar Pustaka" id="pustaka">
                <ul className="space-y-2 text-sm">
                    <li>McCombs, M. E., & Shaw, D. L. (1972). The agenda-setting function of mass media. <em>Public Opinion Quarterly, 36</em>(2), 176–187.</li>
                    <li>Entman, R. M. (1993). Framing: Toward clarification of a fractured paradigm. <em>Journal of Communication, 43</em>(4), 51–58.</li>
                    <li>Badan Nasional Penanggulangan Bencana (BNPB). (2025). <em>Siaran pers: Update penanganan bencana banjir bandang dan longsor di Sumatera periode November-Desember 2025.</em> Pusat Data, Informasi, dan Komunikasi Kebencanaan BNPB.</li>
                    <li>Wahana Lingkungan Hidup Indonesia (WALHI). (2025). <em>Analisis deforestasi hutan lindung dan kontribusinya terhadap eskalasi banjir bandang di kawasan pegunungan tengah Sumatera.</em> Laporan Investigasi Lingkungan 2025.</li>
                </ul>
            </Section>
          </article>
        </div>
      </main>

       <footer className="py-6 border-t mt-12 bg-muted/40">
            <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
                <p>&copy; 2025. Jurnal Analisis Komunikasi Krisis.</p>
            </div>
       </footer>

    </div>
  );
}
