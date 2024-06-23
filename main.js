function checkKhodam() {
    const daftarKhodam = [
    {
        name: 'Skibidi Toilet',
        description: 'Kamu Adalah Seorang Skibidi Toilet Yang Disukai Gen Alpha',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_ewGN-ds7BRX9Br_w02PAXL2BGlZwvU7NZ6K44Ue09ZgpFUmb0WTF4A&s=10'
    },
    {
        name: 'Kucing Mewing',
        description: 'Kucing Mewing Biar Jadi Sigma',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuezqh_diLXuzANNRevs0gtv-dX2HMj4SZ8gc-SpmyNZaySeGgOTNiFM&s=10'
    },
    {
        name: 'Kucing Onde Mande',
        description: 'Kucing Cina Mata Sipit Onde Mande',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbZcY8-mbXNgKq3xuZ2JA7jrQZ0LZyAmt89VbS-bgiYpNoSiNufKVo4_H&s=10'
    },
    {
        name: 'Sendal Jepit',
        description: 'Sebuah Sendal',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwvBXyFrOJZK-AL_UmO6MDHzWAEhgRDEOrA&s'
    },
    {
        name: 'Ga Ada Khodam',
        description: 'Kasihan Tidak Ada Khodam',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeMPMeprECskRNm5Lu_-kOH2hZNWoSVqqyv7nnHNnKPz7tYFGMxGLdjs&s=10'
    },
    {
      name: 'Roger Sumatra',
      description: 'Kamu Akan Sering Mengalami Mimpi Basah',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeMPMeprECskRNm5Lu_-kOH2hZNWoSVqqyv7nnHNnKPz7tYFGMxGLdjs&s=10'
    },
    {
      name: 'Sari Roti',
      description: 'Sari Roti, Roti Sari Roti Telolet',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuek3tCxcpzldutgAul3Mc35gWTf3qh05yQ&s'
    },
    {
      name: 'Nokia',
      description: 'Kuat Dan Tahan Lama',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN36w6lH-ZljMRwSuESxhdlc4JCNOLNviN-2X4o9BEIg&s'
    },
    {
      name: 'Ambatron',
      description: 'Robot Yang Ditakuti Manusia Abad 21',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzpMU8cMnv4upNfkIC32QRrdv8h0tJDw7sgCfWGPsHA&s'
    },
    {
      name: 'Adolf Hitler',
      description: 'Diktator Mematikan',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKHMrJQbSYk3e43n8Z5vM0QmUOKBUOryRH1xlI40_cA&s'
    },
    {
      name: 'Tokyo',
      description: 'Besar Dan Mematikan',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxE5OqLgQ26K_aazEySEuBTOd-iulKHpY_TOjreMJEA&s'
    },
    {
      name: 'Kapal Lawut',
      description: 'Sebuah Kapal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJdpTqyHx_JgKNYQJaKCSnB_aM7BybCbKoMyMOfe7eg&s'
    },
    {
      name: 'Sapi Kawin',
      description: '2 Sapi Bersatu Untuk Menghasilkan Sapi Baru',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPd5FrnbEGxgEiOo_2apmXNajyW02HNcRI5a1SWc41xQ&s'
    },
    {
      name: 'Banteng Merah',
      description: 'Penguasa Bayangan',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8IIrLQpjPINgkdy7MkueBrsmga74tTd-EzHBnpigdg&s'
    },
    {
      name: 'Gabriella Abigail',
      description: 'Khodam Admin Saat Ini',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zYSE4RmIlRNCXPWmM_RAIB69E65BiHPOoom8Cs9eug&s'
    },
    {
      name: 'Dewa Zeus',
      description: 'Penguasa Situs Gacor Di Indonesia',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkQbWSSlMgZDmixrw9tm9s7q7XMnBu-dbBy0epCX0UQ&s'
    },
    {
      name: 'Genderuwo',
      description: 'Sosok Makhluk Dari Jawa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR35N3Clp7rnoukr-a-wKGNZpqc8-Ggama_w-fRNZBFvA&s'
    },
    {
      name: 'Psuter SAMP',
      description: 'Player Paling Mengerikan Di Game Getea Mabar',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzadanN7_Nr6cTdnx-QqxzPMC_jaoeswY1ytChtHD3A&s'
    }
    ];
    const nameInput = document.getElementById('nameInput').value;
    const loadingScreen = document.getElementById('loadingScreen');
    const userName = document.getElementById('userName');
    const errorNotification = document.getElementById('errorNotification');
    const formContainer = document.querySelector('.form-container');
    const resultContainer = document.querySelector('.result-container');
    let resultText = document.getElementById("resultText");
    let resultDeks = document.getElementById("resultDesk");
    let resultImage = document.getElementById("resultImg");
    let resultKhodam = Math.floor(Math.random() * daftarKhodam.length);
    
    if (nameInput.trim() === "") {
        errorNotification.style.display = 'block';
        return;
    }
    
    userName.textContent = nameInput;
    loadingScreen.style.display = 'flex';
    
    // Simulate a delay for loading
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        formContainer.style.display = 'none';
        resultContainer.style.display = 'flex';
        resultText.innerHTML = daftarKhodam[resultKhodam].name;
        resultDeks.innerHTML = daftarKhodam[resultKhodam].description;
        resultImage.setAttribute('src', daftarKhodam[resultKhodam].image);
    }, 4000); // 4 seconds delay
}

function hideError() {
    const errorNotification = document.getElementById('errorNotification');
    errorNotification.style.display = 'none';
}

function ulang() {
  window.open('index.html');
}