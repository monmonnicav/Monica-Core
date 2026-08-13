// State management for tasks
let currentInformatikaFilter = 'All';
let currentInformatikaSearch = '';
let currentIndoFilter = 'All';
let currentIndoSearch = '';

// Mock Data awal
const defaultTasks = [
  {
    id: 'mock-info-1',
    subject: 'Informatika',

    title: 'Mengenal Topologi Jaringan Komputer',

    image: 'assets/topologi.jpe',

    category: 'Artikel',

    date: '2026-06-15',

    descShort: 'Mempelajari pengertian topologi jaringan, fungsi, jenis-jenis topologi, serta kelebihan dan kekurangannya.',

    descFull: `
# Topologi Jaringan Komputer

## Pengertian
Topologi jaringan adalah tata letak atau susunan hubungan antar perangkat dalam suatu jaringan komputer. Topologi menentukan bagaimana perangkat saling terhubung untuk bertukar data.

---

## Fungsi Topologi Jaringan

• Menghubungkan perangkat dalam jaringan.

• Mempermudah komunikasi data.

• Memudahkan pengelolaan jaringan.

• Meningkatkan efisiensi pengiriman data.

• Mempermudah pengembangan jaringan.

---

## Jenis-Jenis Topologi

### 1. Topologi Bus
Semua komputer terhubung menggunakan satu kabel utama (backbone).

Kelebihan:
- Hemat kabel.
- Instalasi mudah.

Kekurangan:
- Jika kabel utama rusak, seluruh jaringan terganggu.

---

### 2. Topologi Star
Semua perangkat terhubung ke hub atau switch.

Kelebihan:
- Mudah dikelola.
- Jika satu kabel rusak, perangkat lain tetap berjalan.

Kekurangan:
- Membutuhkan kabel lebih banyak.

---

### 3. Topologi Ring
Perangkat saling terhubung membentuk lingkaran.

Kelebihan:
- Aliran data teratur.

Kekurangan:
- Kerusakan satu titik dapat mengganggu jaringan.

---

### 4. Topologi Mesh
Setiap perangkat saling terhubung.

Kelebihan:
- Sangat stabil.
- Jalur komunikasi banyak.

Kekurangan:
- Biaya instalasi mahal.

---

### 5. Topologi Tree
Gabungan antara topologi Star dan Bus.

Kelebihan:
- Mudah dikembangkan.

Kekurangan:
- Instalasi cukup rumit.

---

## Kesimpulan

Topologi jaringan merupakan dasar dalam membangun jaringan komputer. Pemilihan topologi yang tepat akan meningkatkan efisiensi, kecepatan, dan keandalan komunikasi data.

`,
    isCustom: false
  },
  {
    id: 'mock-info-2',
    subject: 'Informatika',

    title: 'Mengenal Sistem Digital',

    image: 'assets/sistem-digital.jpe',

    category: 'Artikel',

    date: '2026-06-18',

    descShort: 'Mempelajari pengertian sistem digital, karakteristik, komponen utama, serta penerapannya dalam kehidupan sehari-hari.',

    descFull: `
# Sistem Digital

## Pengertian

Sistem digital adalah sistem yang mengolah data dalam bentuk bilangan biner, yaitu hanya menggunakan dua kondisi, 0 (OFF) dan 1 (ON). Hampir semua perangkat elektronik modern, seperti komputer, smartphone, dan kalkulator, bekerja menggunakan sistem digital.

---

## Karakteristik Sistem Digital

• Menggunakan sinyal digital berupa angka 0 dan 1.

• Data lebih akurat dan tahan terhadap gangguan (noise).

• Mudah disimpan dan diproses.

• Memiliki kecepatan pemrosesan yang tinggi.

• Mudah dikembangkan menggunakan perangkat lunak.

---

## Komponen Sistem Digital

### 1. Input

Bagian yang menerima data atau perintah dari pengguna.

Contoh:
- Keyboard
- Mouse
- Scanner
- Kamera

---

### 2. Process

Bagian yang mengolah data menjadi informasi.

Contoh:
- Processor (CPU)

---

### 3. Output

Bagian yang menampilkan hasil pengolahan data.

Contoh:
- Monitor
- Printer
- Speaker

---

### 4. Storage

Tempat penyimpanan data.

Contoh:
- Harddisk
- SSD
- Flashdisk
- RAM

---

## Kelebihan Sistem Digital

• Pengolahan data cepat.

• Tingkat kesalahan rendah.

• Mudah disimpan dan dikirim.

• Mudah diperbarui.

• Lebih efisien dibanding sistem analog.

---

## Kekurangan Sistem Digital

• Membutuhkan sumber listrik.

• Bergantung pada perangkat keras.

• Jika terjadi kerusakan sistem, seluruh proses dapat terganggu.

---

## Contoh Penerapan

- Komputer
- Smartphone
- Smart TV
- Mesin ATM
- Kamera Digital
- Jam Digital
- Kalkulator

---

## Kesimpulan

Sistem digital merupakan teknologi yang menggunakan data biner (0 dan 1) untuk memproses informasi. Sistem ini memiliki kecepatan tinggi, akurasi yang baik, serta menjadi dasar perkembangan berbagai perangkat elektronik modern yang digunakan dalam kehidupan sehari-hari.
`,
    isCustom: false
  },
  {
    id: 'mock-info-3',
    subject: 'Informatika',

    title: 'Memahami Undang-Undang Informasi dan Transaksi Elektronik (UU ITE)',

    image: 'assets/uu-ite.jpe',

    category: ' Artikel ',

    date: '2026-06-20',

    descShort: 'Mempelajari pengertian, tujuan, dasar hukum, pasal-pasal penting, serta contoh pelanggaran Undang-Undang Informasi dan Transaksi Elektronik.',

    descFull: `
# Undang-Undang Informasi dan Transaksi Elektronik (UU ITE)

## Pengertian

Undang-Undang Informasi dan Transaksi Elektronik (UU ITE) adalah peraturan yang mengatur penggunaan teknologi informasi, internet, dan transaksi elektronik di Indonesia. UU ini bertujuan memberikan kepastian hukum, melindungi masyarakat dari penyalahgunaan teknologi, serta menciptakan ruang digital yang aman dan bertanggung jawab.

---

## Dasar Hukum

• UU Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik.

• Diubah melalui UU Nomor 19 Tahun 2016.

• Diperbarui kembali melalui UU Nomor 1 Tahun 2024.

---

## Tujuan UU ITE

• Memberikan kepastian hukum dalam aktivitas digital.

• Melindungi masyarakat dari kejahatan siber.

• Mendorong perkembangan teknologi informasi.

• Menjaga keamanan transaksi elektronik.

• Mengatur penggunaan media sosial secara bertanggung jawab.

---

## Pasal-Pasal yang Sering Dibahas

### Pasal 27

Mengatur tentang:
- Pelanggaran kesusilaan.
- Perjudian online.
- Penghinaan atau pencemaran nama baik.

---

### Pasal 28

Mengatur tentang:
- Penyebaran berita bohong (hoaks).
- Informasi yang menimbulkan kebencian berdasarkan SARA.

---

### Pasal 30

Mengatur akses ilegal terhadap sistem elektronik milik orang lain (hacking).

---

### Pasal 32

Mengatur perubahan, penghapusan, pemindahan, atau pencurian data elektronik tanpa izin.

---

## Contoh Pelanggaran

• Menyebarkan berita hoaks.

• Cyberbullying.

• Penipuan online.

• Meretas akun orang lain.

• Menyebarkan data pribadi tanpa izin.

• Ujaran kebencian di media sosial.

---

## Cara Menghindari Pelanggaran

• Selalu memeriksa kebenaran informasi sebelum membagikannya.

• Menghormati privasi orang lain.

• Tidak menyebarkan konten yang mengandung kebencian atau fitnah.

• Menggunakan media sosial dengan bahasa yang sopan.

• Menjaga keamanan akun dan kata sandi.

---

## Kesimpulan

UU ITE merupakan landasan hukum yang mengatur aktivitas digital di Indonesia. Dengan memahami isi dan tujuan UU ITE, masyarakat diharapkan dapat menggunakan teknologi informasi secara bijak, bertanggung jawab, dan menghormati hak orang lain sehingga tercipta lingkungan digital yang aman serta nyaman bagi semua pengguna.
`,
    isCustom: false
  },


  {
    id: 'mock-indo-1',
    subject: 'Bahasa Indonesia',

    title: 'Memahami Teks Anekdot',

    image: 'assets/anekdot.jpe',

    category: 'Artikel',

    date: '2026-04-12',

    descShort: 'Mempelajari pengertian, ciri-ciri, struktur, kaidah kebahasaan, serta contoh teks anekdot.',

    descFull: `
# Teks Anekdot

## Pengertian

Teks anekdot adalah cerita singkat yang lucu atau menggelitik, tetapi mengandung kritik, sindiran, atau pesan terhadap suatu peristiwa maupun keadaan sosial.

---

## Tujuan

• Menghibur pembaca.

• Menyampaikan kritik secara halus.

• Mengajak pembaca berpikir terhadap suatu masalah.

• Menyampaikan pesan moral melalui cerita.

---

## Ciri-Ciri Teks Anekdot

• Bersifat lucu atau menghibur.

• Mengandung kritik atau sindiran.

• Diangkat dari peristiwa nyata atau yang menyerupai kenyataan.

• Memiliki pesan moral.

• Menggunakan bahasa yang komunikatif.

---

## Struktur Teks Anekdot

### 1. Abstraksi

Gambaran awal mengenai isi cerita.

### 2. Orientasi

Pengenalan tokoh, waktu, dan tempat.

### 3. Krisis

Munculnya masalah atau peristiwa yang tidak biasa.

### 4. Reaksi

Cara tokoh menghadapi masalah tersebut.

### 5. Koda

Penutup yang berisi pesan atau kesimpulan.

---

## Kaidah Kebahasaan

• Menggunakan kalimat langsung.

• Menggunakan kata kerja aksi.

• Menggunakan konjungsi waktu.

• Menggunakan kalimat yang bersifat humor atau sindiran.

---

## Contoh Singkat

Seorang siswa terlambat datang ke sekolah.

Guru bertanya,
"Mengapa kamu terlambat?"

Siswa menjawab,
"Karena mengikuti rambu lalu lintas, Bu."

Guru heran.

Siswa melanjutkan,
"Di jalan ada tulisan 'Pelan-Pelan Ada Sekolah'. Jadi saya benar-benar pelan-pelan."

Seluruh kelas tertawa, sementara guru hanya tersenyum.

---

## Kesimpulan

Teks anekdot merupakan cerita singkat yang mengandung humor sekaligus kritik atau pesan moral. Dengan memahami struktur dan kaidah kebahasaannya, kita dapat membuat teks anekdot yang menarik, kreatif, dan tetap bermakna.
`,
    isCustom: false
  },
  {
    id: 'mock-indo-2',
    subject: 'Bahasa Indonesia',

    title: 'Mengenal Teks Biografi',

    image: 'assets/biografi.jpe',

    category: 'Artikel',

    date: '2026-04-18',

    descShort: 'Mempelajari pengertian, tujuan, ciri-ciri, struktur, kaidah kebahasaan, serta contoh teks biografi.',

    descFull: `
# Teks Biografi

## Pengertian

Teks biografi adalah teks yang berisi kisah hidup seseorang yang ditulis oleh orang lain. Biografi memuat perjalanan hidup, prestasi, pengalaman, serta keteladanan tokoh yang dapat menjadi inspirasi bagi pembaca.

---

## Tujuan

• Memberikan informasi mengenai kehidupan seorang tokoh.

• Menginspirasi pembaca melalui pengalaman hidup tokoh.

• Menunjukkan nilai-nilai positif yang dapat diteladani.

• Menambah wawasan tentang tokoh yang berpengaruh.

---

## Ciri-Ciri Teks Biografi

• Menceritakan kehidupan seseorang.

• Berdasarkan fakta atau kisah nyata.

• Disusun secara kronologis.

• Mengandung nilai moral dan keteladanan.

• Menggunakan bahasa yang informatif.

---

## Struktur Teks Biografi

### 1. Orientasi

Berisi pengenalan tokoh, seperti nama, tempat lahir, tanggal lahir, dan latar belakang.

### 2. Peristiwa Penting

Menjelaskan perjalanan hidup tokoh, perjuangan, pendidikan, karier, hingga prestasi yang diraih.

### 3. Reorientasi

Berisi penutup berupa kesimpulan, komentar penulis, atau pesan yang dapat diambil dari kehidupan tokoh.

---

## Kaidah Kebahasaan

• Menggunakan kata kerja tindakan.

• Menggunakan kata hubung waktu (kemudian, setelah itu, akhirnya).

• Menggunakan kata ganti orang ketiga (ia, beliau).

• Menggunakan kalimat yang bersifat faktual.

---

## Contoh Singkat

B. J. Habibie lahir di Parepare, Sulawesi Selatan, pada 25 Juni 1936. Beliau dikenal sebagai Presiden Republik Indonesia ke-3 sekaligus ilmuwan di bidang teknologi penerbangan. Berkat kerja keras dan kecerdasannya, beliau berhasil mengembangkan berbagai inovasi di bidang dirgantara dan menjadi inspirasi bagi generasi muda Indonesia.

---

## Kesimpulan

Teks biografi merupakan teks yang menceritakan perjalanan hidup seseorang berdasarkan fakta. Melalui teks biografi, pembaca dapat mengenal tokoh lebih dekat sekaligus mengambil pelajaran dari perjuangan, prestasi, dan nilai-nilai kehidupan yang dimiliki tokoh tersebut.
`,
    isCustom: false
  },
  {
    id: 'mock-indo-3',
    subject: 'Bahasa Indonesia',

    title: 'Mengenal Teks Hikayat',

    image: 'assets/hikayat.jpe',

    category: 'Artikel',

    date: '2026-04-22',

    descShort: 'Mempelajari pengertian, ciri-ciri, struktur, nilai-nilai, dan contoh teks hikayat sebagai salah satu karya sastra lama Indonesia.',

    descFull: `
# Teks Hikayat

## Pengertian

Teks hikayat adalah karya sastra lama berbentuk prosa yang menceritakan kehidupan raja, pahlawan, atau tokoh-tokoh dengan peristiwa luar biasa. Hikayat biasanya mengandung unsur keajaiban (kemustahilan) dan diwariskan secara turun-temurun.

---

## Tujuan

• Menghibur pembaca.

• Menyampaikan nilai moral dan keteladanan.

• Melestarikan budaya dan tradisi.

• Menanamkan sikap berani, jujur, dan pantang menyerah.

---

## Ciri-Ciri Teks Hikayat

• Bersifat anonim (pengarang tidak diketahui).

• Mengandung unsur kemustahilan atau keajaiban.

• Berlatar kehidupan kerajaan.

• Menggunakan bahasa Melayu klasik.

• Menceritakan tokoh yang memiliki kesaktian atau kemampuan luar biasa.

---

## Struktur Teks Hikayat

### 1. Orientasi

Memperkenalkan tokoh, latar tempat, dan waktu.

### 2. Komplikasi

Muncul masalah atau konflik yang dihadapi tokoh.

### 3. Resolusi

Masalah berhasil diselesaikan oleh tokoh.

### 4. Koda

Berisi amanat atau pelajaran yang dapat diambil.

---

## Nilai-Nilai dalam Hikayat

• Nilai Moral

Mengajarkan sikap jujur, berani, dan bertanggung jawab.

• Nilai Agama

Mengajarkan keimanan dan ketakwaan kepada Tuhan.

• Nilai Sosial

Mengajarkan sikap tolong-menolong dan saling menghormati.

• Nilai Budaya

Memperkenalkan adat istiadat dan budaya masyarakat pada masa lampau.

---

## Contoh Hikayat

Beberapa hikayat yang terkenal di Indonesia antara lain:

- Hikayat Hang Tuah
- Hikayat Bayan Budiman
- Hikayat Si Miskin
- Hikayat Indera Bangsawan

---

## Kesimpulan

Teks hikayat merupakan karya sastra lama yang kaya akan nilai moral, budaya, dan sejarah. Meskipun mengandung unsur khayalan atau keajaiban, hikayat tetap memberikan pelajaran hidup yang bermanfaat bagi pembacanya.
`,
    isCustom: false
  }
];

