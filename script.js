
function calculateCalories() {
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const activity = parseFloat(document.getElementById("activity").value);
  
    // حساب BMR
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    // حساب TDEE
    const tdee = bmr * activity;
  
    // إعداد النصوص للعرض
    const cuttingCalories = tdee - 500;
    const bulkingCalories = tdee + 500;
  
    // عرض النتيجة
    document.getElementById("result").innerHTML = `
      <p>معدل الأيض الأساسي (BMR): ${bmr.toFixed(2)} سعرة</p>
      <p>السعرات اليومية المطلوبة (TDEE): ${tdee.toFixed(2)} سعرة</p>
      <p>للتنشيف: ${cuttingCalories.toFixed(2)} سعرة</p>
      <p>للتضخيم: ${bulkingCalories.toFixed(2)} سعرة</p>
    `;
  }
  
  