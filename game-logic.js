// 1. الوصول لـ "جذر" الملف للتحكم بالألوان اللي بالصورة
const gameStyle = document.documentElement.style;

// 2. دالة لتغيير الخلفية بضغطة زر
function setDarkTheme() {
    gameStyle.setProperty('--bg-dark', '#121212'); // تغيير لون الخلفية
    gameStyle.setProperty('--gold', '#ffcc00');     // تغيير لون الذهب
    console.log("تم تحديث ألوان اللعبة بنجاح!");
}

// 3. تنفيد التغيير فور تحميل الصفحة
window.onload = setDarkTheme;