// Load data from LocalStorage or initialize with defaults
function getTasks() {
  return defaultTasks;
}

function saveTasks(tasks) {
  localStorage.setItem('school_assignments', JSON.stringify(tasks));
}

// Toggle Hamburger Mobile Menu
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');
  if (menu && icon) {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      icon.className = 'fa-solid fa-xmark text-xl';
    } else {
      menu.classList.add('hidden');
      icon.className = 'fa-solid fa-bars text-xl';
    }
  }
}

// Update categories filter based on selected subject in dynamic CMS
function updateCategorySelect() {
  const subjectEl = document.getElementById('task-subject');
  const categorySelect = document.getElementById('task-category');
  if (!subjectEl || !categorySelect) return;

  const subject = subjectEl.value;
  categorySelect.innerHTML = '';

  let options = [];
  if (subject === 'Informatika') {
    options = ['Web Dev', 'Algoritma', 'UI/UX', 'Database'];
  } else {
    options = ['Sastra & Cerpen', 'Resensi', 'Artikel Ilmiah', 'Pidato'];
  }

  options.forEach(opt => {
    const optionEl = document.createElement('option');
    optionEl.value = opt;
    optionEl.textContent = opt;
    categorySelect.appendChild(optionEl);
  });
}

// Toast Notification generator
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const icon = type === 'success'
    ? '<i class="fa-solid fa-circle-check text-emerald-450"></i>'
    : '<i class="fa-solid fa-circle-xmark text-red-500"></i>';

  toast.className = 'flex items-center space-x-2.5 px-4 py-3 rounded-2xl bg-stone-955 border border-pastel-red-100/15 shadow-pastel-lg pointer-events-none transform translate-y-2 opacity-0 transition-all duration-300';
  toast.innerHTML = `
    ${icon}
    <span class="text-xs font-semibold text-pastel-slate-200">${message}</span>
  `;

  container.appendChild(toast);

  // Animate entry
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 50);

  // Auto dismiss
  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// Add Task CMS Modal Handling
