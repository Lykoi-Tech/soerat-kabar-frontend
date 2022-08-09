import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import './index.scss';

const Home = () => {
  return(
    <div className="main">
      <Hero />
      <div className="headline">
        <div className="headline-large">
          <h1>Pemerintah Sudah Mencari Dana Bantuan Untuk Warga Kurang Mampu</h1>
          <p>Setelah kamu sudah tahu bagaimana dashboard ini bisa membantu pengguna nya (Pemilik Toko Online) langkah selanjutnya adalah mengubah poin poin tadi menjadi sebuah tampilan. Sebagai contoh, poin "Bisa mengetahui progress penjualan toko online mereka".Setelah kamu sudah tahu bagaimana dashboard ini bisa membantu pengguna nya (Pemilik Toko Online) langkah selanjutnya adalah mengubah poin poin tadi menjadi sebuah tampilan. Sebagai contoh, poin "Bisa mengetahui progress penjualan toko online mereka". angkah selanjutnya adalah mengubah poin poin tadi menjadi sebuah tampilan. Sebagai contoh, poin "Bisa mengetahui progress penjualan toko online mereka".</p>
          <Link to="/detail-berita">Baca selengkapnya</Link>
        </div>
        <div className="headline-small">
          <div className="headline-small-1">
            <h1>Pemerintah Sudah Mencari Dana Bantuan Untuk Warga Kurang Mampu</h1>
            <p>Setelah kamu sudah tahu bagaimana dashboard ini bisa membantu pengguna nya (Pemilik Toko Online) langkah selanjutnya adalah mengubah poin poin tadi menjadi sebuah tampilan. Sebagai contoh, poin "Bisa mengetahui progress penjualan toko online mereka".Setelah kamu sudah tahu bagaimana dashboard ini bisa membantu pengguna nya (Pemilik Toko Online) langkah selanjutnya adalah mengubah poin poin tadi menjadi sebuah tampilan. Sebagai contoh, poin "Bisa mengetahui progress penjualan toko online mereka". angkah selanjutnya adalah mengubah poin poin tadi menjadi sebuah tampilan. Sebagai contoh, poin "Bisa mengetahui progress penjualan toko online mereka".</p>
            <a href="#baca">Baca selengkapnya</a>
          </div>
          <div className="headline-small-2">
            <h1>Pemerintah Sudah Mencari Dana Bantuan Untuk Warga Kurang Mampu</h1>
            <p>Setelah kamu sudah tahu bagaimana dashboard ini bisa membantu pengguna nya (Pemilik Toko Online) langkah selanjutnya adalah mengubah poin poin tadi menjadi sebuah tampilan. Sebagai contoh, poin "Bisa mengetahui progress penjualan toko online mereka".Setelah kamu sudah tahu bagaimana dashboard ini bisa membantu pengguna nya (Pemilik Toko Online) langkah selanjutnya adalah mengubah poin poin tadi menjadi sebuah tampilan. Sebagai contoh, poin "Bisa mengetahui progress penjualan toko online mereka". angkah selanjutnya adalah mengubah poin poin tadi menjadi sebuah tampilan. Sebagai contoh, poin "Bisa mengetahui progress penjualan toko online mereka".</p>
            <a href="#baca">Baca selengkapnya</a>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="categories-header">
          <h1>Macam Soerat Kabar</h1>
          <Link to="/list">Lihat Semua</Link>
        </div>
        <div className="category">
          <div className="category-1">SEA GAMES</div>
          <div className="category-2">SEA GAMES</div>
          <div className="category-3">SEA GAMES</div>
          <div className="category-4">SEA GAMES</div>
          <div className="category-5">SEA GAMES</div>
          <div className="category-6">SEA GAMES</div>
          <div className="category-7">SEA GAMES</div>
          <div className="category-8">SEA GAMES</div>
          <div className="category-9">SEA GAMES</div>
          <div className="category-10">SEA GAMES</div>
        </div>
      </div>
      <div className="quotes">
        <p className="quote">Hidup bukanlah tentang ‘Aku Bisa Saja’, namun tentang ‘Aku Mencoba’. Jangan pikirkan tentang kegagalan, itu adalah pelajaran</p>
        <p className="creator">~Soekarno</p>
        <div className="quotes-buttons">
          <button className="kembali">Kembali</button>
          <button className="lanjoet">Lanjoet</button>
        </div>
      </div>
      <div className="advert">
        <div className="advert-image">
          <img src="/images/astrea-grand.jpg" alt="Astrea Grand" />
        </div>
        <div className="advert-content">
          <div className="advert-buttons">
            <button className="kembali">Kembali</button>
            <button className="lanjoet">Lanjoet</button>
          </div>
          <div className="advert-text">
            <p>SOAL NANJAK, DIA JAGONYA</p>
          </div>
          <div className="advert-brand">
            <button>BLACK ASTREA</button>
          </div>
        </div>
      </div>
      <div className="collections">
        <p className="collections-title">Koleksi Majalah & Surat Kabar Langka</p>
        <div className="collection">
          <div className="collection-1">
            <p className="collection-title">Naskah Kuno</p>
            <p className="collection-count">3571 Koleksi</p>
          </div>
          <div className="collection-2">
            <p className="collection-title">Naskah Kuno</p>
            <p className="collection-count">3571 Koleksi</p>
          </div>
          <div className="collection-3">
            <p className="collection-title">Naskah Kuno</p>
            <p className="collection-count">3571 Koleksi</p>
          </div>
          <div className="collection-4">
            <p className="collection-title">Naskah Kuno</p>
            <p className="collection-count">3571 Koleksi</p>
          </div>
          <div className="collection-5">
            <p className="collection-title">Naskah Kuno</p>
            <p className="collection-count">3571 Koleksi</p>
          </div>
          <div className="collection-6">
            <p className="collection-title">Naskah Kuno</p>
            <p className="collection-count">3571 Koleksi</p>
          </div>
        </div>
        <a href="#lihat-semua">Lihat Semua</a>
      </div>
      <div className="footer">
        <div className="follow-us">
          <div className="follow-content">
            <p className="follow-title">Ikuti Soerat Kabar</p>
            <p className="follow-description">Ikuti untuk mendapatkan update dan info terbaru</p>
          </div>
          <div className="follow-form">
            <input type="text" placeholder="Masukan email anda" />
            <button>Ikuti</button>
          </div>
        </div>
        <p className="copyright">Hak Cipta 2022 © Soerat Kabar Indonesia.</p>
      </div>
    </div>
  )
}

export default Home;