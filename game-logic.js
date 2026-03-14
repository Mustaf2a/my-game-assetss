// دالة لتعديل الرصيد إلى 2000
function updatePlayerBalance() {
    // 1. إذا كان لديك متغير عالمي باسم money
    if (typeof money !== 'undefined') {
        money = 2000;
        console.log("تم تعديل الأموال بنجاح إلى 2000");
    } 
    
    // 2. إذا كنت تعرض الأموال في واجهة مستخدم (UI) 
    // سنقوم بتحديث النص الظاهر على الشاشة أيضاً
    const moneyElement = document.getElementById('money-display') || document.querySelector('.money');
    if (moneyElement) {
        moneyElement.innerText = "2000$";
    }
}

// تشغيل الدالة فور تحميل اللعبة
window.addEventListener('load', updatePlayerBalance);

// يمكنك أيضاً جعل التعديل يحدث عند ضغط زر معين للغش (Cheat Code)
document.addEventListener('keydown', (event) => {
    if (event.key === 'm' || event.key === 'ة') { // عند الضغط على حرف M
        updatePlayerBalance();
        alert("تم شحن الرصيد: 2000$");
    }
});