function openAddTaskModal(preselectedSubject = 'Informatika') {
  const modal = document.getElementById('add-task-modal');
  const container = document.getElementById('add-task-modal-container');
  const subjectInput = document.getElementById('task-subject');
  const dateInput = document.getElementById('task-date');

  if (subjectInput) {
    subjectInput.value = preselectedSubject;
    updateCategorySelect();
  }

  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
  }

  if (modal && container) {
    modal.classList.remove('hidden');
    setTimeout(() => {
      container.classList.remove('scale-95', 'opacity-0');
      container.classList.add('scale-100', 'opacity-100');
    }, 50);
  }
}

function closeAddTaskModal() {
  const modal = document.getElementById('add-task-modal');
  const container = document.getElementById('add-task-modal-container');
  const form = document.getElementById('add-task-form');

  if (container) {
    container.classList.remove('scale-100', 'opacity-100');
    container.classList.add('scale-95', 'opacity-0');
  }

  setTimeout(() => {
    if (modal) modal.classList.add('hidden');
    if (form) form.reset();
  }, 300);
}

// Form Submission Handlers
function handleAddTaskSubmit(e) {
  e.preventDefault();

  const subject = document.getElementById('task-subject').value;
  const title = document.getElementById('task-title').value;
  const category = document.getElementById('task-category').value;
  const date = document.getElementById('task-date').value;
  const descShort = document.getElementById('task-desc-short').value;
  const descFull = document.getElementById('task-desc-full').value;

  const newTask = {
    id: 'user-task-' + Date.now(),
    subject,
    title,
    category,
    date,
    descShort,
    descFull,
    isCustom: true
  };

  const tasks = getTasks();
  tasks.unshift(newTask);
  saveTasks(tasks);

  closeAddTaskModal();
  showToast('Tugas berhasil ditambahkan ke portofolio!');
  renderPageData();
}

function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('contact-name').value;
  const subject = document.getElementById('contact-subject').value;

  // Simulate API loading
  const submitBtn = e.target.querySelector('button[type="submit"]');
  if (!submitBtn) return;

  const originalHTML = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin text-pastel-red-500"></i><span>Mengirim...</span>';

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHTML;

    // Show success pop up
    showToast(`Terima kasih ${name}, pesan tentang "${subject}" berhasil terkirim!`);
    e.target.reset();
  }, 1200);
}

