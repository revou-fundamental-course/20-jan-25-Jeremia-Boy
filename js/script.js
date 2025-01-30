// Ini file Javasript
 
function calculateBmi() {
    const beratBadan = parseFloat(document.getElementById("input-berat-badan").value);
    const usia = parseInt(document.getElementById("input-usia").value);
    const tinggiBadan = parseFloat(document.getElementById("input-tinggi-badan").value);
    const gender = document.querySelector('input[name="gender"]:checked').value; 

    // jika ada kolom yang kosong
    if (isNaN(beratBadan) || isNaN(usia) || isNaN(tinggiBadan)) {
        alert("Mohon mengisi semua kolom dengan benar yaa.");
        return; 
    }

    // Hitung BMI
    const bmi = beratBadan / (tinggiBadan / 100) ** 2;

    // Tampilkan hasil BMI
    document.getElementById("result-bmi").textContent = bmi.toFixed(2);

    //kategori BMI dan solusi
    let category = "";
    let solution = "";
    let healthRisks = "";

    if (bmi < 18.5) {
        category = "Underweight (Kekurangan berat badan)";
        solution = "Solusi: Cobalah meningkatkan asupan kalori Anda dengan makanan bergizi.";
        healthRisks = "Penyakit yang mungkin timbul: Anemia, osteoporosis, gangguan sistem kekebalan tubuh.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight (Berat badan normal)";
        solution = "Solusi: Pertahankan pola makan sehat dan rutinitas olahraga untuk menjaga kesehatan tubuh.";
        healthRisks = "Risiko penyakit rendah jika menjaga gaya hidup sehat.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight (Kelebihan berat badan)";
        solution = "Solusi: Kurangi kalori dan tingkatkan aktivitas fisik.";
        healthRisks = "Penyakit yang mungkin timbul: Diabetes, hipertensi, penyakit jantung.";
    } else {
        category = "Obesity (Obesitas)";
        solution = "Solusi: Berkonsultasilah dengan dokter atau ahli gizi untuk rencana penurunan berat badan.";
        healthRisks = "Penyakit yang mungkin timbul: Penyakit jantung, stroke, diabetes, kanker.";
    }

    // Sesuaikan solusi dan informasi berdasarkan jenis kelamin
    if (gender === "Pria") {
        solution += " Untuk pria, menjaga berat badan sehat penting untuk kesehatan jantung dan metabolisme.";
    } else if (gender === "Wanita") {
        solution += " Untuk wanita, menjaga berat badan sehat sangat penting untuk keseimbangan hormon dan kesehatan reproduksi.";
    }

    // Tampilan kategori, solusi, dan risiko penyakit
    document.getElementById("category").textContent = category;
    document.getElementById("solution").textContent = solution;
    document.getElementById("health-risks").textContent = healthRisks;

    // Tampilan hasil dan menyembunyikan form
    document.getElementById("form-page").style.display = "none";
    document.getElementById("result-page").style.display = "block";
}



// Penghapusan tombol Reset
document.querySelector("button[type='reset']").addEventListener("click", function () {
    // Sembunyikan hasil BMI
    document.getElementById("result").style.display = "none";
})
    
        // Reset nilai elemen form
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("age").value = "";