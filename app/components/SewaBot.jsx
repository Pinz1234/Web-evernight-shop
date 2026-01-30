"use client";
import SectionWrapper from "./SectionWrapper";

export default function SewaBot() {
return (
<SectionWrapper>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
<div className="room">
<h3>Standar</h3>
<p>Rp 5.000 / Minggu</p>
<p>Rp 15.000 / Bulan</p>
<p>Rp 45.000 / 3 Bulan</p>
<ul>
<li>Tidak semua fitur</li>
<li>Tidak bebas pindah grup</li>
</ul>
</div>

<div className="room shadow-auraPink">  
      <h3>Premium</h3>  
      <p>Rp 8.000 / Minggu</p>  
      <p>Rp 20.000 / Bulan</p>  
      <p>Rp 60.000 / 4 Bulan</p>  
      <ul>  
        <li>Akses semua fitur</li>  
        <li>Bisa pindah grup</li>  
        <li>Maksimal 2 grup aktif</li>  
      </ul>  
    </div>  
  </div>  
</SectionWrapper>

);
}