// Rendering Data Functions
function renderPageData() {
  const tasks = getTasks();

  // 1. Update Statistics Counter Widget on dashboard
  const statInfoCount = document.getElementById('stat-info-count');
  const statIndoCount = document.getElementById('stat-indo-count');
  const statTotalCount = document.getElementById('stat-total-count');
  const statInfoBar = document.getElementById('stat-info-bar');
  const statIndoBar = document.getElementById('stat-indo-bar');

  const infoCount = tasks.filter(t => t.subject === 'Informatika').length;
  const indoCount = tasks.filter(t => t.subject === 'Bahasa Indonesia').length;
  const totalCount = tasks.length;

  if (statInfoCount) statInfoCount.textContent = infoCount;
  if (statIndoCount) statIndoCount.textContent = indoCount;
  if (statTotalCount) statTotalCount.textContent = `${totalCount} Tugas`;

  const maxRatio = totalCount > 0 ? (infoCount / totalCount) * 100 : 0;
  const indoRatio = totalCount > 0 ? (indoCount / totalCount) * 100 : 0;

  if (statInfoBar) statInfoBar.style.width = `${maxRatio}%`;
  if (statIndoBar) statIndoBar.style.width = `${indoRatio}%`;

  // 2. Render Dashboard: Recent Tasks (Max 4 items)
  const recentContainer = document.getElementById('recent-tasks-container');
  if (recentContainer) {
    recentContainer.innerHTML = '';
    const latestTasks = tasks.slice(0, 4);
    if (latestTasks.length === 0) {
      recentContainer.innerHTML = `
        <div class="col-span-2 text-center py-6 text-pastel-slate-450 text-xs">
          Belum ada tugas yang tersimpan. Klik tombol + di atas untuk menambahkan tugas.
        </div>
      `;
    } else {
      latestTasks.forEach(task => {
        const isInfo = task.subject === 'Informatika';
        const icon = isInfo ? 'fa-solid fa-laptop-code' : 'fa-solid fa-book-open';
        const bgTheme = isInfo ? 'from-pastel-red-50/10 to-pastel-red-100/5' : 'from-pastel-warm-800/10 to-pastel-warm-800/5';
        const badgeTheme = isInfo ? 'bg-pastel-red-50/20 text-pastel-red-700' : 'bg-pastel-warm-800/20 text-pastel-warm-400';

        const card = document.createElement('div');
        card.className = `p-5 rounded-2xl bg-gradient-to-br ${bgTheme} border border-white/5 hover:border-pastel-red-100/20 shadow-pastel-sm hover:shadow-pastel transition-all duration-300 flex flex-col justify-between cursor-pointer group`;
        card.onclick = () => showTaskDetail(task.id);
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${badgeTheme} border border-white/5">${task.category}</span>
              <span class="text-[10px] text-pastel-slate-450 flex items-center gap-1"><i class="fa-regular fa-calendar"></i> ${formatDateString(task.date)}</span>
            </div>
            <h4 class="font-display font-bold text-white text-xs line-clamp-2 group-hover:text-pastel-red-650 transition-colors">${task.title}</h4>
            <p class="text-[11px] text-pastel-slate-450 mt-2 line-clamp-2 leading-relaxed">${task.descShort}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
            <span class="text-[10px] font-bold text-pastel-slate-450 uppercase flex items-center gap-1.5">
              <i class="${icon} text-xs text-pastel-red-500"></i> ${task.subject}
            </span>
            <span class="text-[10px] font-bold text-pastel-red-700 group-hover:translate-x-0.5 transition-transform">Baca Detail <i class="fa-solid fa-chevron-right text-[8px]"></i></span>
          </div>
        `;
        recentContainer.appendChild(card);
      });
    }
  }

  // 3. Render Informatika Page Grid
  const infoGrid = document.getElementById('info-tasks-grid');
  const infoEmpty = document.getElementById('info-empty-state');
  if (infoGrid) {
    infoGrid.innerHTML = '';
    const filteredInfoTasks = tasks.filter(t => {
      const matchesSubject = t.subject === 'Informatika';
      const matchesCategory = currentInformatikaFilter === 'All' || t.category === currentInformatikaFilter;
      const matchesSearch = t.title.toLowerCase().includes(currentInformatikaSearch.toLowerCase()) ||
        t.descShort.toLowerCase().includes(currentInformatikaSearch.toLowerCase()) ||
        t.descFull.toLowerCase().includes(currentInformatikaSearch.toLowerCase());
      return matchesSubject && matchesCategory && matchesSearch;
    });

    if (filteredInfoTasks.length === 0) {
      if (infoEmpty) infoEmpty.classList.remove('hidden');
      infoGrid.classList.add('hidden');
    } else {
      if (infoEmpty) infoEmpty.classList.add('hidden');
      infoGrid.classList.remove('hidden');

      filteredInfoTasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'p-6 rounded-2xl glass-card border border-white/5 hover:border-pastel-red-100/20 shadow-pastel-sm hover:shadow-pastel transition-all duration-300 flex flex-col justify-between cursor-pointer group';
        card.onclick = () => showTaskDetail(task.id);
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-pastel-red-50/20 border border-pastel-red-100/10 text-pastel-red-700">${task.category}</span>
              <span class="text-[10px] text-pastel-slate-450"><i class="fa-regular fa-calendar mr-1"></i> ${formatDateString(task.date)}</span>
            </div>
            <h3 class="font-display font-bold text-white text-sm mb-2 line-clamp-2 group-hover:text-pastel-red-650 transition-colors">${task.title}</h3>
            <p class="text-xs text-pastel-slate-450 line-clamp-3 leading-relaxed mb-4">${task.descShort}</p>
          </div>
          <div class="pt-4 border-t border-white/5 flex items-center justify-between">
            <span class="text-[10px] font-semibold text-pastel-slate-450">Mapel: Informatika</span>
            <span class="text-xs font-bold text-pastel-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Detail Tugas <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </span>
          </div>
        `;
        infoGrid.appendChild(card);
      });
    }
  }

  // 4. Render Bahasa Indonesia Page Grid
  const indoGrid = document.getElementById('indo-tasks-grid');
  const indoEmpty = document.getElementById('indo-empty-state');
  if (indoGrid) {
    indoGrid.innerHTML = '';
    const filteredIndoTasks = tasks.filter(t => {
      const matchesSubject = t.subject === 'Bahasa Indonesia';
      const matchesCategory = currentIndoFilter === 'All' || t.category === currentIndoFilter;
      const matchesSearch = t.title.toLowerCase().includes(currentIndoSearch.toLowerCase()) ||
        t.descShort.toLowerCase().includes(currentIndoSearch.toLowerCase()) ||
        t.descFull.toLowerCase().includes(currentIndoSearch.toLowerCase());
      return matchesSubject && matchesCategory && matchesSearch;
    });

    if (filteredIndoTasks.length === 0) {
      if (indoEmpty) indoEmpty.classList.remove('hidden');
      indoGrid.classList.add('hidden');
    } else {
      if (indoEmpty) indoEmpty.classList.add('hidden');
      indoGrid.classList.remove('hidden');

      filteredIndoTasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'p-6 rounded-2xl glass-card border border-white/5 hover:border-pastel-red-100/20 shadow-pastel-sm hover:shadow-pastel transition-all duration-300 flex flex-col justify-between cursor-pointer group';
        card.onclick = () => showTaskDetail(task.id);
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-pastel-warm-800/20 border border-pastel-warm-800/10 text-pastel-warm-400">${task.category}</span>
              <span class="text-[10px] text-pastel-slate-450"><i class="fa-regular fa-calendar mr-1"></i> ${formatDateString(task.date)}</span>
            </div>
            <h3 class="font-display font-bold text-white text-sm mb-2 line-clamp-2 group-hover:text-pastel-red-650 transition-colors">${task.title}</h3>
            <p class="text-xs text-pastel-slate-450 line-clamp-3 leading-relaxed mb-4">${task.descShort}</p>
          </div>
          <div class="pt-4 border-t border-white/5 flex items-center justify-between">
            <span class="text-[10px] font-semibold text-pastel-slate-450">Mapel: Bahasa Indonesia</span>
            <span class="text-xs font-bold text-pastel-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Mulai Baca <i class="fa-solid fa-book-open text-[10px]"></i>
            </span>
          </div>
        `;
        indoGrid.appendChild(card);
      });
    }
  }
}

// Filter Tasks event actions
function filterTasks(subject, category) {
  if (subject === 'Informatika') {
    currentInformatikaFilter = category;
    // Update filter active button states
    const buttons = document.querySelectorAll('#info-filters button');
    buttons.forEach(btn => {
      if (btn.textContent.trim().toLowerCase() === category.toLowerCase() || (category === 'All' && btn.textContent.trim() === 'Semua')) {
        btn.className = 'category-btn-info px-3 py-1.5 rounded-lg text-xs font-medium bg-pastel-red-600 text-white shadow-sm transition-all duration-300';
      } else {
        btn.className = 'category-btn-info px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-pastel-red-50/10 text-pastel-slate-350 hover:text-pastel-red-70 border border-white/10 transition-all duration-300';
      }
    });
  } else {
    currentIndoFilter = category;
    // Update filter active button states
    const buttons = document.querySelectorAll('#indo-filters button');
    buttons.forEach(btn => {
      if (btn.textContent.trim().toLowerCase() === category.toLowerCase() || (category === 'All' && btn.textContent.trim() === 'Semua')) {
        btn.className = 'category-btn-indo px-3 py-1.5 rounded-lg text-xs font-medium bg-pastel-red-600 text-white shadow-sm transition-all duration-300';
      } else {
        btn.className = 'category-btn-indo px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-pastel-red-50/10 text-pastel-slate-350 hover:text-pastel-red-70 border border-white/10 transition-all duration-300';
      }
    });
  }
  renderPageData();
}

// Search bar filtering
function searchTasks(subject) {
  if (subject === 'Informatika') {
    const input = document.getElementById('info-search-input');
    if (input) currentInformatikaSearch = input.value;
  } else {
    const input = document.getElementById('indo-search-input');
    if (input) currentIndoSearch = input.value;
  }
  renderPageData();
}

// Date formatting helper
function formatDateString(dateStr) {
  if (!dateStr) return '-';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('id-ID', options);
}

// Detail Task Modal Handling
function showTaskDetail(taskId) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  const modal = document.getElementById('detail-task-modal');
  const container = document.getElementById('detail-task-modal-container');
  const content = document.getElementById('detail-modal-content');
  const dateEl = document.getElementById('detail-modal-date');
  const deleteBtn = document.getElementById('detail-delete-btn');

  if (!modal || !container || !content) return;

  // Process markdown text simulation to beautiful HTML elements
  const parsedFullDesc = parseMarkdown(task.descFull);

  const isInfo = task.subject === 'Informatika';
  const badgeTheme = isInfo ? 'bg-pastel-red-50/20 border-pastel-red-100/10 text-pastel-red-700' : 'bg-pastel-warm-800/20 border-pastel-warm-800/10 text-pastel-warm-400';

  content.innerHTML = `
    <div class="space-y-2">

      ${task.image
      ? `
            <img
              src="${task.image}"
              alt="${task.title}"
              class="w-full h-64 object-cover rounded-2xl mb-4 border border-white/10 shadow-lg">
          `
      : ""
    }

      <div class="flex items-center gap-2">
        <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-bold ${badgeTheme} border uppercase">
          ${task.subject}
        </span>

        <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-white/5 border border-white/10 text-pastel-slate-450">
          ${task.category}
        </span>
      </div>

      <h2 class="font-display font-extrabold text-xl sm:text-2xl text-white leading-snug">
        ${task.title}
      </h2>

    </div>

    <div class="prose prose-sm prose-invert max-w-none text-pastel-slate-350 leading-relaxed space-y-4">
      ${parsedFullDesc}
    </div>
`;

  if (dateEl) dateEl.innerHTML = `<i class="fa-regular fa-calendar"></i> Tanggal Selesai: ${formatDateString(task.date)}`;

  // Show/hide delete button depending on custom user assignment status
  if (deleteBtn) {
    if (task.isCustom) {
      deleteBtn.classList.remove('hidden');
      deleteBtn.onclick = () => {
        if (confirm('Apakah Anda yakin ingin menghapus tugas ini secara permanen dari portofolio lokal Anda?')) {
          deleteTask(task.id);
        }
      };
    } else {
      deleteBtn.classList.add('hidden');
    }
  }

  modal.classList.remove('hidden');
  setTimeout(() => {
    container.classList.remove('scale-95', 'opacity-0');
    container.classList.add('scale-100', 'opacity-100');
  }, 50);
}

// Close details task modal
function closeDetailTaskModal() {
  const modal = document.getElementById('detail-task-modal');
  const container = document.getElementById('detail-task-modal-container');

  if (container) {
    container.classList.remove('scale-100', 'opacity-100');
    container.classList.add('scale-95', 'opacity-0');
  }

  setTimeout(() => {
    if (modal) modal.classList.add('hidden');
  }, 300);
}

// Delete dynamic task handler
function deleteTask(taskId) {
  let tasks = getTasks();
  tasks = tasks.filter(t => t.id !== taskId);
  saveTasks(tasks);

  closeDetailTaskModal();
  showToast('Tugas berhasil dihapus dari portofolio!');
  renderPageData();
}

// Simple markdown subheadings parser simulator to HTML elements in dark mode
function parseMarkdown(text) {
  if (!text) return '';

  // Escape HTML entities to prevent injection
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Replace backticks code blocks
  html = html.replace(/```(html|js|css)?([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre class="bg-black/40 text-rose-350 p-4 rounded-xl text-xs overflow-x-auto font-mono my-4 border border-white/5"><code>${code.trim()}</code></pre>`;
  });

  // Replace Heading 3 (### )

  // Heading 1 (#)
  html = html.replace(
    /^# (.*)$/gim,
    '<h2 class="text-2xl font-bold text-white mt-6 mb-3">$1</h2>'
  );

  // Heading 2 (##)
  html = html.replace(
    /^## (.*)$/gim,
    '<h3 class="text-xl font-semibold text-pastel-red-500 mt-4 mb-2">$1</h3>'
  );

  // Garis ---
  html = html.replace(
    /^---$/gim,
    '<hr class="my-4 border-white/10">'
  );

  // Bullet menggunakan •
  html = html.replace(
    /^• (.*)$/gim,
    '<li class="ml-6 list-disc">$1</li>'
  );

  html = html.replace(/^### (.*$)/gim, '<h4 class="font-display font-bold text-white text-sm mt-5 mb-2 border-b border-white/5 pb-1 flex items-center gap-1.5"><i class="fa-solid fa-circle-notch text-[10px] text-pastel-red-500"></i> $1</h4>');

  // Replace bold text (**text**)
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');

  // Replace italic text (*text*)
  html = html.replace(/\*(.*?)\*/g, '<em class="italic text-pastel-slate-450">$1</em>');

  // Replace list bullet points
  html = html.replace(/^- (.*$)/gim, '<li class="ml-4 list-disc text-xs text-pastel-slate-350 mb-1">$1</li>');

  // Replace numeric lists
  html = html.replace(/^\d+\.\s(.*$)/gim, '<li class="ml-4 list-decimal text-xs text-pastel-slate-350 mb-1">$1</li>');

  // Replace line breaks to paragraphs
  html = html.split('\n\n').map(p => {
    const trimmed = p.trim();
    if (trimmed.startsWith('<pre') || trimmed.startsWith('<h4') || trimmed.startsWith('<li')) {
      return trimmed;
    }
    return `<p class="text-xs leading-relaxed my-2.5">${trimmed.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  return html;
}

// --- MUSIC PLAYER MODULE ---

const MUSIC_TRACKS = [
  {
    title: "Lupain Aku Plis",
    artist: "NPD",
    src: "assets/Music/lupain aku plis musik.mp3",
  },
  {
    title: "Jatuh Suka",
    artist: "Tulus",
    src: "assets/Music/Jatuh suka.mp3"
  },
  {
    title: "Thank u, next",
    artist: "Ariana Grande",
    src: "assets/Music/Thank u, next.mp3"
  },
  {
    title: "Ga peka",
    artist: "Dia",
    src: "assets/Music/Ga peka.mp3"
  }
];

// Global Player State
let audio = new Audio();
let currentTrackIndex = 0;
let isPlaying = false;
let repeatMode = 'none'; // 'none' | 'one' | 'all'
let isShuffle = false;
let volume = 0.6;
let isMuted = false;
let playbackTimeOnLoad = 0;
let userHasInteracted = false;

// Initialize player state
function initMusicPlayer() {
  loadPlayerState();
  setupAudioListeners();

  // Render views
  renderFloatingMiniPlayer();
  renderFloatingPlaylistPopup();

  const dashboardPlayer = document.getElementById('dashboard-music-player');
  if (dashboardPlayer) {
    renderDashboardPlayer(dashboardPlayer);
  }

  // Load track info (don't play initially to respect autoplay browser policy)
  loadTrack(currentTrackIndex, false);

  // Sync state initially
  syncUI();

  // Autoplay handler after state recovery
  if (isPlaying) {
    // Enable pulse resume state
    enablePulseResume();

    // Add page-wide click listener to start playback on interaction
    const resumeOnInteraction = () => {
      if (!userHasInteracted) {
        userHasInteracted = true;
        playAudio();
        disablePulseResume();
      }
    };
    document.addEventListener('click', resumeOnInteraction, { once: true });
    document.addEventListener('keydown', resumeOnInteraction, { once: true });
  }
}

function setupAudioListeners() {
  audio.addEventListener('loadedmetadata', () => {
    if (playbackTimeOnLoad > 0) {
      audio.currentTime = playbackTimeOnLoad;
      playbackTimeOnLoad = 0; // reset
    }
    syncProgressMax();
  });

  audio.addEventListener('timeupdate', () => {
    updateProgressUI();

    // Save current playback position every 2 seconds to reduce disk writes
    if (Math.floor(audio.currentTime) % 2 === 0) {
      localStorage.setItem('mp_current_time', audio.currentTime.toString());
    }
  });

  audio.addEventListener('ended', () => {
    if (repeatMode === 'one') {
      audio.currentTime = 0;
      playAudio();
    } else if (repeatMode === 'all') {
      nextTrack();
    } else {
      // none
      if (currentTrackIndex === MUSIC_TRACKS.length - 1 && !isShuffle) {
        pauseAudio();
        audio.currentTime = 0;
      } else {
        nextTrack();
      }
    }
  });
}

function loadPlayerState() {
  const savedIndex = localStorage.getItem('mp_track_index');
  const savedTime = localStorage.getItem('mp_current_time');
  const savedIsPlaying = localStorage.getItem('mp_is_playing');
  const savedVolume = localStorage.getItem('mp_volume');
  const savedMuted = localStorage.getItem('mp_muted');
  const savedShuffle = localStorage.getItem('mp_shuffle');
  const savedRepeat = localStorage.getItem('mp_repeat');

  if (savedIndex !== null) currentTrackIndex = parseInt(savedIndex, 10);
  if (savedTime !== null) playbackTimeOnLoad = parseFloat(savedTime);
  if (savedIsPlaying !== null) isPlaying = savedIsPlaying === 'true';
  if (savedVolume !== null) volume = parseFloat(savedVolume);
  if (savedMuted !== null) isMuted = savedMuted === 'true';
  if (savedShuffle !== null) isShuffle = savedShuffle === 'true';
  if (savedRepeat !== null) repeatMode = savedRepeat;

  audio.volume = volume;
  audio.muted = isMuted;
}

function savePlayerState() {
  localStorage.setItem('mp_track_index', currentTrackIndex.toString());
  localStorage.setItem('mp_is_playing', isPlaying.toString());
  localStorage.setItem('mp_volume', volume.toString());
  localStorage.setItem('mp_muted', isMuted.toString());
  localStorage.setItem('mp_shuffle', isShuffle.toString());
  localStorage.setItem('mp_repeat', repeatMode);
}

function renderDashboardPlayer(container) {
  container.innerHTML = `
    <!-- Top Row: Track Info -->
    <div class="flex items-center space-x-3 mb-4">
      <div class="w-10 h-10 rounded-xl bg-pastel-red-50/20 text-pastel-red-655 flex items-center justify-center border border-pastel-red-100/10 flex-shrink-0 shadow">
        <i class="fa-solid fa-music text-sm"></i>
      </div>
      <div class="flex-grow min-w-0">
        <div class="flex items-center space-x-1.5 mb-0.5">
          <span class="px-1.5 py-0.5 rounded bg-pastel-red-50/20 text-pastel-red-700 font-bold uppercase tracking-wider text-[8px] border border-pastel-red-100/10">Now Playing</span>
        </div>
        <h4 id="db-track-title" class="font-display font-bold text-white text-xs truncate leading-snug">Track Title</h4>
        <p id="db-track-artist" class="text-pastel-slate-450 text-[9px] truncate leading-tight">Artist Name</p>
      </div>
    </div>

    <!-- Progress bar & Timers -->
    <div class="space-y-1.5 mb-4">
      <input id="db-progress" type="range" min="0" value="0" step="0.1" class="player-slider w-full">
      <div class="flex items-center justify-between text-[10px] text-pastel-slate-455 font-mono">
        <span id="db-current-time">0:00</span>
        <span id="db-duration">0:00</span>
      </div>
    </div>

    <!-- Central Control Row -->
    <div class="flex items-center justify-between px-2 mb-4">
      <!-- Shuffle button -->
      <button id="db-btn-shuffle" class="text-pastel-slate-455 hover:text-pastel-red-650 transition-colors p-1.5 text-xs" title="Acak">
        <i class="fa-solid fa-shuffle"></i>
      </button>
      
      <div class="flex items-center space-x-4">
        <!-- Prev button -->
        <button id="db-btn-prev" class="text-pastel-slate-350 hover:text-white transition-colors p-2 text-sm" title="Sebelumnya">
          <i class="fa-solid fa-backward-step"></i>
        </button>
        
        <!-- Play / Pause button -->
        <button id="db-btn-play" class="w-10 h-10 rounded-full bg-pastel-red-600 hover:bg-pastel-red-500 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 duration-200" title="Putar">
          <i class="fa-solid fa-play ml-0.5 text-sm" id="db-play-icon"></i>
        </button>
        
        <!-- Next button -->
        <button id="db-btn-next" class="text-pastel-slate-350 hover:text-white transition-colors p-2 text-sm" title="Selanjutnya">
          <i class="fa-solid fa-forward-step"></i>
        </button>
      </div>

      <!-- Repeat button -->
      <button id="db-btn-repeat" class="text-pastel-slate-455 hover:text-pastel-red-650 transition-colors p-1.5 text-xs" title="Ulangi">
        <i class="fa-solid fa-repeat"></i>
      </button>
    </div>

    <!-- Volume & Header -->
    <div class="flex items-center space-x-2 border-t border-white/5 pt-3 mb-3">
      <!-- Volume control -->
      <button id="db-btn-mute" class="text-pastel-slate-450 hover:text-white p-1 transition-colors text-xs" title="Mute">
        <i class="fa-solid fa-volume-high" id="db-volume-icon"></i>
      </button>
      <input id="db-volume" type="range" min="0" max="1" step="0.05" value="0.5" class="player-slider h-1 max-w-[60px]" title="Volume">
      <span class="text-[9px] font-bold text-pastel-slate-450 uppercase ml-auto tracking-wider">Playlist</span>
    </div>

    <!-- Playlist Panel -->
    <div class="h-[80px] overflow-y-auto rounded-xl bg-black/25 border border-white/5 p-2" id="db-playlist-view">
      <!-- Tracks rendered dynamically -->
    </div>
  `;

  // Attach event listeners to dashboard player elements
  document.getElementById('db-btn-play').addEventListener('click', togglePlay);
  document.getElementById('db-btn-next').addEventListener('click', nextTrack);
  document.getElementById('db-btn-prev').addEventListener('click', prevTrack);
  document.getElementById('db-btn-shuffle').addEventListener('click', toggleShuffle);
  document.getElementById('db-btn-repeat').addEventListener('click', toggleRepeat);
  document.getElementById('db-btn-mute').addEventListener('click', toggleMute);

  const volumeSlider = document.getElementById('db-volume');
  volumeSlider.addEventListener('input', (e) => changeVolume(parseFloat(e.target.value)));

  const progressSlider = document.getElementById('db-progress');
  progressSlider.addEventListener('input', () => {
    if (isPlaying) audio.pause();
  });
  progressSlider.addEventListener('change', (e) => {
    seekAudio(parseFloat(e.target.value));
    if (isPlaying) audio.play().catch(err => console.log(err));
  });
}

function renderFloatingMiniPlayer() {
  let el = document.getElementById('floating-mini-player');
  if (!el) {
    el = document.createElement('div');
    el.id = 'floating-mini-player';
    el.className = 'floating-player-card flex items-center justify-between p-2.5 px-3.5';
    document.body.appendChild(el);
  }

  el.innerHTML = `
    <!-- Mini Song Info -->
    <div class="flex-grow min-w-0 mr-3">
      <h5 id="fl-track-title" class="font-display font-bold text-white text-[11px] truncate leading-tight">Track Title</h5>
      <p id="fl-track-artist" class="text-pastel-slate-455 text-[9px] truncate leading-none mt-0.5">Artist Name</p>
    </div>
    
    <!-- Mini Controls -->
    <div class="flex items-center space-x-2.5 flex-shrink-0">
      <button id="fl-btn-playlist" class="w-6.5 h-6.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-pastel-slate-350 flex items-center justify-center shadow transition-all p-1.5" title="Daftar Lagu">
        <i class="fa-solid fa-list text-[8px]"></i>
      </button>
      <button id="fl-btn-prev" class="text-pastel-slate-455 hover:text-white p-1 transition-colors" title="Sebelumnya">
        <i class="fa-solid fa-backward-step text-[10px]"></i>
      </button>
      <button id="fl-btn-play" class="w-7 h-7 rounded-full bg-pastel-red-650/90 hover:bg-pastel-red-500 text-white flex items-center justify-center shadow transition-all duration-200" title="Putar/Jeda">
        <i class="fa-solid fa-play text-[9px] ml-0.5" id="fl-play-icon"></i>
      </button>
      <button id="fl-btn-next" class="text-pastel-slate-455 hover:text-white p-1 transition-colors" title="Selanjutnya">
        <i class="fa-solid fa-forward-step text-[10px]"></i>
      </button>
    </div>

    <!-- Small top-aligned thin progress bar -->
    <div class="absolute top-0 left-0 right-0 h-[2px] bg-white/5 rounded-t-full overflow-hidden">
      <div id="fl-progress-bar" class="h-full bg-pastel-red-600 transition-all duration-100" style="width: 0%;"></div>
    </div>
  `;

  // Attach event listeners to floating player elements
  document.getElementById('fl-btn-play').addEventListener('click', togglePlay);
  document.getElementById('fl-btn-next').addEventListener('click', nextTrack);
  document.getElementById('fl-btn-prev').addEventListener('click', prevTrack);
  document.getElementById('fl-btn-playlist').addEventListener('click', () => togglePlaylistPopup());
}

function renderFloatingPlaylistPopup() {
  let el = document.getElementById('floating-playlist-popup');
  if (!el) {
    el = document.createElement('div');
    el.id = 'floating-playlist-popup';
    el.className = 'fixed bottom-[5.5rem] right-[1.5rem] z-45 w-[260px] bg-stone-955/95 border border-pastel-red-100/10 rounded-xl p-3 shadow-pastel-lg hidden animate-fade-in backdrop-blur-md';
    document.body.appendChild(el);
  }

  el.innerHTML = `
    <div class="flex items-center justify-between pb-2 border-b border-white/5 mb-2">
      <span class="text-[10px] font-bold text-white uppercase tracking-wider">Pilih Lagu</span>
      <button id="fl-playlist-close" class="text-pastel-slate-450 hover:text-white transition-colors">
        <i class="fa-solid fa-xmark text-xs"></i>
      </button>
    </div>
    <div id="fl-playlist-items" class="space-y-1 max-h-[140px] overflow-y-auto">
      <!-- Tracks rendered dynamically -->
    </div>
  `;

  document.getElementById('fl-playlist-close').addEventListener('click', () => togglePlaylistPopup(false));
}

function togglePlaylistPopup(forceState = null) {
  const el = document.getElementById('floating-playlist-popup');
  if (!el) return;

  if (forceState !== null) {
    if (forceState) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  } else {
    el.classList.toggle('hidden');
  }

  if (!el.classList.contains('hidden')) {
    renderPlaylistItems();
  }
}

function loadTrack(index, playAfterLoad = true) {
  if (index < 0 || index >= MUSIC_TRACKS.length) return;

  currentTrackIndex = index;
  const track = MUSIC_TRACKS[index];

  audio.src = track.src;

  // Reset track titles & artists
  const dbTitle = document.getElementById('db-track-title');
  if (dbTitle) dbTitle.textContent = track.title;
  const dbArtist = document.getElementById('db-track-artist');
  if (dbArtist) dbArtist.textContent = track.artist;

  const flTitle = document.getElementById('fl-track-title');
  if (flTitle) flTitle.textContent = track.title;
  const flArtist = document.getElementById('fl-track-artist');
  if (flArtist) flArtist.textContent = track.artist;

  // Render playlist items to show active state
  renderPlaylistItems();

  audio.load();

  if (playAfterLoad) {
    playAudio();
  }
}

function playAudio() {
  audio.play()
    .then(() => {
      isPlaying = true;
      savePlayerState();
      syncUI();
    })
    .catch(err => {
      console.log("Playback error, user gesture required:", err);
      isPlaying = false;
      syncUI();
    });
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  savePlayerState();
  syncUI();
}

// Global toggles
function togglePlay() {
  if (isPlaying) {
    pauseAudio();
  } else {
    disablePulseResume();
    playAudio();
  }
}

function nextTrack() {
  let nextIndex = 0;
  if (isShuffle) {
    nextIndex = Math.floor(Math.random() * MUSIC_TRACKS.length);
  } else {
    nextIndex = (currentTrackIndex + 1) % MUSIC_TRACKS.length;
  }
  loadTrack(nextIndex, true);
}

function prevTrack() {
  if (audio.currentTime > 4) {
    audio.currentTime = 0;
    playAudio();
  } else {
    let prevIndex = 0;
    if (isShuffle) {
      prevIndex = Math.floor(Math.random() * MUSIC_TRACKS.length);
    } else {
      prevIndex = (currentTrackIndex - 1 + MUSIC_TRACKS.length) % MUSIC_TRACKS.length;
    }
    loadTrack(prevIndex, true);
  }
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  savePlayerState();
  syncUI();
}

function toggleRepeat() {
  if (repeatMode === 'none') {
    repeatMode = 'all';
  } else if (repeatMode === 'all') {
    repeatMode = 'one';
  } else {
    repeatMode = 'none';
  }
  savePlayerState();
  syncUI();
}

function toggleMute() {
  isMuted = !isMuted;
  audio.muted = isMuted;
  savePlayerState();
  syncUI();
}

function changeVolume(val) {
  volume = val;
  audio.volume = val;
  audio.muted = val === 0;
  isMuted = val === 0;
  savePlayerState();
  syncUI();
}

function seekAudio(time) {
  audio.currentTime = time;
  savePlayerState();
  updateProgressUI();
}

function syncUI() {
  // 1. Play icons update
  document.querySelectorAll('#db-play-icon, #fl-play-icon').forEach(icon => {
    if (icon) {
      if (isPlaying) {
        icon.className = icon.id === 'fl-play-icon' ? 'fa-solid fa-pause text-[9px]' : 'fa-solid fa-pause';
      } else {
        icon.className = icon.id === 'fl-play-icon' ? 'fa-solid fa-play text-[9px] ml-0.5' : 'fa-solid fa-play ml-0.5';
      }
    }
  });

  // 2. Shuffle & Repeat active states
  const shuffleColorClass = isShuffle ? 'text-pastel-red-600' : 'text-pastel-slate-455';
  const shuffleBtn = document.getElementById('db-btn-shuffle');
  if (shuffleBtn) shuffleBtn.className = `${shuffleColorClass} hover:text-white transition-colors p-1.5 text-xs`;

  const repeatBtn = document.getElementById('db-btn-repeat');
  if (repeatBtn) {
    if (repeatMode === 'one') {
      repeatBtn.className = 'text-pastel-red-600 hover:text-white transition-colors p-1.5 text-xs relative';
      if (!repeatBtn.querySelector('.repeat-one-badge')) {
        repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i><span class="repeat-one-badge absolute -top-0.5 -right-0.5 text-[7px] font-bold bg-pastel-red-655 text-white rounded-full w-2.5 h-2.5 flex items-center justify-center">1</span>';
      }
    } else if (repeatMode === 'all') {
      repeatBtn.className = 'text-pastel-red-600 hover:text-white transition-colors p-1.5 text-xs';
      repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
    } else {
      repeatBtn.className = 'text-pastel-slate-455 hover:text-white transition-colors p-1.5 text-xs';
      repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
    }
  }

  // 3. Mute & Volume level icon sync
  const muteIcon = document.getElementById('db-volume-icon');
  if (muteIcon) {
    if (isMuted || volume === 0) {
      muteIcon.className = 'fa-solid fa-volume-xmark';
    } else if (volume < 0.4) {
      muteIcon.className = 'fa-solid fa-volume-low';
    } else {
      muteIcon.className = 'fa-solid fa-volume-high';
    }
  }

  const volSlider = document.getElementById('db-volume');
  if (volSlider) volSlider.value = isMuted ? 0 : volume;

  // 4. Highlight current playlist item
  document.querySelectorAll('.playlist-item').forEach(item => {
    const idx = parseInt(item.getAttribute('data-index'), 10);
    if (idx === currentTrackIndex) {
      item.classList.add('bg-pastel-red-50/15', 'border-pastel-red-100/20', 'text-white');
      item.classList.remove('text-pastel-slate-400');
    } else {
      item.classList.remove('bg-pastel-red-50/15', 'border-pastel-red-100/20', 'text-white');
      item.classList.add('text-pastel-slate-400');
    }
  });
}

function syncProgressMax() {
  const max = audio.duration || 0;
  const slider = document.getElementById('db-progress');
  if (slider) slider.max = max;

  const durStr = formatTime(max);
  const durLabel = document.getElementById('db-duration');
  if (durLabel) durLabel.textContent = durStr;
}

function updateProgressUI() {
  const cur = audio.currentTime || 0;
  const slider = document.getElementById('db-progress');
  if (slider) slider.value = cur;

  const curStr = formatTime(cur);
  const curLabel = document.getElementById('db-current-time');
  if (curLabel) curLabel.textContent = curStr;

  const duration = audio.duration || 1;
  const pct = (cur / duration) * 100;
  const flBar = document.getElementById('fl-progress-bar');
  if (flBar) {
    flBar.style.width = `${pct}%`;
  }
}

function formatTime(secs) {
  if (isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function renderPlaylistItems() {
  const dbContainer = document.getElementById('db-playlist-view');
  const flContainer = document.getElementById('fl-playlist-items');

  const containers = [
    { el: dbContainer, prefix: 'db' },
    { el: flContainer, prefix: 'fl-pop' }
  ];

  containers.forEach(({ el, prefix }) => {
    if (!el) return;
    el.innerHTML = '';

    MUSIC_TRACKS.forEach((track, index) => {
      const item = document.createElement('div');
      item.className = 'playlist-item flex items-center justify-between p-2 rounded-lg border border-transparent hover:bg-white/5 cursor-pointer transition-all duration-200';
      item.setAttribute('data-index', index.toString());
      item.onclick = () => {
        loadTrack(index, true);
        if (prefix === 'fl-pop') {
          togglePlaylistPopup(false);
        }
      };

      const isActive = index === currentTrackIndex;
      const textClass = isActive ? 'text-white font-semibold' : 'text-pastel-slate-400';

      item.innerHTML = `
        <div class="flex items-center space-x-2.5 min-w-0">
          <div class="w-5 h-5 rounded bg-pastel-red-50/10 border border-white/5 text-[9px] text-pastel-red-500 flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-music"></i>
          </div>
          <div class="min-w-0">
            <h6 class="text-[11px] truncate leading-tight ${textClass}">${track.title}</h6>
          </div>
        </div>
        <div class="flex-shrink-0 ml-2">
          ${isActive && isPlaying
          ? '<i class="fa-solid fa-volume-high text-[9px] text-pastel-red-500 animate-pulse"></i>'
          : '<i class="fa-solid fa-play text-[8px] opacity-40 hover:opacity-100 transition-opacity"></i>'
        }
        </div>
      `;
      el.appendChild(item);
    });
  });
}

function enablePulseResume() {
  const playBtns = [
    document.getElementById('db-btn-play'),
    document.getElementById('fl-btn-play')
  ];
  playBtns.forEach(btn => {
    if (btn) {
      btn.classList.add('pulse-button');
      btn.title = "Klik untuk Melanjutkan Musik";
    }
  });
}

function disablePulseResume() {
  const playBtns = [
    document.getElementById('db-btn-play'),
    document.getElementById('fl-btn-play')
  ];
  playBtns.forEach(btn => {
    if (btn) {
      btn.classList.remove('pulse-button');
      btn.title = isPlaying ? "Jeda" : "Putar";
    }
  });
}

// Initialization on page load
window.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize data tasks
  getTasks();

  // 2. Render UI
  renderPageData();

  // 3. Initialize Persistent Music Player
  initMusicPlayer();

  // Setup form submission if forms exist
  const addTaskForm = document.getElementById('add-task-form');
  if (addTaskForm) {
    addTaskForm.addEventListener('submit', handleAddTaskSubmit);
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }

  // Setup category dropdown population when subject changes
  const subjectSelect = document.getElementById('task-subject');
  if (subjectSelect) {
    subjectSelect.addEventListener('change', updateCategorySelect);
  }

  // Add click listener to mobile menu button
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
});
